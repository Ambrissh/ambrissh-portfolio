export function HeroAmbient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 animate-fade-in"
    >
      {/* Deep vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,transparent_20%,#000_72%)]" />

      {/* Key light — slow bloom behind quote */}
      <div
        className="absolute left-1/2 top-[42%] h-[min(70vw,520px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_38%,transparent_68%)] animate-ambient-pulse"
      />

      {/* Ambient light rays */}
      <div className="absolute inset-0 opacity-[0.35]">
        <div className="absolute left-1/2 top-0 h-[55%] w-px -translate-x-1/2 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent" />
        <div className="absolute left-[18%] top-0 h-[45%] w-px -rotate-[8deg] bg-gradient-to-b from-white/[0.04] to-transparent" />
        <div className="absolute right-[16%] top-0 h-[48%] w-px rotate-[6deg] bg-gradient-to-b from-white/[0.05] to-transparent" />
      </div>

      {/* Cool edge wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(120,140,180,0.04),transparent_55%)]" />

      {/* Floor fade */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}
