import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { Caja } from '@/components/Caja';
import { Acordeon } from '@/components/Acordeon';
import { GraficoLinea } from '@/components/GraficoLinea';
import { GraficoBarras } from '@/components/GraficoBarras';
import { GridPictogramas, Versus, Timeline } from '@/components/Pictograma';
import { Quiz } from '@/components/Quiz';

const PRECIO_ESPANA = [
  { x: '2007', y: 2100, evento: 'Pico burbuja' },
  { x: '2009', y: 1900 },
  { x: '2011', y: 1700 },
  { x: '2013', y: 1380, evento: 'Suelo crisis' },
  { x: '2015', y: 1430 },
  { x: '2017', y: 1530 },
  { x: '2019', y: 1660 },
  { x: '2021', y: 1750 },
  { x: '2023', y: 1990 },
  { x: '2025', y: 2280, evento: 'Récord 17 años' },
  { x: '2026', y: 2384 }
];

const PRECIO_MADRID = [
  { x: '2007', y: 3850 },
  { x: '2013', y: 2350 },
  { x: '2019', y: 3550 },
  { x: '2023', y: 4100 },
  { x: '2026', y: 4720 }
];

const ESTABILIDAD = [
  { etiqueta: 'Facility Management', valor: 9, color: '#2E7D32', destacado: true, nota: '+5%/año hasta 2031' },
  { etiqueta: 'Rehabilitación', valor: 8, color: '#1565C0', nota: 'Parque 25M envejece' },
  { etiqueta: 'Obra pública', valor: 7, color: '#6A1B9A', nota: 'Fondos UE' },
  { etiqueta: 'Construction Manager', valor: 7, color: '#00838F', nota: 'Demanda BIM' },
  { etiqueta: 'Project Manager', valor: 6, color: '#EF6C00', nota: 'Volátil con ciclo' },
  { etiqueta: 'Obra nueva residencial', valor: 5, color: '#C2185B', nota: 'Cíclica' },
  { etiqueta: 'Jefe de Obra', valor: 4, color: '#C8102E', nota: 'Estrés alto' }
];

const PREGUNTAS = [
  {
    pregunta: '¿Cuál es el subsector más estable y con menos estrés?',
    opciones: ['Obra nueva', 'Facility Management', 'Jefe de obra', 'Urbanismo'],
    correcta: 1,
    explicacion: 'FM gana: crece ~5% anual sin ciclos, oficina + visitas técnicas, sueldo 35-65K.'
  },
  {
    pregunta: 'Bono Alquiler Joven Madrid 2026:',
    opciones: ['100€/mes', '200€/mes', '300€/mes', '500€/mes'],
    correcta: 2,
    explicacion: '300€/mes hasta 48 meses. 14.400€ total. Renta máx 24.318€/año, 18-35 años.'
  },
  {
    pregunta: 'Coslada techo bono alquiler:',
    opciones: ['600€ piso', '750€ piso', '900€ piso', '1.200€ piso'],
    correcta: 2,
    explicacion: 'Coslada está en grupo 29 muni con techo subido: 900€ piso / 450€ habitación.'
  }
];

export default function FuturoVivienda() {
  return (
    <>
      <BarraSuperior />

      {/* HERO */}
      <header className="px-6 py-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1565C0 50%, #2E7D32 100%)' }}>
        <div className="max-w-5xl mx-auto relative text-center">
          <div className="inline-block bg-marca-amarillo text-marca-carbon font-extrabold px-4 py-2 rounded-full text-sm mb-5">
            🔮 INFORME · PRÓXIMOS 50 AÑOS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-md mb-4">
            Vivienda y construcción
            <br />
            <span className="text-marca-amarillo">2026 — 2076</span>
          </h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Análisis y plan personalizado para ti.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 justify-center text-xs sm:text-sm font-semibold">
            <a href="#perfil" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">👤 Tú</a>
            <a href="#evolucion" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">📈 Histórico</a>
            <a href="#coslada" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🏘️ Coslada</a>
            <a href="#prevision-10" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🔭 10 años</a>
            <a href="#prevision-50" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🌌 50 años</a>
            <a href="#estable" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🛡️ Más estable</a>
            <a href="#plan" className="bg-marca-amarillo text-marca-carbon rounded-full px-4 py-2 font-extrabold">🎯 Tu plan</a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-12 space-y-20">

        {/* ============== PERFIL ============== */}
        <section id="perfil" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-6 text-center">
            👤 <span className="subraya">Tu perfil</span>
          </h2>

          <GridPictogramas
            items={[
              { icono: '🎂', dato: '32', etiqueta: 'Años', color: '#C8102E', fondoColor: '#FFEBEE' },
              { icono: '🎓', dato: '2', etiqueta: 'Grados UPM', color: '#1565C0', fondoColor: '#E3F2FD' },
              { icono: '🏗️', dato: '5', etiqueta: 'Años obra', color: '#2E7D32', fondoColor: '#E8F5E9' },
              { icono: '📍', dato: 'Coslada', etiqueta: 'Ubicación', color: '#EF6C00', fondoColor: '#FFF3E0' }
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-2xl p-5 shadow-md border-l-8 border-marca-azul">
              <div className="text-2xl mb-1">🎓</div>
              <div className="font-extrabold text-marca-azul text-sm uppercase">Formación</div>
              <div className="text-marca-carbon font-bold mt-1">Doble Grado UPM</div>
              <div className="text-sm text-marca-carbon/70">Edificación + ADE · MH en Calidad</div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md border-l-8 border-marca-verde">
              <div className="text-2xl mb-1">💼</div>
              <div className="font-extrabold text-marca-verde text-sm uppercase">Experiencia</div>
              <div className="text-marca-carbon font-bold mt-1">5 años · obra + tech</div>
              <div className="text-sm text-marca-carbon/70">ARPADA · Habitat · ARTES BUHO CTO</div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md border-l-8 border-marca-rojo">
              <div className="text-2xl mb-1">🎯</div>
              <div className="font-extrabold text-marca-rojo text-sm uppercase">Objetivo</div>
              <div className="text-marca-carbon font-bold mt-1">FM · CM · PM</div>
              <div className="text-sm text-marca-carbon/70">Estable · sin estrés · 45-65K</div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md border-l-8 border-marca-naranja">
              <div className="text-2xl mb-1">🏡</div>
              <div className="font-extrabold text-marca-naranja text-sm uppercase">Vivienda</div>
              <div className="text-marca-carbon font-bold mt-1">Buscas independizarte</div>
              <div className="text-sm text-marca-carbon/70">Coslada o cerca · Bono Joven aplica ✓</div>
            </div>
          </div>

          <Caja tipo="info" titulo="Lectura clave">
            Doble grado <strong>AT + ADE</strong> + obra real + tech = perfil escaso y muy valioso para FM y asset management. <strong>No necesitas volver a Jefe de Obra para ganar dinero.</strong>
          </Caja>
        </section>

        {/* ============== EVOLUCIÓN ============== */}
        <section id="evolucion" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3 text-center">
            📈 <span className="subraya">Histórico</span> · 2008–2026
          </h2>
          <p className="text-marca-carbon/80 text-center mb-6">
            <strong>Burbuja → desplome → travesía → récord.</strong>
          </p>

          <Versus
            izq={{ titulo: 'Pico burbuja 2007', dato: '2.100 €/m²', nota: 'Caída posterior -35%', color: '#C8102E', icono: '🔝' }}
            der={{ titulo: 'Hoy 2026', dato: '2.384 €/m²', nota: 'Récord 17 años', color: '#2E7D32', icono: '🚀' }}
          />

          <GraficoLinea
            titulo="España · €/m² medio"
            subtitulo="Banco de España + Tinsa + Idealista"
            unidad="€/m²"
            puntos={PRECIO_ESPANA}
            color="#C8102E"
            alto={300}
          />

          <GraficoLinea
            titulo="Madrid capital · €/m²"
            subtitulo="Más volátil. Tirón fuerte desde 2019."
            unidad="€/m²"
            puntos={PRECIO_MADRID}
            color="#1565C0"
            alto={260}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <Acordeon titulo="2008-2013 · Desplome" color="#C8102E" icono="📉">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Burbuja revienta · BCE retira liquidez</li>
                <li>800.000 viviendas/año a 100.000</li>
                <li>Pérdida ~35-50% según zona</li>
              </ul>
            </Acordeon>
            <Acordeon titulo="2013-2019 · Travesía" color="#EF6C00" icono="🐢">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>SAREB limpia banca</li>
                <li>Llega capital extranjero</li>
                <li>Tipos al 0% reactivan</li>
              </ul>
            </Acordeon>
            <Acordeon titulo="2020-2026 · Récord" color="#2E7D32" icono="🚀">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>COVID + teletrabajo + ahorro</li>
                <li>Oferta congelada por costes +40%</li>
                <li>Demanda fuerte = precios al alza</li>
              </ul>
            </Acordeon>
          </div>
        </section>

        {/* ============== COSLADA ============== */}
        <section id="coslada" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-6 text-center">
            🏘️ <span className="subraya">Coslada</span> · tu zona
          </h2>

          <GridPictogramas
            items={[
              { icono: '🛒', dato: '2.450€', etiqueta: '€/m² compra', color: '#1565C0', fondoColor: '#E3F2FD' },
              { icono: '🏠', dato: '900€', etiqueta: '€/mes alquiler 2 dorm', color: '#2E7D32', fondoColor: '#E8F5E9' },
              { icono: '🛏️', dato: '450€', etiqueta: '€/mes habitación', color: '#EF6C00', fondoColor: '#FFF3E0' },
              { icono: '🚇', dato: '20 min', etiqueta: 'a Atocha', color: '#6A1B9A', fondoColor: '#F3E5F5' }
            ]}
          />

          <Versus
            izq={{ titulo: 'Madrid capital', dato: '4.720€/m²', nota: 'Sobrecalentado', color: '#C8102E', icono: '🏙️' }}
            der={{ titulo: 'Coslada', dato: '2.450€/m²', nota: 'Mejor precio/comunicaciones', color: '#2E7D32', icono: '🌳' }}
          />

          <div className="bg-gradient-to-br from-marca-amarillo to-marca-naranja rounded-2xl p-6 my-8 shadow-xl">
            <div className="text-marca-carbon font-extrabold text-2xl mb-2 flex items-center gap-3">
              <span className="text-4xl">💸</span>
              <span>BONO ALQUILER JOVEN 2026</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-3xl font-extrabold text-marca-rojo">300€</div>
                <div className="text-xs uppercase font-bold text-marca-carbon/60 mt-1">/mes</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-3xl font-extrabold text-marca-azul">48</div>
                <div className="text-xs uppercase font-bold text-marca-carbon/60 mt-1">meses</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-3xl font-extrabold text-marca-verde">14.400€</div>
                <div className="text-xs uppercase font-bold text-marca-carbon/60 mt-1">total</div>
              </div>
            </div>
            <div className="text-marca-carbon text-sm mt-4 font-semibold">
              ✅ Tienes 32 años · ✅ Coslada en grupo 29 (techo 900€) · ✅ No propietario
            </div>
          </div>

          <Caja tipo="truco" titulo="Tu jugada óptima">
            <strong>Años 1-2</strong>: habitación 450€ + bono 300€ = <strong>150€ reales</strong>. Ahorras agresivo.
            <br />
            <strong>Año 3</strong>: piso reformable 120K€ Coslada. Entrada 30K + impuestos 12K. Reformas tú = ganas valor.
          </Caja>
        </section>

        {/* ============== PREVISIÓN 10 AÑOS ============== */}
        <section id="prevision-10" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-6 text-center">
            🔭 <span className="subraya">10 años</span> · 2026–2036
          </h2>

          <GridPictogramas
            items={[
              { icono: '📊', dato: '+3.6%', etiqueta: 'Sector 2026', color: '#1565C0', fondoColor: '#E3F2FD' },
              { icono: '🏘️', dato: '150K', etiqueta: 'Viviendas/año', color: '#2E7D32', fondoColor: '#E8F5E9' },
              { icono: '🔧', dato: '79%', etiqueta: 'Déficit mano obra', color: '#C8102E', fondoColor: '#FFEBEE' },
              { icono: '📈', dato: '+2-4%', etiqueta: 'Precio anual', color: '#EF6C00', fondoColor: '#FFF3E0' }
            ]}
          />

          <Caja tipo="dato" titulo="Lo que va a pasar (alta probabilidad)">
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2"><span className="text-xl">📊</span> Precio €/m² sube <strong>+2-4% anual</strong></li>
              <li className="flex items-start gap-2"><span className="text-xl">🔧</span> Mano de obra: <strong>déficit 79%</strong> · sueldos suben</li>
              <li className="flex items-start gap-2"><span className="text-xl">🏗️</span> <strong>BIM obligatorio</strong> en obra pública ≥5M€</li>
              <li className="flex items-start gap-2"><span className="text-xl">♻️</span> Rehabilitación energética <strong>obligatoria</strong> por etapas (UE)</li>
              <li className="flex items-start gap-2"><span className="text-xl">🤖</span> <strong>IA + digital twin</strong> estándar en 2030+</li>
            </ul>
          </Caja>
        </section>

        {/* ============== PREVISIÓN 50 AÑOS ============== */}
        <section id="prevision-50" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3 text-center">
            🌌 <span className="subraya">50 años</span> · 2026–2076
          </h2>
          <p className="text-center text-marca-carbon/70 mb-8">6 fuerzas estructurales casi seguras</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { num: '1', icono: '👵', titulo: 'Demografía', resumen: 'Pirámide invertida. Millones de viviendas en herencia 2030-2055. Demanda concentrada en grandes urbes.', color: '#C8102E' },
              { num: '2', icono: '🌍', titulo: 'Clima', resumen: 'Obra nueva neutra en carbono desde 2030. Rehabilitación masiva del parque viejo. Tu CE3X/HULC vale 3x.', color: '#2E7D32' },
              { num: '3', icono: '💻', titulo: 'Remoto', resumen: '50% trabajo remoto. Centros saturados pierden cuota. Coslada/Torrejón ganan revalorización.', color: '#1565C0' },
              { num: '4', icono: '🤖', titulo: 'Tech constructiva', resumen: 'Prefabricación + impresión 3D + robots. Jefe de Obra clásico desaparece. PM coordina.', color: '#6A1B9A' },
              { num: '5', icono: '💼', titulo: 'Asset management', resumen: 'SOCIMIs y fondos gestionan parque. Necesitan FM, PM, Asset Managers. AT+ADE = perfil diana.', color: '#00838F' },
              { num: '6', icono: '🏠', titulo: 'Nuevos modelos', resumen: 'Cohousing, build-to-rent, coliving. Tu vivienda en propiedad antes 2030 = activo refugio.', color: '#EF6C00' }
            ].map((t) => (
              <div key={t.num} className="bg-white rounded-2xl p-5 shadow-md border-l-8" style={{ borderLeftColor: t.color }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full grid place-items-center text-white font-extrabold" style={{ background: t.color }}>{t.num}</div>
                  <div className="text-3xl">{t.icono}</div>
                  <div className="font-extrabold text-marca-carbon">{t.titulo}</div>
                </div>
                <p className="text-sm text-marca-carbon/80">{t.resumen}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============== SUBSECTOR ESTABLE ============== */}
        <section id="estable" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3 text-center">
            🛡️ <span className="subraya">Más estable</span> · ranking
          </h2>

          <GraficoBarras
            titulo="Estabilidad por subsector · 1–10"
            subtitulo="Volatilidad cíclica + estrés laboral + demanda estructural"
            unidad=""
            barras={ESTABILIDAD}
            max={10}
          />

          <div className="bg-gradient-to-br from-marca-verde to-emerald-700 rounded-2xl p-8 text-white shadow-xl mt-8">
            <div className="text-6xl text-center mb-3">🏆</div>
            <div className="text-center font-extrabold text-2xl sm:text-3xl mb-4">Facility Management gana</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
              <div className="bg-white/15 backdrop-blur rounded-xl p-3">
                <div className="text-2xl font-extrabold">+5%</div>
                <div className="opacity-80 text-xs">anual hasta 2031</div>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-xl p-3">
                <div className="text-2xl font-extrabold">35-65K</div>
                <div className="opacity-80 text-xs">€/año junior-senior</div>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-xl p-3">
                <div className="text-2xl font-extrabold">🧘</div>
                <div className="opacity-80 text-xs">Cero estrés obra</div>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-xl p-3">
                <div className="text-2xl font-extrabold">📍</div>
                <div className="opacity-80 text-xs">Oficina + visitas</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== PLAN ============== */}
        <section id="plan" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3 text-center">
            🎯 <span className="subraya">Tu plan</span> · 5 años
          </h2>
          <p className="text-center text-marca-carbon/70 mb-6">Dinero + calma + casa</p>

          <Timeline
            hitos={[
              { ano: 'AÑO 1 · 2026', titulo: 'Posicionarte FM/CM', icono: '🚀', color: '#C8102E', nota: 'Cerrar oferta 38-42K · Bono Joven · habitación Coslada' },
              { ano: 'AÑO 2 · 2027', titulo: 'Consolidar y ahorrar', icono: '💰', color: '#EF6C00', nota: 'Sueldo 45-50K + RUBEN COTON · ahorro 20K/año · ETF MSCI World' },
              { ano: 'AÑO 3 · 2028', titulo: 'Comprar piso reformable', icono: '🔑', color: '#2E7D32', nota: 'Piso 120K Coslada · entrada 30K · reforma tú (8-15K)' },
              { ano: 'AÑO 4-5 · 2029-30', titulo: 'FM Senior + paz mental', icono: '🧘', color: '#1565C0', nota: 'Facility Manager Senior 55-65K · piso revalorizado · vida estable' }
            ]}
          />

          <Caja tipo="aviso" titulo="Vigila estos riesgos">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Tipos BCE</strong> &gt;4% → hipotecas caras · espera ventana 2027-28</li>
              <li><strong>Geopolítica</strong> → inflación dispara, mejor antes que después</li>
              <li><strong>Tu tiempo</strong> → no aceptes oferta que rompa terapia 17-19h</li>
            </ul>
          </Caja>
        </section>

        {/* ============== QUIZ ============== */}
        <section className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3 text-center">
            🧠 <span className="subraya">Reto</span> final
          </h2>
          <Quiz titulo="🎯 Informe 50 años" preguntas={PREGUNTAS} color="#1565C0" />
        </section>

        <Caja tipo="cliente" titulo="Pensamiento final">
          <strong>Ingresos + calma</strong> a tu alcance. FM Madrid + compra reformable Coslada + bono joven 14.400€ + ritmo RUBEN COTON reducido. Solo hay que ejecutar.
        </Caja>
      </main>

      <PieDePagina />
    </>
  );
}
