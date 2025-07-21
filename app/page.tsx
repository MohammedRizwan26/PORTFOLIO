import { ThemeToggle } from '@/components/theme-toggle';
import { HeroSection } from '@/components/hero-section';
import { SkillsOverview } from '@/components/skills-overview';
import { TechStackToggle } from '@/components/tech-stack-toggle';
import { RizwanBot } from '@/components/rizwan-bot';
import { JourneyTimeline } from '@/components/journey-timeline';
import { CodePlayground } from '@/components/code-playground';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <SkillsOverview />
      <TechStackToggle />
      <JourneyTimeline />
      <CodePlayground />
      <RizwanBot />
    </main>
  );
}