import React, { useEffect, useState } from 'react';
import { prayerTimes } from '../data/prayerTimes';
import { WeatherDisplay } from './WeatherDisplay';
import { RamadanDisplay } from './RamadanDisplay';

export function PrayerTimes() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [descriptions, setDescriptions] = useState<{ [key: number]: number }>(
    Object.fromEntries(prayerTimes.map((_, index) => [index, 0]))
  );

  // Hava durumu/İftar kartı için flip animasyonu
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setShowContent(false);
      setTimeout(() => {
        setIsFlipped(prev => !prev);
        setTimeout(() => {
          setShowContent(true);
        }, 800);
      }, 150);
    }, 20000); // 20 saniye

    return () => clearInterval(flipInterval);
  }, []);

  // Ayet-Hadis değişimi için
  useEffect(() => {
    const MINUTES = 3;
    const descInterval = setInterval(() => {
      setDescriptions(prev => {
        const newDesc = { ...prev };
        prayerTimes.forEach((prayer, index) => {
          if (prayer.descriptions?.length > 1) {
            newDesc[index] = (prev[index] + 1) % prayer.descriptions.length;
          }
        });
        return newDesc;
      });
    }, MINUTES * 60 * 1000); // 3 dakika = 3 * 60 * 1000 milisaniye

    return () => clearInterval(descInterval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Vakitler Grid */}
      <div className="grid grid-cols-3 gap-6 lg:gap-8 xl:gap-12 w-full">
        {/* Üst sıra: Sabah - Öğle - İkindi */}
        <TimeCard prayer={{ ...prayerTimes[0], description: prayerTimes[0].descriptions?.[descriptions[0]] }} /> {/* Sabah */}
        <TimeCard prayer={{ ...prayerTimes[1], description: prayerTimes[1].descriptions?.[descriptions[1]] }} /> {/* Öğle */}
        <TimeCard prayer={{ ...prayerTimes[2], description: prayerTimes[2].descriptions?.[descriptions[2]] }} /> {/* İkindi */}

        {/* Alt sıra: Akşam - Yatsı - Hava Durumu */}
        <TimeCard prayer={{ ...prayerTimes[3], description: prayerTimes[3].descriptions?.[descriptions[3]] }} /> {/* Akşam */}
        <TimeCard prayer={{ ...prayerTimes[4], description: prayerTimes[4].descriptions?.[descriptions[4]] }} /> {/* Yatsı */}
        <div className={`bg-black/40 backdrop-blur-md rounded-3xl p-4 lg:p-6 xl:p-8 text-center transition-all duration-1000 transform-style-3d perspective-1000 ${isFlipped ? 'rotate-x-180' : ''}`}>
          <div className="relative w-full h-full">
            <div className={`absolute inset-0 w-full h-full transition-opacity duration-150 backface-hidden ${!showContent ? 'opacity-0' : 'opacity-100'}`}>
              {!isFlipped ? <WeatherDisplay /> : <RamadanDisplay />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Vakit kartı bileşeni
const TimeCard = ({ prayer }: { prayer: any }) => (
  <div className={`relative bg-black/40 backdrop-blur-md rounded-3xl p-4 lg:p-6 xl:p-8 text-center transition-all duration-600 group
    ${prayer.isCurrent ? 'ring-2 ring-amber-500 bg-neutral-900/80 scale-[1.02]' : 'hover:bg-black/60'}`}>
    {prayer.isCurrent && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
        Aktif Vakit
      </div>
    )}
    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white/90 mb-3 lg:mb-4 xl:mb-6 tracking-wide">
      {prayer.name}
    </div>
    <div className={`text-4xl lg:text-6xl xl:text-7xl font-bold tracking-wider transition-colors duration-600
      ${prayer.isCurrent ? 'text-amber-500' : 'text-white group-hover:text-amber-500/90'}`}>
      {prayer.time}
    </div>
    {prayer.jamaahTime && (
      <div className="text-2xl lg:text-3xl xl:text-4xl text-amber-500/70 mt-4 tracking-wide font-medium">
        Cemaat: {prayer.jamaahTime}
      </div>
    )}
    {prayer.description && (
      <div className="text-lg text-neutral-400 mt-2 tracking-wide animate-fade-fast">
        {prayer.description}
      </div>
    )}
  </div>
);