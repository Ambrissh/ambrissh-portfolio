import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { DoodleBackground } from "@/components/home/DoodleBackground";
import { DeferredHomeSections } from "@/components/home/DeferredHomeSections";

export default function Home() {
  return (
    <main className="relative" style={{ zIndex: 1 }}>
      <DoodleBackground />
      <HeroSection />
      <IntroSection />
      <DeferredHomeSections />
    </main>
  );
}
