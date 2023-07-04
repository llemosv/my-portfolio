'use client';

import { Divider } from '@/components/divider';
import { SectionTitle } from '@/components/section-title';
import { MdOutlineFolder } from 'react-icons/md';
import { ProjectCard } from './project-card';
import { motion } from 'framer-motion';
import { techBadgeAnimation } from '@/lib/animations';
import { ProjectType } from '@/types/page';

type ProjectsSessionType = {
  projects: ProjectType[];
};

export function ProjectsSection({ projects }: ProjectsSessionType) {
  return (
    <section id="projects" className="container py-16">
      <SectionTitle
        subtitle="projects"
        title="Projetos"
        icon={<MdOutlineFolder />}
      />

      <Divider className="mb-16" />

      <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-x-3 gap-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              imageUrl={project.projectImage.url}
              repositoryUrl={project.repositoryUrl}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
