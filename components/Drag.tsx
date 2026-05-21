'use client';
import { useState } from 'react';
import { motion, Reorder } from 'framer-motion';

export function OrdenarPasos({
  titulo,
  pasosCorrectos,
  color = '#2E7D32'
}: {
  titulo: string;
  pasosCorrectos: string[];
  color?: string;
}) {
  // mezclamos para mostrar desordenado al inicio
  const [orden, setOrden] = useState(() => {
    const copia = [...pasosCorrectos];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    // garantizamos que no quede en orden correcto
    if (copia.every((x, i) => x === pasosCorrectos[i])) {
      [copia[0], copia[1]] = [copia[1], copia[0]];
    }
    return copia;
  });
  const [comprobado, setComprobado] = useState(false);

  const correcto = orden.every((p, i) => p === pasosCorrectos[i]);

  return (
    <div className="my-8 rounded-2xl shadow-lg border-t-8 bg-white overflow-hidden" style={{ borderTopColor: color }}>
      <div className="px-5 py-3 text-white font-bold" style={{ background: color }}>
        🧩 Ordena · {titulo}
      </div>
      <div className="p-5">
        <Reorder.Group axis="y" values={orden} onReorder={setOrden} className="space-y-2">
          {orden.map((paso) => (
            <Reorder.Item
              key={paso}
              value={paso}
              className="bg-marca-crema border-2 border-marca-carbon/10 px-4 py-3 rounded-xl cursor-grab active:cursor-grabbing font-semibold shadow-sm hover:border-marca-amarillo"
            >
              ↕ {paso}
            </Reorder.Item>
          ))}
        </Reorder.Group>

        {!comprobado ? (
          <button
            onClick={() => setComprobado(true)}
            className="mt-4 w-full font-bold py-3 rounded-xl text-white hover:opacity-90 transition"
            style={{ background: color }}
          >
            ✅ Comprobar orden
          </button>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`mt-4 p-4 rounded-xl font-bold text-center ${
              correcto ? 'bg-marca-verde text-white' : 'bg-marca-rojo text-white'
            }`}
          >
            {correcto ? '🎉 ¡Orden perfecto!' : '❌ Aún no es correcto. Sigue ajustando.'}
            <button
              onClick={() => setComprobado(false)}
              className="block mt-2 text-sm underline opacity-80 mx-auto"
            >
              Volver a probar
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
