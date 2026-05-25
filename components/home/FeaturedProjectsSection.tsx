"use client";

import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

export function FeaturedProjectsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-project");
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(15px)";
      htmlEl.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="px-6 py-20"
      style={{ background: "rgba(0,0,0,0.72)" }}
    >
      <div className="mx-auto w-full max-w-[72rem] grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-start">
        {/* Left Column: Projects */}
        <div className="flex flex-col w-full">
          {/* Heading */}
          <div className="reveal-project mb-8">
            <h2 className="font-sans text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-white tracking-[-0.02em]">
              Builds I Built (and am building :)
            </h2>
          </div>

          <div className="flex flex-col">
            {/* Card 1: LoopThru */}
            <article className="reveal-project group flex flex-row items-start gap-6 rounded-[1.25rem] p-6 bg-white/[0.04] border border-white/[0.09] mb-5 transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:border-white/18">
              {/* Logo */}
              <div className="flex-shrink-0 w-14 h-14 rounded-[0.75rem] overflow-hidden bg-black/40 flex items-center justify-center">
                <img
                  src="/loopthru.png"
                  alt="LoopThru Logo"
                  className="w-14 h-14 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-sans text-[1rem] font-semibold text-white leading-tight">
                    LoopThru
                  </h3>
                  <span className="font-sans text-[0.8rem] font-light text-white/20">
                    01
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["open source", "chrome extension", "groq api"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/12 px-2.5 py-0.5 font-sans font-normal text-[0.7rem] text-white/50 bg-white/[0.01]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="font-sans text-[0.875rem] font-light leading-[1.7] text-white/60 mt-3">
                  AI-powered Chrome extension that filters Discord noise using 
                  Groq API. Sends browser notifications only for messages that actually matter. 
                  Because who has time to read 400 unread messages.
                </p>

                {/* Github Link */}
                <a
                  href="https://github.com/Ambrissh/loopthru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans font-normal text-[0.8rem] text-white/38 mt-4.5 decoration-none transition-colors duration-200 hover:text-white/80"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Card 2: Clowde */}
            <article className="reveal-project group flex flex-row items-start gap-6 rounded-[1.25rem] p-6 bg-white/[0.04] border border-white/[0.09] mb-5 transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:border-white/18">
              {/* Logo */}
              <div className="flex-shrink-0 w-14 h-14 rounded-[0.75rem] overflow-hidden bg-black/40 flex items-center justify-center">
                <img
                  src="/clowde.png"
                  alt="Clowde Logo"
                  className="w-14 h-14 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-sans text-[1rem] font-semibold text-white leading-tight">
                    Clowde
                  </h3>
                  <span className="font-sans text-[0.8rem] font-light text-white/20">
                    02
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["open source", "chrome extension", "context management"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/12 px-2.5 py-0.5 font-sans font-normal text-[0.7rem] text-white/50 bg-white/[0.01]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="font-sans text-[0.875rem] font-light leading-[1.7] text-white/60 mt-3">
                  Use Claude without hitting limits! An easy to use extension that 
                  watches your Claude.ai context window and nudges you to switch chats 
                  before you lose your flow. Generates full continuity handoffs so the 
                  next chat picks up exactly where you left off. Claude + Flow = Clowde.
                </p>

                {/* Github Link */}
                <a
                  href="https://github.com/Ambrissh/Clowde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans font-normal text-[0.8rem] text-white/38 mt-4.5 decoration-none transition-colors duration-200 hover:text-white/80"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Card 3: Cognitive Drift */}
            <article className="reveal-project group flex flex-row items-start gap-6 rounded-[1.25rem] p-6 bg-white/[0.04] border border-white/[0.09] mb-5 transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:border-white/18">
              {/* Logo (Inline SVG) */}
              <div className="flex-shrink-0 w-14 h-14 rounded-[0.75rem] overflow-hidden bg-black/40">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="56" height="56" rx="10" fill="url(#grad)" />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1a1a2e" />
                      <stop offset="100%" stopColor="#16213e" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M6 28 C13 18, 20 38, 27 28 C34 18, 41 38, 50 24"
                    stroke="rgba(100,180,255,0.9)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M6 32 C13 22, 20 42, 27 32 C34 22, 41 42, 50 28"
                    stroke="rgba(180,100,255,0.9)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-sans text-[1rem] font-semibold text-white leading-tight">
                    Cognitive Drift
                  </h3>
                  <span className="font-sans text-[0.8rem] font-light text-white/20">
                    03
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["open source", "llm observability", "ml"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/12 px-2.5 py-0.5 font-sans font-normal text-[0.7rem] text-white/50 bg-white/[0.01]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="font-sans text-[0.875rem] font-light leading-[1.7] text-white/60 mt-3">
                  Real-time observability for LLM uncertainty and reasoning 
                  instability. Tracks when models start losing the plot mid-generation. 
                  Turns out that happens more than you'd think.
                </p>

                {/* Github Link */}
                <a
                  href="https://github.com/Ambrissh/cognitive-drift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans font-normal text-[0.8rem] text-white/38 mt-4.5 decoration-none transition-colors duration-200 hover:text-white/80"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* Right Column: GitHub Activity & Stats */}
        <div className="reveal-project flex flex-col w-full lg:mt-[4.5rem]">
          {/* GitHub chart image */}
          <div className="overflow-hidden rounded-[0.75rem] border border-white/[0.07] bg-black p-4 flex items-center justify-center max-w-[420px]">
            <img
              src="https://ghchart.rshah.org/Ambrissh"
              alt="Ambrissh GitHub contributions"
              style={{
                width: "100%",
                borderRadius: "0.75rem",
                opacity: 0.72,
                filter: "invert(1) hue-rotate(180deg)",
                border: "1px solid rgba(255,255,255,0.07)"
              }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/Ambrissh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-[0.8rem] font-light mt-3 self-start decoration-none text-white/35 hover:text-white/70 transition-colors duration-200 mb-10"
          >
            github.com/Ambrissh →
          </a>

          {/* Stats */}
          <div className="flex flex-col gap-5">
            {[
              { number: "5+", label: "Projects shipped" },
              { number: "3", label: "Research collaborations" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="border-l-2 border-white/12 pl-4 flex flex-col py-0.5"
              >
                <span className="font-sans text-[1.75rem] font-semibold text-white leading-none">
                  {stat.number}
                </span>
                <span className="font-sans text-[0.8rem] font-light text-white/45 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}