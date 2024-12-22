import React from 'react';
import { Home } from 'lucide-react'; 
import { WeatherDisplay } from './WeatherDisplay';

export function Header() {
  return (
    <div className="bg-black/30 backdrop-blur-md border-b border-white/10 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-orange-500/20 p-3 rounded-xl">
            <Home className="w-8 h-8 text-orange-400" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Yeni Cuma
          </h1>
        </div>

        <div className="flex items-center gap-12">
          <div className="text-right">
            <div className="text-3xl font-bold text-white/90">22 Aralık 2024</div>
            <div className="text-xl text-orange-400/80">21 Cemazi-el Ahir 1446</div>
          </div>
          <div className="text-5xl font-mono font-bold bg-black/20 px-6 py-3 rounded-xl">
            13:33
          </div>
          <WeatherDisplay />
        </div>
      </div>
    </div>
  );
}