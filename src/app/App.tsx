import React from 'react';
import { Logo } from './components/Logo';
import { Quiz } from './components/Quiz';
import { Leaderboard } from './components/Leaderboard';
import { PromoSlider } from './components/PromoSlider';
import { CasinoAd } from './components/CasinoAd';
import { Toaster } from 'sonner';
import { Beer, UtensilsCrossed, Zap, Info } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-900">
      <Toaster position="top-center" expand={false} richColors />
      
      {/* Top Banner */}
      <PromoSlider />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center gap-12">
          {/* Header Section */}
          <header className="flex flex-col items-center text-center max-w-2xl">
            <Logo />
            <p className="mt-8 text-zinc-400 text-sm md:text-base leading-relaxed">
              Witaj w najbardziej prestiżowym symulatorze lokalnego znawcy monopolowych! 
              Zasady są proste: patrzysz na zdjęcie, przypominasz sobie w którym mieście budziłeś się pod takim sklepem 
              i zaznaczasz poprawną odpowiedź. <span className="text-amber-500 font-bold italic">Powodzenia, szefie!</span>
            </p>
          </header>

          <div className="w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
            {/* Left Sidebar - PC Only */}
            <aside className="hidden lg:flex flex-col gap-8 w-80 shrink-0 sticky top-12">
              <CasinoAd />
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h4 className="flex items-center gap-2 font-black uppercase italic text-amber-500 mb-4">
                  <Zap size={18} /> INFO DNIA
                </h4>
                <div className="space-y-4 text-xs text-zinc-400 leading-normal">
                  <p className="pb-4 border-b border-zinc-800/50">
                    <span className="text-zinc-100 font-bold block mb-1 underline">UWAGA!</span>
                    Sklep "U Grażyny" czasowo nie przyjmuje butelek po Harnasiu. Przepraszamy za utrudnienia.
                  </p>
                  <p>
                    <span className="text-zinc-100 font-bold block mb-1 underline">NOWOŚĆ!</span>
                    Wprowadzamy kategorię "Kebab na cienkim" już wkrótce!
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Game Content */}
            <div className="flex-1 flex flex-col items-center gap-12 w-full max-w-2xl">
              <Quiz />
              
              {/* Mobile Ad & Leaderboard */}
              <div className="flex lg:hidden flex-col gap-8 w-full">
                <CasinoAd />
                <Leaderboard />
              </div>

              {/* Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl flex items-start gap-3">
                  <div className="bg-amber-500/10 p-2 rounded-lg text-amber-500">
                    <Info size={18} />
                  </div>
                  <p className="text-[10px] text-zinc-500 uppercase leading-tight pt-1">
                    <span className="text-zinc-300 font-bold block mb-1">PRO TIP</span>
                    Jeśli widzisz dużo gołębi na zdjęciu, to prawdopodobnie Kraków albo rynek w Radomiu.
                  </p>
                </div>
                <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl flex items-start gap-3">
                  <div className="bg-amber-500/10 p-2 rounded-lg text-amber-500">
                    <UtensilsCrossed size={18} />
                  </div>
                  <p className="text-[10px] text-zinc-500 uppercase leading-tight pt-1">
                    <span className="text-zinc-300 font-bold block mb-1">ZAKĄSKA</span>
                    Pamiętaj, aby zawsze grać na pełny żołądek. Polecamy czipsy o smaku cebulki.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar - PC Only */}
            <aside className="hidden lg:flex flex-col gap-8 w-96 shrink-0 sticky top-12">
              <Leaderboard />
              <div className="bg-gradient-to-br from-amber-600 to-amber-900 p-6 rounded-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-white font-black text-2xl italic leading-none mb-2">DOŁĄCZ DO NAS!</h4>
                  <p className="text-amber-100/80 text-xs mb-4">Wpisz się na listę mailingową i otrzymuj powiadomienia o nowych dostawach piwa!</p>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Twój e-mail..." className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:bg-white/20 transition-all" />
                    <button className="bg-white text-amber-900 font-black px-4 py-2 rounded-lg text-xs hover:bg-amber-100 transition-all uppercase">ZAPISZ</button>
                  </div>
                </div>
                <Beer className="absolute -bottom-4 -right-4 text-white/10 rotate-12 group-hover:scale-125 transition-transform" size={120} />
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 mt-12 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-amber-500 font-black text-xl italic uppercase">MonoGuesser</span>
              <p className="text-zinc-600 text-xs mt-1">Najlepszy quiz monopolowy w tej części internetu.</p>
            </div>
            <div className="flex gap-6">
              {['Facebook', 'Instagram', 'TikTok', 'Gorzelnia'].map(item => (
                <a key={item} href="#" className="text-zinc-500 hover:text-amber-500 text-[10px] font-black uppercase tracking-widest transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div className="text-[9px] text-zinc-700 uppercase tracking-widest border-t border-zinc-900 pt-8">
            &copy; 2026 MonoGuesser Corp. Wszelkie prawa do kapsli zastrzeżone. <br/>
            Słowo kluczowe: Piwo. Bo tak trzeba.
          </div>
        </div>
      </footer>
    </div>
  );
}
