'use client';
import { motion } from 'framer-motion';

export type Serie = {
  nombre: string;
  color: string;
  puntos: { x: string; y: number }[];
  dasharray?: string; // para línea punteada
};

export function GraficoMultiLinea({
  titulo,
  subtitulo,
  unidad = '',
  series,
  alto = 320,
  ejeX
}: {
  titulo: string;
  subtitulo?: string;
  unidad?: string;
  series: Serie[];
  alto?: number;
  ejeX: string[];
}) {
  const W = 760;
  const H = alto;
  const margenX = 60;
  const margenY = 30;
  const margenInferior = 50;
  const anchoUtil = W - 2 * margenX;
  const altoUtil = H - margenY - margenInferior;

  const todos = series.flatMap((s) => s.puntos.map((p) => p.y));
  const yMin = Math.min(...todos) * 0.92;
  const yMax = Math.max(...todos) * 1.05;
  const rangoY = yMax - yMin;

  function coordenadas(serie: Serie) {
    return serie.puntos.map((p) => {
      const idx = ejeX.indexOf(p.x);
      const x = margenX + (idx / (ejeX.length - 1)) * anchoUtil;
      const y = margenY + altoUtil - ((p.y - yMin) / rangoY) * altoUtil;
      return { ...p, cx: x, cy: y };
    });
  }

  return (
    <div className="my-8 bg-white rounded-2xl shadow-lg p-6 border-t-8 border-marca-naranja">
      <h3 className="text-2xl font-extrabold text-marca-carbon mb-1">{titulo}</h3>
      {subtitulo && <p className="text-sm text-marca-carbon/70 mb-4">{subtitulo}</p>}

      {/* Leyenda */}
      <div className="flex flex-wrap gap-4 mb-4">
        {series.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div
              className="w-6 h-1 rounded"
              style={{
                background: s.color,
                borderStyle: s.dasharray ? 'dashed' : 'solid',
                borderColor: s.color
              }}
            />
            <span className="font-bold" style={{ color: s.color }}>
              {s.nombre}
            </span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minWidth: '600px' }} preserveAspectRatio="xMidYMid meet">
          {/* Líneas guía Y */}
          {[0, 0.25, 0.5, 0.75, 1].map((t) => {
            const y = margenY + altoUtil * (1 - t);
            const valor = yMin + rangoY * t;
            return (
              <g key={t}>
                <line x1={margenX} y1={y} x2={W - margenX} y2={y} stroke="#E5E5E5" strokeWidth="1" />
                <text x={margenX - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#666" fontWeight="bold">
                  {Math.round(valor).toLocaleString('es-ES')}
                </text>
              </g>
            );
          })}

          {/* Etiquetas eje X */}
          {ejeX.map((etq, i) => {
            const x = margenX + (i / (ejeX.length - 1)) * anchoUtil;
            return (
              <text
                key={etq}
                x={x}
                y={H - margenInferior + 18}
                textAnchor="middle"
                fontSize="11"
                fill="#444"
                fontWeight="bold"
              >
                {etq}
              </text>
            );
          })}

          {/* Series */}
          {series.map((s, idx) => {
            const c = coordenadas(s);
            const path = c.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.cx} ${p.cy}`).join(' ');
            return (
              <g key={idx}>
                <motion.path
                  d={path}
                  stroke={s.color}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={s.dasharray}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeInOut', delay: idx * 0.3 }}
                />
                {c.map((p, i) => (
                  <motion.circle
                    key={i}
                    cx={p.cx}
                    cy={p.cy}
                    r={4}
                    fill={s.color}
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 + i * 0.04 + idx * 0.3 }}
                  />
                ))}
              </g>
            );
          })}

          {/* Unidad eje Y */}
          <text x={margenX - 8} y={margenY - 10} textAnchor="end" fontSize="11" fill="#999" fontWeight="bold">
            {unidad}
          </text>
        </svg>
      </div>
    </div>
  );
}
