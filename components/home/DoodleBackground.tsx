export function DoodleBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <img
        src="/doodle-coder.png"
        alt=""
        decoding="async"
        loading="lazy"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "min(820px, 90vw)",
          height: "auto",
          objectFit: "contain",
          filter: "invert(1)",
          pointerEvents: "none",
          opacity: 0.25,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
