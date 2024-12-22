import React from 'react';
import { Cloud, Sun } from 'lucide-react';

export function WeatherDisplay() {
  return (
    <div className="flex items-center gap-2 text-white">
      <span className="text-2xl font-bold">28°</span>
      <Sun className="w-6 h-6 text-yellow-400" />
      <Cloud className="w-6 h-6 text-slate-400" />
      <span className="text-slate-300">Güneşli</span>
    </div>
  );
}