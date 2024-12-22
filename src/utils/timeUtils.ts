import { PrayerTime } from '../types';

export function getDayPeriod(): 'dawn' | 'day' | 'dusk' | 'night' {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 7) return 'dawn';
  if (hour >= 7 && hour < 17) return 'day';
  if (hour >= 17 && hour < 19) return 'dusk';
  return 'night';
}

export function getBackgroundClass(period: string): string {
  const backgrounds = {
    dawn: 'from-indigo-950 via-purple-900 to-pink-900',
    day: 'from-blue-950 via-slate-900 to-slate-950',
    dusk: 'from-orange-950 via-red-900 to-slate-950',
    night: 'from-slate-950 via-slate-900 to-black'
  };
  return backgrounds[period] || backgrounds.day;
}