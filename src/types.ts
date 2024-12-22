export interface PrayerTime {
  name: string;
  time: string;
  jamaahTime: string; // Cemaat vakti
  isNext: boolean;
}

export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
}