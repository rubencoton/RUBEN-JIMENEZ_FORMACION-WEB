import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { Quiz } from '@/components/Quiz';

const PREGUNTAS_GENERAL = [
  {
    pregunta: '🏛️ ¿Qué metodología abrevia las siglas BIM?',
    opciones: ['Building Information Modeling', 'Basic Industrial Method', 'Building Internal Manager', 'Best In Modeling'],
    correcta: 0,
    explicacion: 'BIM = Building Information Modeling. Metodología, no programa.'
  },
  {
    pregunta: '📊 ¿En qué fase se calcula el EVM (Earned Value Management)?',
    opciones: ['Antes de empezar', 'Durante la ejecución', 'Solo al final', 'No se usa en obra'],
    correcta: 1,
    explicacion: 'El EVM se calcula DURANTE la ejecución para comparar lo planeado con lo realmente ejecutado.'
  },
  {
    pregunta: '⚠️ ¿A partir de qué PEC es obligatorio Estudio de Seguridad y Salud (ESS)?',
    opciones: ['PEC ≥ 150.000 €', 'PEC ≥ 450.759 €', 'PEC ≥ 1.000.000 €', 'Siempre, sin importar PEC'],
    correcta: 1,
    explicacion: 'RD 1627/1997 art.4: ESS obligatorio si PEC ≥ 450.759 €.'
  },
  {
    pregunta: '♻️ En CE3X, ¿qué letra es la mejor calificación energética?',
    opciones: ['A', 'D', 'G', 'Z'],
    correcta: 0,
    explicacion: 'La escala va de A (mejor, menor consumo) a G (peor).'
  },
  {
    pregunta: '📐 En Presto/Arquímedes, ¿qué extensión tiene el archivo de intercambio estándar?',
    opciones: ['.xlsx', '.dwg', '.bc3', '.pdf'],
    correcta: 2,
    explicacion: '.bc3 es el formato estándar de presupuestos en España.'
  },
  {
    pregunta: '✏️ ¿Qué atajo en AutoCAD activa Polilínea?',
    opciones: ['L', 'PL', 'POL', 'PLY'],
    correcta: 1,
    explicacion: 'PL = Polyline en AutoCAD.'
  },
  {
    pregunta: '💼 ECO 805/2003 regula…',
    opciones: ['Eficiencia energética', 'Valoración y tasación de inmuebles', 'Seguridad y salud', 'Permisos urbanísticos'],
    correcta: 1,
    explicacion: 'La Orden ECO 805/2003 es la base normativa de tasaciones inmobiliarias en España.'
  },
  {
    pregunta: '🏛️ ¿Qué formato es estándar abierto para BIM?',
    opciones: ['DWG', 'RVT', 'IFC', 'NWC'],
    correcta: 2,
    explicacion: 'IFC = Industry Foundation Classes. Estándar abierto buildingSMART.'
  }
];

export default function JugarPage() {
  return (
    <>
      <BarraSuperior />
      <header className="bg-gradient-animado text-white py-16 px-6 text-center">
        <div className="text-6xl mb-3">🎮</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 drop-shadow">
          Concurso del Profesor
        </h1>
        <p className="text-lg opacity-95 max-w-2xl mx-auto">
          8 preguntas mezcladas de los 7 cursos. ¿Cuánto sabes sin haber estudiado todavía?
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-10">
        <div className="bg-marca-amarillo/20 border-2 border-marca-amarillo rounded-2xl p-5 mb-8 text-center">
          <div className="font-extrabold text-marca-carbon mb-1">📋 Reglas</div>
          <p className="text-sm text-marca-carbon/80">
            Pulsa la respuesta que creas correcta. Te diremos al instante si es verdad o no, y por qué.
            <br />
            Al final, verás tu puntuación. No hay tiempo límite. ¡Disfruta!
          </p>
        </div>

        <Quiz titulo="🏆 CONCURSO GENERAL" preguntas={PREGUNTAS_GENERAL} color="#C8102E" />
      </main>

      <PieDePagina />
    </>
  );
}
