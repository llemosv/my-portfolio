'use client';
import { SectionTitle } from '@/components/section-title';
import { CardSkill } from './card-skill';
import { motion } from 'framer-motion';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';

import { useState } from 'react';
import { Divider } from '@/components/divider';
import { HardSkillsType, SoftSkillsType } from '@/types/page';
import { CMSIcon } from '@/components/cms-icon';

type SkillsProps = {
  softSkills: SoftSkillsType[];
  hardSkills: HardSkillsType[];
};

export function SkillsSection({ softSkills, hardSkills }: SkillsProps) {
  const [isShowingHardSkills, setIsShowingHardSkills] = useState(false);

  const handleNavClick = (showHardSkills: boolean) => {
    setIsShowingHardSkills(showHardSkills);
  };
  return (
    <section id="skills" className="container py-16">
      <SectionTitle
        icon={
          isShowingHardSkills ? (
            <MdOutlineRocketLaunch className="text-blue-400" />
          ) : (
            <GiBrain className="text-blue-400" />
          )
        }
        subtitle="skills"
        title={isShowingHardSkills ? 'Hard Skills' : 'Soft Skills'}
      />

      <Divider />

      <nav className="flex justify-center my-10 font-mono max-w-full overflow-hidden">
        <motion.button
          className={`mr-4  font-medium ${
            !isShowingHardSkills ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleNavClick(false)}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          Soft Skills
        </motion.button>
        <motion.button
          className={` font-medium ${
            isShowingHardSkills ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleNavClick(true)}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          Hard Skills
        </motion.button>
      </nav>

      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-3 mt-16">
        {isShowingHardSkills
          ? hardSkills.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.15, delay: i * 0.1 }}
              >
                <CardSkill
                  tech={{
                    icon: <CMSIcon icon={skill.iconSvg} />,
                    name: skill.name,
                    startDate: skill.startDate,
                  }}
                />
              </motion.div>
            ))
          : softSkills.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.15, delay: i * 0.1 }}
              >
                <CardSkill
                  tech={{
                    icon: <CMSIcon icon={skill.iconSvg} />,
                    name: skill.name,
                  }}
                />
              </motion.div>
            ))}
      </div>
    </section>
  );
}
