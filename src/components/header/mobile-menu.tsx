import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

  //metodo para remover o scroll da página quando o menu for aberto
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
      className={`fixed top-0 left-0 w-full h-full ${
        isOpen ? 'flex' : 'hidden'
      } justify-center items-center bg-primary-100 dark:bg-dark-700 z-50`}
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      <button onClick={onClose} className="fixed top-3 left-4 p-1">
        <FaTimes size={24} />
      </button>

      <div className="flex flex-col gap-8 items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={onClose}
          className="text-zinc-900 dark:text-zinc-100 hover:text-primary-600 dark:hover:text-purple-300 transition duration-100 leading-6 font-medium cursor-pointer"
        >
          Inicio
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={onClose}
          className="text-zinc-900 dark:text-zinc-100 hover:text-primary-600 dark:hover:text-purple-300 transition duration-100 leading-6 font-medium cursor-pointer"
        >
          Sobre
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={onClose}
          className="text-zinc-900 dark:text-zinc-100 hover:text-primary-600 dark:hover:text-purple-300 transition duration-100 leading-6 font-medium cursor-pointer"
        >
          Projetos
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={onClose}
          className="text-zinc-900 dark:text-zinc-100 hover:text-primary-600 dark:hover:text-purple-300 transition duration-100 leading-6 font-medium cursor-pointer"
        >
          Contato
        </Link>
      </div>
    </motion.div>
  );
}
