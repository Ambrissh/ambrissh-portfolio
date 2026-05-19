"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroAmbient() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 3.2,
        ease,
      }}
    >
      {/* Deep vignette */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,transparent_20%,#000_72%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.8, ease }}
      />

      {/* Key light — slow bloom behind quote */}
      <motion.div
        className="absolute left-1/2 top-[42%] h-[min(70vw,520px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_38%,transparent_68%)]"
        initial={{ opacity: 0 }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.35 }
            : { opacity: [0, 0.22, 0.38, 0.28] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.3 }
            : { duration: 6, delay: 0.6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
        }
      />

      {/* Ambient light rays */}
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        initial={{ opacity: 0 }}
        animate={{ opacity: prefersReducedMotion ? 0.2 : 0.35 }}
        transition={{ duration: 3.5, delay: 0.4, ease }}
      >
        <div className="absolute left-1/2 top-0 h-[55%] w-px -translate-x-1/2 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent" />
        <div className="absolute left-[18%] top-0 h-[45%] w-px -rotate-[8deg] bg-gradient-to-b from-white/[0.04] to-transparent" />
        <motion.div
          className="absolute right-[16%] top-0 h-[48%] w-px rotate-[6deg] bg-gradient-to-b from-white/[0.05] to-transparent"
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.3, 0.7, 0.3] }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Cool edge wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(120,140,180,0.04),transparent_55%)]" />

      {/* Floor fade */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black via-black/80 to-transparent"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      />
    </motion.div>
  );
}
