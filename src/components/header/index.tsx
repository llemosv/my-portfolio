'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavItem } from './nav-item';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  {
    id: '01',
    label: 'Home',
    href: '/',
  },
  {
    id: '02',
    label: 'Projetos',
    href: '/projects',
  },
];

export function Header() {
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-20 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-mono flex items-center">
            &lt;<span className="text-blue-400 font-medium">llemosv</span>
            &nbsp;/&gt;
          </h1>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item, i) => (
            <NavItem {...item} key={i} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
