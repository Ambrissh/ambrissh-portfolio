import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
    </main>
  );
}
