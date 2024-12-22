import { useState, useEffect } from 'react';
import { differenceInSeconds, parse, format } from 'date-fns';
import { prayerTimes } from '../data/prayerTimes';

interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
}

export const useNextPrayer = () => {
  const [nextPrayer, setNextPrayer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentTime = format(now, 'HH:mm');
      
      // Find next prayer time
      let nextPrayerTime = prayerTimes.find(prayer => currentTime < prayer.time);

      // If no next prayer found today, use first prayer of next day
      if (!nextPrayerTime) {
        nextPrayerTime = prayerTimes[0];
      }

      // Calculate time difference
      const prayerTime = parse(nextPrayerTime.time, 'HH:mm', now);
      if (currentTime > nextPrayerTime.time) {
        prayerTime.setDate(prayerTime.getDate() + 1);
      }

      const diffInSeconds = differenceInSeconds(prayerTime, now);
      
      setTimeRemaining({
        hours: Math.floor(diffInSeconds / 3600),
        minutes: Math.floor((diffInSeconds % 3600) / 60),
        seconds: diffInSeconds % 60
      });
      
      setNextPrayer(nextPrayerTime.name);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return { nextPrayer, timeRemaining };
};
