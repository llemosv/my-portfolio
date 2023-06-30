import { SidebarIcons } from '@/components/icons';
import { Experience } from '@/components/pages/home/experience-section';
import { HeroSection } from '@/components/pages/home/hero-section';
import { Projects } from '@/components/pages/home/projects-section';
import { SkillsSection } from '@/components/pages/home/skills-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <Projects />
      <SidebarIcons />
      <Experience />
    </>
  );
}
