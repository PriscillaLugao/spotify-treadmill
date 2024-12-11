import React from 'react';
import { Gauge } from 'lucide-react';
import { calculateRecommendedPace, getPaceRange } from '../../utils/bpmCalculator';
import { PaceDisplay } from './PaceDisplay';
import { PaceRangeIndicator } from './PaceRangeIndicator';

interface SpeedRecommendationProps {
  bpm?: number;
}

export function SpeedRecommendation({ bpm = 128 }: SpeedRecommendationProps) {
  const recommendedPace = calculateRecommendedPace(bpm);
  const paceRanges = getPaceRange(recommendedPace);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recommended Pace</h2>
        <Gauge className="w-6 h-6 text-purple-600" />
      </div>
      <PaceDisplay pace={paceRanges.current} />
      <PaceRangeIndicator {...paceRanges} />
    </div>
  );
}