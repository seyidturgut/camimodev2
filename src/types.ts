export interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
}

export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
}