"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { HeroCinematicBackground } from "./hero/HeroCinematicBackground";
import { HeroEmergenceQuote } from "./hero/HeroEmergenceQuote";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const [hasMounted, setHasMounted] = useState(false);
  const [showAnimatedHero, setShowAnimatedHero] = useState(true);

  useEffect(() => {
    setHasMounted(true);

    const alreadyPlayed = sessionStorage.getItem("heroAnimationPlayed");

    if (alreadyPlayed) {
      setShowAnimatedHero(false);
    } else {
      setShowAnimatedHero(true);
      sessionStorage.setItem("heroAnimationPlayed", "true");
    }
  }, []);

  if (!hasMounted) return null;

  return (
    <section
      aria-label="Opening"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-black px-6"
    >
      <HeroCinematicBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {showAnimatedHero ? (
          <HeroEmergenceQuote />
        ) : (
          <motion.h1
          className="font-sans text-6xl font-bold tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-[9rem]"
          initial={{
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: prefersReducedMotion ? 0.2 : 0.65,
            ease,
          }}
        >
          So to speak, we did it!
        </motion.h1>

        )}
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