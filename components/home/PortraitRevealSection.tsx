"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { siteContent } from "@/lib/content";

export function PortraitRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blur = useTransform(scrollYProgress, [0.08, 0.34, 0.56], [26, 7, 0]);
  const brightness = useTransform(scrollYProgress, [0.08, 0.38, 0.7], [0.38, 0.82, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.05, 0.28, 0.56], [0, 0.7, 1]);
  const veilOpacity = useTransform(scrollYProgress, [0.12, 0.46, 0.82], [0.82, 0.22, 0.54]);
  const scale = useTransform(scrollYProgress, [0.05, 0.62, 1], [1.14, 1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 1], [86, -54]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [36, -34]);
  const filter = useMotionTemplate`blur(${blur}px) brightness(${brightness})`;

  if (prefersReducedMotion) {
    return (
      <section
        aria-label="Portrait"
        className="flex min-h-screen items-center justify-center bg-black px-6 py-20"
      >
        <div className="relative aspect-[4/5] w-[min(80vw,400px)] overflow-hidden">
          <Image
            src="/assets/ambrisshtedx.png"
            alt={siteContent.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 80vw, 400px"
            priority
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-label="Portrait"
      className="relative min-h-[150vh] overflow-clip bg-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_46%_at_50%_48%,rgba(255,255,255,0.045),transparent_62%)]"
      />

      <motion.div
        className="sticky top-0 flex h-[100dvh] items-center justify-center px-6 py-16"
        style={{ y, opacity: imageOpacity }}
      >
        <motion.div
          className="relative will-change-transform"
          style={{ scale, filter }}
        >
          <motion.div
            className="relative aspect-[4/5] w-[min(82vw,440px)] overflow-hidden rounded-[2px]"
            initial={false}
          >
            <motion.div className="absolute inset-[-8%]" style={{ y: portraitY }}>
              <Image
                src="/assets/ambrisshtedx.png"
                alt={siteContent.name}
                fill
                className="object-cover object-[center_18%]"
                sizes="(max-width: 768px) 82vw, 440px"
              />
            </motion.div>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/62 via-black/0 to-black/38"
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: veilOpacity }}
      />
    </section>
  );
}
