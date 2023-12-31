'use client';

import { TbArrowNarrowUp } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

export function ButtonGoToTop() {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button
            onClick={scrollToTop}
            className="shadow-md bg-blue-600 hover:bg-blue-500 p-2 rounded-full shadow-blue-400/20 transition-all"
          >
            <TbArrowNarrowUp size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
