"use client";

import { motion } from "framer-motion";

const questions = [
  "What problem are you obsessed with solving?",
  "What are you currently building or exploring?",
  "If resources weren’t a limitation, what would you create?",
  "Leave a thought, idea, or question you genuinely care about.",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <section className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="font-sans text-5xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Let’s Chat
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            I’ve always enjoyed conversations with people building ambitious
            things, questioning ideas, or simply thinking differently about the
            world.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg">
            These are just a few casual questions I genuinely enjoy asking
            people — no pressure, no judgment, just curiosity.
          </p>
        </motion.div>

        <motion.form
          action="https://formspree.io/f/mnjrnewv"
          method="POST"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 space-y-10"
        >
          {/* Name */}
          <div className="space-y-3">
            <label className="text-sm uppercase tracking-[0.2em] text-white/40">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-white/20 focus:border-white/30 focus:bg-white/10"
            />
          </div>

          {/* Email */}
          <div className="space-y-3">
            <label className="text-sm uppercase tracking-[0.2em] text-white/40">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-white/20 focus:border-white/30 focus:bg-white/10"
            />
          </div>

          {questions.map((question, index) => (
            <div key={index} className="space-y-3">
              <label className="text-sm uppercase tracking-[0.2em] text-white/40">
                {question}
              </label>

              <textarea
                name={`question-${index}`}
                required
                rows={5}
                placeholder="Type your thoughts here..."
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-white/20 focus:border-white/30 focus:bg-white/10"
              />
            </div>
          ))}

          <div className="pt-6">
            <button
              type="submit"
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white px-10 py-4 font-medium text-black transition-all duration-500 hover:scale-[1.03] hover:bg-white/90"
            >
              <span className="relative z-10">
                Send Thoughts
              </span>
            </button>
          </div>
        </motion.form>
      </section>
    </main>
  );
}