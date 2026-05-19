"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function PortraitRevealSection() {
  const prefersReducedMotion = useReducedMotion();

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
      aria-label="Portrait"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-clip bg-black py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_46%_at_50%_48%,rgba(255,255,255,0.045),transparent_62%)]"
      />

      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="relative aspect-[4/5] w-[min(82vw,440px)] overflow-hidden rounded-[2px]">
          <div className="absolute inset-[-4%]">
            <Image
              src="/assets/ambrisshtedx.png"
              alt={siteContent.name}
              fill
              className="object-cover object-[center_18%]"
              sizes="(max-width: 768px) 82vw, 440px"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/62 via-black/0 to-black/38"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]"
          />
        </div>
      </motion.div>
    </section>
  );
}
