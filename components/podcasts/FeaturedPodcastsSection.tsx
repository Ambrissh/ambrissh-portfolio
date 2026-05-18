"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MoveUpRight, Play } from "lucide-react";
import { useRef } from "react";
import { siteContent } from "@/lib/content";
import { PodcastVideoEmbed } from "./PodcastVideoEmbed";

const ease = [0.16, 1, 0.3, 1] as const;

const grid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 38, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease },
  },
};

export function FeaturedPodcastsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [26, -18]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [44, -32]);

  return (
    <section
      id="featured-podcasts"
      ref={sectionRef}
      aria-label="Featured Podcasts"
      className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black via-black/90 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_68%_44%_at_50%_36%,rgba(255,255,255,0.052),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl"
          style={prefersReducedMotion ? undefined : { y: headingY }}
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
            Featured conversations
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.45rem,6.8vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white">
            Episodes that open doors.
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 lg:mt-16"
          style={prefersReducedMotion ? undefined : { y: cardsY }}
          variants={prefersReducedMotion ? undefined : grid}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.16, margin: "-60px" }}
        >
          {siteContent.podcast.featured.map((episode, index) => (
            <motion.article
              key={episode.videoId}
              className="group grid overflow-hidden rounded-[8px] border border-white/[0.09] bg-white/[0.045] shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-colors duration-500 hover:border-white/[0.18] hover:bg-white/[0.07] lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]"
              variants={prefersReducedMotion ? undefined : card}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -5, transition: { duration: 0.35, ease } }
              }
            >
              <div className="relative p-6 sm:p-7 lg:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.13),transparent_36%)] opacity-45 transition-opacity duration-500 group-hover:opacity-75"
                />
                <div className="relative flex h-full min-h-[260px] flex-col justify-between gap-10">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/32">
                        0{index + 1}
                      </p>
                      <span className="h-1.5 w-1.5 rounded-full bg-white/35 shadow-[0_0_18px_rgba(255,255,255,0.35)]" />
                    </div>
                    <h3 className="mt-8 max-w-2xl font-sans text-[clamp(1.7rem,3.2vw,2.7rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-white">
                      {episode.title}
                    </h3>
                  </div>

                  <a
                    href={episode.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.11] bg-black/28 px-4 py-2.5 font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-white/68 transition duration-300 hover:border-white/[0.22] hover:bg-white/[0.08] hover:text-white"
                    aria-label={`Watch ${episode.title} on YouTube`}
                  >
                    <Play className="h-4 w-4" aria-hidden />
                    YouTube
                    <MoveUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                </div>
              </div>

              <div className="p-3 lg:p-4">
                <PodcastVideoEmbed
                  title={episode.title}
                  videoId={episode.videoId}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
