'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className={`relative overflow-hidden bg-white rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
