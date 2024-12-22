import React from 'react';
import type { PrayerTime } from '../types';

interface PrayerCardProps {
  prayer: PrayerTime;
}

export function PrayerCard({ prayer }: PrayerCardProps) {
  // Cemaat vakti hesaplama (20 dk sonrası)
  const [hours, minutes] = prayer.time.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes + 20);
  const jamaahTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

  return (
    <div
      className={`
        rounded-3xl p-6 relative group h-full
        ${prayer.isNext 
          ? 'bg-gradient-to-br from-orange-500/20 to-orange-900/30 ring-2 ring-orange-500/50' 
          : 'bg-white/5 hover:bg-white/10'
        }
        transition-all duration-300 backdrop-blur-sm
      `}
    >
      <div className="text-center relative z-10">
        <h3 className="text-5xl font-bold text-white/90 mb-4">{prayer.name}</h3>
        <div className="space-y-2">
          <div className={`text-6xl font-mono font-bold tracking-tight ${prayer.isNext ? 'text-orange-400' : 'text-white/80'}`}>
            {prayer.time}
          </div>
          <div className="text-3xl font-medium text-orange-400/80">
            Cemaat: {jamaahTime}
          </div>
        </div>
      </div>
      {prayer.isNext && (
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent rounded-3xl" />
      )}
    </div>
  );
}