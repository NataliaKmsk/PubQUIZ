import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, CheckCircle2, XCircle, ChevronRight, Beer } from 'lucide-react';
import { toast } from 'sonner';

interface Question {
  id: number;
  image: string;
  correctCity: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1589435155166-9c5b148060be",
    correctCity: "Warszawa",
    options: ["Warszawa", "Kraków", "Lublin", "Białystok"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1765924168587-7714a862eec9",
    correctCity: "Kraków",
    options: ["Warszawa", "Kraków", "Wrocław", "Poznań"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1761517394797-515f458045b8",
    correctCity: "Wrocław",
    options: ["Gdańsk", "Wrocław", "Katowice", "Bydgoszcz"]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1691419775322-1864f752dbac",
    correctCity: "Poznań",
    options: ["Poznań", "Łódź", "Szczecin", "Toruń"]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1759352641978-f05389711f5b",
    correctCity: "Gdańsk",
    options: ["Gdynia", "Gdańsk", "Sopot", "Elbląg"]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1719256924796-e1b1cbd51ba8",
    correctCity: "Łódź",
    options: ["Łódź", "Radom", "Kielce", "Częstochowa"]
  }
];

export const Quiz = () => {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [isFinished, setIsFinished] = React.useState(false);

  const currentQuestion = QUESTIONS[currentIdx];

  const handleSelect = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    
    if (option === currentQuestion.correctCity) {
      setScore(prev => prev + 100);
      toast.success("GENIALNIE! Masz sokole oko piwosza!", {
        icon: <CheckCircle2 className="text-green-500" />
      });
    } else {
      toast.error(`PUDŁO! To nie ${option}, to ${currentQuestion.correctCity}!`, {
        icon: <XCircle className="text-red-500" />
      });
    }
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-xl bg-zinc-900 border-4 border-amber-500 rounded-3xl p-8 text-center"
      >
        <Beer size={64} className="mx-auto text-amber-500 mb-4 animate-bounce" />
        <h2 className="text-4xl font-black text-white uppercase italic mb-2">KONIEC PICIA!</h2>
        <p className="text-amber-200 text-xl mb-6">
          Twój wynik: <span className="font-black text-amber-500">{score} pkt</span>
        </p>
        <p className="text-zinc-400 mb-8 italic">
          {score > 400 ? "Jesteś legendą lokalnych sklepików! Kaucja sama się zwraca!" : "Słabo, bracie. Potrzebujesz więcej... treningu w terenie."}
        </p>
        <button 
          onClick={resetGame}
          className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-black px-8 py-4 rounded-full uppercase transition-transform active:scale-95"
        >
          ZAGRAJ JESZCZE RAZ
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-4 flex items-center justify-between px-2">
        <div className="flex flex-col">
          <span className="text-amber-500 font-black text-xs uppercase tracking-widest">Poziom upojenia</span>
          <div className="w-48 h-2 bg-zinc-800 rounded-full mt-1 overflow-hidden border border-zinc-700">
            <motion.div 
              className="h-full bg-amber-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="text-right">
          <span className="text-zinc-500 font-bold text-[10px] uppercase">Punkty kaucji</span>
          <div className="text-2xl font-black text-white">{score}</div>
        </div>
      </div>

      <motion.div 
        key={currentIdx}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-zinc-900 rounded-3xl border border-zinc-700 overflow-hidden shadow-2xl relative"
      >
        <div className="aspect-video relative group">
          <ImageWithFallback
            src={currentQuestion.image}
            alt="Zgadnij miasto"
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <MapPin size={14} className="text-amber-500" />
            <span className="text-white text-xs font-bold uppercase">Gdzie to jest?</span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-3">
            {currentQuestion.options.map((option) => {
              const isCorrect = option === currentQuestion.correctCity;
              const isSelected = selectedOption === option;
              
              let bgColor = "bg-zinc-800 hover:bg-zinc-700 border-zinc-700";
              if (selectedOption) {
                if (isCorrect) bgColor = "bg-green-600/20 border-green-500 text-green-500";
                else if (isSelected) bgColor = "bg-red-600/20 border-red-500 text-red-500";
                else bgColor = "opacity-30 border-zinc-800";
              }

              return (
                <button
                  key={option}
                  disabled={!!selectedOption}
                  onClick={() => handleSelect(option)}
                  className={`p-4 rounded-2xl border-2 font-black uppercase text-sm transition-all flex items-center justify-between ${bgColor} ${!selectedOption && 'active:scale-95'}`}
                >
                  {option}
                  {selectedOption && isCorrect && <CheckCircle2 size={16} />}
                  {selectedOption && isSelected && !isCorrect && <XCircle size={16} />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {selectedOption && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-6 flex justify-end"
              >
                <button 
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-900 font-black px-6 py-3 rounded-xl transition-all active:scale-95"
                >
                  {currentIdx === QUESTIONS.length - 1 ? 'WYNIK KOŃCOWY' : 'NASTĘPNY PRZYSTANEK'}
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
