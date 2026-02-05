import React from 'react';
import { Trophy, Medal, User } from 'lucide-react';

const MOCK_PLAYERS = [
  { id: 1, name: 'Marek "Puszka"', score: 4200, city: 'Sosnowiec' },
  { id: 2, name: 'Grażyna Monopolowa', score: 3850, city: 'Łódź' },
  { id: 3, name: 'Rudy z Żabki', score: 3100, city: 'Radom' },
  { id: 4, name: 'Król Kaucji', score: 2900, city: 'Gdańsk' },
  { id: 5, name: 'Anonimowy Piwosz', score: 1200, city: 'Warszawa' },
];

export const Leaderboard = () => {
  return (
    <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-md border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-amber-500 p-4 flex items-center justify-between">
        <h3 className="text-zinc-900 font-black uppercase italic text-xl flex items-center gap-2">
          <Trophy size={24} /> TABELA CHWAŁY
        </h3>
        <span className="text-zinc-900 font-bold text-xs bg-white/30 px-2 py-0.5 rounded-full">Top 5</span>
      </div>
      
      <div className="p-2">
        {MOCK_PLAYERS.map((player, idx) => (
          <div 
            key={player.id}
            className={`flex items-center justify-between p-3 rounded-xl mb-1 last:mb-0 transition-colors ${
              idx === 0 ? 'bg-amber-500/20 border border-amber-500/30' : 'hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 text-amber-500 font-black">
                {idx === 0 ? <Medal size={20} className="text-amber-400" /> : idx + 1}
              </div>
              <div>
                <div className="font-bold text-white flex items-center gap-2">
                  {player.name}
                  {idx === 0 && <span className="text-[10px] bg-amber-500 text-zinc-900 px-1 rounded font-black uppercase">LIDER</span>}
                </div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{player.city}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-amber-500 font-black">{player.score} pkt</div>
              <div className="text-[8px] text-zinc-600 uppercase">Łączny staż</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-zinc-900 border-t border-amber-500/10 text-center">
        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
          Chcesz tu być? Pij... to znaczy GRAJ WIĘCEJ!
        </p>
      </div>
    </div>
  );
};
