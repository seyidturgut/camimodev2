import React, { useState, useEffect } from 'react';
import { prayerTimes } from '../data/prayerTimes';
import { differenceInSeconds, parse, format } from 'date-fns';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });
  const [currentPrayer, setCurrentPrayer] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentTime = format(now, 'HH:mm');
      
      // Find next prayer time
      let nextPrayer = prayerTimes.find(prayer => {
        const prayerTime = parse(prayer.time, 'HH:mm', new Date());
        return currentTime < prayer.time;
      });

      // If no next prayer found today, use first prayer of next day
      if (!nextPrayer) {
        nextPrayer = prayerTimes[0];
      }

      // Calculate time difference
      const prayerTime = parse(nextPrayer.time, 'HH:mm', now);
      if (currentTime > nextPrayer.time) {
        prayerTime.setDate(prayerTime.getDate() + 1);
      }

      const diffInSeconds = differenceInSeconds(prayerTime, now);
      const hours = Math.floor(diffInSeconds / 3600);
      const minutes = Math.floor((diffInSeconds % 3600) / 60);
      const seconds = diffInSeconds % 60;

      setTimeLeft({
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
      setCurrentPrayer(nextPrayer.name);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-8">
      <div className="space-y-8">
        <h2 className="text-6xl text-white/80 font-medium">
          <span className="text-orange-400">{currentPrayer}</span> Vaktine
        </h2>
        <div className="flex items-end justify-center gap-4">
          <div className="text-center">
            <div className="text-[12rem] font-mono font-bold text-white tracking-wider leading-none">
              {timeLeft.hours}
            </div>
            <div className="text-2xl text-white/60 font-medium mt-2">Saat</div>
          </div>
          <div className="text-[8rem] font-bold text-white/40 mb-8">:</div>
          <div className="text-center">
            <div className="text-[12rem] font-mono font-bold text-white tracking-wider leading-none">
              {timeLeft.minutes}
            </div>
            <div className="text-2xl text-white/60 font-medium mt-2">Dakika</div>
          </div>
          <div className="text-[8rem] font-bold text-white/40 mb-8">:</div>
          <div className="text-center">
            <div className="text-[12rem] font-mono font-bold text-white tracking-wider leading-none">
              {timeLeft.seconds}
            </div>
            <div className="text-2xl text-white/60 font-medium mt-2">Saniye</div>
          </div>
        </div>
      </div>
    </div>
  );
}