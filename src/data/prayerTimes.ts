import type { PrayerTime } from '../types';

const rawPrayerTimes = [
  { name: 'Sabah', time: '05:23' },
  { name: 'Öğle', time: '13:15' },
  { name: 'İkindi', time: '16:42' },
  { name: 'Akşam', time: '19:32' },
  { name: 'Yatsı', time: '20:52' }
];

export const prayerTimes: PrayerTime[] = rawPrayerTimes.map(prayer => ({
  ...prayer,
  isNext: false
}));