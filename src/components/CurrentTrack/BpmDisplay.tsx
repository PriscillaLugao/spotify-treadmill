import React from 'react';

interface BpmDisplayProps {
  bpm: number;
}

export function BpmDisplay({ bpm }: BpmDisplayProps) {
  return (
    <div className="text-right">
      <div className="text-3xl font-bold text-purple-600">{bpm}</div>
      <div className="text-sm text-gray-500">BPM</div>
    </div>
  );
}