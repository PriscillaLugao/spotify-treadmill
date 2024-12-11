import React from 'react';
import { Music2 } from 'lucide-react';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-white/10 rounded-lg">
            <Music2 className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold">RunSync</h1>
        </div>
        <Button variant="secondary">
          Connect Spotify
        </Button>
      </div>
    </header>
  );
}