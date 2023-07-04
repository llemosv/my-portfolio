'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

type SectionTitleProps = {
  subtitle: string;
  title: string;
  className?: string;
  icon?: ReactElement;
};

export const SectionTitle = ({
  subtitle,
  title,
  className,
  icon: Icon,
}: SectionTitleProps) => {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className={cn('flex flex-col gap-3 max-w-full', className)}>
      <motion.span
        className="font-mono text-sm text-blue-400"
        {...animProps}
        transition={{ duration: 0.5 }}
      >{`.${subtitle}`}</motion.span>
      <motion.h3
        className="text-3xl flex gap-3 items-center font-medium"
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {Icon && Icon}
        {title}
      </motion.h3>
    </div>
  );
};
