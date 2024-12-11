import React from 'react';
import { Play, SkipForward, Volume2 } from 'lucide-react';
import { Button } from './ui/Button';

export function CurrentTrack() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
      <img
        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
        alt="Album art"
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">Running Up That Hill</h3>
        <p className="text-gray-600">Kate Bush</p>
        <div className="flex items-center space-x-4 mt-4">
          <Button variant="ghost">
            <Play className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <SkipForward className="w-6 h-6" />
          </Button>
          <div className="flex items-center space-x-2">
            <Volume2 className="w-5 h-5 text-gray-500" />
            <div className="w-24 h-1 bg-gray-200 rounded-full">
              <div className="w-3/4 h-full bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-purple-600">128</div>
        <div className="text-sm text-gray-500">BPM</div>
      </div>
    </div>
  );
}