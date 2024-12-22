import React, { useState, useEffect } from 'react';
import { formatDate, formatTime } from '../utils/dateFormatter';

export function Clock() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      setDate(formatDate(now));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-right">
      <div className="text-5xl font-mono font-bold">
        {formatTime(time)}
      </div>
      <div className="text-xl text-slate-300 mt-1">
        {date}
      </div>
    </div>
  );
}