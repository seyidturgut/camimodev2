import React from 'react';
import { prayerTimes } from '../data/prayerTimes';
import { WeatherDisplay } from './WeatherDisplay';

export function PrayerTimes() {
  return (
    <div className="flex flex-col items-center">
      {/* Vakitler Grid */}
      <div className="grid grid-cols-3 gap-6 lg:gap-8 xl:gap-12 w-full">
        {/* Üst sıra: Sabah - Öğle - İkindi */}
        <TimeCard prayer={prayerTimes[0]} /> {/* Sabah */}
        <TimeCard prayer={prayerTimes[1]} /> {/* Öğle */}
        <TimeCard prayer={prayerTimes[2]} /> {/* İkindi */}

        {/* Alt sıra: Akşam - Yatsı - Hava Durumu */}
        <TimeCard prayer={prayerTimes[3]} /> {/* Akşam */}
        <TimeCard prayer={prayerTimes[4]} /> {/* Yatsı */}
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 lg:p-6 xl:p-8 text-center transition-all duration-300 hover:bg-black/60 flex items-center justify-center">
          <div className="scale-125 lg:scale-150">
            <WeatherDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}

// Vakit kartı bileşeni
const TimeCard = ({ prayer }: { prayer: any }) => (
  <div className={`relative bg-black/40 backdrop-blur-md rounded-3xl p-4 lg:p-6 xl:p-8 text-center transition-all duration-300 group
    ${prayer.isCurrent ? 'ring-2 ring-amber-500 bg-neutral-900/80 scale-[1.02]' : 'hover:bg-black/60'}`}>
    {prayer.isCurrent && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
        Aktif Vakit
      </div>
    )}
    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white/90 mb-3 lg:mb-4 xl:mb-6 tracking-wide">
      {prayer.name}
    </div>
    <div className={`text-4xl lg:text-6xl xl:text-7xl font-bold tracking-wider transition-colors duration-300
      ${prayer.isCurrent ? 'text-amber-500' : 'text-white group-hover:text-amber-500/90'}`}>
      {prayer.time}
    </div>
    {prayer.jamaahTime && (
      <div className="text-lg text-neutral-400 mt-2 tracking-wide">
        Cemaat: {prayer.jamaahTime}
      </div>
    )}
    {prayer.description && (
      <div className="text-lg text-neutral-400 mt-2 tracking-wide">
        {prayer.description}
      </div>
    )}
  </div>
);