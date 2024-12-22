import React from 'react';

interface DesignSelectionProps {
  onSelect: (design: 'new' | 'old') => void;
}

export function DesignSelection({ onSelect }: DesignSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="bg-black/30 backdrop-blur-md rounded-3xl p-12 text-center">
        <h1 className="text-5xl font-bold text-orange-400 mb-12">Tasarım Seçiniz</h1>
        <div className="flex gap-8">
          <button 
            onClick={() => onSelect('old')}
            className="group relative bg-black/40 hover:bg-black/60 rounded-2xl p-8 transition-all transform hover:scale-105"
          >
            <div className="w-[400px] h-[250px] mb-6 rounded-xl overflow-hidden">
              <img 
                src="/design1-preview.png" 
                alt="Design 1 Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-medium text-orange-400 group-hover:text-orange-300">
              Design 1
            </span>
          </button>

          <button 
            onClick={() => onSelect('new')}
            className="group relative bg-black/40 hover:bg-black/60 rounded-2xl p-8 transition-all transform hover:scale-105"
          >
            <div className="w-[400px] h-[250px] mb-6 rounded-xl overflow-hidden">
              <img 
                src="/design2-preview.png" 
                alt="Design 2 Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-medium text-orange-400 group-hover:text-orange-300">
              Design 2
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
