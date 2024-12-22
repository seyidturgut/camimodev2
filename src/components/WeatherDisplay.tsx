import React from 'react';
import { Cloud, Sun } from 'lucide-react';

export function WeatherDisplay() {
  return (
    <div className="flex flex-col items-center gap-1 text-white">
      <span className="text-2xl font-bold">28°</span>
      <span className="text-slate-300 text-sm">Güneşli</span>
      <div className="flex items-center gap-1">
        <Sun className="w-6 h-6 text-yellow-400" />
        <Cloud className="w-6 h-6 text-slate-400" />
      </div>
    </div>
  );
}