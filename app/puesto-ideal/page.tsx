import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { Caja } from '@/components/Caja';
import { Acordeon } from '@/components/Acordeon';
import { GraficoBarras } from '@/components/GraficoBarras';
import { GridPictogramas, Versus, Timeline } from '@/components/Pictograma';
import { Quiz } from '@/components/Quiz';

const RANKING = [
  { etiqueta: 'Facility Manager → Director FM', valor: 8.7, color: '#2E7D32', destacado: true, nota: 'GANA' },
  { etiqueta: 'Asset Manager inmobiliario', valor: 8.5, color: '#1565C0', nota: 'Techo más alto' },
  { etiqueta: 'Property Manager senior', valor: 7.6, color: '#00838F', nota: 'Máxima calma' },
  { etiqueta: 'Consultor Real Estate', valor: 7.6, color: '#6A1B9A', nota: 'CBRE · JLL' },
  { etiqueta: 'Project Controller', valor: 7.5, color: '#EF6C00', nota: 'ADE brilla' },
  { etiqueta: 'Project Manager', valor: 7.4, color: '#F57C00', nota: 'Volátil' },
  { etiqueta: 'BIM Manager', valor: 7.4, color: '#0F0F0F', nota: 'Tech' },
  { etiqueta: 'Construction Manager', valor: 7.0, color: '#C2185B', nota: 'Cíclico' },
  { etiqueta: 'Jefe de Producción', valor: 5.3, color: '#9E9E9E', nota: 'Estrés alto' },
  { etiqueta: 'Jefe de Obra', valor: 4.8, color: '#C8102E', nota: 'Evitar' }
];

const PREGUNTAS = [
  {
    pregunta: '¿Cuál es tu puesto ideal según el análisis (dinero + calma + desarrollo + encaje)?',
    opciones: ['Jefe de Obra', 'Facility Manager', 'Comercial', 'Jefe de Producción'],
    correcta: 1,
    explicacion: 'Facility Manager gana 8,7/10. Usa AT + ADE + tech, estrés bajo, techo alto, demanda +5%/año.'
  },
  {
    pregunta: 'En tus 40 años de carrera, el sector se mueve de...',
    opciones: ['Gestión a obra', 'Obra a gestión del edificio', 'Todo igual', 'Desaparece'],
    correcta: 1,
    explicacion: 'El sector va de "obra nueva" a "gestión del edificio existente". Tu elección (FM/Asset) envejece bien.'
  },
  {
    pregunta: '¿A qué edad puedes llegar a Director FM (130K+) si activas las 5 palancas?',
    opciones: ['65 años', '55 años', '44-46 años', 'Nunca'],
    correcta: 2,
    explicacion: 'Con certificaciones + inglés + tu stack IA + marca personal + vivienda comprada, adelantas la cumbre a los 44-46.'
  }
];

export default function PuestoIdeal() {
  return (
    <>
      <BarraSuperior />
      <header className="px-6 py-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #E65100 100%)' }}>
        <div className="max-w-5xl mx-auto relative text-center">
          <div className="inline-block bg-marca-amarillo text-marca-negro font-extrabold px-4 py-2 rounded-full text-sm mb-5">
            🎯 INFORME 11 · TU PUESTO IDEAL
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-md mb-4">
            ¿Cuál es tu
            <br />
            <span className="text-marca-amarillo">puesto ideal?</span>
          </h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            40 años de carrera · máximo dinero · mínimo estrés · gran desarrollo.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2 justify-center text-xs sm:text-sm font-semibold">
            <a href="#perfil" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">👤 Tu perfil</a>
            <a href="#ranking" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🏆 Ranking</a>
            <a href="#mercado" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">📈 40 años</a>
            <a href="#escalera" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🪜 Escalera</a>
            <a href="#plan" className="bg-marca-amarillo text-marca-negro rounded-full px-4 py-2 font-extrabold">🎯 Plan</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-12 space-y-20">
        {/* PERFIL */}
        <section id="perfil" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-6 text-center">
            👤 <span className="subraya">Tu perfil</span> único
          </h2>
          <GridPictogramas
            items={[
              { icono: '🎓', dato: 'AT+ADE', etiqueta: 'Doble grado UPM', color: '#F57C00', fondoColor: '#FFF8E1' },
              { icono: '🏗️', dato: '5 años', etiqueta: 'Obra real', color: '#0F0F0F', fondoColor: '#FAFAFA' },
              { icono: '🤖', dato: 'IA', etiqueta: 'En producción', color: '#F57C00', fondoColor: '#FFF8E1' },
              { icono: '📍', dato: '32', etiqueta: 'Años · Coslada', color: '#0F0F0F', fondoColor: '#FAFAFA' }
            ]}
          />
          <Caja tipo="truco" titulo="Lectura clave">
            Tu combinación <strong>técnico + financiero + digital</strong> es escasa y premium. NO compites con AT normales. <strong>No necesitas volver a Jefe de Obra para ganar dinero.</strong>
          </Caja>
        </section>

        {/* RANKING */}
        <section id="ranking" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3 text-center">
            🏆 <span className="subraya">Ranking</span> de puestos
          </h2>
          <p className="text-center text-marca-carbon/70 mb-6 text-sm">
            Puntuación ponderada: dinero 30% · estrés bajo 30% · desarrollo 25% · encaje 15%
          </p>
          <GraficoBarras
            titulo="Puntuación /10 · cuál te conviene"
            subtitulo="Cuanto más alto, mejor para TU perfil y prioridades"
            unidad=""
            barras={RANKING}
            max={10}
          />
          <div className="bg-gradient-to-br from-marca-verde to-emerald-700 rounded-2xl p-8 text-white shadow-xl mt-8 text-center">
            <div className="text-6xl mb-3">🏆</div>
            <div className="font-extrabold text-2xl sm:text-3xl mb-2">Facility Manager gana</div>
            <p className="opacity-95 max-w-xl mx-auto">Único puesto que usa tus 4 patas (AT + ADE + tech + dirección) con estrés bajo y techo de 180K+.</p>
          </div>
        </section>

        {/* MERCADO 40 AÑOS */}
        <section id="mercado" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3 text-center">
            📈 <span className="subraya">Tus 40 años</span> · 2026-2066
          </h2>
          <Versus
            izq={{ titulo: 'Obra nueva', dato: 'Cíclica', nota: 'Crisis cada 10-15 años', color: '#C8102E', icono: '📉' }}
            der={{ titulo: 'Gestión edificio', dato: 'Estable', nota: 'El parque siempre necesita FM', color: '#2E7D32', icono: '📈' }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {[
              { num: '1', t: 'Demografía', d: 'Parque envejece · millones de viviendas en herencia 2030-2055', c: '#C8102E' },
              { num: '2', t: 'Clima', d: 'Rehabilitación energética obligatoria UE hasta 2050 · tu CE3X vale 3x', c: '#2E7D32' },
              { num: '3', t: 'Remoto', d: '50% remoto · Coslada/Torrejón se revalorizan vs centro', c: '#1565C0' },
              { num: '4', t: 'Tech', d: 'Prefabricación + robots · Jefe Obra clásico desaparece · PM coordina', c: '#6A1B9A' },
              { num: '5', t: 'Asset mgmt', d: 'SOCIMIs gestionan parque · necesitan FM/PM/Asset · AT+ADE diana', c: '#00838F' },
              { num: '6', t: 'Vivienda', d: 'Cohousing · build-to-rent · compra antes 2030 = activo refugio', c: '#EF6C00' }
            ].map((x) => (
              <div key={x.num} className="bg-white rounded-2xl p-4 shadow-md border-l-8" style={{ borderLeftColor: x.c }}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full grid place-items-center text-white font-extrabold text-sm" style={{ background: x.c }}>{x.num}</div>
                  <div className="font-extrabold text-marca-carbon">{x.t}</div>
                </div>
                <p className="text-sm text-marca-carbon/80">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ESCALERA */}
        <section id="escalera" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-6 text-center">
            🪜 <span className="subraya">Tu escalera</span> · 40 años
          </h2>
          <Timeline
            hitos={[
              { ano: 'AÑOS 32-34 · 2026', titulo: 'Facility Officer / Junior FM', icono: '🚀', color: '#C8102E', nota: '38-45K · entrar al sector · IFMA FMP' },
              { ano: 'AÑOS 35-38 · 2029', titulo: 'Facility Manager', icono: '💼', color: '#EF6C00', nota: '48-62K · RICS APC · comprar vivienda' },
              { ano: 'AÑOS 39-48 · 2034', titulo: 'Senior FM → Head / Asset Mgr', icono: '📈', color: '#F57C00', nota: '62-130K · MRICS · decisión clave' },
              { ano: 'AÑOS 50-62 · 2044', titulo: 'Director FM / Real Estate', icono: '👑', color: '#2E7D32', nota: '130-180K + bonus · comité dirección' },
              { ano: 'AÑOS 62-72 · 2057', titulo: 'Consultor / Consejero / Docente', icono: '🧘', color: '#1565C0', nota: '100-200K+ · part-time · eliges tú' }
            ]}
          />
          <Caja tipo="aviso" titulo="Tu escalera vs Jefe de Obra">
            A 40 años vista no hay color: tu curva <strong>sube y se vuelve más cómoda</strong>. La del Jefe de Obra se aplana y el cuerpo se desgasta.
          </Caja>
        </section>

        {/* PLAN */}
        <section id="plan" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-6 text-center">
            🎯 <span className="subraya">Tu plan</span> · esta semana
          </h2>
          <div className="space-y-3">
            {[
              'Actualizar LinkedIn: "Facility Manager · AT + ADE · Madrid · IA aplicada"',
              'Buscar y guardar 10 ofertas FM (LinkedIn + InfoJobs)',
              'Matricularse en IFMA FMP (60-80h)',
              'Conectar con 10 Facility Managers de Madrid',
              'Preparar elevator pitch de 60 segundos y practicarlo'
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border-l-4 border-marca-naranja">
                <span className="w-7 h-7 rounded-full bg-marca-naranja text-white grid place-items-center font-extrabold text-sm shrink-0">{i + 1}</span>
                <span className="text-marca-carbon">{a}</span>
              </div>
            ))}
          </div>

          <Acordeon titulo="Las 5 palancas que aceleran tu carrera" color="#F57C00" icono="⚡">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>IFMA + RICS</strong>: +10-20K por escalón</li>
              <li><strong>Inglés C1</strong>: acceso multinacional (x1,3 sueldo)</li>
              <li><strong>Tu stack IA</strong>: te promociona 2-3 años antes</li>
              <li><strong>Marca personal</strong>: te buscan a ti, no buscas tú</li>
              <li><strong>Comprar vivienda pronto</strong>: tranquilidad = eliges trabajos</li>
            </ul>
          </Acordeon>
        </section>

        {/* QUIZ */}
        <section className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3 text-center">
            🧠 <span className="subraya">Reto</span> final
          </h2>
          <Quiz titulo="🎯 Tu puesto ideal" preguntas={PREGUNTAS} color="#F57C00" />
        </section>

        <Caja tipo="cliente" titulo="Decisión final">
          <strong>Facility Manager → Asset Management.</strong> Usa todo tu perfil, poco estrés, paga muy bien a largo plazo, y se vuelve más cómodo cuanto mayor eres. La escalera correcta para tus 40 años.
        </Caja>
      </main>

      <PieDePagina />
    </>
  );
}
