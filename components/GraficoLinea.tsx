'use client';
import { motion } from 'framer-motion';

export type PuntoLinea = {
  x: string;
  y: number;
  evento?: string;
};

export function GraficoLinea({
  titulo,
  subtitulo,
  unidad = '',
  puntos,
  color = '#C8102E',
  alto = 280
}: {
  titulo: string;
  subtitulo?: string;
  unidad?: string;
  puntos: PuntoLinea[];
  color?: string;
  alto?: number;
}) {
  const W = 720;
  const H = alto;
  const margenX = 50;
  const margenY = 30;
  const anchoUtil = W - 2 * margenX;
  const altoUtil = H - 2 * margenY;

  const yValues = puntos.map((p) => p.y);
  const yMin = Math.min(...yValues) * 0.95;
  const yMax = Math.max(...yValues) * 1.05;
  const rangoY = yMax - yMin;

  const coords = puntos.map((p, i) => {
    const x = margenX + (i / (puntos.length - 1)) * anchoUtil;
    const y = margenY + altoUtil - ((p.y - yMin) / rangoY) * altoUtil;
    return { ...p, cx: x, cy: y };
  });

  const path = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.cx} ${c.cy}`).join(' ');
  const area = `${path} L ${coords[coords.length - 1].cx} ${H - margenY} L ${margenX} ${H - margenY} Z`;

  return (
    <div className="my-8 bg-white rounded-2xl shadow-lg p-6 border-t-8" style={{ borderTopColor: color }}>
      <h3 className="text-2xl font-extrabold text-marca-carbon mb-1">{titulo}</h3>
      {subtitulo && <p className="text-sm text-marca-carbon/70 mb-5">{subtitulo}</p>}

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minWidth: '600px' }} preserveAspectRatio="xMidYMid meet">
          {/* Líneas guía Y */}
          {[0, 0.25, 0.5, 0.75, 1].map((t) => {
            const y = margenY + altoUtil * (1 - t);
            const valor = yMin + rangoY * t;
            return (
              <g key={t}>
                <line x1={margenX} y1={y} x2={W - margenX} y2={y} stroke="#E0E0E0" strokeWidth="1" />
                <text x={margenX - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#666">
                  {Math.round(valor).toLocaleString('es-ES')}{unidad}
                </text>
              </g>
            );
          })}

          {/* Área */}
          <motion.path
            d={area}
            fill={color}
            opacity={0.15}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {/* Línea */}
          <motion.path
            d={path}
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          {/* Puntos + etiquetas X + eventos */}
          {coords.map((c, i) => (
            <g key={i}>
              <motion.circle
                cx={c.cx}
                cy={c.cy}
                r={c.evento ? 7 : 4}
                fill={c.evento ? '#FFC72C' : color}
                stroke="white"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 + i * 0.05, type: 'spring' }}
              />
              <text x={c.cx} y={H - margenY + 18} textAnchor="middle" fontSize="11" fill="#444" fontWeight="bold">
                {c.x}
              </text>
              {c.evento && (
                <text x={c.cx} y={c.cy - 14} textAnchor="middle" fontSize="10" fill="#C8102E" fontWeight="bold">
                  {c.evento}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
