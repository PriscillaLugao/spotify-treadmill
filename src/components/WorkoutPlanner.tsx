import React from 'react';
import { Clock, Flame, Plus } from 'lucide-react';
import { Button } from './ui/Button';
import { Select } from './ui/Select';
import { useWorkoutPlanner } from '../hooks/useWorkoutPlanner';

const durationOptions = [
  { value: '30', label: '30 minutes' },
  { value: '45', label: '45 minutes' },
  { value: '60', label: '60 minutes' }
];

const intensityOptions = [
  { value: 'low', label: 'Low Intensity' },
  { value: 'medium', label: 'Medium Intensity' },
  { value: 'high', label: 'High Intensity' }
];

export function WorkoutPlanner() {
  const { duration, intensity, updateDuration, updateIntensity, generatePlaylist } = useWorkoutPlanner();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Create Workout Playlist</h2>
      <div className="space-y-4">
        <Select
          icon={<Clock className="w-5 h-5" />}
          options={durationOptions}
          value={duration.toString()}
          onChange={(e) => updateDuration(parseInt(e.target.value, 10))}
        />
        <Select
          icon={<Flame className="w-5 h-5" />}
          options={intensityOptions}
          value={intensity}
          onChange={(e) => updateIntensity(e.target.value as any)}
        />
        <Button 
          variant="primary" 
          className="w-full"
          onClick={generatePlaylist}
        >
          <Plus className="w-5 h-5" />
          <span>Generate Playlist</span>
        </Button>
      </div>
    </div>
  );
}