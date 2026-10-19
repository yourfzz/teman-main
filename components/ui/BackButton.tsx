'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  href?: string;
  label?: string;
}

export default function BackButton({ href = '/', label = 'Balik ke menu' }: BackButtonProps) {
  return (
    <Link 
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Link>
  );
}
