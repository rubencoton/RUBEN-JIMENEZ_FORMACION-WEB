import { BarraSuperior } from '@/components/BarraSuperior';
import { Hero } from '@/components/Hero';
import { TarjetaCurso } from '@/components/TarjetaCurso';
import { PieDePagina } from '@/components/PieDePagina';
import { CURSOS } from '@/lib/cursos';

export default function Home() {
  return (
    <>
      <BarraSuperior />
      <Hero />

      <main className="max-w-6xl mx-auto px-5 py-14">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3">
            Cursos disponibles
          </h2>
          <p className="text-marca-carbon/70 max-w-2xl mx-auto">
            Elige uno y entra al modo interactivo. Cada módulo dura entre 10 y 25 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURSOS.map((curso, idx) => (
            <TarjetaCurso key={curso.slug} curso={curso} index={idx} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md border-l-8 border-marca-amarillo">
          <h3 className="text-2xl font-extrabold text-marca-carbon mb-3">
            🎯 Diseñado para tu forma de aprender
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
            <div>
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-bold mb-1">Colores fuertes</div>
              <div className="text-marca-carbon/70">Cada idea con su color. Captura la atención al instante.</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🎮</div>
              <div className="font-bold mb-1">Juegos y quizzes</div>
              <div className="text-marca-carbon/70">Aprendes haciendo, no leyendo párrafos eternos.</div>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold mb-1">Módulos cortos</div>
              <div className="text-marca-carbon/70">10–25 minutos. Sin fatiga. Sin sobrecarga.</div>
            </div>
          </div>
        </div>
      </main>

      <PieDePagina />
    </>
  );
}
