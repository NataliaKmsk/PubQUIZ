import React from 'react';
import { Beer } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 group cursor-pointer">
      <div className="relative w-16 h-32 md:w-20 md:h-40">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1620770439594-1fa2ac79c075"
          alt="MonoGuesser Logo"
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-transform group-hover:rotate-12"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-amber-900/80 text-amber-100 text-[10px] md:text-xs font-bold px-1 py-0.5 rounded rotate-[-15deg] border border-amber-500 uppercase tracking-tighter">
            MonoGuesser
          </span>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-black text-amber-500 tracking-tighter uppercase italic">
        MonoGuesser
      </h1>
      <p className="text-amber-200/60 text-[10px] uppercase tracking-widest -mt-2">
        Zgadniesz to padniesz
      </p>
    </div>
  );
};
