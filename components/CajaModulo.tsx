'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CabeceraModulo({
  numero,
  total,
  titulo,
  resumen,
  color,
  duracion,
  cursoSlug,
  cursoTitulo
}: {
  numero: number;
  total: number;
  titulo: string;
  resumen: string;
  color: string;
  duracion: string;
  cursoSlug: string;
  cursoTitulo: string;
}) {
  return (
    <header className="px-6 py-12 text-white" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-sm font-bold opacity-90 mb-2">
          <Link href={`/cursos/${cursoSlug}`} className="underline hover:no-underline">
            ← {cursoTitulo}
          </Link>
        </div>
        <div className="inline-block bg-marca-amarillo text-marca-carbon font-extrabold px-4 py-1 rounded-full text-sm mb-4">
          MÓDULO {numero} / {total} · ⏱️ {duracion}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-extrabold leading-tight mb-3"
        >
          {titulo}
        </motion.h1>
        <p className="text-lg opacity-95 max-w-3xl">{resumen}</p>
      </div>
    </header>
  );
}

export function NavegacionModulo({
  cursoSlug,
  anterior,
  siguiente,
  color
}: {
  cursoSlug: string;
  anterior?: { slug: string; titulo: string };
  siguiente?: { slug: string; titulo: string };
  color: string;
}) {
  return (
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {anterior ? (
        <Link
          href={`/cursos/${cursoSlug}/${anterior.slug}`}
          className="group p-5 rounded-2xl bg-white border-l-8 shadow hover:shadow-lg transition lift"
          style={{ borderLeftColor: color }}
        >
          <div className="text-xs font-bold uppercase opacity-60 mb-1">← Anterior</div>
          <div className="font-extrabold text-marca-carbon group-hover:text-marca-rojo">
            {anterior.titulo}
          </div>
        </Link>
      ) : <div />}
      {siguiente ? (
        <Link
          href={`/cursos/${cursoSlug}/${siguiente.slug}`}
          className="group p-5 rounded-2xl shadow hover:shadow-lg transition lift text-right text-white"
          style={{ background: color }}
        >
          <div className="text-xs font-bold uppercase opacity-90 mb-1">Siguiente →</div>
          <div className="font-extrabold text-lg">{siguiente.titulo}</div>
        </Link>
      ) : <Link
          href={`/cursos/${cursoSlug}`}
          className="group p-5 rounded-2xl bg-marca-amarillo text-marca-carbon shadow hover:shadow-lg transition lift text-right"
        >
          <div className="text-xs font-bold uppercase opacity-70 mb-1">🏁 Fin del curso</div>
          <div className="font-extrabold">Volver al índice</div>
        </Link>
      }
    </div>
  );
}
