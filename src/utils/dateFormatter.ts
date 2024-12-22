import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export function formatDate(date: Date): string {
  const gregorianDate = format(date, 'dd MMMM yyyy, EEEE', { locale: tr });
  const hijriDate = getHijriDate(date);
  return `${gregorianDate} | ${hijriDate}`;
}

export function formatTime(date: Date): string {
  return format(date, 'HH:mm:ss');
}

function getHijriDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('tr-TR-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  return formatter.format(date);
}