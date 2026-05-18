"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
};

type HeroQuoteDustBurstProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  delayMs?: number;
};

function spawnParticles(width: number, height: number, count: number): Particle[] {
  const cx = width / 2;
  const cy = height / 2;

  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3.5 + 1.5;
    const x = cx + (Math.random() - 0.5) * width * 0.95;
    const y = cy + (Math.random() - 0.5) * height * 0.8;
    const ttl = Math.random() * 40 + 35;

    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 2,
      life: ttl,
      maxLife: ttl,
      size: Math.random() * 2 + 0.5,
    };
  });
}

export function HeroQuoteDustBurst({
  containerRef,
  delayMs = 0,
}: HeroQuoteDustBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;

    let frame = 0;

    const timeout = setTimeout(() => {
      if (ranRef.current) return;

      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      ranRef.current = true;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rect = container.getBoundingClientRect();
      const pad = 58;
      const w = rect.width + pad * 2;
      const h = rect.height + pad * 2;
      const dpr = Math.min(window.devicePixelRatio, 2);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const offsetX = pad;
      const offsetY = pad;

      const count = window.matchMedia("(max-width: 640px)").matches ? 170 : 280;
      let particles = spawnParticles(w - pad * 2, h - pad * 2, count).map(
        (p) => ({ ...p, x: p.x + offsetX, y: p.y + offsetY })
      );

      const start = performance.now();
      const maxMs = 2600;

      const tick = (now: number) => {
        if (now - start > maxMs) {
          ctx.clearRect(0, 0, w, h);
          return;
        }

        ctx.clearRect(0, 0, w, h);

        particles = particles.filter((p) => {
          p.life -= 0.9;
          if (p.life <= 0) return false;

          p.vy += 0.055;
          p.vx *= 0.986;
          p.x += p.vx;
          p.y += p.vy;

          const alpha = (p.life / p.maxLife) * 0.55;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(235, 235, 240, ${alpha})`;
          ctx.fill();
          return true;
        });

        if (particles.length > 0 || now - start < maxMs - 150) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [containerRef, delayMs]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
    />
  );
}
