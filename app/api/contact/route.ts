import { NextResponse } from "next/server";
import { LRUCache } from "lru-cache";

const rateLimit = new LRUCache<string, number>({
  max: 500,
  ttl: 15 * 60 * 1000,
});

export async function POST(req: Request) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const currentUsage = rateLimit.get(ip) || 0;

    if (currentUsage >= 5) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": "900" } }
      );
    }

    rateLimit.set(ip, currentUsage + 1);

    // Check env variable
    if (!process.env.FORMSPREE_ID) {
      console.error("Missing FORMSPREE_ID environment variable.");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Forward to Formspree
    const body = await req.json();
    const res = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
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
