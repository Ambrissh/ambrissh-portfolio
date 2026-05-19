"use client";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { HeroCinematicBackground } from "./hero/HeroCinematicBackground";
import { HeroEmergenceQuote } from "./hero/HeroEmergenceQuote";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  // ✅ Always renders at full size — no null return, no layout shift
  // Animation skip logic lives inside HeroEmergenceQuote via useHasAnimated

  return (
    <section
      aria-label="Opening"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-black px-6"
    >
      <HeroCinematicBackground />
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <HeroEmergenceQuote />
        <motion.p
          className="mt-14 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-white/30 sm:mt-16 sm:text-[11px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.2 : 0.7,
            delay: prefersReducedMotion ? 0.1 : 1.45,
            ease,
          }}
        >
          {siteContent.name}
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.6,
          delay: prefersReducedMotion ? 0.15 : 1.75,
          ease,
        }}
        aria-hidden
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/20">
          Scroll
        </span>
        <span className="h-8 w-px bg-white/20" />
      </motion.div>
    </section>
  );
}