import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROMOS = [
  "PROMOCJA: Kup 2 piwa w cenie 3!",
  "GRATIS: Do każdego zakupu uśmiech ekspedientki (może być krzywy)!",
  "OKAZJA: Piwo cieplejsze niż Twoja ex!",
  "WYSYP: Dzisiaj dostawa 'Płynnego Złota'!",
  "INFO: Brak terminala? Nie szkodzi, przyjmujemy butelki zwrotne!",
  "HIT: Piwo bezalkoholowe? Nie u nas!",
];

export const PromoSlider = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROMOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-amber-600 overflow-hidden py-2 border-y-4 border-amber-900 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-white font-black text-sm md:text-lg uppercase italic text-center px-4"
        >
          {PROMOS[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
