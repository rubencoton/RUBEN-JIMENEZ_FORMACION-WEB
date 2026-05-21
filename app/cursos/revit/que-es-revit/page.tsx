import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { CabeceraModulo, NavegacionModulo } from '@/components/CajaModulo';
import { Caja } from '@/components/Caja';
import { Quiz } from '@/components/Quiz';
import { Flashcard } from '@/components/Flashcard';
import { Acordeon } from '@/components/Acordeon';
import { REVIT_META, REVIT_MODULOS } from '@/content/revit/meta';

const PREGUNTAS = [
  {
    pregunta: '¿Qué significa BIM?',
    opciones: [
      'Building Information Modeling',
      'Building Integration Manager',
      'Basic Industry Methodology',
      'Business Intelligence Model'
    ],
    correcta: 0,
    explicacion: 'BIM = Building Information Modeling. Es una metodología de trabajo, no un programa. Revit es UNA herramienta BIM, pero hay más (Archicad, Allplan…).'
  },
  {
    pregunta: '¿Cuál es la diferencia principal entre Revit y AutoCAD?',
    opciones: [
      'Revit es gratis, AutoCAD de pago',
      'Revit es paramétrico y orientado a objetos; AutoCAD es geometría 2D/3D',
      'AutoCAD es más rápido',
      'Solo Revit dibuja en 3D'
    ],
    correcta: 1,
    explicacion: 'Revit trabaja con objetos inteligentes (un muro sabe que es un muro). AutoCAD dibuja líneas, círculos, polilíneas. Cuando cambias en Revit, todo se actualiza solo.'
  },
  {
    pregunta: '¿Qué es el LOD en BIM?',
    opciones: [
      'Level Of Detail (Nivel de Detalle)',
      'List Of Documents',
      'Layer Of Design',
      'Logic Of Design'
    ],
    correcta: 0,
    explicacion: 'LOD = Level Of Detail (o Development). Mide cuánto detalle e información lleva un elemento. Va de LOD 100 (volumen básico) a LOD 500 (modelo "as-built", obra terminada).'
  },
  {
    pregunta: 'En una oferta para Arquitecto Técnico, ¿qué herramienta BIM piden más?',
    opciones: ['Archicad', 'Revit', 'Allplan', 'Vectorworks'],
    correcta: 1,
    explicacion: 'Revit domina el mercado español (especialmente para AT en obra). Archicad tiene cuota en arquitectura puro diseño, pero las constructoras grandes piden Revit casi siempre.'
  }
];

export default function ModuloQueEsRevit() {
  const idx = 0;
  const m = REVIT_MODULOS[idx];
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

      <main className="max-w-4xl mx-auto px-5 py-10 prose prose-lg max-w-none">
        <Caja tipo="info" titulo="En 3 frases">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Revit es un programa de modelado paramétrico</strong> orientado a edificación.</li>
            <li>Trabaja con <strong>objetos inteligentes</strong> (muros, suelos, ventanas) que saben qué son.</li>
            <li>Es la herramienta BIM más pedida en ofertas para Arquitecto Técnico en España.</li>
          </ul>
        </Caja>

        <h2 className="text-2xl font-extrabold mt-10 mb-4 text-marca-carbon">
          🎯 ¿Por qué tengo que aprenderlo sí o sí?
        </h2>
        <p>
          Si miras ofertas de <strong>Construction Manager, Project Manager, Jefe de Obra, BIM Manager</strong>,
          el 8 de cada 10 piden Revit. No conocerlo te deja fuera. Conocerlo bien te diferencia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Flashcard
            color="#1565C0"
            frente={<>¿Qué es BIM?</>}
            reverso={<>Building Information Modeling. Metodología de trabajo colaborativo basada en un modelo 3D inteligente y compartido.</>}
          />
          <Flashcard
            color="#2E7D32"
            frente={<>¿Qué es un objeto paramétrico?</>}
            reverso={<>Un elemento que tiene parámetros editables (longitud, espesor, material…). Cambias el parámetro y el objeto se actualiza solo.</>}
          />
        </div>

        <h2 className="text-2xl font-extrabold mt-10 mb-4 text-marca-carbon">
          🆚 Revit vs AutoCAD
        </h2>

        <div className="overflow-x-auto my-5">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow">
            <thead>
              <tr className="bg-marca-rojo text-white">
                <th className="px-4 py-3 text-left">Aspecto</th>
                <th className="px-4 py-3 text-left">AutoCAD</th>
                <th className="px-4 py-3 text-left">Revit</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b">
                <td className="px-4 py-3 font-bold">Tipo de trabajo</td>
                <td className="px-4 py-3">Líneas y geometría</td>
                <td className="px-4 py-3">Objetos inteligentes</td>
              </tr>
              <tr className="bg-marca-crema border-b">
                <td className="px-4 py-3 font-bold">Cambios en proyecto</td>
                <td className="px-4 py-3">Hay que actualizar planos uno a uno</td>
                <td className="px-4 py-3">Todo se actualiza solo en tiempo real</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-bold">Mediciones</td>
                <td className="px-4 py-3">Manuales o por bloques</td>
                <td className="px-4 py-3">Automáticas, exportables a Presto</td>
              </tr>
              <tr className="bg-marca-crema">
                <td className="px-4 py-3 font-bold">Curva de aprendizaje</td>
                <td className="px-4 py-3">Media</td>
                <td className="px-4 py-3">Empinada al principio, brutal después</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Caja tipo="truco" titulo="Cómo lo presentas al cliente">
          "Con Revit tenemos un modelo único que sirve para presupuesto, planos, mediciones y certificaciones.
          Un cambio se refleja en todo automáticamente. Menos errores, menos tiempo, mejor coordinación."
        </Caja>

        <h2 className="text-2xl font-extrabold mt-10 mb-4 text-marca-carbon">
          📊 LOD: Nivel de Desarrollo
        </h2>

        <Acordeon titulo="LOD 100 — Conceptual" color="#1565C0" icono="🧊">
          <p>Volumen genérico. Para anteproyecto. No hay materiales ni detalle. Útil para ratios y estimaciones rápidas.</p>
        </Acordeon>
        <Acordeon titulo="LOD 200 — Aproximado" color="#1976D2" icono="📦">
          <p>Tamaño y forma aproximados. Aparecen sistemas constructivos. Se puede usar para proyecto básico.</p>
        </Acordeon>
        <Acordeon titulo="LOD 300 — Preciso" color="#1565C0" icono="🎯">
          <p>Geometría exacta. Cantidades fiables. <strong>Es el nivel mínimo para proyecto de ejecución.</strong></p>
        </Acordeon>
        <Acordeon titulo="LOD 400 — Fabricación" color="#0D47A1" icono="🔧">
          <p>Listo para taller. Incluye detalles de montaje, fijaciones, instalaciones. Lo que pide un industrial.</p>
        </Acordeon>
        <Acordeon titulo="LOD 500 — As-built" color="#001E5C" icono="🏗️">
          <p>Modelo verificado en obra. Lo que se ha construido realmente. Útil para mantenimiento (FM).</p>
        </Acordeon>

        <Quiz titulo="Reto del módulo 1" preguntas={PREGUNTAS} color={REVIT_META.color} />

        <Caja tipo="cliente" titulo="Próximo paso">
          En el módulo 2 verás la <strong>interfaz real de Revit</strong> con capturas. Sabrás dónde está cada cosa
          antes de abrirlo. ¡Vamos!
        </Caja>

        <NavegacionModulo
          cursoSlug="revit"
          color={REVIT_META.color}
          siguiente={siguiente ? { slug: siguiente.slug, titulo: siguiente.titulo } : undefined}
        />
      </main>

      <PieDePagina />
    </>
  );
}
