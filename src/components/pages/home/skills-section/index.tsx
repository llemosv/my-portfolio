'use client';
import { SectionTitle } from '@/components/section-title';
import { CardSkill } from './card-skill';
import { motion } from 'framer-motion';
import { TbBrandNextjs } from 'react-icons/tb';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';

import { useState } from 'react';
import { Divider } from '@/components/divider';
export function SkillsSection() {
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
          ? Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.15, delay: index * 0.1 }}
              >
                <CardSkill
                  tech={{
                    icon: <TbBrandNextjs />,
                    name: 'Next.js',
                    startDate: '2023-01-01',
                  }}
                />
              </motion.div>
            ))
          : Array.from({ length: 5 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.15, delay: index * 0.1 }}
              >
                <CardSkill
                  tech={{
                    icon: <RiTeamLine />,
                    name: 'Trabalho em equipe',
                    //startDate: '2023-01-01',
                  }}
                />
              </motion.div>
            ))}
      </div>
    </section>
  );
}
