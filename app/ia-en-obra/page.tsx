import { BarraSuperior } from '@/components/BarraSuperior';
import { PieDePagina } from '@/components/PieDePagina';
import { Caja } from '@/components/Caja';
import { Quiz } from '@/components/Quiz';
import { Acordeon } from '@/components/Acordeon';
import { Flashcard } from '@/components/Flashcard';

const PREGUNTAS = [
  {
    pregunta: '¿Para qué sirve un prompt bien escrito en IA?',
    opciones: ['Para hacer la IA más lenta', 'Para que la IA entienda exactamente lo que quieres y devuelva algo útil', 'Para evitar gastar dinero', 'Para mejorar el SEO'],
    correcta: 1,
    explicacion: 'La calidad del output depende del prompt. Especifica contexto, formato, restricciones y ejemplos.'
  },
  {
    pregunta: 'Para generar planos de ladrillería con IA, ¿qué necesita la IA como mínimo?',
    opciones: ['Solo tu nombre', 'Plano de planta + tipo de muro + cota de referencia', 'El presupuesto', 'Un archivo Excel vacío'],
    correcta: 1,
    explicacion: 'La IA necesita el plano base de planta, el tipo de muro a usar y referencias dimensionales.'
  },
  {
    pregunta: '¿Es bueno aceptar TODO lo que devuelve una IA en obra?',
    opciones: ['Sí, siempre', 'No, siempre verificar y revisar', 'Solo en domingo', 'Solo si paga el cliente'],
    correcta: 1,
    explicacion: 'La IA acelera, NO sustituye al AT. Verificar siempre. El responsable legal sigue siendo el profesional firmante.'
  }
];

export default function IAEnObra() {
  return (
    <>
      <BarraSuperior />
      <header
        className="px-6 py-16 text-white"
        style={{ background: 'linear-gradient(135deg, #C8102E, #6A1B9A, #1565C0)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-marca-amarillo text-marca-carbon font-extrabold px-4 py-1 rounded-full text-sm mb-4">
            🚀 TRANSVERSAL · NIVEL EXPERTO
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
            IA + Cloud en obra
          </h1>
          <p className="text-lg opacity-95 max-w-3xl">
            Cómo multiplicar tu productividad x5 sin volverte loco. Casos reales aplicables HOY
            a Revit, BIM 360, Presto y MS Project.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-12">
        <Caja tipo="info" titulo="Para qué sirve esta sección">
          Ya tienes los 8 cursos sobre los programas. Esto es el siguiente nivel: cómo usar IA
          y cloud para que el trabajo se haga <strong>solo</strong> mientras tú revisas. NO sustituye
          tu juicio profesional. SÍ multiplica tu velocidad.
        </Caja>

        <h2 className="text-3xl font-extrabold mt-12 mb-6 text-marca-carbon">
          🎯 5 casos reales aplicables YA
        </h2>

        <Acordeon titulo="1. Planos para ladrilleros generados por IA" color="#C8102E" icono="🧱">
          <p className="mb-3"><strong>Problema clásico:</strong> el plano de ladrillería se hace manual. Cada paño, cada hueco,
          cada solapamiento. Horas dibujando líneas en AutoCAD.</p>
          <p className="mb-3"><strong>Workflow IA:</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Exportas la planta del modelo Revit como DWG</li>
            <li>Subes el DWG a una IA especializada (ej. Hypar, Snaptrude AI, o tu propio agente con OpenAI + librerías CAD)</li>
            <li>Pides en lenguaje natural: "Genera plano de ladrillería con muro tipo M1, formato 11½ pie, hilada 25cm"</li>
            <li>La IA devuelve el DWG completo con líneas de hiladas, encuentros y cotas</li>
            <li>Tú revisas y validas. Si OK, certificas. Si no, ajustas el prompt</li>
          </ol>
          <Caja tipo="truco" titulo="Ahorro real">
            De 4-6 horas por planta a 15-30 minutos de revisión. x10 productividad.
          </Caja>
        </Acordeon>

        <Acordeon titulo="2. Análisis automático de fotos de incidencia" color="#1565C0" icono="📸">
          <p className="mb-3">Cada día sacas 200+ fotos en obra. Manualmente clasificarlas es imposible.</p>
          <p className="mb-3"><strong>Workflow IA (Vision):</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Subes carpeta a la IA de Google Cloud Vision / Azure Computer Vision / GPT-4 Vision</li>
            <li>La IA detecta automáticamente: "pintura desconchada", "grifería suelta", "azulejo roto"</li>
            <li>Cada foto se etiqueta automáticamente</li>
            <li>Crea Issue en ACC con foto + etiqueta + ubicación GPS (de los metadatos EXIF)</li>
            <li>Tú revisas el lote completo en 5 minutos en vez de 2 horas</li>
          </ul>
          <Caja tipo="obra" titulo="Caso real">
            Una promoción de 50 viviendas, 1.500 fotos finales. Sin IA: 1 semana clasificando. Con IA: 1 mañana.
          </Caja>
        </Acordeon>

        <Acordeon titulo="3. Checklists de calidad auto-generados" color="#2E7D32" icono="✅">
          <p className="mb-3">Cada tipo de obra tiene su checklist. Estructura, fachada, cubierta, instalaciones, acabados.</p>
          <p className="mb-3"><strong>Workflow:</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Pides a la IA: "Genera checklist de calidad para entrega de vivienda con 4 dormitorios, 2 baños, cocina y salón"</li>
            <li>La IA genera 80-120 puntos de control específicos basados en CTE</li>
            <li>Importas el checklist a ACC como plantilla</li>
            <li>Aplicas a las 50 viviendas con un click</li>
            <li>El AT en obra solo va marcando con tablet</li>
          </ol>
        </Acordeon>

        <Acordeon titulo="4. Resúmenes de reuniones y RFI" color="#EF6C00" icono="📝">
          <p className="mb-3">Las reuniones de obra generan kilómetros de actas. Las RFI complejas tienen 20 emails de hilo.</p>
          <p className="mb-3"><strong>Workflow IA:</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Grabas la reunión (con permiso) → transcripción automática (Whisper de OpenAI)</li>
            <li>Le pides a la IA: "Genera acta con decisiones, acuerdos y responsables. Formato corto"</li>
            <li>Generación en 30 segundos</li>
            <li>Para RFI: pegas el hilo completo, IA resume y propone respuesta</li>
            <li>Tú lees, corriges, envías</li>
          </ul>
        </Acordeon>

        <Acordeon titulo="5. Pedidos de materiales optimizados" color="#6A1B9A" icono="🛒">
          <p className="mb-3">¿Cuánto azulejo pides? ¿Cuánto pavimento? Los desperdicios cuestan miles.</p>
          <p className="mb-3"><strong>Workflow IA:</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Exportas la medición de Revit (m² de pavimento, m² de azulejo, m³ hormigón)</li>
            <li>Le pides a la IA: "Calcula el pedido con merma estándar 8% + roturas 3% + reposiciones 2%"</li>
            <li>La IA da cantidad exacta a comprar</li>
            <li>Comparativa con proveedores (precio por lote, plazo, transporte)</li>
            <li>Tú firmas el pedido optimizado</li>
          </ol>
        </Acordeon>

        <h2 className="text-3xl font-extrabold mt-14 mb-6 text-marca-carbon">
          ☁️ Cloud · stack mínimo recomendado
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <Flashcard
            color="#1565C0"
            frente={<>Almacenamiento</>}
            reverso={<>Google Drive o OneDrive Business: 1-2 TB por proyecto. Sincronización tablet/PC automática.</>}
          />
          <Flashcard
            color="#2E7D32"
            frente={<>Gestión obra</>}
            reverso={<>Autodesk Construction Cloud (ACC). Issues + Cost + Docs + Coordinate en un solo lugar.</>}
          />
          <Flashcard
            color="#EF6C00"
            frente={<>Comunicación</>}
            reverso={<>WhatsApp Business + email vinculados a ACC. Las decisiones quedan en ACC, no en WhatsApp.</>}
          />
          <Flashcard
            color="#6A1B9A"
            frente={<>IA y agentes</>}
            reverso={<>ChatGPT Plus, Claude Pro, Copilot. Para tareas puntuales. Para agentes serios, Anthropic API.</>}
          />
        </div>

        <Caja tipo="aviso" titulo="Aviso responsable">
          La IA NO firma proyectos. NO sustituye al técnico competente. NO se le puede delegar la
          responsabilidad legal. La IA es una HERRAMIENTA. El AT sigue siendo el profesional que firma,
          comprueba y certifica. Cualquier error de la IA es responsabilidad de quien la usa sin revisar.
        </Caja>

        <h2 className="text-3xl font-extrabold mt-14 mb-6 text-marca-carbon">
          🎓 Reto: ¿Has captado la idea?
        </h2>

        <Quiz titulo="Reto IA en obra" preguntas={PREGUNTAS} color="#C8102E" />

        <Caja tipo="cliente" titulo="Próximo paso">
          Vuelve a los cursos específicos (Revit, BIM 360, Presto, MS Project) y aplica estas técnicas
          en cada uno. La IA es transversal: lo que aprendes aquí lo usas en TODOS los demás cursos.
        </Caja>
      </main>

      <PieDePagina />
    </>
  );
}
