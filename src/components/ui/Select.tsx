import React from 'react';
import { cn } from '../../utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
  options: { value: string; label: string; }[];
}

export function Select({ 
  icon, 
  options, 
  className, 
  ...props 
}: SelectProps) {
  return (
    <div className="flex items-center space-x-4">
      {icon && <div className="text-gray-500">{icon}</div>}
      <select 
        className={cn("flex-1 p-2 border rounded-lg", className)}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}