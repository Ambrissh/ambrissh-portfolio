"use client";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { GitBranch, MoveUpRight } from "lucide-react";
import { siteContent } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

const projectGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectCard = {
  // ✅ Reduced y: 38 → 16 (less layout shift) and removed blur (no repaint)
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export function FeaturedProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black via-black/90 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_68%_44%_at_50%_36%,rgba(255,255,255,0.055),transparent_68%)]"
      />
      <div className="relative mx-auto max-w-6xl">
        {/* ✅ Heading — reduced y and removed blur */}
        <motion.div
          className="max-w-3xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="font-sans text-[0.68rem] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/35 sm:text-[0.75rem]">
            Built signals
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.45rem,6.8vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16"
          variants={prefersReducedMotion ? undefined : projectGrid}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.18, margin: "-40px" }}
        >
          {siteContent.projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative min-h-[300px] overflow-hidden rounded-[8px] border border-white/[0.09] bg-[#0d0d0d] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] transition-colors duration-500 hover:border-white/[0.18] hover:bg-[#111111] sm:p-7"
              variants={prefersReducedMotion ? undefined : projectCard}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -5, transition: { duration: 0.35, ease } }
              }
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.13),transparent_36%)] opacity-45 transition-opacity duration-500 group-hover:opacity-75"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/[0.035] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex h-full min-h-[248px] flex-col justify-between gap-10">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/32">
                      0{index + 1}
                    </p>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/35 shadow-[0_0_18px_rgba(255,255,255,0.35)]" />
                  </div>
                  <h3 className="mt-8 font-sans text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1] tracking-[-0.045em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-md font-sans text-[0.98rem] leading-[1.7] tracking-[-0.01em] text-white/58 sm:text-[1.04rem]">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.11] bg-black/28 px-4 py-2.5 font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-white/68 transition duration-300 hover:border-white/[0.22] hover:bg-white/[0.08] hover:text-white"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  <GitBranch className="h-4 w-4" aria-hidden />
                  GitHub
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