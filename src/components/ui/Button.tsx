import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center space-x-2 rounded-lg transition-colors";
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white py-3 px-4",
    secondary: "bg-white/10 hover:bg-white/20 text-white px-4 py-2",
    ghost: "p-2 hover:bg-gray-100 rounded-full"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}