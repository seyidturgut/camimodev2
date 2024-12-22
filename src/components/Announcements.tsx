import React from 'react';
import { Megaphone } from 'lucide-react';

export function Announcements() {
  const announcement = "28 Aralık Cuma namazından sonra Mevlid-i Şerif okunacaktır. Tüm Cemaatimiz davetlidir";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 to-black border-t border-slate-800">
      <div className="flex items-center h-16">
        <div className="bg-red-600 h-full flex items-center px-6">
          <Megaphone className="w-6 h-6 text-white" />
          <span className="ml-2 font-bold text-white text-lg">DUYURU</span>
        </div>
        <div className="flex-1 overflow-hidden px-4">
          <div className="animate-scrolling-text whitespace-nowrap text-2xl font-medium text-white">
            {announcement}
          </div>
        </div>
      </div>
    </div>
  );
}