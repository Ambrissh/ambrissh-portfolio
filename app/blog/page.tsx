"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/30">
          Thoughts • Research • Ideas
        </p>

        <h1 className="font-sans text-6xl font-bold tracking-[-0.05em] sm:text-7xl md:text-8xl">
          Blog
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/50">
          A space for thoughts on physics, machine learning, startups,
          frontier technologies, research, and ideas that deserve deeper
          exploration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-20 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-md"
        >
          <span className="text-sm uppercase tracking-[0.25em] text-white/60">
            Coming Soon...
          </span>
        </motion.div>
      </motion.div>
    </main>
  );
}