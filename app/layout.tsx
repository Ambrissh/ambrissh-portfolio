import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ambrissh S. Raghav",
    template: "%s | Ambrissh S. Raghav",
  },
  description:
    "AI engineer building RAG systems and useful LLM-powered products. Physics student and host of Metaverse Entangled.",
  icons: {
    icon: [
      {
        url: "/icon.png?v=3",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png?v=3",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} relative h-full`}>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
