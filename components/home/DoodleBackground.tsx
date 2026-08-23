"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function DoodleBackground() {
  const coderRef = useRef<HTMLImageElement>(null);
  const podcasterRef = useRef<HTMLImageElement>(null);
  const pathname = usePathname();

  // Only show on home page
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const fadeStart = vh * 1.2;
      const fadeEnd = vh * 2.2;

      const CODER_MAX = 0.32;
      const PODCASTER_MAX = 0.28;

      let coderOpacity: number;
      let podcasterOpacity: number;
      let coderScale: number;
      let podcasterScale: number;

      if (scrollY <= fadeStart) {
        coderOpacity = CODER_MAX;
        podcasterOpacity = 0;
        coderScale = 1;
        podcasterScale = 1.04;
      } else if (scrollY >= fadeEnd) {
        coderOpacity = 0;
        podcasterOpacity = PODCASTER_MAX;
        coderScale = 0.96;
        podcasterScale = 1;
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        coderOpacity = CODER_MAX * (1 - progress);
        podcasterOpacity = PODCASTER_MAX * progress;
        coderScale = 1 - 0.04 * progress;
        podcasterScale = 1.04 - 0.04 * progress;
      }

      if (coderRef.current) {
        coderRef.current.style.opacity = coderOpacity.toFixed(4);
        coderRef.current.style.transform = `translate(-50%, -50%) scale(${coderScale.toFixed(4)})`;
      }
      if (podcasterRef.current) {
        podcasterRef.current.style.opacity = podcasterOpacity.toFixed(4);
        podcasterRef.current.style.transform = `translate(-50%, -50%) scale(${podcasterScale.toFixed(4)})`;
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  if (!isHome) return null;

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
        ref={coderRef}
        src="/doodle-coder.png"
        alt=""
        decoding="async"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "min(820px, 90vw)",
          height: "auto",
          objectFit: "contain",
          filter: "invert(1)",
          pointerEvents: "none",
          opacity: 0.32,
          transform: "translate(-50%, -50%) scale(1)",
          transition:
            "opacity 400ms linear, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      <img
        ref={podcasterRef}
        src="/doodle-podcaster-male.png"
        alt=""
        decoding="async"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "min(820px, 90vw)",
          height: "auto",
          objectFit: "contain",
          filter: "invert(1)",
          pointerEvents: "none",
          opacity: 0,
          transform: "translate(-50%, -50%) scale(1.04)",
          transition:
            "opacity 400ms linear, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}
