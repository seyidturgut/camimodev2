import React, { useEffect, useState } from 'react';
import { prayerTimes } from '../data/prayerTimes';
import { format } from 'date-fns';

interface AdhanAlertProps {
  onClose: () => void;
  prayerName?: string;
}

export function AdhanAlert({ onClose, prayerName }: AdhanAlertProps) {
  const [countdown, setCountdown] = useState(5); // 40 saniyeden 5 saniyeye düşürüldü

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-50 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-black/30 backdrop-blur-md rounded-3xl p-12">
          {/* Vakit Başlığı */}
          <div className="text-center mb-12">
            <div className="text-[8rem] font-medium text-orange-400 animate-pulse-text leading-none mb-4">
              Şimdi
            </div>
            <div className="text-[10rem] font-medium text-orange-400 animate-pulse-text leading-none">
              {prayerName} VAKTİ
            </div>
          </div>

          {/* Ezan Duası - Arapça */}
          <div className="text-6xl font-bold text-white/90 font-arabic leading-relaxed text-center mb-8">
            اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ آتِ مُحَمَّدَاً الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامَاً مَحْمُودَاً الَّذِي وَعَدْتَهُ
          </div>

          {/* Ezan Duası - Türkçe */}
          <div className="text-4xl text-white/80 leading-relaxed text-center mb-8">
            "Allah'ım! Ey bu eksiksiz davetin ve kılınacak namazın Rabbi! Muhammed'e vesileyi ve fazileti ver. Onu, kendisine vaat ettiğin makam-ı mahmuda ulaştır."
          </div>

          {/* Geri Sayım */}
          <div className="text-2xl text-orange-400/60 text-center">
            {countdown} saniye sonra kapanacak
          </div>
        </div>
      </div>
    </div>
  );
}
