'use client';
import React from 'react';
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from 'react-icons/tb';
import { motion } from 'framer-motion';
import { SocialsType } from '@/types/page';
import { CMSIcon } from '../cms-icon';

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/llemosv',
    icon: <TbBrandGithub size={22} />,
  },
  {
    url: 'https://www.linkedin.com/in/leonardo-lemos-673122210/',
    icon: <TbBrandLinkedin size={22} />,
  },
  {
    url: 'https://github.com/llemosv',
    icon: <TbBrandWhatsapp size={22} />,
  },
];

type IconsProps = {
  socialsContent: SocialsType[];
};

export function SidebarIcons({ socialsContent }: IconsProps) {
  return (
    <motion.div
      className="w-10 hidden xl:flex fixed bottom-0 left-10 right-auto z-10 text-gray-400"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 3 * 0.1 }}
    >
      <ul className="flex flex-col items-center gap-8">
        {socialsContent.map((contact) => (
          <li
            key={contact.id}
            className="hover:translate-y-[-3px] transition-transform duration-200"
          >
            <a
              href={contact.url}
              target="_blank"
              className="hover:text-blue-400 text-xl"
            >
              <CMSIcon icon={contact.iconSvg} />
            </a>
          </li>
        ))}
        <div className="border border-gray-400 h-20" />
      </ul>
    </motion.div>
  );
}
