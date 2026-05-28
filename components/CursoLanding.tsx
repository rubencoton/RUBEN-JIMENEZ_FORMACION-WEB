import Link from 'next/link';
import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { getCurso, type CursoMeta } from '@/lib/cursos';
import type { ModuloMeta } from '@/content/revit/meta';

/**
 * Landing genérica de un curso: hero + lista de módulos.
 * Reutilizable por todos los cursos data-driven (autocad, ms-project, presto, etc.).
 */
export function CursoLanding({
  meta,
  modulos
}: {
  meta: CursoMeta;
  modulos: ModuloMeta[];
}) {
  const curso = getCurso(meta.slug);
  const icono = curso?.icono ?? '📘';
  const resumen = curso?.resumen ?? '';
  const duracion = curso?.duracion ?? '';
  const nivel = curso?.nivel ?? '';

  return (
    <>
      <BarraSuperior />
      <header
        className="px-6 py-16 text-white"
        style={{ background: `linear-gradient(135deg, ${meta.color}, ${meta.color}bb)` }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-sm font-bold opacity-90 mb-2">
            <Link href="/cursos" className="underline hover:no-underline">← Cursos</Link>
          </div>
          <div className="text-5xl mb-4">{icono}</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">{meta.titulo}</h1>
          {resumen && <p className="text-lg opacity-95 max-w-3xl">{resumen}</p>}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {duracion && (
              <span className="bg-white/20 backdrop-blur rounded-full px-4 py-2 font-semibold">
                ⏱️ {duracion}
              </span>
            )}
            <span className="bg-white/20 backdrop-blur rounded-full px-4 py-2 font-semibold">
              📚 {modulos.length} módulos
            </span>
            {nivel && (
              <span className="bg-marca-amarillo text-marca-carbon rounded-full px-4 py-2 font-extrabold">
                🎓 {nivel}
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid gap-4">
          {modulos.map((m) => (
            <Link
              key={m.slug}
              href={`/cursos/${meta.slug}/${m.slug}`}
              className="group flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border-l-8 transition lift"
              style={{ borderLeftColor: meta.color }}
            >
              <div
                className="w-16 h-16 rounded-2xl grid place-items-center text-3xl shrink-0"
                style={{ background: meta.colorClaro }}
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
                style={{ color: meta.color }}
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
