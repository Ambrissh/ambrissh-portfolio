"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ARTICLE = {
  date: "May 25, 2026",
  author: "Ambrissh",
  readTime: "6 min read",
  title: "The Death of Academic Titles in the AI Era",
  hook: `Why are some of the most influential minds in AI, despite holding PhDs from top institutions, almost never publicly addressed as 'Dr.' anymore? Has startup culture quietly replaced academic prestige with product impact, execution, and public influence?`,
};

const PARAGRAPHS: { text: string; isQuote?: boolean }[] = [
  {
    text: `Finally, after mustering the courage and pulling everything together, I have decided to write my first blog post! I've always wanted to express my thoughts and strongly believe in the power of outreach. This is one of the main reasons I started my podcast series, Metaverse Entangled (do check it out if you're curious on YouTube!). I believe writing genuine, non-AI-generated content (though I do sometimes inspect AI-generated content) can leave a lasting impact :)!`,
  },
  {
    text: `Two factors motivated me to write this blog post. First, I recently created my portfolio website and added a blog page! More importantly, I have had a lingering question ever since I became interested in AI and started observing some of the major contributors in the field, leading me to the title of my first blog:`,
  },
  {
    text: `"The Death of Academic Titles in the AI Era."`,
    isQuote: true,
  },
  {
    text: `To give you a bit of background, I'm entering my fourth year as a physics major at the Indian Institute of Science Education and Research Berhampur, one of the premier research institutes in the country. I'm surrounded by a multitude of researchers, graduate students, and faculty members, many of whom are pursuing or have completed their PhD programs and are eagerly anticipating the title of "Dr." I understand just how significant that title can be. It represents years of research, persistence, intellectual struggle, and commitment to a subject.`,
  },
  {
    text: `As I went deeper into AI and looked upon who the prominent figures in the field are, I stumbled upon names like Ilya Sutskever, Andrej Karpathy, and Aravind Srinivas. One thing I consistently noticed is that, despite having completed PhDs in Machine learning fields, these individuals are rarely publicly addressed as "Dr."`,
  },
  {
    text: `This raised a question in my mind: Why aren't they addressed with the same formal recognition? They have all gone through the same academic journey that conventionally earns someone the title of "Doctor."`,
  },
  {
    text: `Yet in public appearances, podcasts, conferences, interviews, and even online discussions, they are usually referred to simply by their first names. What is happening here?`,
  },
  {
    text: `One possible explanation could be the culture surrounding startups and commercial AI. Unlike traditional academia, the AI startup ecosystem feels significantly flatter and more informal. Using first names may create a stronger sense of relatability and accessibility. Referring to someone as "Ilya" or "Andrej" rather than "Dr Sutskever" or "Dr Karpathy" makes conversations feel less hierarchical and perhaps more aligned with Silicon Valley's builder culture.`,
  },
  {
    text: `In academia, especially in natural sciences, titles like "Doctor" carry institutional and cultural weightage. But in modern AI, I feel authority emerges from somewhere else that is building impactful systems, publishing groundbreaking research or creating products that actually solve a problem.`,
  },
  {
    text: `Perhaps AI is one of the first disciplines where intellectual influence has become somewhat detached from formal academic signalling.`,
    isQuote: true,
  },
  {
    text: `Another possibility is that many of these researchers may not care much about being addressed as "Dr." Watching interviews with people like Ilya Sutskever or Andrej Karpathy, it often feels as though their primary motivation is not status but curiosity and understanding. Their identity appears to revolve more around ideas, research, and building than around credentials.`,
  },
  {
    text: `Adding on, what if people in founder roles deliberately avoid academic titles because the startup culture doesn't care about credentials and often values execution, products, and impact? What if they think being too academic can even create a sense of distance from the broader public? But at the same time, wouldn't having a PhD also act as a point of credibility?`,
  },
  {
    text: `To cite an example, consider Aravind Srinivas, having a PhD from UC Berkeley, arguably strengthens trust in the products he helps build. Years of graduate-level research signal technical depth, discipline, and expertise. Publicly acknowledging that background could help people better understand the level of knowledge behind the systems shaping modern society.`,
  },
  {
    text: `So the question that still remains is, should the public recognise and acknowledge these individuals as scholars alongside their roles as founders and researchers? Or does sticking to titles like "founder," "researcher," and "engineer" create a stronger and more relatable connection with audiences?`,
  },
  {
    text: `On the other side, people like Ilya Sutskever and Andrej Karpathy are often regarded as some of the most intelligent figures in AI. Perhaps their focus on research and ideas contributes to that image more than titles ever could.`,
  },
  {
    text: `Maybe this reflects a broader cultural shift.`,
    isQuote: true,
  },
  {
    text: `Traditional academia evolved inside universities and institutions where hierarchy and formal recognition naturally became important. Modern AI, however, has evolved not only in universities but also in startups, research labs, open-source communities, and fast-moving technology companies. As a result, the culture became more outcome-oriented than title-oriented.`,
  },
  {
    text: `These days, people care less about whether someone is "Dr" and more about whether they built something meaningful or contributed something valuable to the world.`,
  },
  {
    text: `I might be completely wrong about some of these observations, and I'm genuinely looking forward to further discussions on this topic, but I find this cultural transition fascinating. AI seems to sit at a strange intersection between academia, engineering, entrepreneurship, and internet culture, and perhaps that is exactly why its social norms feel so different.`,
  },
  {
    text: `Maybe the title of "Doctor" is not disappearing.`,
  },
  {
    text: `Maybe, in the AI era, it is simply no longer the primary way society recognises intelligence and contribution.`,
    isQuote: true,
  },
];

export default function BlogPage() {
  const [expanded, setExpanded] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  const handleReadMore = () => {
    setExpanded(true);

    setTimeout(() => {
      articleRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  return (
    <main className="relative min-h-screen bg-[#090909] text-white overflow-hidden">
      {/* subtle top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      {/* HERO */}
      <section className="relative px-6 pt-[9rem] pb-24 md:pt-[11rem]">
        <div className="mx-auto max-w-[46rem]">
          {/* meta */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-[0.8rem] tracking-wide text-white/40 mb-8"
          >
            <time>{ARTICLE.date}</time>

            <span className="w-1 h-1 rounded-full bg-white/20" />

            <span>Written by {ARTICLE.author}</span>

            <span className="w-1 h-1 rounded-full bg-white/20" />

            <span>{ARTICLE.readTime}</span>
          </motion.div>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-[-0.05em] text-white mb-12"
          >
            {ARTICLE.title}
          </motion.h1>

          {/* divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-12 h-px w-20 bg-white/15 origin-center"
          />

          {/* hook */}
          <motion.blockquote
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-[1.05rem] md:text-[1.15rem] font-light italic leading-[1.9] text-white/55 px-4 md:px-10"
          >
            {ARTICLE.hook}
          </motion.blockquote>

          {/* read more */}
          <AnimatePresence>
            {!expanded && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mt-14"
              >
                <button
                  onClick={handleReadMore}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-3 text-[0.85rem] tracking-wide text-white/65 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                >
                  Read More
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ARTICLE */}
      <AnimatePresence>
        {expanded && (
          <motion.article
            ref={articleRef}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative px-6 pb-20"
          >
            {/* divider */}
            <div
              className="mx-auto mb-20 h-px max-w-[44rem]"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
              }}
            />

            <div className="mx-auto max-w-[40rem]">
              {/* article title */}
              <h2 className="text-center text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-[-0.03em] mb-16">
                {ARTICLE.title}
              </h2>

              {/* content */}
              {PARAGRAPHS.map((para, i) => {
                if (para.isQuote) {
                  return (
                    <motion.blockquote
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="border-l border-white/15 pl-6 py-3 my-10 italic text-white/60 text-[1.05rem] leading-[1.9]"
                    >
                      {para.text}
                    </motion.blockquote>
                  );
                }

                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[1rem] md:text-[1.05rem] font-light leading-[1.95] text-white/70 mb-8"
                  >
                    {para.text}
                  </motion.p>
                );
              })}

              {/* ending dots */}
              <div className="flex items-center justify-center gap-3 mt-20">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>

              {/* ending spacing */}
              <div className="h-28" />
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </main>
  );
}
