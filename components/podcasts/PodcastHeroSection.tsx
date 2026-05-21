"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function PodcastHeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Metaverse Entangled"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-black px-6"
    >
      {/* Static dot grid — no animation, no oversized element */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.9) 0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_74%_48%_at_50%_44%,rgba(255,255,255,0.075),transparent_66%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 1.8, ease }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl text-center"
        initial={
          prefersReducedMotion
            ? undefined
            : { opacity: 0, y: 16 }
        }
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.7, delay: 0.18, ease }}
      >
        <h1 className="font-sans text-[clamp(3.1rem,10vw,8.6rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
          {siteContent.podcast.name}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-sans text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed tracking-[-0.02em] text-white/48">
          {siteContent.podcast.subheading}
        </p>
      </motion.div>
    </section>
  );
}
