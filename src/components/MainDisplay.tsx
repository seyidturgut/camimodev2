import React from 'react';
import { PrayerTimes } from './PrayerTimes';
import { Announcements } from './Announcements';

export function MainDisplay() {
  return (
    <div className="relative h-full">
      <div className="p-6 pb-24">
        <PrayerTimes />
      </div>
      <Announcements />
    </div>
  );
}