import React from 'react';
import { prayerTimes } from '../data/prayerTimes';

export function OldPrayerTimes() {
  return (
    <div className="fixed inset-0 w-screen h-screen aspect-video overflow-hidden flex flex-col">
      {/* En altta gradient arka plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-20" />

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-4 gap-8">
          {prayerTimes.map((prayer) => (
            <div 
              key={prayer.name}
              className="bg-black/40 backdrop-blur-md hover:bg-black/50 transition-all rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-medium text-orange-400">{prayer.name}</div>
                <div className="text-4xl font-mono font-bold text-white">{prayer.time}</div>
              </div>
              <div className="text-xl text-green-400">YAKLAŞIYOR</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
