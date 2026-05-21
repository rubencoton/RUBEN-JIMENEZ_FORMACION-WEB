import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { CabeceraModulo, NavegacionModulo } from '@/components/CajaModulo';
import { Caja } from '@/components/Caja';
import { Quiz } from '@/components/Quiz';
import { OrdenarPasos } from '@/components/Drag';
import { ZonaImagen } from '@/components/ZonaImagen';
import { REVIT_META, REVIT_MODULOS } from '@/content/revit/meta';

const PREGUNTAS = [
  {
    pregunta: '¿Dónde se encuentran los comandos como "Muro", "Suelo" o "Cubierta"?',
    opciones: ['En la barra de estado inferior', 'En la cinta de opciones (Ribbon), pestaña Arquitectura', 'En el menú Archivo', 'En el navegador de proyectos'],
    correcta: 1,
    explicacion: 'La pestaña Arquitectura del Ribbon (cinta) contiene los comandos de modelado básico: Muro, Puerta, Ventana, Suelo, Cubierta, etc.'
  },
  {
    pregunta: '¿Para qué sirve el panel de Propiedades?',
    opciones: ['Cambiar los colores del programa', 'Ver y editar las características del elemento seleccionado', 'Imprimir planos', 'Crear vistas nuevas'],
    correcta: 1,
    explicacion: 'Propiedades muestra y permite editar TODOS los datos del elemento seleccionado: altura, restricciones, tipo, fase, comentarios…'
  },
  {
    pregunta: 'Atajo de teclado para abrir Vista por defecto (3D):',
    opciones: ['F8', 'CTRL + D', 'WT (Window Tile)', 'Botón Vista 3D en barra rápida'],
    correcta: 3,
    explicacion: 'El botón de la casita azul 🏠 en la barra de acceso rápido (arriba a la izquierda) abre la vista 3D. También CTRL + D en algunas versiones.'
  }
];

const PASOS_INICIO = [
  '1. Abrir Revit y seleccionar plantilla',
  '2. Crear niveles del edificio en una vista de alzado',
  '3. Modelar muros perimetrales en la vista Planta Nivel 1',
  '4. Añadir puertas y ventanas',
  '5. Generar vista 3D para revisar el modelo'
];

export default function ModuloInterfaz() {
  const idx = 1;
  const m = REVIT_MODULOS[idx];
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
        <Caja tipo="info" titulo="Vista general">
          La interfaz de Revit tiene <strong>6 zonas clave</strong>. Si las dominas, te mueves rápido por el programa
          sin perderte. Vamos a verlas una a una.
        </Caja>

        <h2 className="text-2xl font-extrabold mt-10 mb-4 text-marca-carbon">🖥️ Captura real del programa</h2>

        <ZonaImagen
          src="/imagenes/revit/interfaz-completa.png"
          alt="Interfaz completa de Autodesk Revit"
          pie="Interfaz general de Revit. Las 6 zonas numeradas las explicamos abajo."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div className="bg-white rounded-2xl p-5 border-t-8 border-marca-rojo shadow">
            <div className="text-3xl mb-2">1️⃣</div>
            <div className="font-extrabold text-lg mb-1">Barra de acceso rápido</div>
            <div className="text-sm text-marca-carbon/70">Guardar, deshacer, vista 3D, sincronizar nube.</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border-t-8 border-marca-azul shadow">
            <div className="text-3xl mb-2">2️⃣</div>
            <div className="font-extrabold text-lg mb-1">Cinta (Ribbon)</div>
            <div className="text-sm text-marca-carbon/70">Pestañas: Arquitectura, Estructura, Sistemas, Insertar, Anotar, Vista, Gestionar.</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border-t-8 border-marca-verde shadow">
            <div className="text-3xl mb-2">3️⃣</div>
            <div className="font-extrabold text-lg mb-1">Navegador de Proyectos</div>
            <div className="text-sm text-marca-carbon/70">Vistas, planos, leyendas, familias y grupos. Tu mapa del proyecto.</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border-t-8 border-marca-naranja shadow">
            <div className="text-3xl mb-2">4️⃣</div>
            <div className="font-extrabold text-lg mb-1">Propiedades</div>
            <div className="text-sm text-marca-carbon/70">Edita los datos del elemento seleccionado. Aquí cambias casi todo.</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border-t-8 border-marca-morado shadow">
            <div className="text-3xl mb-2">5️⃣</div>
            <div className="font-extrabold text-lg mb-1">Área de trabajo</div>
            <div className="text-sm text-marca-carbon/70">Donde dibujas y modelas. Cada pestaña abierta es una vista.</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border-t-8 border-marca-turquesa shadow">
            <div className="text-3xl mb-2">6️⃣</div>
            <div className="font-extrabold text-lg mb-1">Barra de estado</div>
            <div className="text-sm text-marca-carbon/70">Información del elemento bajo el cursor + filtros + escala.</div>
          </div>
        </div>

        <Caja tipo="atajo" titulo="Atajos imprescindibles desde el primer día">
          <ul className="list-disc pl-5 space-y-1 font-mono text-sm">
            <li><strong>WA</strong> · Muro (Wall)</li>
            <li><strong>DR</strong> · Puerta (Door)</li>
            <li><strong>WN</strong> · Ventana (Window)</li>
            <li><strong>SL</strong> · Línea de división (Split Line)</li>
            <li><strong>VG</strong> · Visibilidad/Gráficos</li>
            <li><strong>ZA</strong> · Zoom todo</li>
            <li><strong>VV</strong> · Ver Vista</li>
            <li><strong>SF</strong> · Plano de referencia</li>
          </ul>
        </Caja>

        <h2 className="text-2xl font-extrabold mt-10 mb-4 text-marca-carbon">🧭 El Navegador de Proyectos a fondo</h2>
        <p className="leading-relaxed">
          Es la columna de la izquierda. Aquí controlas TODO lo que tiene el proyecto:
        </p>

        <ZonaImagen
          src="/imagenes/revit/navegador-proyectos.png"
          alt="Navegador de Proyectos de Revit ampliado"
          pie="Navegador con vistas, planos, familias y grupos. Doble clic para abrir."
        />

        <OrdenarPasos
          titulo="Ordena los pasos típicos al empezar un proyecto"
          pasosCorrectos={PASOS_INICIO}
          color="#1565C0"
        />

        <Quiz titulo="Reto del módulo 2" preguntas={PREGUNTAS} color={REVIT_META.color} />

        <Caja tipo="cliente" titulo="Próximo paso">
          Módulo 3: <strong>Plantillas y niveles</strong>. Cómo arrancar bien un proyecto desde el primer clic.
        </Caja>

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
