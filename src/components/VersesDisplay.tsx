import React from 'react';

export function VersesDisplay() {
  // Örnek ayet ve hadisler
  const verses = {
    ayet: {
      text: "Namazı dosdoğru kılın, zekâtı verin. Rükû edenlerle birlikte siz de rükû edin.",
      source: "Bakara Suresi, 43. Ayet"
    },
    hadis: {
      text: "Namaz dinin direğidir. Kim onu ayakta tutarsa dini ayakta tutmuş olur. Kim de onu yıkarsa dini yıkmış olur.",
      source: "Beyhaki"
    }
  };

  return (
    <div className="w-full bg-black/40 backdrop-blur-md p-4 lg:p-8 rounded-3xl mt-8 lg:mt-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
        {/* Ayet */}
        <div className="flex-1 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-orange-400 mb-2 lg:mb-4">Vaktin Ayeti</h2>
          <p className="text-xl lg:text-2xl text-white mb-2">{verses.ayet.text}</p>
          <p className="text-lg lg:text-xl text-orange-400/80">{verses.ayet.source}</p>
        </div>

        {/* Ayırıcı çizgi - Sadece büyük ekranlarda görünür */}
        <div className="hidden lg:block w-px bg-orange-400/20"></div>

        {/* Hadis */}
        <div className="flex-1 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-orange-400 mb-2 lg:mb-4">Vaktin Hadisi</h2>
          <p className="text-xl lg:text-2xl text-white mb-2">{verses.hadis.text}</p>
          <p className="text-lg lg:text-xl text-orange-400/80">{verses.hadis.source}</p>
        </div>
      </div>
    </div>
  );
}
