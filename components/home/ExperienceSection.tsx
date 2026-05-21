"use client";

import { useEffect } from "react";

const EXPERIENCE_ENTRIES = [
  {
    title: "Research Collaborator — Energy-Efficient Drone Control using RL",
    date: "March 2025 – May 2026",
    institution: "IIIT Hyderabad · Remote",
    advisor: "Advisor: Prof. Harikumar Kandath",
    bullets: [
      "Developing RL-based control policies for energy-efficient UAV navigation with custom Gymnasium reward functions",
      "Training and benchmarking agents (CleanRL, SB3) under real-world deployment constraints",
    ],
  },
  {
    title: "Research Intern",
    date: "May 2025 – July 2025",
    institution: "BITS Hyderabad · Hyderabad, India",
    bullets: [
      "Studied classical cryptography (RSA, AES) and quantum threats (Shor's, Grover's)",
      "Explored post-quantum cryptographic frameworks",
    ],
  },
  {
    title: "Reading Project — Quantum Information & Computing",
    date: "March 2025 – June 2025",
    institution: "IISER Berhampur · Remote",
    advisor: "Advisors: Prof. P.K. Panigrahi, Dr. Shreya Banerjee",
  },
];

export function ExperienceSection() {
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

    const elements = document.querySelectorAll(".reveal-experience");
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(20px)";
      htmlEl.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="px-6 py-20"
      style={{ background: "rgba(0,0,0,0.90)" }}
    >
      <div className="mx-auto max-w-[56rem]">
        {/* Heading */}
        <div className="reveal-experience mb-12">
          <h2 className="font-sans text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.02em] text-white">
            Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/8 ml-1 pl-0">
          {EXPERIENCE_ENTRIES.map((entry, index) => (
            <div
              key={index}
              className="reveal-experience relative pl-[2rem] pb-[2.5rem] last:pb-0"
            >
              {/* Dot */}
              <span
                className="absolute left-[-4px] top-[8px] h-2 w-2 rounded-full bg-white/25"
                style={{ transform: "translateX(-50%)" }}
              />

              {/* Top row */}
              <div className="flex flex-wrap items-baseline justify-between gap-[0.5rem]">
                <h3 className="font-sans text-[0.95rem] font-medium text-white">
                  {entry.title}
                </h3>
                <span className="font-sans text-[0.8rem] font-light text-white/40 whitespace-nowrap">
                  {entry.date}
                </span>
              </div>

              {/* Institution */}
              <div className="font-sans text-[0.85rem] font-normal text-white/55 mt-[0.25rem]">
                {entry.institution}
              </div>

              {/* Advisor */}
              {entry.advisor && (
                <div className="font-sans text-[0.8rem] font-light text-white/40 mt-[0.2rem]">
                  {entry.advisor}
                </div>
              )}

              {/* Bullets */}
              {entry.bullets && entry.bullets.length > 0 && (
                <div className="mt-[0.75rem]">
                  {entry.bullets.map((bullet, bIndex) => (
                    <p
                      key={bIndex}
                      className="font-sans text-[0.875rem] font-light leading-[1.7] text-white/60 mb-[0.4rem] last:mb-0"
                    >
                      — {bullet}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
