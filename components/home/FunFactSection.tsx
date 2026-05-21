"use client";

import { useEffect, useState } from "react";

export function FunFactSection() {
  const [isGitHubLinkHovered, setIsGitHubLinkHovered] = useState(false);

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
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal-section2");
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(20px)";
      htmlEl.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="github-stats"
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ background: "rgba(0,0,0,0.72)" }}
    >
      <div className="mx-auto w-full max-w-[72rem] grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        {/* Left Column: GitHub chart */}
        <div className="reveal-section2 flex flex-col w-full">
          {/* Heading */}
          <h2 className="font-sans text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-white tracking-[-0.02em] mb-3">
            Code, committed.
          </h2>
          {/* Subtext */}
          <p className="font-sans text-[0.9rem] font-light text-white/50 mb-8">
            Every square is something built, fixed, or broken and fixed again.
          </p>

          {/* GitHub chart image */}
          <div className="overflow-hidden rounded-[0.75rem] border border-white/[0.07] bg-black p-4 flex items-center justify-center">
            <img
              src="https://ghchart.rshah.org/Ambrissh"
              alt="Ambrissh GitHub contributions"
              style={{
                width: "100%",
                borderRadius: "0.75rem",
                opacity: 0.85,
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
            className="inline-block font-sans text-[0.8rem] font-light mt-3 self-start decoration-none transition-colors duration-200"
            style={{
              color: isGitHubLinkHovered ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.35)",
            }}
            onMouseEnter={() => setIsGitHubLinkHovered(true)}
            onMouseLeave={() => setIsGitHubLinkHovered(false)}
          >
            github.com/Ambrissh →
          </a>
        </div>

        {/* Right Column: Stats */}
        <div className="reveal-section2 flex flex-col gap-6 md:pl-16 w-full">
          {[
            { number: "4+", label: "Projects shipped" },
            { number: "3", label: "Research collaborations" },
            { number: "1", label: "Podcast, still running" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="border-l-2 border-white/12 pl-5 flex flex-col py-1"
            >
              <span className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold text-white leading-none">
                {stat.number}
              </span>
              <span className="font-sans text-[0.85rem] font-light text-white/45 mt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
