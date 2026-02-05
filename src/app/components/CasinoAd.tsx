import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { ExternalLink, Sparkles } from 'lucide-react';

export const CasinoAd = () => {
  return (
    <div className="w-full max-w-sm bg-zinc-900 border-2 border-red-600 rounded-lg p-4 shadow-[0_0_20px_rgba(220,38,38,0.4)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold uppercase tracking-tighter z-10">
        REKLAMA (PŁATNE)
      </div>
      
      <div className="flex gap-4">
        <div className="shrink-0 w-24 h-24 rounded border border-zinc-700 overflow-hidden relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1734935641113-ac7a7bab1312"
            alt="Casino Ad"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent" />
        </div>
        
        <div className="flex flex-col justify-between py-1">
          <div>
            <h4 className="text-red-500 font-black text-lg italic leading-none mb-1">
              BET-KAC 777
            </h4>
            <p className="text-zinc-400 text-xs leading-tight">
              Postaw resztę z kaucji! <br/> 
              <span className="text-white font-bold">Bonus 0% przy rejestracji!</span>
            </p>
          </div>
          
          <button className="flex items-center gap-1 text-[10px] bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded uppercase transition-colors">
            ZAGRAJ TERAZ <ExternalLink size={10} />
          </button>
        </div>
      </div>

      <div className="mt-3 text-[8px] text-zinc-600 leading-none">
        * Kasyno online BET-KAC nie gwarantuje wygranej, ale gwarantuje darmową wodę z kranu. Hazard uzależnia bardziej niż cebularz.
      </div>
      
      <Sparkles className="absolute -bottom-2 -left-2 text-red-900/30 rotate-12 group-hover:scale-150 transition-transform" size={48} />
    </div>
  );
};
