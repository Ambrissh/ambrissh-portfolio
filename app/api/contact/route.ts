import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const formData = new FormData();

    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const response = await fetch(
      "https://formspree.io/f/mnjrnewv",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Formspree Error:", errorText);

      return NextResponse.json(
        {
          error: "Failed to send message.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        error: "Unexpected server error.",
      },
      {
        status: 500,
      }
    );
  }
}