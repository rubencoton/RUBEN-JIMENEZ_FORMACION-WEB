'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Flashcard({
  frente,
  reverso,
  color = '#1565C0'
}: {
  frente: React.ReactNode;
  reverso: React.ReactNode;
  color?: string;
}) {
  const [girada, setGirada] = useState(false);
  return (
    <div className="my-6 perspective-[1200px] cursor-pointer" onClick={() => setGirada(!girada)}>
      <motion.div
        animate={{ rotateY: girada ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full min-h-[180px] [transform-style:preserve-3d]"
      >
        <div
          className="absolute inset-0 rounded-2xl shadow-lg [backface-visibility:hidden] p-6 flex flex-col justify-center items-center text-center text-white"
          style={{ background: color }}
        >
          <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">
            👆 Pulsa para girar
          </div>
          <div className="text-xl font-bold">{frente}</div>
        </div>
        <div className="absolute inset-0 rounded-2xl shadow-lg bg-marca-amarillo text-marca-carbon [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex flex-col justify-center items-center text-center">
          <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-2">
            🔁 Respuesta
          </div>
          <div className="text-lg font-semibold">{reverso}</div>
        </div>
      </motion.div>
    </div>
  );
}
