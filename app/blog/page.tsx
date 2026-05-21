"use client";

export default function BlogPage() {
  const tags = ["Physics", "Machine Learning", "Startups", "Indie Hacking", "Research", "Building"];

  return (
    <main className="relative min-h-screen bg-black px-6 pt-[7rem] pb-[6rem] text-white overflow-hidden">
      {/* Ambient Orbs */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-[rgba(80,100,255,0.07)] filter blur-[90px] z-0" 
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[rgba(100,60,255,0.06)] filter blur-[80px] z-0" 
      />

      <section className="relative z-10 mx-auto max-w-[48rem] flex flex-col">
        {/* Badge */}
        <div className="mb-4">
          <span className="inline-block rounded-full border border-white/18 bg-white/6 px-[0.875rem] py-[0.25rem] font-sans font-normal text-[0.75rem] text-white">
            Blog
          </span>
        </div>

        {/* Header */}
        <h1 className="font-sans text-[clamp(2.5rem,6vw,4rem)] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-4">
          Thoughts, half-baked and otherwise.
        </h1>

        {/* Subtext */}
        <p className="font-sans text-[0.95rem] font-light text-white/65 leading-[1.7] mb-12">
          A space for ideas on physics, machine learning, startups, and frontier 
          technologies. Written when something is worth writing down.
        </p>

        {/* Coming Soon Card */}
        <div className="relative rounded-[1.5rem] border border-white/[0.09] bg-white/[0.04] p-12 text-center flex flex-col justify-center items-center">
          {/* Shimmer line */}
          <div 
            className="absolute top-0 left-6 right-6 h-px" 
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)" }}
          />

          {/* PenLine Icon */}
          <div className="mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white/25 mx-auto">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              <path d="m15 5 3 3" />
            </svg>
          </div>

          {/* Heading */}
          <h3 className="font-sans text-xl font-semibold text-white tracking-tight">
            Coming soon.
          </h3>

          {/* Description */}
          <p className="font-sans text-[0.9rem] font-light text-white/45 mt-3 max-w-md">
            First post is in draft. Topics: ML for physics, shipping as a student, 
            and what most people get wrong about building things.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-sans font-normal text-[0.8rem] text-white/45 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}