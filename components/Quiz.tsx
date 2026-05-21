'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Pregunta = {
  pregunta: string;
  opciones: string[];
  correcta: number;
  explicacion?: string;
};

export function Quiz({ titulo, preguntas, color = '#C8102E' }: { titulo: string; preguntas: Pregunta[]; color?: string }) {
  const [idx, setIdx] = useState(0);
  const [seleccion, setSeleccion] = useState<number | null>(null);
  const [revelar, setRevelar] = useState(false);
  const [puntos, setPuntos] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const actual = preguntas[idx];

  function elegir(i: number) {
    if (revelar) return;
    setSeleccion(i);
    setRevelar(true);
    if (i === actual.correcta) setPuntos((p) => p + 1);
  }

  function siguiente() {
    if (idx + 1 >= preguntas.length) {
      setTerminado(true);
    } else {
      setIdx(idx + 1);
      setSeleccion(null);
      setRevelar(false);
    }
  }

  function reiniciar() {
    setIdx(0);
    setSeleccion(null);
    setRevelar(false);
    setPuntos(0);
    setTerminado(false);
  }

  if (terminado) {
    const pct = Math.round((puntos / preguntas.length) * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪';
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="my-8 p-8 rounded-2xl text-center text-white shadow-xl"
        style={{ background: color }}
      >
        <div className="text-7xl mb-3">{emoji}</div>
        <h3 className="text-3xl font-extrabold mb-2">¡Quiz terminado!</h3>
        <p className="text-xl mb-4">
          {puntos} de {preguntas.length} aciertos ({pct}%)
        </p>
        <button
          onClick={reiniciar}
          className="bg-white text-marca-carbon font-bold px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          🔁 Volver a intentar
        </button>
      </motion.div>
    );
  }

  return (
    <div className="my-8 bg-white rounded-2xl shadow-lg border-t-8 overflow-hidden" style={{ borderTopColor: color }}>
      <div className="px-6 py-4 flex items-center justify-between" style={{ background: color }}>
        <div className="text-white font-bold text-sm uppercase tracking-wider">🎯 {titulo}</div>
        <div className="text-white font-bold">
          {idx + 1} / {preguntas.length}
        </div>
      </div>
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-5 text-marca-carbon">{actual.pregunta}</h3>
            <div className="space-y-3">
              {actual.opciones.map((opt, i) => {
                const esCorrecta = i === actual.correcta;
                const esSeleccion = i === seleccion;
                let clases =
                  'w-full text-left px-5 py-4 rounded-xl border-2 font-semibold transition';
                if (!revelar) {
                  clases += ' border-marca-carbon/15 hover:border-marca-amarillo hover:bg-marca-amarillo/10 cursor-pointer';
                } else if (esCorrecta) {
                  clases += ' border-marca-verde bg-marca-verde/10 text-marca-verde';
                } else if (esSeleccion) {
                  clases += ' border-marca-rojo bg-marca-rojo/10 text-marca-rojo';
                } else {
                  clases += ' border-marca-carbon/10 text-marca-carbon/40';
                }
                return (
                  <button key={i} onClick={() => elegir(i)} disabled={revelar} className={clases}>
                    <span className="font-extrabold mr-2">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                    {revelar && esCorrecta && <span className="ml-2">✅</span>}
                    {revelar && esSeleccion && !esCorrecta && <span className="ml-2">❌</span>}
                  </button>
                );
              })}
            </div>

            {revelar && actual.explicacion && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 p-4 bg-marca-amarillo/20 border-l-4 border-marca-amarillo rounded-r-lg"
              >
                <div className="font-bold text-marca-carbon mb-1">💡 ¿Por qué?</div>
                <div className="text-marca-carbon/80 text-sm leading-relaxed">{actual.explicacion}</div>
              </motion.div>
            )}

            {revelar && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={siguiente}
                className="mt-5 w-full font-bold py-3 rounded-xl text-white hover:opacity-90 transition"
                style={{ background: color }}
              >
                {idx + 1 >= preguntas.length ? '🏁 Ver resultado' : 'Siguiente pregunta →'}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 h-2 bg-marca-carbon/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((idx + (revelar ? 1 : 0)) / preguntas.length) * 100}%` }}
            transition={{ duration: 0.4 }}
            className="h-full"
            style={{ background: color }}
          />
        </div>
      </div>
    </div>
  );
}
