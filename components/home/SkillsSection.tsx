"use client";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { siteContent } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  // ✅ Reduced y: 34 → 16, removed blur — same fixes as FeaturedProjectsSection
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black via-black/90 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_44%_at_50%_38%,rgba(255,255,255,0.05),transparent_68%)]"
      />
      <div className="relative mx-auto max-w-6xl">
        {/* ✅ Heading — reduced y, no blur */}
        <motion.div
          className="max-w-2xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="font-sans text-[0.68rem] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/35 sm:text-[0.75rem]">
            Technical language
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.35rem,6.4vw,5.3rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
            Skills, in motion.
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-6"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.18, margin: "-40px" }}
        >
          {siteContent.skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              className={[
                "group relative overflow-hidden rounded-[8px] border border-white/[0.09]",
                "bg-[#0d0d0d] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
                "transition-colors duration-500 hover:border-white/[0.18] hover:bg-[#111111]",
                index < 2 ? "lg:col-span-3" : "lg:col-span-2",
              ].join(" ")}
              variants={prefersReducedMotion ? undefined : cardVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.35, ease } }
              }
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_38%)] opacity-45 transition-opacity duration-500 group-hover:opacity-70"
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-white/72">
                    {skill.title}
                  </h3>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/35 shadow-[0_0_18px_rgba(255,255,255,0.35)]" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-black/24 px-3 py-1.5 font-sans text-[0.78rem] leading-none tracking-[-0.01em] text-white/62 transition-colors duration-300 group-hover:border-white/[0.13] group-hover:text-white/78"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}