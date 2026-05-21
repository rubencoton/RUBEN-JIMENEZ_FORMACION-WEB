'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Curso } from '@/lib/cursos';

export function TarjetaCurso({ curso, index }: { curso: Curso; index: number }) {
  const ready = curso.modulos > 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl shadow-md overflow-hidden border-t-8 bg-white"
      style={{ borderTopColor: curso.color }}
    >
      {curso.destacado && (
        <div className="absolute top-2 right-2 bg-marca-amarillo text-marca-carbon text-xs font-extrabold px-3 py-1 rounded-full shadow">
          ⭐ MÁS PEDIDO
        </div>
      )}
      <div className="p-6">
        <div
          className="w-14 h-14 rounded-2xl grid place-items-center text-3xl mb-3"
          style={{ background: curso.fondo }}
        >
          {curso.icono}
        </div>
        <h3 className="text-xl font-extrabold mb-2" style={{ color: curso.color }}>
          {curso.titulo}
        </h3>
        <p className="text-sm text-marca-carbon/80 mb-4 leading-relaxed">{curso.resumen}</p>

        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="bg-marca-crema rounded-lg py-2 px-1">
            <div className="text-[10px] uppercase font-bold text-marca-carbon/60">Módulos</div>
            <div className="text-lg font-extrabold text-marca-carbon">{curso.modulos || '—'}</div>
          </div>
          <div className="bg-marca-crema rounded-lg py-2 px-1">
            <div className="text-[10px] uppercase font-bold text-marca-carbon/60">Duración</div>
            <div className="text-sm font-bold text-marca-carbon leading-tight">{curso.duracion}</div>
          </div>
          <div className="bg-marca-crema rounded-lg py-2 px-1">
            <div className="text-[10px] uppercase font-bold text-marca-carbon/60">Nivel</div>
            <div className="text-xs font-bold text-marca-carbon leading-tight">{curso.nivel}</div>
          </div>
        </div>

        {ready ? (
          <Link
            href={`/cursos/${curso.slug}`}
            className="block text-center font-bold py-3 rounded-xl text-white transition hover:opacity-90"
            style={{ background: curso.color }}
          >
            Entrar al curso →
          </Link>
        ) : (
          <button
            disabled
            className="block w-full text-center font-bold py-3 rounded-xl bg-marca-carbon/20 text-marca-carbon/60 cursor-not-allowed"
          >
            En preparación
          </button>
        )}
      </div>
    </motion.div>
  );
}
