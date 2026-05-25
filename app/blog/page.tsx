"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── article data ──────────────────────────────────────────── */
const ARTICLE = {
  date: "May 25, 2026",
  author: "Ambrissh",
  readTime: "6 min read",
  title: "The Death of Academic Titles in the AI Era",
  hook: `Why are some of the most influential minds in AI, despite holding PhDs from top institutions, almost never publicly addressed as 'Dr.' anymore? Has startup culture quietly replaced academic prestige with product impact, execution, and public influence?
};

/* ─── full article paragraphs ───────────────────────────────── */
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

/* ─── comment type ──────────────────────────────────────────── */
interface Comment {
  id: number;
  name: string;
  text: string;
  likes: number;
  likedByUser: boolean;
  time: string;
}

/* ═══════════════════════════════════════════════════════════════
   BLOG PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function BlogPage() {
  const [expanded, setExpanded] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    

   
    
  ]);

  const articleRef = useRef<HTMLDivElement>(null);

  const handleReadMore = () => {
    setExpanded(true);
    // Smooth scroll to article after a short delay for the animation
    setTimeout(() => {
      articleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  const handlePostComment = () => {
    if (!commentText.trim()) return;
    const newComment: Comment = {
      id: Date.now(),
      name: commentName.trim() || "Anonymous",
      text: commentText.trim(),
      likes: 0,
      likedByUser: false,
      time: "Just now",
    };
    setComments((prev) => [newComment, ...prev]);
    setCommentText("");
    setCommentName("");
  };

  const handleLike = (id: number) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              likes: c.likedByUser ? c.likes - 1 : c.likes + 1,
              likedByUser: !c.likedByUser,
            }
          : c
      )
    );
  };

  const sortedComments = [...comments].sort((a, b) => b.likes - a.likes);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ── subtle top-of-page decorative line ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)",
        }}
      />

      {/* ════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════ */}
      <section className="relative px-6 pt-[9rem] pb-16 md:pt-[11rem] md:pb-20">
        <div className="mx-auto max-w-[42rem]">
          {/* meta line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 text-[0.8rem] font-normal tracking-wide text-white/40 mb-8"
          >
            <time>{ARTICLE.date}</time>
            <span className="inline-block w-1 h-1 rounded-full bg-white/25" />
            <span>Written by {ARTICLE.author}</span>
            <span className="inline-block w-1 h-1 rounded-full bg-white/25" />
            <span>{ARTICLE.readTime}</span>
          </motion.div>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-center text-[clamp(2rem,5.5vw,3.25rem)] font-bold leading-[1.15] tracking-[-0.025em] text-white mb-10"
          >
            {ARTICLE.title}
          </motion.h1>

          {/* divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 h-px w-16 bg-white/15 origin-center"
          />

          {/* hook / TL;DR */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center text-[1.05rem] md:text-[1.125rem] font-light leading-[1.85] text-white/55 italic px-4 md:px-8"
          >
            <span
              aria-hidden="true"
              className="absolute -top-2 left-1/2 -translate-x-1/2 text-[2.5rem] leading-none text-white/10 select-none"
            >
              &ldquo;
            </span>
            {ARTICLE.hook}
          </motion.blockquote>

          {/* read more button */}
          <AnimatePresence>
            {!expanded && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center mt-12"
              >
                <button
                  id="read-more-btn"
                  onClick={handleReadMore}
                  className="group relative inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-7 py-3 text-[0.85rem] font-medium tracking-wide text-white/70 transition-all duration-300 hover:border-white/25 hover:text-white hover:bg-white/[0.06]"
                >
                  <span>Read More</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 1v12M1 7l6 6 6-6" />
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FULL ARTICLE (revealed on click)
          ════════════════════════════════════════════ */}
      <AnimatePresence>
        {expanded && (
          <motion.article
            ref={articleRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative px-6 pb-20"
          >
            {/* top divider */}
            <div
              className="mx-auto mb-16 h-px max-w-[42rem]"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
              }}
            />

            <div className="mx-auto max-w-[38rem]">
              {/* article title */}
              <h2 className="font-sans text-center text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white mb-14">
                {ARTICLE.title}!
              </h2>

              {/* paragraphs */}
              <div className="space-y-0">
                {PARAGRAPHS.map((para, i) => {
                  if (para.isQuote) {
                    return (
                      <motion.blockquote
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative my-10 py-5 pl-6 border-l-2 border-white/15 text-[1.05rem] md:text-[1.1rem] font-normal leading-[1.9] text-white/65 italic"
                      >
                        {para.text}
                      </motion.blockquote>
                    );
                  }
                  return (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-[1rem] md:text-[1.05rem] font-light leading-[1.9] text-white/70 mb-7"
                    >
                      {para.text}
                    </motion.p>
                  );
                })}
              </div>

              {/* end divider */}
              <div className="flex items-center justify-center gap-3 mt-16 mb-4">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>

            {/* ════════════════════════════════════════
                COMMENTS SECTION
                ════════════════════════════════════════ */}
            <section className="mx-auto max-w-[38rem] mt-20">
              {/* section divider */}
              <div
                className="mb-12 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
                }}
              />

              <h3 className="font-sans text-[1.15rem] font-semibold tracking-[-0.01em] text-white mb-8">
                Discussion
              </h3>

              {/* comment form */}
              <div className="mb-12">
                {/* name + avatar row */}
                <div className="flex items-center gap-3 mb-4">
                  {/* profile icon placeholder */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white/30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21a8 8 0 1 0-16 0" />
                    </svg>
                  </div>
                  <input
                    id="comment-name-input"
                    type="text"
                    placeholder="Your name (optional)"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="flex-1 bg-transparent text-[0.85rem] font-light text-white/70 placeholder:text-white/25 border-b border-white/[0.07] pb-1.5 focus:outline-none focus:border-white/20 transition-colors duration-300"
                  />
                </div>

                {/* textarea */}
                <textarea
                  id="comment-textarea"
                  placeholder="Share your thoughts…"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  rows={4}
                  className="w-full bg-white/[0.02] border border-white/[0.07] rounded-xl px-5 py-4 text-[0.95rem] font-light leading-[1.7] text-white/80 placeholder:text-white/25 resize-none focus:outline-none focus:border-white/15 transition-colors duration-300"
                />

                {/* post button */}
                <div className="flex justify-end mt-3">
                  <button
                    id="post-comment-btn"
                    onClick={handlePostComment}
                    disabled={!commentText.trim()}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2 text-[0.8rem] font-medium tracking-wide text-white/60 transition-all duration-300 hover:border-white/25 hover:text-white hover:bg-white/[0.08] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/12 disabled:hover:text-white/60 disabled:hover:bg-white/[0.04]"
                  >
                    Post Comment
                  </button>
                </div>
              </div>

              {/* sorting label */}
              {comments.length > 0 && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[0.75rem] font-medium tracking-widest uppercase text-white/30">
                    Most Liked
                  </span>
                  <div className="flex-1 h-px bg-white/[0.05]" />
                </div>
              )}

              {/* comments list */}
              <div className="space-y-0">
                {sortedComments.map((comment, idx) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group py-6 border-b border-white/[0.05] last:border-b-0"
                  >
                    <div className="flex items-start gap-3">
                      {/* avatar */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mt-0.5">
                        <span className="text-[0.7rem] font-semibold text-white/40 uppercase">
                          {comment.name.charAt(0)}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* name + time */}
                        <div className="flex items-baseline gap-2 mb-1.5">
                          <span className="text-[0.85rem] font-medium text-white/80">
                            {comment.name}
                          </span>
                          <span className="text-[0.7rem] font-light text-white/25">
                            {comment.time}
                          </span>
                        </div>

                        {/* comment body */}
                        <p className="text-[0.9rem] font-light leading-[1.7] text-white/60 mb-2">
                          {comment.text}
                        </p>

                        {/* like button */}
                        <button
                          onClick={() => handleLike(comment.id)}
                          className={`flex items-center gap-1.5 text-[0.75rem] font-light transition-colors duration-200 ${
                            comment.likedByUser
                              ? "text-white/70"
                              : "text-white/25 hover:text-white/50"
                          }`}
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill={comment.likedByUser ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* bottom breathing room */}
              <div className="h-20" />
            </section>
          </motion.article>
        )}
      </AnimatePresence>
    </main>
  );
}
