export function HeroCinematicBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(255,255,255,0.03),transparent_70%)] opacity-60" />

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
    </div>
  );
}
