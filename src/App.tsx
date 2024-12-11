import React from 'react';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <p className="text-gray-600">Connect with Spotify to start syncing your running pace with your music.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;