import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { NavItem } from './nav-item';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: {
    id: string;
    label: string;
    href: string;
  }[];
}

export function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  const menuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  //remover o scroll da página quando o menu for aberto
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 w-full h-full justify-center items-center bg-gray-900 z-50',
        isOpen ? 'flex' : 'hidden'
      )}
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      <button onClick={onClose} className="fixed top-3 left-4 p-1">
        <MdClose size={24} />
      </button>

      <div className="flex flex-col gap-8 items-center">
        {menuItems.map((item, i) => (
          <NavItem {...item} key={i} onClick={onClose} />
        ))}
      </div>
    </motion.div>
  );
}
