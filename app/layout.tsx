import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ambrissh S. Raghav",
    template: "%s | Ambrissh S. Raghav",
  },
  description:
    "AI engineer building RAG systems and useful LLM-powered products. Physics student and host of Metaverse Entangled.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative h-full">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
