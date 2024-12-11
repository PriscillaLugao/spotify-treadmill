import React from 'react';
import { TrackInfo } from './TrackInfo';
import { PlaybackControls } from './PlaybackControls';
import { BpmDisplay } from './BpmDisplay';

export function CurrentTrack() {
  // This would normally come from a hook or context
  const trackData = {
    title: "Running Up That Hill",
    artist: "Kate Bush",
    albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    bpm: 128
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between">
        <div className="flex-1">
          <TrackInfo
            title={trackData.title}
            artist={trackData.artist}
            albumArt={trackData.albumArt}
          />
          <div className="mt-4">
            <PlaybackControls />
          </div>
        </div>
        <BpmDisplay bpm={trackData.bpm} />
      </div>
    </div>
  );
}