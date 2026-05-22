'use client';
import { motion } from 'framer-motion';

export type Barra = {
  etiqueta: string;
  valor: number;
  color: string;
  destacado?: boolean;
  nota?: string;
};

export function GraficoBarras({
  titulo,
  subtitulo,
  unidad = '',
  barras,
  max
}: {
  titulo: string;
  subtitulo?: string;
  unidad?: string;
  barras: Barra[];
  max?: number;
}) {
  const techo = max ?? Math.max(...barras.map((b) => b.valor)) * 1.1;
  return (
    <div className="my-8 bg-white rounded-2xl shadow-lg p-6 border-t-8 border-marca-rojo">
      <h3 className="text-2xl font-extrabold text-marca-carbon mb-1">{titulo}</h3>
      {subtitulo && <p className="text-sm text-marca-carbon/70 mb-5">{subtitulo}</p>}

      <div className="space-y-3">
        {barras.map((b, i) => {
          const pct = (b.valor / techo) * 100;
          return (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className={`font-bold ${b.destacado ? 'text-marca-rojo' : 'text-marca-carbon'}`}>
                  {b.etiqueta}
                </span>
                <span className="font-extrabold" style={{ color: b.color }}>
                  {b.valor.toLocaleString('es-ES')}{unidad}
                  {b.nota && <span className="ml-2 text-xs text-marca-carbon/60 font-normal">{b.nota}</span>}
                </span>
              </div>
              <div className="h-7 bg-marca-crema rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: 'easeOut' }}
                  className="h-full rounded-lg flex items-center justify-end pr-2 text-white text-xs font-bold"
                  style={{ background: b.color }}
                >
                  {pct > 25 && <span className="opacity-90">{Math.round(pct)}%</span>}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
