"use client";

import { useEffect } from "react";

const INITIATIVES = [
  {
    title: "TEDxIISERBPR",
    date: "2024–2026",
    role: "Head of Organizing Committee",
    description: "Led the whole thing — speaker curation, logistics, keeping 200+ people from losing their minds on the day. Somehow worked out.",
  },
  {
    title: "Metaverse Entangled",
    date: "2025–Present",
    role: "Founder & Host",
    description: "Started a podcast because I kept having interesting conversations and thought — why not record them? Now I interview founders and scientists from around the world.",
  },
  {
    title: "Jigyansa, IISER BPR",
    date: "2025–2026",
    role: "Head, Video Podcast Team",
    description: "Running video content and podcast production for IISER's science outreach club. Basically the media guy.",
  },
  {
    title: "Publications & Outreach Council",
    date: "2024–2025",
    role: "Core Member",
    description: "IISER Berhampur's official outreach body. Did the things, attended the meetings.",
  },
  {
    title: "Physics Club, IISER BPR",
    date: "June 2025–Jan 2026",
    role: "Coordinator",
    description: "",
  },
  {
    title: "Open Source Contributions",
    date: "2025–Present",
    role: "Builder",
    description: "Contributing to open-source projects, experimenting publicly, and learning by shipping things into the real world.",
  },
];

export function InitiativesSection() {
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

    const elements = document.querySelectorAll(".reveal-initiatives");
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
      id="initiatives"
      className="px-6 py-20"
      style={{ background: "rgba(0,0,0,0.90)" }}
    >
      <div className="mx-auto max-w-[56rem]">
        {/* Heading */}
        <div className="reveal-initiatives">
          <h2 className="font-sans text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.02em] text-white">
            Stuff I've Organized
          </h2>
          <p className="font-sans text-[1rem] font-light text-white/45 mt-2">
            (I love organizing and taking initiatives)
          </p>
        </div>

        {/* Grid Container */}
        <div className="mt-10 grid gap-[1.25rem] sm:grid-cols-2">
          {INITIATIVES.map((item, index) => (
            <div
              key={index}
              className="reveal-initiatives flex flex-col justify-between rounded-[1rem] border border-white/[0.07] bg-white/[0.03] px-6 py-5"
            >
              <div>
                {/* Top Row: Title & Date */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-sans text-[0.9rem] font-medium text-white">
                    {item.title}
                  </h3>
                  {item.date && (
                    <span className="font-sans text-[0.75rem] font-light text-white/35 whitespace-nowrap">
                      {item.date}
                    </span>
                  )}
                </div>

                {/* Role */}
                <div className="font-sans text-[0.8rem] font-light text-white/45 mt-1">
                  {item.role}
                </div>

                {/* Description */}
                {item.description && (
                  <p className="font-sans text-[0.825rem] font-light leading-[1.65] text-white/55 mt-[0.5rem]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
