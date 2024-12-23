import React from 'react';

export function RamadanDisplay() {
  return (
    <div className="flex flex-col items-center justify-center scale-y-[-1]">
      <div className="text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-wider mb-4">
        05:32
      </div>
      <div className="text-2xl lg:text-3xl xl:text-4xl text-amber-500/90 font-medium tracking-wide">
        İftara Kalan Süre
      </div>
    </div>
  );
}
