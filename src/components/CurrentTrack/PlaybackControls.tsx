import React from 'react';
import { Play, SkipForward, Volume2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function PlaybackControls() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="ghost">
        <Play className="w-6 h-6" />
      </Button>
      <Button variant="ghost">
        <SkipForward className="w-6 h-6" />
      </Button>
      <VolumeControl />
    </div>
  );
}

function VolumeControl() {
  return (
    <div className="flex items-center space-x-2">
      <Volume2 className="w-5 h-5 text-gray-500" />
      <div className="w-24 h-1 bg-gray-200 rounded-full">
        <div className="w-3/4 h-full bg-purple-600 rounded-full"></div>
      </div>
    </div>
  );
}