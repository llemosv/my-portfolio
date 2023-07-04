'use client';

import { Divider } from '@/components/divider';
import { SectionTitle } from '@/components/section-title';
import { MdComputer } from 'react-icons/md';
import { ExperienceList } from './experience-list';

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-16">
      <SectionTitle
        subtitle="experience"
        title="Experiência Profissional"
        icon={<MdComputer />}
      />
      <Divider className="mb-8" />

      <div className="overflow-hidden">
        <ExperienceList />
      </div>
    </section>
  );
}
