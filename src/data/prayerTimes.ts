import type { PrayerTime } from '../types';

export const rawPrayerTimes = [
  { name: 'Sabah', time: '06:38' },
  { name: 'Öğle', time: '13:05' },
  { name: 'İkindi', time: '15:26' },
  { name: 'Akşam', time: '17:47' },
  { name: 'Yatsı', time: '19:12' }
];

// Saat formatını karşılaştırmak için dakikaya çevirme
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

// Şu anki zamanı dakika olarak alma
function getCurrentMinutes(): number {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

// Cemaat vaktini hesaplama (20 dk sonrası)
function calculateJamaahTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes + 20;
  const jamaahHours = Math.floor(totalMinutes / 60);
  const jamaahMinutes = totalMinutes % 60;
  return `${String(jamaahHours).padStart(2, '0')}:${String(jamaahMinutes).padStart(2, '0')}`;
}

// Namaz vakitlerini hazırlama
export const prayerTimes: PrayerTime[] = rawPrayerTimes.map((prayer, index) => {
  const currentMinutes = getCurrentMinutes();
  const prayerMinutes = timeToMinutes(prayer.time);
  
  // Mevcut vakti belirleme
  const isCurrent = currentMinutes >= prayerMinutes && 
    (index === rawPrayerTimes.length - 1 ? 
      currentMinutes < timeToMinutes('23:59') : 
      currentMinutes < timeToMinutes(rawPrayerTimes[index + 1].time));

  return {
    ...prayer,
    jamaahTime: calculateJamaahTime(prayer.time),
    isCurrent
  };
});