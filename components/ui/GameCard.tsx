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
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link 
        href={href}
        className="block"
      >
        <div 
          className="p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all h-full"
          style={{ backgroundColor: color }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white/90 rounded-xl border-2 border-black">
              {icon}
            </div>
            {duration && (
              <span className="text-xs font-medium bg-black text-white px-2 py-1 rounded-full">
                {duration}
              </span>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-black">
            {title}
          </h3>
          
          <p className="text-sm text-black/80 mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center gap-2 text-sm font-bold text-black">
            Mulai main
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
