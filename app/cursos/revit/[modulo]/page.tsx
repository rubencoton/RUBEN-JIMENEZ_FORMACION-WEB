import { notFound } from 'next/navigation';
import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { CabeceraModulo, NavegacionModulo } from '@/components/CajaModulo';
import { Caja } from '@/components/Caja';
import { Quiz } from '@/components/Quiz';
import { Flashcard } from '@/components/Flashcard';
import { REVIT_META, REVIT_MODULOS } from '@/content/revit/meta';
import { MODULOS_DATA } from '@/content/revit/modulos-data';

export function generateStaticParams() {
  // Estos slugs tienen página dedicada (que-es-revit, interfaz). Los demás van por esta ruta dinámica.
  return REVIT_MODULOS
    .filter((m) => m.slug !== 'que-es-revit' && m.slug !== 'interfaz')
    .map((m) => ({ modulo: m.slug }));
}

export default async function ModuloDinamico({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  const idx = REVIT_MODULOS.findIndex((m) => m.slug === modulo);
  if (idx === -1) notFound();
  const m = REVIT_MODULOS[idx];
  const data = MODULOS_DATA[modulo];
  if (!data) notFound();
  const anterior = REVIT_MODULOS[idx - 1];
  const siguiente = REVIT_MODULOS[idx + 1];

  return (
    <>
      <BarraSuperior />
      <CabeceraModulo
        numero={m.numero}
        total={REVIT_MODULOS.length}
        titulo={m.titulo}
        resumen={m.resumen}
        color={REVIT_META.color}
        duracion={m.duracion}
        cursoSlug="revit"
        cursoTitulo={REVIT_META.titulo}
      />
      <main className="max-w-4xl mx-auto px-5 py-10">
        {data.bloques.map((b, i) => {
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
                  <li key={j} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border-l-4 border-marca-azul">
                    <span className="text-marca-azul font-extrabold">▸</span>
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

        {data.flashcards && data.flashcards.length > 0 && (
          <>
            <h2 className="text-2xl font-extrabold mt-12 mb-4 text-marca-carbon">
              🎴 Flashcards: gira y memoriza
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.flashcards.map((fc, i) => (
                <Flashcard
                  key={i}
                  color={REVIT_META.color}
                  frente={<>{fc.frente}</>}
                  reverso={<>{fc.reverso}</>}
                />
              ))}
            </div>
          </>
        )}

        <Quiz titulo={`Reto del módulo ${m.numero}`} preguntas={data.preguntas} color={REVIT_META.color} />

        <NavegacionModulo
          cursoSlug="revit"
          color={REVIT_META.color}
          anterior={anterior ? { slug: anterior.slug, titulo: anterior.titulo } : undefined}
          siguiente={siguiente ? { slug: siguiente.slug, titulo: siguiente.titulo } : undefined}
        />
      </main>
      <PieDePagina />
    </>
  );
}
