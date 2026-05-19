import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { LRUCache } from "lru-cache";

// Initialize Resend safely (fallback to empty string for build time)
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

// Define Zod Schema for input validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  "question-0": z.string().max(2000, "Response is too long").optional(),
  "question-1": z.string().max(2000, "Response is too long").optional(),
  "question-2": z.string().max(2000, "Response is too long").optional(),
  "question-3": z.string().max(2000, "Response is too long").optional(),
});

// Setup LRU Cache for rate limiting
// 5 requests per 15 minutes per IP
const rateLimit = new LRUCache<string, number>({
  max: 500, // Maximum number of IPs to track
  ttl: 15 * 60 * 1000, // 15 minutes
});

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const currentUsage = rateLimit.get(ip) || 0;
    
    if (currentUsage >= 5) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { 
          status: 429,
          headers: {
            "Retry-After": "900" // 15 minutes
          }
        }
      );
    }
    
    rateLimit.set(ip, currentUsage + 1);

    // 2. Input Validation
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input provided." },
        { status: 400 }
      );
    }

    const { name, email, ...questions } = result.data;

    // 3. Email Sending
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
      console.error("Missing Resend configuration.");
      // Return generic error to client
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Format questions for email
    const questionsHtml = Object.entries(questions)
      .filter(([_, value]) => value && value.trim() !== "")
      .map(([key, value]) => `
        <div style="margin-bottom: 20px;">
          <h3 style="margin: 0 0 5px 0; color: #555;">${key}</h3>
          <p style="margin: 0; padding: 10px; background: #f9f9f9; border-left: 4px solid #ddd;">${value}</p>
        </div>
      `)
      .join("");

    const { error: resendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Using Resend's testing domain by default
      to: process.env.CONTACT_EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        ${questionsHtml}
      `,
    });

    if (resendError) {
      console.error("Resend Error:", resendError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
