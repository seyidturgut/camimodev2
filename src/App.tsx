import React from 'react';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { PrayerTimes } from './components/PrayerTimes';
import { NewsBar } from './components/NewsBar';
import { getDayPeriod, getBackgroundClass } from './utils/timeUtils';

export default function App() {
  const period = getDayPeriod();
  const bgClass = getBackgroundClass(period);

  return (
    <div className="fixed inset-0 aspect-video bg-gradient-to-b from-black to-gray-900 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 container mx-auto py-6 space-y-8 flex flex-col justify-center">
        <div className="bg-black/30 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
          <CountdownTimer />
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
          <PrayerTimes />
        </div>
      </main>
      <NewsBar />
    </div>
  );
}