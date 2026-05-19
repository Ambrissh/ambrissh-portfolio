"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { siteContent } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export function PodcastBioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="story"
      ref={sectionRef}
      aria-label="Podcast Bio"
      className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black via-black/90 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_42%,rgba(255,255,255,0.055),transparent_68%)]"
      />

      <motion.div
        className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[minmax(280px,0.72fr)_minmax(0,1fr)] md:gap-16 lg:gap-24"
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.05, margin: "-50px" }}
        variants={
          prefersReducedMotion
            ? undefined
            : { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }
        }
      >
        <motion.div
          className="relative"
          variants={prefersReducedMotion ? undefined : reveal}
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_64%)]"
          />
          <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-[8px] border border-white/[0.08] bg-[#0d0d0d] p-6 md:mx-0">
            <Image
              src={siteContent.podcast.logo}
              alt={`${siteContent.podcast.name} logo`}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 82vw, 360px"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]"
            />
          </div>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? undefined : reveal}
        >
          <p className="font-sans text-[0.68rem] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/35 sm:text-[0.75rem]">
            The conversation layer
          </p>
          <h2 className="mt-4 max-w-[11ch] font-sans text-[clamp(2.45rem,6.5vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white">
            Why it exists?
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 font-sans text-[0.98rem] font-normal leading-[1.75] tracking-[-0.01em] text-white/58 sm:text-[1.05rem]">
            {siteContent.podcast.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
