import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { PrayerTimes } from './components/PrayerTimes';
import { NewsBar } from './components/NewsBar';

export default function App() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case '0':
          setCurrentVideo(null);
          break;
        case '1':
          setCurrentVideo('loop1.mp4');
          break;
        case '2':
          setCurrentVideo('loop2.mp4');
          break;
        case '3':
          setCurrentVideo('loop3.mp4');
          break;
        case '4':
          setCurrentVideo('loop4.mp4');
          break;
        case '5':
          setCurrentVideo('loop5.mp4');
          break;
        case '6':
          setCurrentVideo('loop6.mp4');
          break;
        case '7':
          setCurrentVideo('loop7.mp4');
          break;
        case '8':
          setCurrentVideo('loop8.mp4');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen aspect-video overflow-hidden flex flex-col">
      {/* Arka plan videosu */}
      {currentVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          key={currentVideo}
        >
          <source src={`media/${currentVideo}`} type="video/mp4" />
        </video>
      ) : (
        // Video yoksa gradient arka plan
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-10" />
      )}

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