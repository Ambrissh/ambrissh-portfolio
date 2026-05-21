"use client";

import { useEffect } from "react";

export function SkillsSection() {
  const row1 = [
    "Python", "C++", "JavaScript", "React", "Next.js", 
    "PyTorch", "JAX", "Scikit-Learn", "CleanRL", "Gymnasium"
  ];
  
  const row2 = [
    "Stable Baselines3", "STM32", "MPU6050", "OpenOCD", 
    "ARM Semihosting", "Git", "Linux", "Bash", "MATLAB", "LaTeX"
  ];

  // Double the lists for infinite scrolling loop
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

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

    const elements = document.querySelectorAll(".reveal-skills");
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
      id="skills"
      className="px-6 py-20 overflow-hidden"
      style={{ background: "rgba(0,0,0,0.90)" }}
    >
      <div className="mx-auto max-w-[56rem]">
        {/* Heading */}
        <div className="reveal-skills mb-2">
          <h2 className="font-sans text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-white tracking-[-0.02em]">
            Skills, in motion
          </h2>
        </div>

        {/* Subtext */}
        <div className="reveal-skills mb-10">
          <p className="font-sans text-[0.9rem] font-light text-white/45">
            Things I actually use, not things that look good on a resume.
          </p>
        </div>

        {/* Marquee Ticker Container */}
        <div className="reveal-skills flex flex-col gap-10 w-full mt-6">
          {/* Row 1 (Left scrolling): AI / ML */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[0.8rem] font-medium tracking-[0.05em] uppercase text-white/35 pl-2">
              AI / ML
            </span>
            <div 
              className="relative overflow-hidden w-full py-1"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
              }}
            >
              <div className="flex gap-3 w-max animate-scroll-left hover:[animation-play-state:paused]">
                {duplicatedRow1.map((skill, idx) => (
                  <span
                    key={`r1-${idx}`}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2 font-sans font-normal text-[0.875rem] text-white whitespace-nowrap flex-shrink-0"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 (Right scrolling): Systems / Tools */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[0.8rem] font-medium tracking-[0.05em] uppercase text-white/35 pr-2 text-right">
              Systems / Tools
            </span>
            <div 
              className="relative overflow-hidden w-full py-1"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
              }}
            >
              <div className="flex gap-3 w-max animate-scroll-right hover:[animation-play-state:paused]">
                {duplicatedRow2.map((skill, idx) => (
                  <span
                    key={`r2-${idx}`}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2 font-sans font-normal text-[0.875rem] text-white whitespace-nowrap flex-shrink-0"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}