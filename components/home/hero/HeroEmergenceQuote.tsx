"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/lib/content";
import { HeroQuoteDustBurst } from "./HeroQuoteDustBurst";

const ease = [0.12, 0.82, 0.18, 1] as const;
const DUST_DELAY_MS = 180;
const TEXT_APPEAR_DELAY = 0.62;
const TEXT_FOCUS_DELAY = 0.92;
const TEXT_FOCUS_DURATION = 1.55;

export function HeroEmergenceQuote() {
  const prefersReducedMotion = useReducedMotion();
  const quoteRef = useRef<HTMLParagraphElement>(null);

  if (prefersReducedMotion) {
    return (
      <blockquote className="relative mx-auto max-w-5xl text-center">
        <p className="font-sans text-[clamp(2.9rem,10vw,7.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white">
          {siteContent.quote}
        </p>
      </blockquote>
    );
  }

  return (
    <blockquote className="relative mx-auto max-w-5xl text-center">
      <motion.div className="relative inline-block">
        <HeroQuoteDustBurst
          containerRef={quoteRef}
          delayMs={DUST_DELAY_MS}
        />
        <motion.p
          ref={quoteRef}
          className="relative z-10 font-sans text-[clamp(2.9rem,10vw,7.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
          initial={{
            opacity: 0,
            filter: "blur(24px)",
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
          }}
          transition={{
            opacity: { duration: 1.25, delay: TEXT_APPEAR_DELAY, ease },
            filter: { duration: TEXT_FOCUS_DURATION, delay: TEXT_FOCUS_DELAY, ease },
            scale: { duration: 1.75, delay: TEXT_APPEAR_DELAY, ease },
          }}
        >
          {siteContent.quote}
        </motion.p>
      </motion.div>
    </blockquote>
  );
}