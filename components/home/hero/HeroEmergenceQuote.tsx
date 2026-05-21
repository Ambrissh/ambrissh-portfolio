import { siteContent } from "@/lib/content";

export function HeroEmergenceQuote() {
  return (
    <blockquote className="relative mx-auto max-w-5xl text-center">
      <p className="font-sans text-[clamp(2.9rem,10vw,7.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white">
        {siteContent.quote}
      </p>
    </blockquote>
  );
}