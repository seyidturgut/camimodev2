import React from 'react';
import { PrayerCard } from './PrayerCard';
import { prayerTimes } from '../data/prayerTimes';

export function PrayerTimes() {
  return (
    <div className="grid grid-cols-5 gap-16 px-16">
      {prayerTimes.map((prayer) => (
        <PrayerCard key={prayer.name} prayer={prayer} />
      ))}
    </div>
  );
}