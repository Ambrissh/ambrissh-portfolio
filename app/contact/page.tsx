export default function ContactPage() {
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

      <section className="relative z-10 mx-auto max-w-[44rem] flex flex-col">
        {/* Badge */}
        <div className="mb-4">
          <span className="inline-block rounded-full border border-white/18 bg-white/6 px-[0.875rem] py-[0.25rem] font-sans font-normal text-[0.75rem] text-white">
            Let's Chat
          </span>
        </div>

        {/* Header */}
        <h1 className="font-sans text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-white tracking-[-0.02em] leading-[1.2] mb-6 max-w-[40rem]">
          I've always enjoyed conversations with people building ambitious things, questioning ideas, or simply thinking differently.
        </h1>

        {/* Subtext */}
        <p className="font-sans text-[1rem] font-light text-white/65 leading-[1.7] mb-12 max-w-[40rem]">
          These are the questions I actually care about.
        </p>

        {/* Form Card */}
        <form
          action="https://formspree.io/f/mnjrnewv"
          method="POST"
          data-contact-form
          className="relative rounded-[1.5rem] border border-white/[0.09] bg-white/[0.04] p-10 flex flex-col"
        >
            {/* Shimmer line */}
            <div 
              className="absolute top-0 left-6 right-6 h-px" 
              style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)" }}
            />

            {/* Field: Name */}
            <div className="mb-6">
              <label className="block font-sans font-normal text-[0.8rem] text-white/50 uppercase tracking-[0.08em] mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Your name"
                className="w-full rounded-[0.75rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white font-sans font-light text-[0.95rem] outline-none transition-colors duration-200 focus:border-white/30 placeholder:text-white/25"
              />
            </div>

            {/* Field: Email */}
            <div className="mb-6">
              <label className="block font-sans font-normal text-[0.8rem] text-white/50 uppercase tracking-[0.08em] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-[0.75rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white font-sans font-light text-[0.95rem] outline-none transition-colors duration-200 focus:border-white/30 placeholder:text-white/25"
              />
            </div>

            {/* Field 3: Obsession */}
            <div className="mb-6">
              <label className="block font-sans font-normal text-[0.8rem] text-white/50 uppercase tracking-[0.08em] mb-2">
                What problem are you obsessed with solving?
              </label>
              <textarea
                name="What problem are you obsessed with solving?"
                rows={3}
                placeholder="The thing you can't stop thinking about"
                className="w-full rounded-[0.75rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white font-sans font-light text-[0.95rem] outline-none transition-colors duration-200 focus:border-white/30 placeholder:text-white/25 resize-none"
              />
            </div>

            {/* Field 4: Building */}
            <div className="mb-6">
              <label className="block font-sans font-normal text-[0.8rem] text-white/50 uppercase tracking-[0.08em] mb-2">
                What are you currently building or exploring?
              </label>
              <textarea
                name="What are you currently building or exploring?"
                rows={3}
                placeholder="Project, research, idea..."
                className="w-full rounded-[0.75rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white font-sans font-light text-[0.95rem] outline-none transition-colors duration-200 focus:border-white/30 placeholder:text-white/25 resize-none"
              />
            </div>

            {/* Field 5: Limitation */}
            <div className="mb-6">
              <label className="block font-sans font-normal text-[0.8rem] text-white/50 uppercase tracking-[0.08em] mb-2">
                If resources weren't a limitation, what would you create?
              </label>
              <textarea
                name="If resources weren't a limitation, what would you create?"
                rows={3}
                placeholder="Go big."
                className="w-full rounded-[0.75rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white font-sans font-light text-[0.95rem] outline-none transition-colors duration-200 focus:border-white/30 placeholder:text-white/25 resize-none"
              />
            </div>

            {/* Field 6: Mind */}
            <div className="mb-6">
              <label className="block font-sans font-normal text-[0.8rem] text-white/50 uppercase tracking-[0.08em] mb-2">
                Leave a thought, idea, or question you genuinely care about.
              </label>
              <textarea
                name="Leave a thought, idea, or question you genuinely care about."
                rows={4}
                placeholder="Anything on your mind."
                className="w-full rounded-[0.75rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white font-sans font-light text-[0.95rem] outline-none transition-colors duration-200 focus:border-white/30 placeholder:text-white/25 resize-none"
              />
            </div>

            <p
              data-contact-error
              role="alert"
              hidden
              className="text-red-400 font-sans text-sm mb-4"
            >
              Something went wrong. Please try again.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              data-contact-submit
              className="w-full rounded-[0.75rem] border border-white/15 bg-white/6 py-3.5 font-sans font-medium text-[0.95rem] text-white flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-white/10 cursor-pointer disabled:opacity-50"
            >
              <span data-contact-submit-label>Send Thoughts</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
        </form>

          <div
            data-contact-success
            hidden
            className="rounded-[1.5rem] border border-white/[0.09] bg-white/[0.04] p-12 py-20 flex flex-col items-center justify-center text-center"
          >
            <h3 className="font-sans font-semibold text-[1.1rem] text-white leading-tight">
              Sent. I'll get back to you.
            </h3>
            <p className="font-sans font-light text-[0.9rem] text-white/50 mt-2">
              Good conversation incoming.
            </p>
          </div>

        {/* Social Pills */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a
            href="https://github.com/Ambrissh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 font-sans font-normal text-[0.875rem] text-white/60 transition-all duration-200 hover:border-white/25 hover:text-white decoration-none"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="/podcasts/"
            className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 font-sans font-normal text-[0.875rem] text-white/60 transition-all duration-200 hover:border-white/25 hover:text-white decoration-none"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
            <span>Podcast</span>
          </a>
        </div>
      </section>
      <script src="/static-runtime.js" defer data-static-runtime />
    </main>
  );
}
