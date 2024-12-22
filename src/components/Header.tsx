import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { WeatherDisplay } from './WeatherDisplay';

export function Header() {
  return (
    <div className="bg-black/30 backdrop-blur-md border-b border-white/10 text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          {/* QR Code */}
          <div className="bg-white/90 p-1.5 rounded-lg">
            <QRCodeSVG 
              value="https://ezanvaktipro.com/dl" 
              size={100}
              level="H"
              includeMargin={false}
            />
          </div>
          
          {/* Cami Bilgileri */}
          <div className="space-y-0.5">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Yeni Cuma
            </h1>
            <div className="space-y-0.5">
              <div className="text-xl text-orange-400/90 font-medium">
                İmam: Ahmet Yılmaz
              </div>
              <div className="text-xl text-orange-400/80">
                Tel: 0533 456 7676
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-right">
            <div className="text-2xl font-bold text-white/90">22 Aralık 2024</div>
            <div className="text-lg text-orange-400/80">21 Cemazi-el Ahir 1446</div>
          </div>
          <div className="text-4xl font-mono font-bold bg-black/20 px-4 py-2 rounded-xl">
            13:33
          </div>
          <WeatherDisplay />
        </div>
      </div>
    </div>
  );
}