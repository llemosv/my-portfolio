'use client';

import Link from 'next/link';
import { NavItem } from './nav-item';
import { motion } from 'framer-motion';
import { GiCrossMark, GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  {
    id: '01',
    label: 'Home',
    href: '/',
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

// export function Header() {
//   return (
//     <motion.header
//       className="absolute top-0 w-full z-10 h-20 flex items-center justify-center"
//       initial={{ top: -100 }}
//       animate={{ top: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container flex items-center justify-between">
//         <Link href="/">
//           <h1 className="font-mono flex items-center">
//             &lt;<span className="text-blue-400 font-medium">llemosv</span>
//             &nbsp;/&gt;
//           </h1>
//         </Link>

//         <nav className="flex items-center gap-4 sm:gap-10">
//           {NAV_ITEMS.map((item, i) => (
//             <NavItem {...item} key={i} />
//           ))}
//         </nav>
//       </div>
//     </motion.header>
//   );
// }
export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.classList.add('overflow-hidden');
  //   } else {
  //     document.body.classList.remove('overflow-hidden');
  //   }
  //   return () => {
  //     document.body.classList.remove('overflow-hidden');
  //   };
  // }, [isMenuOpen]);
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

        <nav className="hidden sm:flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item, i) => (
            <NavItem {...item} key={i} />
          ))}
        </nav>

        {/* <div className="sm:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-blue-400 focus:outline-none"
          >
            {isMenuOpen ? (
              <GiCrossMark size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-75 flex justify-end">
            <div className="w-64 p-8 bg-blue-950">
              <button
                type="button"
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-blue-400 focus:outline-none"
              >
                <GiCrossMark size={24} />
              </button>

              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, i) => (
                  <NavItem {...item} key={i} />
                ))}
              </nav>
            </div>
          </div>
        )} */}
      </div>
    </motion.header>
  );
}
