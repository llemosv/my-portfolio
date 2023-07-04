import { TechCard } from '@/components/tech-card';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ExperienceItem } from './experience-item';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Eletrozema S/A',
    office: 'Desenvolvedor de Sistemas',
    date: 'Setembro 2022 - Presente',
    description: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum rem unde blanditiis hic tempore molestiae quasi ipsa deserunt beatae aperiam.',
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum rem unde blanditiis hic tempore molestiae quasi ipsa deserunt beatae aperiam.',
      },
    ],
  },
  {
    id: 2,
    company: 'Eletrozema S/A',
    office: 'Estagiário de Desenvolvimento',
    date: 'Agosto 2021 - Agosto 2022',
    description: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum rem unde blanditiis hic tempore molestiae quasi ipsa deserunt beatae aperiam.',
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum rem unde blanditiis hic tempore molestiae quasi ipsa deserunt beatae aperiam.',
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum rem unde blanditiis hic tempore molestiae quasi ipsa deserunt beatae aperiam.',
      },
    ],
  },
];

export function ExperienceList() {
  const [selectedExperience, setSelectedExperience] = useState<number>(
    experiences[0].id
  );

  const handleExperienceClick = (id: any) => {
    setSelectedExperience(id);
  };

  return (
    <div className="flex flex-col gap-6 md:gap-0 md:flex-row">
      <div className="md:w-1/4 w-full">
        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {experiences.map((experience) => (
            <li
              key={experience.id}
              className={cn(
                'max-w-max border-l-2 border-gray-600 text-gray-400 px-10 py-3 cursor-pointer text-sm font-medium font-mono hover:bg-blue-950/40 transition-all',
                selectedExperience === experience.id &&
                  'text-blue-400 border-blue-400 bg-blue-950/40'
              )}
              onClick={() => handleExperienceClick(experience.id)}
            >
              {experience.company}
            </li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        className="md:w-3/4 w-full"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {selectedExperience && (
          <ExperienceItem
            experience={experiences.find(
              (experience) => experience.id === selectedExperience
            )}
          />
        )}
      </motion.div>
    </div>
  );
}
