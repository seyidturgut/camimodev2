import React from 'react';
import type { PrayerTime } from '../types';

interface PrayerCardProps {
  prayer: PrayerTime;
}

export function PrayerCard({ prayer }: PrayerCardProps) {
  return (
    <div
      className={`
        rounded-3xl p-6 relative group h-full
        ${prayer.isCurrent
          ? 'bg-gradient-to-br from-green-500/20 to-green-900/30 ring-2 ring-green-500/30 animate-soft-pulse'
          : 'bg-white/5 hover:bg-white/10'
        }
        transition-all duration-300 backdrop-blur-sm
      `}
    >
      <div className="text-center relative z-10">
        <h3 className={`text-5xl font-bold mb-4 ${prayer.isCurrent ? 'text-green-400/80' : 'text-white/90'}`}>
          {prayer.name}
        </h3>
        <div className="space-y-2">
          <div className={`text-6xl font-mono font-bold tracking-tight ${prayer.isCurrent ? 'text-green-400/80' : 'text-white/80'}`}>
            {prayer.time}
          </div>
          <div className="text-3xl font-medium text-orange-400/80">
            Cemaat: {prayer.jamaahTime}
          </div>
        </div>
      </div>
      {prayer.isCurrent && (
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent rounded-3xl" />
      )}
    </div>
  );
}