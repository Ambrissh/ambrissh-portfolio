"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { siteContent } from "@/lib/content";
import { PodcastVideoEmbed } from "./PodcastVideoEmbed";

const ease = [0.16, 1, 0.3, 1] as const;

const grid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease },
  },
};

export function OtherPodcastsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="more-podcasts"
      aria-label="Other Podcasts"
      className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black via-black/90 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_62%_42%_at_50%_35%,rgba(255,255,255,0.045),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl"
          initial={
            prefersReducedMotion
              ? undefined
              : { opacity: 0, y: 28, filter: "blur(10px)" }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease }}
        >
          <p className="font-sans text-[0.68rem] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/35 sm:text-[0.75rem]">
            More episodes
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.35rem,6.4vw,5.3rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
            Keep listening...
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16"
          variants={prefersReducedMotion ? undefined : grid}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.24, margin: "-60px" }}
        >
          {siteContent.podcast.other.map((episode, index) => (
            <motion.article
              key={episode.videoId}
              className="group overflow-hidden rounded-[8px] border border-white/[0.09] bg-white/[0.045] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-500 hover:border-white/[0.18] hover:bg-white/[0.07]"
              variants={prefersReducedMotion ? undefined : item}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.35, ease } }
              }
            >
              <PodcastVideoEmbed title={episode.title} videoId={episode.videoId} />
              <div className="flex items-center justify-between gap-4 px-3 py-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/32">
                  0{index + 1}
                </p>
                <a
                  href={episode.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/56 transition-colors duration-300 hover:text-white"
                  aria-label={`Watch ${episode.title} on YouTube`}
                >
                  YouTube
                  <MoveUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
