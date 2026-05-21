'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Acordeon({
  titulo,
  children,
  color = '#1565C0',
  icono = '📖'
}: {
  titulo: string;
  children: React.ReactNode;
  color?: string;
  icono?: string;
}) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className="my-3 rounded-xl overflow-hidden border-2" style={{ borderColor: color }}>
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between px-5 py-4 font-bold text-left text-white"
        style={{ background: color }}
      >
        <span className="flex items-center gap-3">
          <span className="text-2xl">{icono}</span>
          <span>{titulo}</span>
        </span>
        <motion.span animate={{ rotate: abierto ? 180 : 0 }} className="text-2xl">
          ⌄
        </motion.span>
      </button>
      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white overflow-hidden"
          >
            <div className="p-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
