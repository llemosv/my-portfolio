'use client';

import Link from 'next/link';
import { NavItem } from './nav-item';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MobileMenu } from './mobile-menu';

const NAV_ITEMS = [
  {
    id: '01',
    label: 'Home',
    href: 'home',
  },
  {
    id: '02',
    label: 'Skills',
    href: 'skills',
  },
  {
    id: '03',
    label: 'Projetos',
    href: 'projects',
  },
  {
    id: '04',
    label: 'Experiência',
    href: 'experience',
  },
  {
    id: '05',
    label: 'Contato',
    href: 'contact',
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-20 h-16 flex items-center justify-center bg-gray-900 "
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      style={{ boxShadow: '0px 1px 8px rgba(92, 92, 92, 0.2)' }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-mono flex items-center">
            &lt;<span className="text-blue-400 font-medium">llemosv</span>
            &nbsp;/&gt;
          </h1>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 lg:gap-10">
          {NAV_ITEMS.map((item, i) => (
            <NavItem {...item} key={i} />
          ))}
        </nav>

        <div className="lg:hidden mt-1">
          <button
            onClick={toggleMenu}
            className="text-blue-400 focus:outline-none"
          >
            <RxHamburgerMenu size={25} />
          </button>
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={toggleMenu}
            menuItems={NAV_ITEMS}
          />
        </div>
      </div>
    </motion.header>
  );
}
