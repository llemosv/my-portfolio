'use client';
import React from 'react';
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from 'react-icons/tb';
import { motion } from 'framer-motion';

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

export function SidebarIcons() {
  return (
    <motion.div
      className="w-10 hidden xl:flex fixed bottom-0 left-10 right-auto z-10 text-gray-500"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 3 * 0.1 }}
    >
      <ul className="flex flex-col items-center gap-8">
        {MOCK_CONTACTS.map((contact, i) => (
          <li
            key={i}
            className="hover:translate-y-[-3px] transition-transform duration-200"
          >
            <a
              href={contact.url}
              target="_blank"
              className="hover:text-blue-400"
            >
              {contact.icon}
            </a>
          </li>
        ))}
        <div className="border border-gray-400 h-20" />
      </ul>
    </motion.div>
  );
}