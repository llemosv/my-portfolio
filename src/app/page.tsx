import { SidebarIcons } from '@/components/icons';
import { ContactSection } from '@/components/pages/home/contact-section';
import { ExperienceSection } from '@/components/pages/home/experience-section';
import { HeroSection } from '@/components/pages/home/hero-section';
import { ProjectsSection } from '@/components/pages/home/projects-section';
import { SkillsSection } from '@/components/pages/home/skills-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <SidebarIcons />
    </>
  );
}
