import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// ❌ REMOVED: Inter font — was overriding Geist on body, wasted network request
// ❌ REMOVED: Navbar from page.tsx — it belongs here in layout only

export const metadata: Metadata = {
  title: "Ambrissh S. Raghav",
  description:
    "Physics student, AI builder, and host of Metaverse Entangled — building meaningful products at the frontier of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} relative h-full`}>
      <body className={geistSans.variable}>
        <Navbar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}