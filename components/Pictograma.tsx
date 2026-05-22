'use client';
import { motion } from 'framer-motion';

/**
 * Pictograma grande con icono + dato + etiqueta corta.
 * Pensado para dislexia: el dato lee primero, el texto es solo refuerzo.
 */
export function Pictograma({
  icono,
  dato,
  etiqueta,
  color = '#C8102E',
  fondoColor
}: {
  icono: string;
  dato: string;
  etiqueta: string;
  color?: string;
  fondoColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-5 text-center shadow-md"
      style={{ background: fondoColor || 'white', borderTop: `8px solid ${color}` }}
    >
      <div className="text-5xl mb-2">{icono}</div>
      <div className="text-3xl sm:text-4xl font-extrabold leading-none" style={{ color }}>{dato}</div>
      <div className="text-xs uppercase font-bold text-marca-carbon/70 mt-2 tracking-wider">{etiqueta}</div>
    </motion.div>
  );
}

export function GridPictogramas({ items }: { items: { icono: string; dato: string; etiqueta: string; color?: string; fondoColor?: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
      {items.map((it, i) => (
        <Pictograma key={i} {...it} />
      ))}
    </div>
  );
}

/**
 * Comparativa horizontal: dos cifras enfrentadas, visual estilo "vs"
 */
export function Versus({
  izq,
  der
}: {
  izq: { titulo: string; dato: string; nota?: string; color: string; icono: string };
  der: { titulo: string; dato: string; nota?: string; color: string; icono: string };
}) {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-stretch">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl p-6 text-white text-center shadow-lg"
        style={{ background: izq.color }}
      >
        <div className="text-5xl mb-2">{izq.icono}</div>
        <div className="text-xs uppercase font-bold opacity-80">{izq.titulo}</div>
        <div className="text-4xl font-extrabold mt-2">{izq.dato}</div>
        {izq.nota && <div className="text-xs opacity-80 mt-2">{izq.nota}</div>}
      </motion.div>

      <div className="grid place-items-center font-extrabold text-2xl text-marca-carbon/30 px-3">VS</div>

      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl p-6 text-white text-center shadow-lg"
        style={{ background: der.color }}
      >
        <div className="text-5xl mb-2">{der.icono}</div>
        <div className="text-xs uppercase font-bold opacity-80">{der.titulo}</div>
        <div className="text-4xl font-extrabold mt-2">{der.dato}</div>
        {der.nota && <div className="text-xs opacity-80 mt-2">{der.nota}</div>}
      </motion.div>
    </div>
  );
}

/**
 * Timeline visual horizontal: ideal para mostrar plan año a año
 */
export function Timeline({
  hitos
}: {
  hitos: { ano: string; titulo: string; icono: string; color: string; nota?: string }[];
}) {
  return (
    <div className="my-8 relative">
      {/* Línea central */}
      <div className="absolute left-7 sm:left-1/2 top-0 bottom-0 w-1 bg-marca-rojo opacity-30 sm:-translate-x-1/2" />

      <div className="space-y-6">
        {hitos.map((h, i) => {
          const izq = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: izq ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-center gap-4 sm:gap-0 ${izq ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
            >
              {/* Punto en la línea */}
              <div
                className="absolute left-3 sm:left-1/2 sm:-translate-x-1/2 w-9 h-9 rounded-full grid place-items-center text-lg shadow-lg border-4 border-white z-10"
                style={{ background: h.color }}
              >
                <span>{h.icono}</span>
              </div>

              {/* Card */}
              <div
                className={`ml-16 sm:ml-0 ${izq ? 'sm:mr-auto sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12 sm:text-left'} sm:w-1/2 bg-white rounded-2xl p-5 shadow-md border-l-8`}
                style={{ borderLeftColor: h.color }}
              >
                <div className="text-xs font-extrabold uppercase tracking-wider" style={{ color: h.color }}>
                  {h.ano}
                </div>
                <div className="font-extrabold text-marca-carbon text-lg mt-1">{h.titulo}</div>
                {h.nota && <div className="text-sm text-marca-carbon/70 mt-1">{h.nota}</div>}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
