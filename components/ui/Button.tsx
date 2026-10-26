'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-bold rounded-full transition-all duration-200 active:scale-95 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-[#ff7a59] text-white hover:bg-[#ff9278] border-2 border-[#172033] shadow-[3px_3px_0_#172033] hover:shadow-[5px_5px_0_#172033] active:shadow-none',
    secondary: 'bg-[#9b8cff] text-white hover:bg-[#aaa0ff] border-2 border-[#172033] shadow-[3px_3px_0_#172033] hover:shadow-[5px_5px_0_#172033] active:shadow-none',
    outline: 'bg-white text-[#172033] hover:bg-[#5dd9d0]/25 border-2 border-[#172033] shadow-[3px_3px_0_#172033] hover:shadow-[5px_5px_0_#172033] active:shadow-none',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
