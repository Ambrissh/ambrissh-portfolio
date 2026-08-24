import { HeroCinematicBackground } from "./hero/HeroCinematicBackground";

export function HeroSection() {
  return (
    <section
      aria-label="Opening"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6"
      style={{ background: "rgba(0,0,0,0.72)" }}
    >
      <HeroCinematicBackground />

      {/* Centered Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center flex flex-col items-center justify-center">
        {/* Quote matching the "Metaverse Entangled" scale */}
        <h1
          className="font-sans text-white"
          style={{
            fontSize: "clamp(4rem, 10vw, 8rem)",
            fontWeight: 600,
            letterSpacing: "-0.06em",
            lineHeight: 0.95,
          }}
        >
          &ldquo;So to speak, we did it.&rdquo;
        </h1>


      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/20"
        aria-hidden
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-8 w-px bg-white/20" />
      </div>
    </section>
  );
}
