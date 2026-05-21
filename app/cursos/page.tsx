import { BarraSuperior } from '@/components/BarraSuperior';
import { TarjetaCurso } from '@/components/TarjetaCurso';
import { PieDePagina } from '@/components/PieDePagina';
import { CURSOS } from '@/lib/cursos';

export default function CursosPage() {
  return (
    <>
      <BarraSuperior />
      <main className="max-w-6xl mx-auto px-5 py-14">
        <div className="mb-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-marca-amarillo font-bold text-sm mb-4">
            📚 Catálogo completo
          </span>
          <h1 className="text-4xl font-extrabold text-marca-carbon mb-3">
            Todos los cursos
          </h1>
          <p className="text-marca-carbon/70 max-w-2xl mx-auto">
            Selecciona el curso que necesitas. Empieza por el que más te urja para la oferta que persigues.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURSOS.map((curso, idx) => (
            <TarjetaCurso key={curso.slug} curso={curso} index={idx} />
          ))}
        </div>
      </main>
      <PieDePagina />
    </>
  );
}
