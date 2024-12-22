import { PrayerTime } from '../types';
import { addMinutes, parse, format } from 'date-fns';

export function getDayPeriod(): 'morning' | 'afternoon' | 'evening' | 'night' {
  const hour = new Date().getHours();
  
  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 20) return 'evening';
  return 'night';
}

export function getBackgroundClass(period: string): string {
  switch (period) {
    case 'morning': return 'from-orange-400/20 to-yellow-600/30';
    case 'afternoon': return 'from-blue-400/20 to-blue-600/30';
    case 'evening': return 'from-orange-600/20 to-red-600/30';
    case 'night': return 'from-blue-900/20 to-indigo-900/30';
    default: return 'from-gray-800/20 to-gray-900/30';
  }
}

export function calculateJamaahTime(prayerTime: string, prayerName: string): string {
  // İmsak ve Güneş vakitleri için cemaat vakti yok
  if (prayerName === 'İmsak' || prayerName === 'Güneş') {
    return '-';
  }

  // Vakti parse et
  const timeDate = parse(prayerTime, 'HH:mm', new Date());
  
  // 20 dakika ekle
  const jamaahTime = addMinutes(timeDate, 20);
  
  // Formatla ve döndür
  return format(jamaahTime, 'HH:mm');
}