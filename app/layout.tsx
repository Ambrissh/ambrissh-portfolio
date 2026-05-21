import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/Navbar";
import { DoodleBackground } from "@/components/home/DoodleBackground";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="en" className={`${spaceGrotesk.variable} relative h-full`}>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <DoodleBackground />
        <Navbar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}