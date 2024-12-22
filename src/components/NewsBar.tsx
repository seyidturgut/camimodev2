import React from 'react';
import { Megaphone } from 'lucide-react';
import { announcement } from '../data/announcements';

export function NewsBar() {
  return (
    <div className="bg-gradient-to-r from-black via-black/95 to-black border-t border-white/10">
      <div className="flex items-center h-24">
        <div className="bg-red-600 h-full flex items-center px-10">
          <Megaphone className="w-8 h-8 text-white" />
          <span className="ml-4 font-bold text-white text-2xl tracking-wide">DUYURU</span>
        </div>
        <div className="flex-1 overflow-hidden whitespace-nowrap">
          <div className="animate-scrolling-text text-5xl font-medium text-white/90 py-6 px-12 tracking-wide">
            {announcement}
          </div>
        </div>
      </div>
    </div>
  );
}