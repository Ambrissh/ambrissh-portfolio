"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { siteContent } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

const textReveal = {
  hidden: { opacity: 0, y: 38, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.25, ease },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 48, scale: 1.06, filter: "blur(18px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.35, ease },
  },
};

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // ❌ REMOVED: all useScroll + useTransform
  // portraitY + portraitScale were causing Safari scroll jank
  // Entry animations (whileInView) are fine — they fire once and stop

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.28, margin: "-40px" },
      };

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="relative -mt-px min-h-[105dvh] overflow-hidden bg-black px-6 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/85 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_76%_50%_at_50%_42%,rgba(255,255,255,0.055),transparent_64%)]"
      />

      <motion.div
        className="relative mx-auto grid min-h-[calc(105dvh-10rem)] max-w-6xl items-center gap-12 md:grid-cols-[minmax(300px,0.74fr)_minmax(0,1fr)] md:gap-16 lg:gap-24"
        variants={
          prefersReducedMotion
            ? undefined
            : {
                hidden: {},
                visible: { transition: { staggerChildren: 0.14 } },
              }
        }
        {...motionProps}
      >
        {/* ✅ Image — entry animation only, zero scroll-driven transforms */}
        <motion.div
          className="relative order-2 md:order-1"
          variants={imageReveal}
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[112%] w-[118%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_64%)] blur-2xl"
          />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[2px] md:mx-0 md:max-w-[420px]">
            <div className="absolute inset-[-8%]">
              <Image
                src="/assets/ambrisshtedx.png"
                alt={siteContent.name}
                fill
                className="object-cover object-[center_18%]"
                sizes="(max-width: 768px) 88vw, 420px"
                priority
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/52"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.07]"
            />
          </div>
        </motion.div>

        {/* ✅ Text — entry animation only, zero scroll-driven transforms */}
        <motion.div
          className="order-1 md:order-2"
          variants={textReveal}
        >
          <p className="font-sans text-[0.68rem] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/35 sm:text-[0.75rem]">
            {siteContent.tagline}
          </p>
          <h2 className="mt-5 max-w-[11ch] font-sans text-[clamp(2.65rem,7.8vw,6.1rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
            {siteContent.intro}
          </h2>
          <div className="mt-8 max-w-xl space-y-5 font-sans text-[0.98rem] font-normal leading-[1.75] tracking-[-0.01em] text-white/58 sm:text-[1.05rem]">
            {siteContent.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}