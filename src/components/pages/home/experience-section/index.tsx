'use client';

import { Divider } from '@/components/divider';
import { SectionTitle } from '@/components/section-title';
import { MdComputer } from 'react-icons/md';
import { ExperienceItem } from './experience-item';
import { motion } from 'framer-motion';
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations';

export function Experience() {
  return (
    <section className="container py-16 flex flex-col md:flex-row gap-16">
      <div className="w-full max-w-[420px]">
        <SectionTitle
          subtitle="experience"
          title="Experiência"
          icon={<MdComputer />}
        />
        {/* <Divider className="mb-8" /> */}

        <motion.p
          className="text-gray-400 mt-8"
          {...techBadgeAnimation}
          transition={{ duration: 0.5, delay: 1 * 0.1 }}
        >
          Veja um pouco mais sobre minhas experiências profissionais, techs que
          já trabalhei e mais...
        </motion.p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
}
