import React from 'react';

interface TrackInfoProps {
  title: string;
  artist: string;
  albumArt: string;
}

export function TrackInfo({ title, artist, albumArt }: TrackInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={albumArt}
        alt={`${title} by ${artist}`}
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{artist}</p>
      </div>
    </div>
  );
}