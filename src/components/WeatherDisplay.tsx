import React from 'react';
import { Sun } from 'lucide-react';

export function WeatherDisplay() {
  return (
    <div className="flex flex-col items-center text-white">
      <Sun className="w-20 h-20 text-orange-400" />
      <div className="text-5xl font-bold mt-2">23°</div>
    </div>
  );
}