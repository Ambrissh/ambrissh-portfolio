export function IntroSection() {
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

          <p
            className="font-sans text-white mb-4"
            style={{
              opacity: 0.45,
              fontSize: "0.95rem",
            }}
          >
            Ambrissh S. Raghav
          </p>

          {/* Socials Row */}
          <div className="flex flex-wrap items-start gap-[0.6rem] mb-8">
            {[
              {
                label: "Instagram",
                href: "https://instagram.com/_a_s_raghav_",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ambrissh-s-raghav-9bbb12218/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                href: "https://github.com/Ambrissh",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                ),
              },
              {
                label: "Email",
                href: "mailto:raghavambrissh@gmail.com",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
              },
              {
                label: "X",
                href: "https://x.com/Ambrissh00",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[0.4rem] px-[0.9rem] py-[0.4rem] rounded-full border border-white/15 bg-white/[0.04] text-white/65 text-[0.8rem] font-sans font-normal decoration-none transition-all duration-200 ease-in-out hover:border-white/35 hover:text-white hover:bg-white/[0.08]"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* Paragraphs */}
          <div className="space-y-5 font-sans font-light text-[0.95rem] leading-[1.8] text-white/70 mb-10">
            <p>
              I&apos;m a fourth-year BS-MS Physics student at IISER Berhampur, focused on AI engineering and building reliable LLM systems.
            </p>
            <p>
              I&apos;ve worked across quantum communications, embedded systems, cybersecurity, and ML modelling for defence tech. Now I build RAG pipelines, retrieval systems, evaluation workflows, and useful AI products.
            </p>

            <p>
              I also host Metaverse Entangled, a podcast series where I talk to founders,
              scientists, and researchers doing genuinely interesting things.
              It started as curiosity ,still is. You can learn more by going to the "My Podcasts!" page .
            </p>
            <p>
              If you&apos;re interested in AI engineering, RAG, or want to build something together,
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
                NCC Best Cadet, RDC 2019–20
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
              When I&apos;m not building:
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
