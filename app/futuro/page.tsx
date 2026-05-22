import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { Caja } from '@/components/Caja';
import { Acordeon } from '@/components/Acordeon';
import { Flashcard } from '@/components/Flashcard';
import { GraficoLinea } from '@/components/GraficoLinea';
import { GraficoBarras } from '@/components/GraficoBarras';

// Evolución precio €/m² España (datos Tinsa/INE/Idealista/Banco España)
const PRECIO_ESPANA = [
  { x: '2007', y: 2100, evento: '🔝 Pico burbuja' },
  { x: '2009', y: 1900 },
  { x: '2011', y: 1700 },
  { x: '2013', y: 1380, evento: '📉 Suelo crisis' },
  { x: '2015', y: 1430 },
  { x: '2017', y: 1530 },
  { x: '2019', y: 1660 },
  { x: '2021', y: 1750 },
  { x: '2023', y: 1990 },
  { x: '2025', y: 2280, evento: '🆕 Récord 17 años' },
  { x: '2026', y: 2384 }
];

// Madrid capital €/m² (datos Idealista histórico)
const PRECIO_MADRID = [
  { x: '2007', y: 3850 },
  { x: '2013', y: 2350 },
  { x: '2019', y: 3550 },
  { x: '2023', y: 4100 },
  { x: '2026', y: 4720 }
];

// Subsectores construcción: estabilidad estimada (escala 1-10)
const ESTABILIDAD = [
  { etiqueta: 'Facility Management (FM)', valor: 9, color: '#2E7D32', destacado: true, nota: '+4.98% anual hasta 2031' },
  { etiqueta: 'Rehabilitación + eficiencia', valor: 8, color: '#1565C0', nota: 'Parque 25M viviendas envejece' },
  { etiqueta: 'Obra pública / infraestructura', valor: 7, color: '#6A1B9A', nota: 'Ciclo electoral, fondos UE' },
  { etiqueta: 'Construction Manager (CM)', valor: 7, color: '#00838F', nota: 'Demanda BIM/coordinación' },
  { etiqueta: 'Project Manager (PM) inmobiliario', valor: 6, color: '#EF6C00', nota: 'Volátil con ciclo' },
  { etiqueta: 'Obra nueva residencial', valor: 5, color: '#C2185B', nota: 'Cíclica, muy sensible a tipos' },
  { etiqueta: 'Jefe de Obra / Producción', valor: 4, color: '#C8102E', nota: 'Estrés alto, ciclo duro' }
];

const PREGUNTAS = [
  {
    pregunta: 'En el subsector de construcción que MÁS crece año tras año sin ciclos fuertes es…',
    opciones: ['Obra nueva residencial', 'Facility Management', 'Jefe de obra', 'Suelo y urbanismo'],
    correcta: 1,
    explicacion: 'FM crece ~5% anual de forma sostenida porque el parque español envejece y requiere mantenimiento continuo. No depende del ciclo de obra nueva.'
  },
  {
    pregunta: 'El bono de alquiler joven Madrid 2026 da hasta…',
    opciones: ['100€/mes', '200€/mes', '300€/mes', '500€/mes'],
    correcta: 2,
    explicacion: '300€/mes hasta 48 meses (4 años) si tienes entre 18-35 años y rentas <24.318€/año.'
  },
  {
    pregunta: 'Coslada tiene techo de ayuda alquiler joven a…',
    opciones: ['600€', '750€', '900€', '1.200€'],
    correcta: 2,
    explicacion: 'Coslada es uno de los 29 municipios donde el techo sube a 900€ piso / 450€ habitación por nivel de precio medio.'
  }
];

export default function FuturoVivienda() {
  return (
    <>
      <BarraSuperior />
      <header className="px-6 py-16 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1565C0 50%, #2E7D32 100%)' }}>
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-block bg-marca-amarillo text-marca-carbon font-extrabold px-4 py-1 rounded-full text-sm mb-4">
            🔮 INFORME ESTRATÉGICO · ANÁLISIS PERSONALIZADO
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-md">
            Los próximos 50 años
            <br />
            <span className="text-marca-amarillo">de la vivienda y la construcción</span>
          </h1>
          <p className="text-lg sm:text-xl opacity-95 max-w-3xl">
            Análisis del mercado inmobiliario español 2008–2026, previsión a 10 y 50 años, y
            <strong> recomendaciones personalizadas</strong> para Rubén Jiménez González (32 años,
            Coslada, AT+ADE, perfil tranquilo/estable/rentable).
          </p>
          <nav className="mt-8 flex flex-wrap gap-2 text-sm font-semibold">
            <a href="#perfil" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">👤 Tu perfil</a>
            <a href="#evolucion" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">📈 Evolución 2008-2026</a>
            <a href="#coslada" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🏘️ Coslada</a>
            <a href="#prevision-10" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🔭 10 años</a>
            <a href="#prevision-50" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🌌 50 años</a>
            <a href="#estable" className="bg-white/20 backdrop-blur rounded-full px-4 py-2 hover:bg-white/30 transition">🛡️ Más estable</a>
            <a href="#plan" className="bg-marca-amarillo text-marca-carbon rounded-full px-4 py-2 font-extrabold">🎯 Tu plan</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-12">

        {/* ============== PERFIL ============== */}
        <section id="perfil" className="scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-6">
            <span className="subraya">👤 Tu perfil</span> en una mirada
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-5 shadow-md border-l-8 border-marca-rojo">
              <div className="text-xs font-extrabold uppercase text-marca-rojo mb-2">🎓 FORMACIÓN</div>
              <div className="font-bold text-marca-carbon">Doble Grado UPM</div>
              <div className="text-sm text-marca-carbon/70 mt-1">
                Edificación + ADE (2015–2020) · MH Calidad · Téc. Sup. Proyectos · PRL completa
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md border-l-8 border-marca-azul">
              <div className="text-xs font-extrabold uppercase text-marca-azul mb-2">💼 EXPERIENCIA</div>
              <div className="font-bold text-marca-carbon">5 años obra + tecnología</div>
              <div className="text-sm text-marca-carbon/70 mt-1">
                ARPADA (JP, 152 viv) → Habitat (50+ obras) → ARTES BUHO (CTO) + RUBEN COTON® I+D
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md border-l-8 border-marca-verde">
              <div className="text-xs font-extrabold uppercase text-marca-verde mb-2">🎯 OBJETIVO</div>
              <div className="font-bold text-marca-carbon">FM / CM / PM</div>
              <div className="text-sm text-marca-carbon/70 mt-1">
                Estabilidad + sueldo bueno + bajo estrés · Suelo aceptable: JP. NO Jefe de Obra.
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md border-l-8 border-marca-naranja">
              <div className="text-xs font-extrabold uppercase text-marca-naranja mb-2">🏡 PERSONAL</div>
              <div className="font-bold text-marca-carbon">32 años · Coslada</div>
              <div className="text-sm text-marca-carbon/70 mt-1">
                Buscas independizarte cerca de casa. Terapia 17–19h 2 días/sem. Aplicable Bono Joven.
              </div>
            </div>
          </div>

          <Caja tipo="info" titulo="Lectura clave de tu perfil">
            Tienes un cocktail raro y muy valioso: <strong>Arquitecto Técnico + ADE + experiencia obra real (152 viviendas) + tech/IA</strong>.
            Eso te abre puertas donde el sector está mejor pagado y menos saturado (FM, control técnico, tecnología constructiva, asset management).
            No tienes que volver a Jefe de Obra para ganar dinero. De hecho, te conviene NO volver.
          </Caja>
        </section>

        {/* ============== EVOLUCIÓN ============== */}
        <section id="evolucion" className="scroll-mt-20 mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3">
            <span className="subraya">📈 Evolución</span> 2008–2026
          </h2>
          <p className="text-marca-carbon/80 mb-6 leading-relaxed">
            Lo que ha hecho el €/m² medio en España en los últimos 18 años. El gráfico cuenta una historia:
            burbuja → desplome → travesía → recuperación → nuevos máximos.
          </p>

          <GraficoLinea
            titulo="España · €/m² medio histórico"
            subtitulo="Datos consolidados Banco de España, Tinsa e Idealista"
            unidad="€/m²"
            puntos={PRECIO_ESPANA}
            color="#C8102E"
            alto={300}
          />

          <GraficoLinea
            titulo="Madrid capital · €/m² medio"
            subtitulo="Mucho más volátil. Tirón fuerte 2019–2026."
            unidad="€/m²"
            puntos={PRECIO_MADRID}
            color="#1565C0"
            alto={260}
          />

          <Acordeon titulo="📉 2008-2013: el desplome que marcó una generación" color="#C8102E" icono="📉">
            <p>España llega a 2007 con 2.100€/m² medio. La burbuja era doble: tipos al 1% del BCE + construcción frenética (más de 800.000 viviendas iniciadas/año). Cuando estalla Lehman + intervención de cajas, la financiación se corta. Caída ~35% en 5 años. Muchas zonas costeras pierden 50%.</p>
          </Acordeon>

          <Acordeon titulo="🐢 2013-2019: la travesía y rebote progresivo" color="#EF6C00" icono="🐢">
            <p>Suelo en ~1.380€/m². La banca limpia balances con la SAREB. Llega capital extranjero (Blackstone, Cerberus). Tipos al 0%, el mercado revive lentamente. Madrid y Barcelona tiran primero. Costas y secundarias mucho más lentas.</p>
          </Acordeon>

          <Acordeon titulo="🚀 2020-2026: COVID, escasez, récord histórico" color="#2E7D32" icono="🚀">
            <p>COVID provocó freno breve, luego acelerón brutal: ahorro embolsado + teletrabajo dispersó demanda fuera de centros. La construcción se ralentiza por costes (materiales +40%) y mano de obra. Resultado: oferta congelada vs demanda fuerte = precios al alza continuo. 2025 cierra como mejor año desde 2008 (+4% sector).</p>
          </Acordeon>
        </section>

        {/* ============== COSLADA ============== */}
        <section id="coslada" className="scroll-mt-20 mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3">
            <span className="subraya">🏘️ Tu zona</span> · Coslada y corredor del Henares
          </h2>
          <p className="text-marca-carbon/80 mb-6 leading-relaxed">
            Coslada está en una de las zonas con mejor relación calidad/precio/comunicaciones de Madrid. Línea 7 metro,
            Cercanías C-2/C-7/C-8, R-3, A-2. A 20 min de Atocha y a 10 min del aeropuerto.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-5 text-center shadow-md border-t-8 border-marca-rojo">
              <div className="text-3xl font-extrabold text-marca-rojo">2.450€</div>
              <div className="text-xs uppercase font-bold text-marca-carbon/60 mt-1">€/m² compra · Coslada</div>
              <div className="text-xs text-marca-carbon/50 mt-1">vs Madrid capital 4.720€</div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-md border-t-8 border-marca-verde">
              <div className="text-3xl font-extrabold text-marca-verde">~900€</div>
              <div className="text-xs uppercase font-bold text-marca-carbon/60 mt-1">Alquiler medio piso 2 dorm</div>
              <div className="text-xs text-marca-carbon/50 mt-1">Habitación ~450€</div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-md border-t-8 border-marca-amarillo">
              <div className="text-3xl font-extrabold text-marca-naranja">300€</div>
              <div className="text-xs uppercase font-bold text-marca-carbon/60 mt-1">Bono Joven /mes</div>
              <div className="text-xs text-marca-carbon/50 mt-1">Hasta 48 meses</div>
            </div>
          </div>

          <Caja tipo="dato" titulo="Bono Alquiler Joven 2026-2030 — Comunidad de Madrid">
            <ul className="list-disc pl-5 space-y-1">
              <li>Edad: 18–35 años (tienes 32 ✅)</li>
              <li>Renta anual neta &lt; 24.318€ — depende de cómo cobres en RUBEN COTON / nueva empresa</li>
              <li>No ser propietario de vivienda</li>
              <li>Empadronado en la vivienda alquilada</li>
              <li>Coslada está en el grupo de 29 municipios con techo subido (900€ piso / 450€ habitación)</li>
              <li>Hasta 300€/mes durante 48 meses = <strong>14.400€ acumulados</strong> de ayuda directa</li>
            </ul>
          </Caja>

          <Caja tipo="truco" titulo="Estrategia óptima para tu caso">
            <strong>Año 1-2</strong>: alquilar habitación 450€ o piso compartido en Coslada. Solicitas Bono Joven (300€) → coste neto ~150€/mes.
            Aprovechas para ahorrar agresivo y construir entrada.
            <br /><br />
            <strong>Año 3-4</strong>: con sueldo FM/CM consolidado y ahorro de ~25-30K€, compras piso reformable Coslada / Torrejón / San Fernando
            (~110-130K€) con hipoteca al 20-25% entrada. Reformas tú (con tu propia formación) ganando valor.
          </Caja>
        </section>

        {/* ============== PREVISIÓN 10 AÑOS ============== */}
        <section id="prevision-10" className="scroll-mt-20 mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3">
            <span className="subraya">🔭 Próximos 10 años</span> · 2026-2036
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <Flashcard
              color="#1565C0"
              frente={<>📊 Crecimiento sector</>}
              reverso={<>+3.6% 2026, +3.2% 2027, +2.2% 2028. Moderación pero sostenido. España uno de los motores europeos.</>}
            />
            <Flashcard
              color="#2E7D32"
              frente={<>🏘️ Vivienda nueva</>}
              reverso={<>De 110K/año habituales a 150K/año en 2026. Pico de demanda, oferta no acompaña → precios firmes.</>}
            />
            <Flashcard
              color="#EF6C00"
              frente={<>🔧 Rehabilitación</>}
              reverso={<>Fondos NGEU expiran agosto 2026. Tras 2027 se ralentiza, pero el envejecimiento del parque (media 50 años) mantiene demanda estructural.</>}
            />
          </div>

          <Caja tipo="dato" titulo="Tendencias estructurales 10 años (alta probabilidad)">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Precio €/m²</strong>: crecimiento moderado +2-4% anual, con riesgo de correcciones puntuales si suben mucho los tipos. Madrid sigue sobre la media.</li>
              <li><strong>Mano de obra</strong>: déficit estructural del 79%. Sueldos en obra suben fuerte. Imán para FM y mantenimiento técnico.</li>
              <li><strong>BIM obligatorio</strong>: licitaciones públicas ≥5M€ con BIM como estándar de facto. Quien lo domina gana.</li>
              <li><strong>Sostenibilidad</strong>: rehabilitación energética (CTE DB-HE, CE3X) se convierte en obligatoria por etapas (UE Fit for 55).</li>
              <li><strong>IA y digital twin</strong>: empieza a ser estándar en grandes constructoras 2030+.</li>
            </ul>
          </Caja>
        </section>

        {/* ============== PREVISIÓN 50 AÑOS ============== */}
        <section id="prevision-50" className="scroll-mt-20 mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3">
            <span className="subraya">🌌 Próximos 50 años</span> · 2026-2076
          </h2>
          <p className="text-marca-carbon/80 mb-6 leading-relaxed">
            Aquí ya no son números exactos, sino fuerzas estructurales. Pero hay 6 tendencias casi seguras que
            cambiarán el sector:
          </p>

          <Acordeon titulo="1. Demografía: España envejece y la inmigración compensa parcialmente" color="#C8102E" icono="👵">
            <p>Pirámide invertida. La generación baby-boom (60-70 años hoy) dejará millones de viviendas en herencia 2030-2055.
            Mucha oferta saldrá al mercado de segunda mano. Demanda concentrada en grandes ciudades (Madrid, Barcelona, Málaga).
            <strong>Lectura</strong>: subir precio en grandes urbes, estabilidad/caída en zonas rurales/España vaciada.</p>
          </Acordeon>

          <Acordeon titulo="2. Cambio climático: norma constructiva se endurece radicalmente" color="#2E7D32" icono="🌍">
            <p>Edificios neutros en carbono obligatorios a partir de 2030 en obra nueva. Renovación masiva del parque viejo (25M viviendas) por etapas.
            <strong>Lectura</strong>: oro para rehabilitación + certificación + FM. Tu formación CE3X/HULC vale 3x en 2035.</p>
          </Acordeon>

          <Acordeon titulo="3. Trabajo: 50% remoto, mercado vivienda se reequilibra" color="#1565C0" icono="💻">
            <p>El centro de Madrid deja de ser premium absoluto. Coslada, Torrejón, Alcalá ganan cuota. Periferia con buenas comunicaciones se revaloriza más que centro saturado.
            <strong>Lectura</strong>: Coslada está bien posicionada para 2030-2050.</p>
          </Acordeon>

          <Acordeon titulo="4. Tecnología constructiva: prefabricación, impresión 3D, robots" color="#6A1B9A" icono="🤖">
            <p>Obra menos manual, más industrial. Los Jefes de Obra clásicos se sustituyen por Project Managers de coordinación.
            <strong>Lectura</strong>: tu perfil tech+AT es justo el que más sube. JP clásico tiende a desaparecer.</p>
          </Acordeon>

          <Acordeon titulo="5. Asset management: edificio como activo financiero" color="#00838F" icono="💼">
            <p>Fondos inmobiliarios y SOCIMIs gestionan cada vez más parque (residencial, oficina, logístico). Necesitan Facility Managers, Property Managers, Asset Managers.
            <strong>Lectura</strong>: ADE + Edificación es el doble grado PERFECTO para este nicho. Es donde está la pasta sin estrés de obra.</p>
          </Acordeon>

          <Acordeon titulo="6. Vivienda asequible y modelos nuevos: cohousing, build-to-rent, coliving" color="#EF6C00" icono="🏠">
            <p>El acceso a vivienda joven seguirá tensionado. Modelos alternativos (alquiler institucional, cohousing, cooperativas) crecerán fuerte.
            <strong>Lectura</strong>: te conviene tener una vivienda en propiedad antes de 2030. Es activo refugio frente a inflación y revalorización segura.</p>
          </Acordeon>
        </section>

        {/* ============== SUBSECTOR ESTABLE ============== */}
        <section id="estable" className="scroll-mt-20 mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3">
            <span className="subraya">🛡️ ¿Qué subsector</span> es el más estable?
          </h2>
          <p className="text-marca-carbon/80 mb-6 leading-relaxed">
            Ranking de estabilidad estimada (1 = volátil/estresante; 10 = muy estable):
          </p>

          <GraficoBarras
            titulo="Estabilidad por subsector · escala 1-10"
            subtitulo="Combina volatilidad cíclica + estrés laboral + demanda estructural"
            unidad=""
            barras={ESTABILIDAD}
            max={10}
          />

          <Caja tipo="cliente" titulo="Conclusión: Facility Management = tu paraíso laboral">
            <strong>Por qué FM gana</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Crecimiento constante +5% anual hasta 2031 (luego sostenido por envejecimiento parque)</li>
              <li>Trabajo en oficina + visitas técnicas. <strong>Cero estrés de plazo de obra</strong>.</li>
              <li>Horario relativamente normal (compatible con tu terapia 17-19h)</li>
              <li>Sueldo €35-65K para Junior/Senior. Senior con gestión de cartera grande puede llegar a €80-100K.</li>
              <li>Tu doble grado (AT + ADE) + experiencia obra + tech es PERFIL DIANA</li>
              <li>Demanda en aumento: SOCIMIs, fondos, hospitales, oficinas, hoteles, retail</li>
            </ul>
          </Caja>
        </section>

        {/* ============== PLAN ============== */}
        <section id="plan" className="scroll-mt-20 mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3">
            <span className="subraya">🎯 Tu plan</span> · 5 años · dinero, calma, casa
          </h2>

          <div className="space-y-4 mb-8">
            {[
              { ano: 'AÑO 1 · 2026', titulo: 'Posicionarte como FM/CM en Madrid', items: ['Aplicar 5-10 ofertas FM/CM/PM por semana', 'Continuar Realia FM, abrir UNIR docencia tarde', 'Cerrar 1ª oferta con sueldo bruto ≥38K', 'Mantener RUBEN COTON® como soporte económico paralelo', 'Solicitar Bono Alquiler Joven · alquilar habitación Coslada 450€'] },
              { ano: 'AÑO 2 · 2027', titulo: 'Consolidar y construir ahorro', items: ['Sueldo bruto FM/CM 45-50K + RUBEN COTON ingresos extra', 'Coste vida Coslada con bono: 150€/mes alquiler real', 'Objetivo ahorro: 18-22K acumulado fin de año', 'Empezar comprar acciones/fondos (no banco): ETF MSCI World'] },
              { ano: 'AÑO 3 · 2028', titulo: 'Búsqueda y compra de vivienda', items: ['Buscar piso reformable Coslada/Torrejón ~120K€', 'Hipoteca 75% LTV, 30 años, tipo fijo si <3%', 'Entrada 30K€ + impuestos 12K€', 'Reforma tú aprovechando tu propia formación (8-15K) — añades valor'] },
              { ano: 'AÑO 4-5 · 2029-2030', titulo: 'Crecer en FM senior + paz mental', items: ['Buscar puesto Facility Manager Senior 55-65K (cartera de edificios)', 'Hipoteca consolidada en piso ya valorizado +15-25%', 'Asentar terapia, hobbies, vida social estable', 'Mantener RUBEN COTON® como hobby/extra sin presión'] }
            ].map((bloque, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-8" style={{ borderLeftColor: ['#C8102E', '#EF6C00', '#2E7D32', '#1565C0'][i] }}>
                <div className="px-6 py-3 font-extrabold text-white" style={{ background: ['#C8102E', '#EF6C00', '#2E7D32', '#1565C0'][i] }}>
                  {bloque.ano}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-marca-carbon mb-3">{bloque.titulo}</h3>
                  <ul className="space-y-2">
                    {bloque.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2 text-marca-carbon">
                        <span className="text-marca-verde font-extrabold">✓</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <Caja tipo="aviso" titulo="Riesgos a vigilar">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Tipos de interés</strong>: si BCE sube tipos &gt;4%, hipotecas se encarecen y precios pueden corregir 5-10%. Espera ventana 2027-2028 si los tipos bajan.</li>
              <li><strong>Crisis geopolítica</strong>: guerras + energía pueden disparar inflación. Compra antes que después.</li>
              <li><strong>Tu tiempo</strong>: no aceptes oferta que rompa terapia 17-19h. No hay sueldo que compense salud mental.</li>
            </ul>
          </Caja>
        </section>

        {/* ============== QUIZ ============== */}
        <section className="scroll-mt-20 mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-carbon mb-3">
            🧠 ¿Has captado lo importante?
          </h2>
          <ImportedQuiz preguntas={PREGUNTAS} />
        </section>

        <Caja tipo="cliente" titulo="Pensamiento final">
          Tu generación es la primera que necesita dos cosas a la vez: <strong>ingresos</strong> + <strong>calma</strong>.
          Las dos las tienes a tiro. FM en Madrid + Coslada compra reformable + bono joven 14.400€ + reducción ritmo
          DJ/RUBEN COTON. La fórmula está clara. Solo hay que ejecutarla con paciencia.
        </Caja>
      </main>

      <PieDePagina />
    </>
  );
}

// importamos Quiz aquí porque viene desde client component
import { Quiz } from '@/components/Quiz';
function ImportedQuiz({ preguntas }: { preguntas: typeof PREGUNTAS }) {
  return <Quiz titulo="🎯 Reto final · informe 50 años" preguntas={preguntas} color="#1565C0" />;
}
