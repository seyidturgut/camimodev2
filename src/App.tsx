import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PrayerTimes } from './components/PrayerTimes';
import { NewsBar } from './components/NewsBar';
import { AdhanAlert } from './components/AdhanAlert';
import { VersesDisplay } from './components/VersesDisplay';
import { format } from 'date-fns';
import { prayerTimes } from './data/prayerTimes';

export default function App() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [showAdhanAlert, setShowAdhanAlert] = useState(false);
  const [currentPrayerName, setCurrentPrayerName] = useState<string>('');

  // Ezan vakti kontrolü
  useEffect(() => {
    const checkPrayerTime = () => {
      const now = new Date();
      const currentTime = format(now, 'HH:mm');
      
      const currentPrayer = prayerTimes.find(prayer => prayer.time === currentTime);
      
      if (currentPrayer) {
        setCurrentPrayerName(currentPrayer.name);
        setShowAdhanAlert(true);
      }
    };

    // Her dakika kontrol et
    const timer = setInterval(checkPrayerTime, 60000);
    checkPrayerTime(); // İlk kontrol

    return () => clearInterval(timer);
  }, []);

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
        case 'a':
        case 'A':
          // Test için ezan vakti uyarısını göster
          setCurrentPrayerName('Akşam');
          setShowAdhanAlert(true);
          break;
        case 'k':
        case 'K':
          // Ezan vakti uyarısını kapat
          setShowAdhanAlert(false);
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
    <div className="fixed inset-0 w-screen h-screen aspect-video overflow-hidden flex flex-col dark bg-black">
      {/* En altta gradient arka plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black -z-20" />

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

      {/* Ezan Vakti Uyarısı */}
      {showAdhanAlert && (
        <AdhanAlert 
          onClose={() => setShowAdhanAlert(false)}
          prayerName={currentPrayerName}
        />
      )}

      {/* En üstte içerik */}
      <div className="relative z-10 flex flex-col h-full">
        <Header />
        <main className="flex-1 container mx-auto p-8">
          {/* Ana alan - Namaz vakitleri */}
          <div>
            <PrayerTimes />
            <VersesDisplay />
          </div>
        </main>
        <NewsBar />
      </div>
    </div>
  );
}