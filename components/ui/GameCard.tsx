'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  color: string;
  duration?: string;
}

export default function GameCard({ 
  title, 
  description, 
  icon, 
  href, 
  color,
  duration 
}: GameCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.025, y: -6, rotate: title.length % 2 ? -0.4 : 0.4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link 
        href={href}
        className="block h-full"
      >
        <div 
          className="group relative h-full overflow-hidden rounded-[1.75rem] border-2 border-[#172033] p-6 shadow-[5px_5px_0_#172033] transition-all md:p-7"
          style={{ backgroundColor: color }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="rounded-2xl border-2 border-[#172033] bg-white/90 p-3 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              {icon}
            </div>
            {duration && (
              <span className="rounded-full bg-[#172033] px-3 py-1.5 text-xs font-bold text-white">
                {duration}
              </span>
            )}
          </div>
          
          <h3 className="mb-2 text-2xl font-black tracking-tight text-[#172033]">
            {title}
          </h3>
          
          <p className="mb-5 text-sm leading-relaxed text-[#172033]/75">
            {description}
          </p>
          
          <div className="flex items-center gap-2 text-sm font-black text-[#172033]">
            Mulai main
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
