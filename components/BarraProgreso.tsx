'use client';
import { motion } from 'framer-motion';

export function BarraProgreso({
  actual,
  total,
  color = '#C8102E'
}: {
  actual: number;
  total: number;
  color?: string;
}) {
  const pct = Math.min(100, Math.max(0, (actual / total) * 100));
  return (
    <div className="my-4">
      <div className="flex justify-between text-xs font-bold text-marca-carbon mb-2">
        <span>Progreso del módulo</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="h-3 bg-marca-carbon/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6 }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}
