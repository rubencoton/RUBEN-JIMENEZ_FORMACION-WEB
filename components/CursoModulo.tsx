import { notFound } from 'next/navigation';
import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { CabeceraModulo, NavegacionModulo } from '@/components/CajaModulo';
import { Caja } from '@/components/Caja';
import { Quiz } from '@/components/Quiz';
import { Flashcard } from '@/components/Flashcard';
import type { CursoMeta } from '@/lib/cursos';
import type { ModuloMeta } from '@/content/revit/meta';
import type { ModuloData } from '@/content/revit/modulos-data';

/**
 * Renderizador genérico de un módulo de curso (data-driven).
 * Pinta bloques (parrafo/titulo/lista/caja) + flashcards + quiz + navegación.
 * Reutilizable por todos los cursos.
 */
export function CursoModulo({
  meta,
  modulos,
  data,
  moduloSlug
}: {
  meta: CursoMeta;
  modulos: ModuloMeta[];
  data: Record<string, ModuloData>;
  moduloSlug: string;
}) {
  const idx = modulos.findIndex((m) => m.slug === moduloSlug);
  if (idx === -1) notFound();
  const m = modulos[idx];
  const d = data[moduloSlug];
  if (!d) notFound();
  const anterior = modulos[idx - 1];
  const siguiente = modulos[idx + 1];

  return (
    <>
      <BarraSuperior />
      <CabeceraModulo
        numero={m.numero}
        total={modulos.length}
        titulo={m.titulo}
        resumen={m.resumen}
        color={meta.color}
        duracion={m.duracion}
        cursoSlug={meta.slug}
        cursoTitulo={meta.titulo}
      />
      <main className="max-w-4xl mx-auto px-5 py-10">
        {d.bloques.map((b, i) => {
          if (b.tipo === 'parrafo') {
            return (
              <p key={i} className="text-lg leading-relaxed text-marca-carbon my-4">
                {b.texto}
              </p>
            );
          }
          if (b.tipo === 'titulo') {
            return (
              <h2 key={i} className="text-2xl font-extrabold mt-10 mb-4 text-marca-carbon">
                {b.texto}
              </h2>
            );
          }
          if (b.tipo === 'lista') {
            return (
              <ul key={i} className="list-none space-y-2 my-4">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border-l-4"
                    style={{ borderLeftColor: meta.color }}
                  >
                    <span className="font-extrabold" style={{ color: meta.color }}>▸</span>
                    <span className="text-marca-carbon">{it}</span>
                  </li>
                ))}
              </ul>
            );
          }
          if (b.tipo === 'caja') {
            return (
              <Caja key={i} tipo={b.tipoCaja} titulo={b.titulo}>
                {b.texto}
              </Caja>
            );
          }
          return null;
        })}

        {d.flashcards && d.flashcards.length > 0 && (
          <>
            <h2 className="text-2xl font-extrabold mt-12 mb-4 text-marca-carbon">
              🎴 Flashcards: gira y memoriza
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {d.flashcards.map((fc, i) => (
                <Flashcard
                  key={i}
                  color={meta.color}
                  frente={<>{fc.frente}</>}
                  reverso={<>{fc.reverso}</>}
                />
              ))}
            </div>
          </>
        )}

        {d.preguntas && d.preguntas.length > 0 && (
          <Quiz titulo={`Reto del módulo ${m.numero}`} preguntas={d.preguntas} color={meta.color} />
        )}

        <NavegacionModulo
          cursoSlug={meta.slug}
          color={meta.color}
          anterior={anterior ? { slug: anterior.slug, titulo: anterior.titulo } : undefined}
          siguiente={siguiente ? { slug: siguiente.slug, titulo: siguiente.titulo } : undefined}
        />
      </main>
      <PieDePagina />
    </>
  );
}
