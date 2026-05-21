import Link from 'next/link';
import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { REVIT_META, REVIT_MODULOS } from '@/content/revit/meta';

export default function CursoRevit() {
  return (
    <>
      <BarraSuperior />
      <header
        className="px-6 py-16 text-white"
        style={{ background: `linear-gradient(135deg, ${REVIT_META.color}, #0D47A1)` }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-sm font-bold opacity-90 mb-2">
            <Link href="/cursos" className="underline hover:no-underline">← Cursos</Link>
          </div>
          <div className="text-5xl mb-4">🏛️</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">{REVIT_META.titulo}</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            El curso más completo y visual para dominar Revit. 12 módulos progresivos con quizzes, juegos
            interactivos, capturas reales del programa y la conexión con BIM 360.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/20 backdrop-blur rounded-full px-4 py-2 font-semibold">
              ⏱️ ~18 h
            </span>
            <span className="bg-white/20 backdrop-blur rounded-full px-4 py-2 font-semibold">
              📚 {REVIT_MODULOS.length} módulos
            </span>
            <span className="bg-marca-amarillo text-marca-carbon rounded-full px-4 py-2 font-extrabold">
              ⭐ Más demandado
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid gap-4">
          {REVIT_MODULOS.map((m) => (
            <Link
              key={m.slug}
              href={`/cursos/revit/${m.slug}`}
              className="group flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border-l-8 transition lift"
              style={{ borderLeftColor: REVIT_META.color }}
            >
              <div
                className="w-16 h-16 rounded-2xl grid place-items-center text-3xl shrink-0"
                style={{ background: REVIT_META.colorClaro }}
              >
                {m.icono}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-extrabold uppercase tracking-wider opacity-60">
                  Módulo {m.numero} · {m.duracion}
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-marca-carbon group-hover:text-marca-rojo transition">
                  {m.titulo}
                </div>
                <div className="text-sm text-marca-carbon/70 mt-1">{m.resumen}</div>
              </div>
              <div
                className="text-2xl font-extrabold group-hover:translate-x-2 transition shrink-0"
                style={{ color: REVIT_META.color }}
              >
                →
              </div>
            </Link>
          ))}
        </div>
      </main>

      <PieDePagina />
    </>
  );
}
