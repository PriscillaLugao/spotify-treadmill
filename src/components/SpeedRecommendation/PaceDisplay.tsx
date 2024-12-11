import React from 'react';
import { formatPace } from '../../utils/formatters';

interface PaceDisplayProps {
  pace: number;
}

export function PaceDisplay({ pace }: PaceDisplayProps) {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-purple-600">{formatPace(pace)}</div>
      <div className="text-gray-500 mt-2">min/km</div>
    </div>
  );
}