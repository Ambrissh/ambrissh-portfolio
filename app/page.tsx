import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { InitiativesSection } from "@/components/home/InitiativesSection";

export default function Home() {
  return (
    <main className="relative" style={{ zIndex: 1 }}>
      <HeroSection />
      <template id="deferred-home-content">
        <IntroSection />
        <FeaturedProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <InitiativesSection />
      </template>
      <script src="/static-runtime.js" defer data-static-runtime />
    </main>
  );
}
