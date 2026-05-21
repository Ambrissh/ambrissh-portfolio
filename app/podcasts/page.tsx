import type { Metadata } from "next";

import { FeaturedPodcastsSection } from "@/components/podcasts/FeaturedPodcastsSection";
import { OtherPodcastsSection } from "@/components/podcasts/OtherPodcastsSection";
import { PodcastBioSection } from "@/components/podcasts/PodcastBioSection";
import { PodcastHeroSection } from "@/components/podcasts/PodcastHeroSection";

export const metadata: Metadata = {
  title: "My Podcasts | Ambrissh S. Raghav",
  description:
    "Metaverse Entangled is a podcast about meaningful conversations with founders, scientists, and researchers building ambitious things.",
};

export default function PodcastsPage() {
  return (
    <main className="relative bg-black text-white" style={{ zIndex: 1 }}>
      <PodcastHeroSection />
      <PodcastBioSection />
      <FeaturedPodcastsSection />
      <OtherPodcastsSection />
    </main>
  );
}