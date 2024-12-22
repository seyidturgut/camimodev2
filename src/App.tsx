import React from 'react';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { PrayerTimes } from './components/PrayerTimes';
import { NewsBar } from './components/NewsBar';

export default function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen aspect-video overflow-hidden flex flex-col bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />
      <main className="flex-1 container mx-auto py-8 space-y-12 flex flex-col justify-center">
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