import React from 'react';
import { Gauge } from 'lucide-react';
import { calculateRecommendedPace, getPaceRange } from '../utils/bpmCalculator';

interface SpeedRecommendationProps {
  bpm?: number;
}

export function SpeedRecommendation({ bpm = 128 }: SpeedRecommendationProps) {
  const recommendedPace = calculateRecommendedPace(bpm);
  const { easy, current, hard } = getPaceRange(recommendedPace);

  const formatPace = (pace: number) => {
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recommended Pace</h2>
        <Gauge className="w-6 h-6 text-purple-600" />
      </div>
      <div className="text-center">
        <div className="text-5xl font-bold text-purple-600">{formatPace(current)}</div>
        <div className="text-gray-500 mt-2">min/km</div>
      </div>
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
    </div>
  );
}