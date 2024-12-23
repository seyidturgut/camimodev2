import React, { useState, useEffect } from 'react';

export function VersesDisplay() {
  // Örnek ayet ve hadisler
  const verses = {
    ayet: [
      {
        text: "Namazı dosdoğru kılın, zekâtı verin. Rükû edenlerle birlikte siz de rükû edin.",
        source: "Bakara Suresi, 43. Ayet"
      },
      {
        text: "Şüphesiz ben Allah'ım. Benden başka ilah yoktur. Bana kulluk et ve beni anmak için namaz kıl.",
        source: "Taha Suresi, 14. Ayet"
      }
    ],
    hadis: [
      {
        text: "Namaz dinin direğidir. Kim onu ayakta tutarsa dini ayakta tutmuş olur. Kim de onu yıkarsa dini yıkmış olur.",
        source: "Beyhaki"
      },
      {
        text: "Cennetin anahtarı namazdır.",
        source: "Ahmed bin Hanbel"
      }
    ]
  };

  const [showAyet, setShowAyet] = useState(true);
  const [currentAyetIndex, setCurrentAyetIndex] = useState(0);
  const [currentHadisIndex, setCurrentHadisIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setShowAyet(prev => !prev);
        if (showAyet) {
          setCurrentHadisIndex(prev => (prev + 1) % verses.hadis.length);
        } else {
          setCurrentAyetIndex(prev => (prev + 1) % verses.ayet.length);
        }
        setIsAnimating(false);
      }, 500); // Flip animasyonunun yarısında içeriği değiştir
    }, 5000);

    return () => clearInterval(timer);
  }, [showAyet, verses.ayet.length, verses.hadis.length]);

  const currentVerse = showAyet 
    ? verses.ayet[currentAyetIndex]
    : verses.hadis[currentHadisIndex];

  return (
    <div className="w-full h-[25vh] bg-black/40 backdrop-blur-md p-6 lg:p-8 rounded-3xl mt-6 overflow-hidden">
      <div 
        className={`
          h-full flex flex-col justify-center
          transform transition-all duration-1000 ease-in-out
          ${isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
        `}
      >
        <div className="text-left max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-500 mb-4 tracking-wide">
            {showAyet ? "Vaktin Ayeti" : "Vaktin Hadisi"}
          </h2>
          <p className="text-2xl lg:text-3xl text-white/90 mb-3 leading-relaxed tracking-wide">
            {currentVerse.text}
          </p>
          <p className="text-lg lg:text-xl text-neutral-400 tracking-wide">
            {currentVerse.source}
          </p>
        </div>
      </div>
    </div>
  );
}
