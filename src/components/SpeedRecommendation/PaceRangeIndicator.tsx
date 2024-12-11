import React from 'react';
import { formatPace } from '../../utils/formatters';

interface PaceRangeIndicatorProps {
  easy: number;
  current: number;
  hard: number;
}

export function PaceRangeIndicator({ easy, current, hard }: PaceRangeIndicatorProps) {
  return (
    <div className="mt-6 bg-gray-100 rounded-lg p-4">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Easy: {formatPace(easy)}</span>
        <span>Current: {formatPace(current)}</span>
        <span>Hard: {formatPace(hard)}</span>
      </div>
      <div className="relative mt-2 h-2 bg-gray-200 rounded-full">
        <div className="absolute left-1/2 w-4 h-4 -mt-1 -ml-2 bg-purple-600 rounded-full"></div>
      </div>
    </div>
  );
}