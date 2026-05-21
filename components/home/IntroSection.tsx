"use client";

import { useEffect } from "react";

export function IntroSection() {
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

    const elements = document.querySelectorAll(".reveal-intro");
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
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ background: "rgba(0,0,0,0.72)" }}
    >
      <div className="mx-auto w-full max-w-[72rem] grid gap-12 md:grid-cols-2 md:gap-16 items-start">
        {/* Left Column: Large TEDx Image */}
        <div className="reveal-intro flex justify-center md:justify-start w-full">
          <img
            src="/assets/ambrisshtedx.png"
            alt="Ambrissh S. Raghav"
            className="w-full max-w-[85vw] md:max-w-[42vw] md:w-[420px] h-auto rounded-[1.5rem] object-cover border border-white/10"
            loading="lazy"
            decoding="async"
            width={420}
            height={525}
            style={{ aspectRatio: "4/5" }}
          />
        </div>

        {/* Right Column: Bio, Fun Fact, Hobbies */}
        <div className="reveal-intro flex flex-col w-full">
          {/* Main greeting heading */}
          <h2
            className="font-sans font-semibold text-white"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: "0.5rem",
            }}
          >
            Hey there, I&apos;m Ambrissh
          </h2>

          {/* Secondary name line */}
          <p
            className="font-sans text-white mb-6"
            style={{
              opacity: 0.45,
              fontSize: "0.95rem",
            }}
          >
            Ambrissh S. Raghav
          </p>

          {/* Paragraphs */}
          <div className="space-y-5 font-sans font-light text-[0.95rem] leading-[1.8] text-white/70 mb-10">
            <p>
              I&apos;m a fourth-year BS-MS Physics student at IISER Berhampur.
              Technically a physics major, but mostly found building things with AI.
            </p>
            <p>
              AI is moving fast and honestly it&apos;s kind of insane to watch. My take?
              It&apos;s all about building well-architected solutions to real problems ,
              not just vibing with the hype. Figuring that out, one project at a time.
            </p>
            <p>
              I&apos;ve bounced around — cryptography, embedded systems, cybersecurity ,
              but the through line has always been the same: building things that
              actually do something.
            </p>
            <p>
              I also host Metaverse Entangled, a podcast where I talk to founders,
              scientists, and researchers doing genuinely interesting things.
              Started as curiosity. Still is.
            </p>
            <p>
              If you want to build something together or just say hi —
              hit the contact page. I don&apos;t bite.
            </p>
          </div>

          {/* Fun Fact Card (Compact, max-width: 320px) */}
          <div
            className="rounded-[1rem] border border-white/9 bg-white/[0.04] p-5 mb-8 flex items-start gap-4"
            style={{ maxWidth: "320px" }}
          >
            <img
              src="/assets/ambrissh-ncc.png"
              alt="NCC Cadet"
              className="block rounded-full border border-white/12 object-cover"
              loading="lazy"
              decoding="async"
              width={48}
              height={48}
              style={{ width: 48, height: 48 }}
            />
            <div>
              <span className="inline-block rounded-full border border-white/18 bg-white/6 px-[0.6rem] py-[0.15rem] font-sans font-normal text-[0.65rem] text-white mb-2">
                Fun Fact 🎖️
              </span>
              <h3 className="font-sans text-[0.9rem] font-semibold text-white mb-1.5 leading-tight">
                NCC Best Cadet — RDC 2019–20
              </h3>
              <p className="font-sans text-[0.8rem] font-light leading-[1.6] text-white/50">
                Was part of the National Cadet Corps and represented my group as
                Best Cadet. Genuinely one of the most intense things I&apos;ve done.
              </p>
            </div>
          </div>

          {/* Hobbies Row */}
          <div className="w-full">
            <span className="block font-sans text-[0.75rem] font-light text-white/35 mb-2">
              When I&apos;m not building —
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-[0.75rem] py-[0.25rem] font-sans font-light text-[0.75rem] text-white/50">
                Competitive Programming 🧩
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-[0.75rem] py-[0.25rem] font-sans font-light text-[0.75rem] text-white/50">
                Cubing 🎲
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}