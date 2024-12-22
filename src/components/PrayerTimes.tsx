import React from 'react';
import { prayerTimes } from '../data/prayerTimes';
import { WeatherDisplay } from './WeatherDisplay';

export function PrayerTimes() {
  return (
    <div className="flex flex-col items-center">
      {/* Vakitler Grid */}
      <div className="grid grid-cols-3 gap-4 lg:gap-8 xl:gap-16 w-full">
        {/* Üst sıra: Sabah - Öğle - İkindi */}
        <TimeCard prayer={prayerTimes[0]} /> {/* Sabah */}
        <TimeCard prayer={prayerTimes[1]} /> {/* Öğle */}
        <TimeCard prayer={prayerTimes[2]} /> {/* İkindi */}

        {/* Alt sıra: Akşam - Yatsı - Hava Durumu */}
        <TimeCard prayer={prayerTimes[3]} /> {/* Akşam */}
        <TimeCard prayer={prayerTimes[4]} /> {/* Yatsı */}
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 lg:p-6 xl:p-8 text-center transform hover:scale-105 transition-transform duration-200 flex items-center justify-center">
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
  <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 lg:p-6 xl:p-8 text-center transform hover:scale-105 transition-transform duration-200">
    <div className="text-3xl lg:text-4xl xl:text-6xl font-bold text-orange-400 mb-2 lg:mb-4 xl:mb-6">
      {prayer.name}
    </div>
    <div className="text-4xl lg:text-6xl xl:text-8xl font-bold text-white tracking-wider">
      {prayer.time}
    </div>
    {/* Açıklama (Kerahat vakti için) */}
    {prayer.description && (
      <div className="text-xl text-orange-400/80 mt-4">
        {prayer.description}
      </div>
    )}
  </div>
);