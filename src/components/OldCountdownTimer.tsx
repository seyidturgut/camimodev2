import React, { useState, useEffect } from 'react';
import { prayerTimes } from '../data/prayerTimes';
import { differenceInSeconds, parse, format } from 'date-fns';

export function OldCountdownTimer() {
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
    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-4xl font-medium text-white/90">{currentPrayer}</div>
          <div className="text-3xl text-green-400">YAKLAŞIYOR</div>
        </div>
        
        <div className="flex items-center gap-2">
          <TimeBox value={timeLeft.hours} />
          <div className="text-5xl font-bold text-orange-400">:</div>
          <TimeBox value={timeLeft.minutes} />
          <div className="text-5xl font-bold text-orange-400">:</div>
          <TimeBox value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
}

const TimeBox: React.FC<{ value: string }> = ({ value }) => (
  <div className="font-mono text-6xl font-bold text-orange-400 tracking-wider">
    {value}
  </div>
);
