import React from 'react';
import { Sun } from 'lucide-react';

export function WeatherDisplay() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center gap-6 lg:gap-8 scale-125 lg:scale-150">
        <Sun className="w-20 h-20 lg:w-24 lg:h-24 text-amber-500/90" />
        <div className="flex flex-col">
          <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wider">
            23°
          </div>
          <div className="text-xl lg:text-2xl text-neutral-300 font-medium tracking-wide text-center">
            Güneşli
          </div>
        </div>
      </div>
    </div>
  );
}