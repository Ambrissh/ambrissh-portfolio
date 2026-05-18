"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroFilmGrain() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }}
      initial={{ opacity: prefersReducedMotion ? 0.04 : 0.22 }}
      animate={{ opacity: prefersReducedMotion ? 0.04 : 0.06 }}
      transition={{ duration: prefersReducedMotion ? 0.2 : 4.5, ease }}
    />
  );
}
