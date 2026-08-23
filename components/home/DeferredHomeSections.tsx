"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const FeaturedProjectsSection = dynamic(() =>
  import("./FeaturedProjectsSection").then((module) => module.FeaturedProjectsSection)
);
const SkillsSection = dynamic(() =>
  import("./SkillsSection").then((module) => module.SkillsSection)
);
const ExperienceSection = dynamic(() =>
  import("./ExperienceSection").then((module) => module.ExperienceSection)
);
const InitiativesSection = dynamic(() =>
  import("./InitiativesSection").then((module) => module.InitiativesSection)
);

export function DeferredHomeSections() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1200px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sentinelRef}>
      {shouldLoad && (
        <>
          <FeaturedProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <InitiativesSection />
        </>
      )}
    </div>
  );
}
