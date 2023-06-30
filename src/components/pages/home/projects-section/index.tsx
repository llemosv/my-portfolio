'use client';

import { Divider } from '@/components/divider';
import { SectionTitle } from '@/components/section-title';
import { MdOutlineFolder } from 'react-icons/md';
import { ProjectCard } from './project-card';
import { motion } from 'framer-motion';
import { techBadgeAnimation } from '@/lib/animations';

export function Projects() {
  return (
    <section className="container py-16">
      <SectionTitle
        subtitle="projects"
        title="Projetos"
        icon={<MdOutlineFolder />}
      />

      <Divider className="mb-16" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-x-3 gap-y-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard />
          </motion.div>
        ))}

        {/* <Divider className="my-16" /> */}

        {/* <Link href="/projects">
          Ver todos os projetos
          <HiArrowNarrowRight />
        </Link> */}
      </div>
    </section>
  );
}
