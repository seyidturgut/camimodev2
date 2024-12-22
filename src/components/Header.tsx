import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CountdownTimer } from './CountdownTimer';

export function Header() {
  return (
    <header className="bg-black/40 backdrop-blur-md p-2 lg:p-4">
      <div className="container mx-auto flex items-center">
        {/* Sol Kısım */}
        <div className="flex-1 flex items-center gap-2 lg:gap-4">
          {/* QR Code */}
          <div className="bg-white/90 p-1 lg:p-1.5 rounded-lg hidden sm:block">
            <QRCodeSVG 
              value="https://ezanvaktipro.com/dl" 
              size={80}
              level="H"
              includeMargin={false}
            />
          </div>
          
          {/* Cami Bilgileri */}
          <div className="space-y-0.5">
            <h1 className="text-xl lg:text-3xl font-display font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Yeni Cuma
            </h1>
            <div className="space-y-0.5">
              <div className="text-sm lg:text-xl font-medium text-orange-400/90">
                İmam: Ahmet Yılmaz
              </div>
              <div className="text-sm lg:text-xl text-orange-400/80">
                Tel: 0533 456 7676
              </div>
            </div>
          </div>
        </div>

        {/* Orta - Kalan Süre */}
        <div className="flex-1 flex justify-center">
          <CountdownTimer />
        </div>

        {/* Sağ Kısım */}
        <div className="flex-1 flex items-center justify-end gap-4 lg:gap-8">
          <div className="text-2xl lg:text-4xl font-display font-bold bg-black/20 px-2 lg:px-4 py-1 lg:py-2 rounded-xl text-orange-400">
            {new Date().toLocaleTimeString('tr-TR', { 
              hour: '2-digit', 
              minute: '2-digit'
            })}
          </div>
          <div className="text-right">
            <div className="text-lg lg:text-2xl font-display font-bold text-white/90">
              {new Date().toLocaleDateString('tr-TR', { 
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </div>
            <div className="text-sm lg:text-lg text-orange-400/80">21 Cemazi-el Ahir 1446</div>
          </div>
        </div>
      </div>
    </header>
  );
}