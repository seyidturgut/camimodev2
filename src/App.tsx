import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { PrayerTimes } from './components/PrayerTimes';
import { NewsBar } from './components/NewsBar';

export default function App() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case '0':
          setCurrentVideo(null);
          break;
        case '1':
          setIsVideoLoading(true);
          setCurrentVideo('https://ezanvaktipro.com/media/loop1.mp4');
          break;
        case '2':
          setIsVideoLoading(true);
          setCurrentVideo('https://ezanvaktipro.com/media/loop2.mp4');
          break;
        case '3':
          setIsVideoLoading(true);
          setCurrentVideo('https://ezanvaktipro.com/media/loop3.mp4');
          break;
        case '4':
          setIsVideoLoading(true);
          setCurrentVideo('https://ezanvaktipro.com/media/loop4.mp4');
          break;
        case '5':
          setIsVideoLoading(true);
          setCurrentVideo('https://ezanvaktipro.com/media/loop5.mp4');
          break;
        case '6':
          setIsVideoLoading(true);
          setCurrentVideo('https://ezanvaktipro.com/media/loop6.mp4');
          break;
        case '7':
          setIsVideoLoading(true);
          setCurrentVideo('https://ezanvaktipro.com/media/loop7.mp4');
          break;
        case '8':
          setIsVideoLoading(true);
          setCurrentVideo('https://ezanvaktipro.com/media/loop8.mp4');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen aspect-video overflow-hidden flex flex-col">
      {/* En altta gradient arka plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-20" />

      {/* Ortada video */}
      {currentVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${
            isVideoLoading ? 'opacity-0' : 'opacity-100'
          }`}
          key={currentVideo}
          onLoadedData={handleVideoLoaded}
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
      )}

      {/* En üstte içerik */}
      <div className="relative z-10 flex flex-col h-full">
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
    </div>
  );
}