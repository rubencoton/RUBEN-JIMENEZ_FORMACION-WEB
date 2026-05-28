import type { ModuloData } from '@/content/revit/modulos-data';

export const AUTOCAD_DATA: Record<string, ModuloData> = {
  'que-cambio-desde-2012': {
    bloques: [
      { tipo: 'parrafo', texto: 'Tu memoria muscular de 2010-2012 sigue intacta al 90%. Este curso es un refresco quirúrgico: aprendes solo lo que cambió, no empiezas de cero.' },
      { tipo: 'titulo', texto: '🎯 Lo que NO ha cambiado' },
      { tipo: 'lista', items: [
        'Lógica básica: líneas, polilíneas, capas, bloques, cotas',
        'Comandos clásicos: LINE, CIRCLE, OFFSET, TRIM, COPY, MOVE, ROTATE, MIRROR',
        'Sistema de coordenadas UCS / WCS',
        'Espacios Modelo y Papel (Model / Paper Space)',
        'Atajos de teclado: L, C, O, TR, CO, M, RO, MI...',
        'Formato .dwg compatible hacia adelante desde 2018'
      ]},
      { tipo: 'titulo', texto: '🆕 Los 5 cambios clave desde 2012' },
      { tipo: 'lista', items: [
        'Interfaz Ribbon central (el espacio clásico se recupera con CUI)',
        'Toolsets especializados gratis desde 2019: Architecture, MEP, Electrical...',
        'Trace (2022): marcas colaborativas tipo papel vegetal digital',
        'Smart Blocks (2024): AutoCAD sugiere bloques automáticamente',
        'Autodesk AI Assistant (2027): lenguaje natural dentro del DWG'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Memoria muscular intacta', texto: 'Si en alguna duda escribes el comando en la línea de comandos, casi seguro funciona igual que en 2012. La línea de comandos no ha cambiado.' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'AutoCAD vs Revit en obra', texto: 'AutoCAD para detalles 1:10, planos rápidos y visado. Revit cuando hay BIM contratado. No compiten: se complementan.' }
    ],
    flashcards: [
      { frente: '¿Qué porcentaje de tu memoria muscular de 2012 sigue válida en AutoCAD 2027?', reverso: 'El 90%. Solo hay que aprender los cambios: interfaz Ribbon, Smart Blocks, Trace y AI Assistant.' },
      { frente: '¿Desde qué versión de AutoCAD los Toolsets especializados son gratuitos?', reverso: 'Desde la versión 2019 (incluidos en la licencia Pro). Para AT en edificación, el clave es Architecture Toolset.' },
      { frente: '¿Qué es Trace en AutoCAD?', reverso: 'Función de AutoCAD 2022+. Permite marcar sobre un plano .dwg sin modificarlo, igual que papel vegetal digital.' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuánto tiempo necesita un AT con experiencia en AutoCAD 2010-2012 para ser operativo en AutoCAD 2027?',
        opciones: ['Un curso de 40 horas desde cero', 'Entre 5 y 6 horas de refresco focalizado', 'Al menos 2 semanas intensivas', 'No hay diferencia, es el mismo programa'],
        correcta: 1,
        explicacion: 'La base lógica no caduca. Con 5-6 horas de refresco quirúrgico se recupera el dominio operativo completo.'
      },
      {
        pregunta: '¿El formato .dwg de AutoCAD 2027 puede abrirse sin problema en AutoCAD 2018?',
        opciones: ['No, los formatos son completamente incompatibles', 'Sí, el formato es compatible hacia adelante desde 2018', 'Solo si se exporta como .dxf', 'Solo archivos sin bloques dinámicos'],
        correcta: 1,
        explicacion: 'El formato .dwg es compatible hacia adelante desde 2018. De 2027 a 2018 puede dar avisos pero se puede usar SAVEAS con versión antigua.'
      },
      {
        pregunta: '¿Cuál de estas funciones NO existía en AutoCAD antes de 2022?',
        opciones: ['TRIM', 'OFFSET', 'Trace (marcas colaborativas)', 'LAYER'],
        correcta: 2,
        explicacion: 'Trace se introdujo en la versión 2022 como herramienta de colaboración tipo papel vegetal digital.'
      }
    ]
  },

  'interfaz-ribbon-vs-clasica': {
    bloques: [
      { tipo: 'parrafo', texto: 'La interfaz moderna de AutoCAD 2027 centra todo en la Cinta (Ribbon). Si vienes de 2012, la línea de comandos sigue intacta: es tu plan B universal cuando no encuentres algo en la Ribbon.' },
      { tipo: 'titulo', texto: '🖥️ Zonas principales de la pantalla' },
      { tipo: 'lista', items: [
        'Menú aplicación (icono A grande): Nuevo, Abrir, Guardar, Imprimir',
        'Barra de acceso rápido: comandos favoritos a un clic',
        'Cinta (Ribbon): comandos agrupados por pestañas (Inicio, Insertar, Anotar...)',
        'Área de dibujo: donde trabajas',
        'Pestañas Modelo / Presentación: cambiar entre Model y Paper Space',
        'Línea de comandos: tu memoria muscular intacta',
        'Barra de estado inferior: SNAP, ORTHO, OSNAP, LWT...'
      ]},
      { tipo: 'titulo', texto: '🔧 Recuperar la interfaz clásica' },
      { tipo: 'parrafo', texto: 'Desde AutoCAD 2014, el espacio clásico no aparece por defecto. Se puede recrear con el comando CUI creando un workspace propio con barras de herramientas.' },
      { tipo: 'caja', tipoCaja: 'atajo', titulo: 'Comandos de interfaz imprescindibles', texto: 'Ctrl+0: minimiza Ribbon · Ctrl+1: panel Propiedades · F2: historial línea comandos · F3: OSNAP · F8: ORTHO · WSCURRENT: cambiar workspace · CUI: personalizar todo' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Workspace propio recomendado', texto: 'Crea un workspace "MI_CLASICO" con CUI y la Ribbon desactivada. Podrás alternar entre interfaz moderna y clásica con un clic desde la barra de estado inferior.' }
    ],
    flashcards: [
      { frente: '¿Qué comando abre el editor de personalización de interfaz en AutoCAD?', reverso: 'CUI (Customize User Interface). Permite crear workspaces, activar barras de herramientas y personalizar la Ribbon.' },
      { frente: '¿Cómo se cambia el workspace en AutoCAD 2027?', reverso: 'Con el comando WSCURRENT o haciendo clic en el icono de ruedita en la barra de estado inferior.' }
    ],
    preguntas: [
      {
        pregunta: '¿Qué tecla abre el historial completo de la línea de comandos en AutoCAD?',
        opciones: ['F1', 'F2', 'F8', 'F3'],
        correcta: 1,
        explicacion: 'F2 abre el historial completo de la línea de comandos. Útil para ver los últimos pasos ejecutados.'
      },
      {
        pregunta: '¿Qué atajo minimiza la Ribbon para ganar espacio de dibujo?',
        opciones: ['Ctrl+1', 'Ctrl+0', 'Ctrl+R', 'Ctrl+W'],
        correcta: 1,
        explicacion: 'Ctrl+0 minimiza la Cinta (Ribbon) y maximiza el área de dibujo.'
      },
      {
        pregunta: '¿El espacio de trabajo clásico de AutoCAD (barras de herramientas sin Ribbon) está disponible en AutoCAD 2027 directamente?',
        opciones: ['Sí, en el menú Vista', 'No, pero se puede recrear con CUI creando un workspace propio', 'Sí, pulsando F12', 'No existe ninguna forma de recuperarlo'],
        correcta: 1,
        explicacion: 'Desde 2014 el espacio clásico no está preinstalado, pero se puede recrear con CUI: nuevo workspace con barras de herramientas y Ribbon desactivada.'
      }
    ]
  },

  'comandos-esenciales': {
    bloques: [
      { tipo: 'parrafo', texto: 'El 80% de los atajos de AutoCAD 2012 son idénticos en 2027. Aprendes solo el 20% que cambió o se mejoró.' },
      { tipo: 'titulo', texto: '⌨️ Atajos que siguen igual' },
      { tipo: 'lista', items: [
        'Dibujo: L (LINE), C (CIRCLE), PL (POLYLINE), REC (RECTANGLE), A (ARC), H (HATCH)',
        'Modificación: M (MOVE), CO (COPY), RO (ROTATE), MI (MIRROR), SC (SCALE), O (OFFSET), F (FILLET)',
        'Capas: LA (LAYER), LAYISO (aislar capa), LAYUNISO (restaurar)',
        'Anotación: DT (DTEXT), MT (MTEXT), DLI (DIMLINEAR)',
        'Bloques: B (BLOCK), I (INSERT), BE (BEDIT)',
        'Edición: E (ERASE), X (EXPLODE), J (JOIN), MA (MATCHPROP)'
      ]},
      { tipo: 'titulo', texto: '🆕 Cambios y novedades que debes saber' },
      { tipo: 'lista', items: [
        'TRIM y EXTEND: modo Quick desde 2021 (no necesitas seleccionar borde primero)',
        'DIM (sin sufijo): detecta automáticamente el tipo de cota desde 2016',
        'QUICKMEASURE (QM): mide distancias y áreas pasando el cursor, sin comandos',
        'PDFIMPORT: convierte contenido PDF en geometría editable de AutoCAD',
        'MEASUREGEOM: distancia, área y ángulo en un solo comando',
        'COUNT: cuenta cuántas instancias de un bloque hay en el plano',
        'PUBLISH: imprime múltiples planos a PDF de golpe'
      ]},
      { tipo: 'caja', tipoCaja: 'atajo', titulo: 'Combinación de oro para capas', texto: 'LAYISO + LAYUNISO: aíslas la capa que te interesa, trabajas sobre ella y restauras la vista normal. Imprescindible en planos con muchas capas.' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'PDFIMPORT en obra real', texto: 'Si el proyectista te pasa un plano en PDF, PDFIMPORT lo convierte en geometría editable. Ya no redibujas lo que ya está hecho. Ahorro típico: 4 horas por plano.' }
    ],
    flashcards: [
      { frente: '¿Qué novedad tiene el comando TRIM en AutoCAD 2021 y posteriores?', reverso: 'Modo Quick activado por defecto: no necesitas seleccionar el borde de corte primero. Tocas y se ajusta automáticamente. Para volver al modo clásico pulsa T en la primera ejecución.' },
      { frente: '¿Para qué sirve el comando QUICKMEASURE (QM)?', reverso: 'Muestra distancias, áreas y dimensiones de cualquier región cerrada al pasar el cursor sobre el plano, sin teclear coordenadas ni seleccionar puntos.' },
      { frente: '¿Qué hace PDFIMPORT en AutoCAD?', reverso: 'Convierte el contenido vectorial de un PDF (líneas, textos) en geometría editable de AutoCAD. Evita redibujar planos recibidos en PDF.' }
    ],
    preguntas: [
      {
        pregunta: '¿Qué comando de AutoCAD detecta automáticamente el tipo de cota (lineal, radial, angular) según el objeto seleccionado?',
        opciones: ['DIMLINEAR', 'DIMALIGNED', 'DIM', 'DIMORDINATE'],
        correcta: 2,
        explicacion: 'El comando DIM (sin sufijo), disponible desde AutoCAD 2016, detecta el tipo de objeto y aplica la cota correcta automáticamente.'
      },
      {
        pregunta: '¿Cuál es el atajo de QUICKMEASURE en AutoCAD 2027?',
        opciones: ['QP', 'QS', 'QM', 'ME'],
        correcta: 2,
        explicacion: 'QM activa QUICKMEASURE. Al pasar el cursor sobre el dibujo, muestra medidas automáticamente sin teclear nada.'
      },
      {
        pregunta: 'El comando PUBLISH sirve para...',
        opciones: ['Publicar el archivo en Autodesk Docs', 'Imprimir un solo plano en PDF', 'Imprimir múltiples planos de un Sheet Set en un solo paso', 'Compartir el DWG con colaboradores'],
        correcta: 2,
        explicacion: 'PUBLISH genera PDFs de todos los sheets de un Sheet Set de una vez. Imprescindible para entregas de proyecto con 20-50 planos.'
      }
    ]
  },

  'novedades-2014-2027': {
    bloques: [
      { tipo: 'parrafo', texto: 'Las novedades más importantes para un Arquitecto Técnico son Sheet Set Manager y Architecture Toolset. Domínalas antes que el resto.' },
      { tipo: 'titulo', texto: '📋 Sheet Set Manager (SSM)' },
      { tipo: 'parrafo', texto: 'Gestor que organiza todos los planos de un proyecto en un solo conjunto. Acceso con Ctrl+4 o comando SHEETSET.' },
      { tipo: 'lista', items: [
        'Organiza plantas, alzados, secciones y detalles en subsets',
        'Imprime todo el set de planos con un clic (clic derecho → Publish)',
        'Mantiene consistencia de numeración y rótulos',
        'Imprescindible para entregas de proyecto de ejecución con 30-50 planos'
      ]},
      { tipo: 'titulo', texto: '🏗️ Ranking de novedades por importancia AT' },
      { tipo: 'lista', items: [
        '1. Sheet Set Manager: gestión conjuntos planos y entrega obra',
        '2. Architecture Toolset: bloques + espacios + cotas automáticas (gratis con Pro 2019+)',
        '3. QUICKMEASURE: medir pasando el cursor',
        '4. PDFIMPORT: PDF a geometría editable',
        '5. Trace (2022) y Markup Import (2025): colaboración con la Dirección Facultativa',
        '6. Smart Blocks (2024): AutoCAD sugiere bloques automáticamente',
        '7. COUNT: contar instancias de bloque para mediciones'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Architecture Toolset en obra', texto: 'Incluye bloques arquitectónicos predefinidos (muros, puertas, ventanas), cuadro de superficies automático y plantillas. No reemplaza Revit, pero acelera mucho el dibujo para detalles constructivos.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Diferenciador profesional', texto: 'Tener una biblioteca corporativa de bloques en Block Library cloud y dominar SSM son señales de senior. Te diferencian en propuestas y entrevistas FM/PM/CM.' }
    ],
    flashcards: [
      { frente: '¿Cuál es el atajo de teclado para abrir el Sheet Set Manager?', reverso: 'Ctrl+4 o el comando SHEETSET.' },
      { frente: '¿Desde qué versión de AutoCAD está disponible el Architecture Toolset de forma gratuita?', reverso: 'Desde AutoCAD 2019, incluido en la licencia Pro. Para AT en edificación es el toolset más útil.' },
      { frente: '¿Qué es Markup Import en AutoCAD 2025?', reverso: 'Función que importa las marcas hechas con iPad y Apple Pencil (o Bluebeam) sobre un PDF e inserta esas marcas automáticamente en el .dwg original.' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es la principal ventaja del Sheet Set Manager para un Arquitecto Técnico?',
        opciones: ['Permite dibujar en 3D más fácil', 'Gestiona y publica todos los planos del proyecto de forma organizada', 'Sustituye a los bloques dinámicos', 'Conecta AutoCAD con Revit directamente'],
        correcta: 1,
        explicacion: 'SSM organiza todos los planos en subsets, mantiene numeración coherente y permite publicar todo el set a PDF con un solo clic.'
      },
      {
        pregunta: '¿Qué hace el comando COUNT en AutoCAD 2022?',
        opciones: ['Cuenta el número de capas del dibujo', 'Cuenta cuántas instancias de un tipo de bloque hay en el plano', 'Mide el área total del dibujo', 'Cuenta los objetos seleccionados'],
        correcta: 1,
        explicacion: 'COUNT permite contar cuántas ventanas, puertas o sanitarios (bloques) hay en un plano. El resultado es exportable a Excel para mediciones en Presto o Arquímedes.'
      },
      {
        pregunta: 'El Architecture Toolset de AutoCAD incluye...',
        opciones: ['Solo plantillas de papel', 'Bloques arquitectónicos, espacios con cálculo de superficies y mediciones automáticas', 'Módulos de cálculo estructural', 'Exportación directa a IFC sin intervención manual'],
        correcta: 1,
        explicacion: 'Architecture Toolset incluye bloques arquitectónicos predefinidos, espacios con cuadro de superficies automático y mediciones. Es gratis con Pro 2019+.'
      }
    ]
  },

  'ia-assistant-2027': {
    bloques: [
      { tipo: 'parrafo', texto: 'El Autodesk AI Assistant es un asistente de IA integrado en AutoCAD 2027 (Tech Preview). Entiende lenguaje natural y accede al contexto de tu archivo .dwg.' },
      { tipo: 'titulo', texto: '🤖 Qué puede hacer el AI Assistant' },
      { tipo: 'lista', items: [
        'Generar geometría desde descripción: "Dibuja un muro de 6 m con espesor 25 cm"',
        'Etiquetar bloques automáticamente: "Etiqueta todas las ventanas con V01, V02..."',
        'Calcular superficies: "¿Cuántos m2 de superficie útil tiene esta planta?"',
        'Cotación en lote: "Cota todo según norma DIN 406"',
        'Generar lista de materiales por capa o bloque',
        'Revisar accesibilidad: "Revisa este plano contra CTE DB-SUA"',
        'Exportar a IFC identificando muros, puertas y ventanas'
      ]},
      { tipo: 'titulo', texto: '⚖️ AI Assistant interno vs Claude externo' },
      { tipo: 'lista', items: [
        'AutoCAD AI: tiene acceso directo al DWG, genera geometría, etiqueta y mide',
        'Claude o ChatGPT: razonamiento complejo, normativa, redacción y scripts LISP',
        'Recomendación: usarlos juntos. Cada uno donde es mejor'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Tech Preview: verifica siempre', texto: 'El AI Assistant puede equivocarse. Especialmente en geometría compleja, convenios de capas locales o queries en español. Verifica siempre lo que genera antes de entregar.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Ventaja competitiva 2026-2028', texto: 'Saber usar AutoCAD AI eficientemente es diferenciador ahora. Para 2030 será estándar. Un AT que automatiza con IA ahorra 3-5x en tareas repetitivas y puede facturar más en menos tiempo.' }
    ],
    flashcards: [
      { frente: '¿Cómo se activa el Autodesk AI Assistant en AutoCAD 2027?', reverso: 'Pestaña Inicio → AI Assistant, o el comando AIASSIST.' },
      { frente: '¿Cuál es la limitación principal del AI Assistant de AutoCAD 2027?', reverso: 'Es un Tech Preview: puede fallar, responde mejor en inglés que en español, tarda 5-15 segundos y no sustituye el criterio profesional. Siempre hay que verificar lo que genera.' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es la principal ventaja del AI Assistant de AutoCAD frente a Claude o ChatGPT externos para tareas de dibujo?',
        opciones: ['Es más inteligente en razonamiento lógico', 'Accede directamente al archivo .dwg y genera geometría dentro del programa', 'Tiene acceso a internet actualizado', 'Responde más rápido que los LLMs externos'],
        correcta: 1,
        explicacion: 'El AI Assistant tiene acceso al contexto del DWG (capas, bloques, geometría) y puede actuar directamente sobre el dibujo. Claude o ChatGPT externos no pueden tocar el DWG.'
      },
      {
        pregunta: '¿Para qué tarea es MÁS recomendable usar Claude o ChatGPT en lugar del AI Assistant de AutoCAD?',
        opciones: ['Etiquetar 50 ventanas automáticamente', 'Cotación en lote de una planta', 'Razonamiento sobre normativa CTE y generación de scripts LISP', 'Calcular superficies de una planta'],
        correcta: 2,
        explicacion: 'Claude o ChatGPT son más fuertes en razonamiento complejo, normativa, redacción y generación de scripts LISP. El AI de AutoCAD es mejor para acciones directas sobre el DWG.'
      },
      {
        pregunta: '¿El protocolo de contexto que usa Autodesk AI en AutoCAD 2027 es el mismo que el Model Context Protocol (MCP) de Anthropic?',
        opciones: ['Sí, Autodesk adoptó el estándar de Anthropic', 'No, Autodesk usa un protocolo propio aunque a veces se abrevia igual', 'Sí, son idénticos desde 2026', 'No existe protocolo: la IA trabaja a ciegas'],
        correcta: 1,
        explicacion: 'Aunque algunas fuentes abrevian el protocolo de Autodesk como MCP, NO es el Model Context Protocol abierto de Anthropic. Son protocolos distintos con objetivos similares.'
      }
    ]
  },

  'caso-practico-planos-obra': {
    bloques: [
      { tipo: 'parrafo', texto: 'Objetivo: producir 8 planos de obra entregables a cliente y visado colegial. Vivienda unifamiliar 200 m2 en Móstoles, 4 plantas.' },
      { tipo: 'titulo', texto: '📋 Workflow paso a paso (DWG → PDF visado)' },
      { tipo: 'lista', items: [
        '1. Setup: plantilla acadiso.dwt, unidades Decimal precisión 2, capas por categoría',
        '2. Importar arquitectura: PDFIMPORT si llega en PDF, o DWG exportado desde Revit',
        '3. Bloques: crear puertas (P82, P90) y ventanas (V60, V120, V180) o usar Architecture Toolset',
        '4. Cotación: capa COTA activa + comando DIM automático + cotas exteriores e interiores',
        '5. Etiquetas: AI Assistant para P01-P09 y V01-V12 automáticamente',
        '6. Sheet Set Manager: 8 sheets (A001 emplazamiento, A101-A103 plantas, A201-A202 alzados, A301 sección, A401 detalle 1:10)',
        '7. Plot Style: monochrome.ctb para impresión en blanco y negro',
        '8. PUBLISH: PDF unificado con los 8 planos'
      ]},
      { tipo: 'titulo', texto: '📐 Convenios para planos de obra en España' },
      { tipo: 'lista', items: [
        'Formato: A1 (594x841 mm) o A2 para detalles',
        'Escala plantas y alzados: 1:50 (residencial)',
        'Escala detalles constructivos: 1:10 o 1:25',
        'Grosores línea: norma UNE 1027:1995',
        'Texto cotas: mínimo 2.5 mm impreso, fuente Arial o ISO',
        'Cajetín obligatorio: esquina inferior derecha con proyecto, autor, n° plano, escala y fecha'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'UNE 1027:1995 para el visado', texto: 'El Plot Style debe respetar la norma UNE 1027:1995 en grosores y tipos de línea. Contorno principal: 0.5-0.7 mm. Cotas y textos: 0.18-0.25 mm. Si no lo cumples, el Colegio te devuelve el visado.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Tiempo típico con y sin IA', texto: 'Sin IA: 8-12 horas para 8 planos. Con AI Assistant: 4-6 horas. El ahorro viene de: etiquetado automático (5 min vs 1 h), cotación en lote (30 min vs 2 h) y generación de bloques dinámicos (3 min vs 30 min).' }
    ],
    flashcards: [
      { frente: '¿Qué Plot Style se usa para imprimir planos de obra en blanco y negro?', reverso: 'monochrome.ctb. Se configura en PAGESETUP y garantiza que todos los colores de capa salgan en negro con el grosor definido.' },
      { frente: '¿Cuál es la escala típica para plantas residenciales en planos de obra en España?', reverso: '1:50. Para detalles constructivos se usa 1:10 o 1:25. Para planos de emplazamiento, 1:500 o 1:1000.' },
      { frente: '¿Cómo se publican todos los planos de un Sheet Set a PDF de una vez?', reverso: 'Clic derecho sobre el Sheet Set en el Sheet Set Manager → Publish → seleccionar formato PDF. Genera un solo PDF con todos los sheets.' }
    ],
    preguntas: [
      {
        pregunta: '¿En qué formato se deben configurar las unidades en AutoCAD para planos de obra en España con medidas en metros?',
        opciones: ['Arquitectónico (pies y pulgadas)', 'Decimal con precisión 2', 'Científico', 'Fraccionario'],
        correcta: 1,
        explicacion: 'Decimal con precisión 2 es el formato estándar en España para planos de edificación en metros.'
      },
      {
        pregunta: '¿Qué norma define los grosores y tipos de línea para planos técnicos en España?',
        opciones: ['ISO 9001', 'UNE 1027:1995', 'CTE DB-HE', 'DIN 406'],
        correcta: 1,
        explicacion: 'La norma UNE 1027:1995 define grosores y tipos de línea para dibujo técnico. Es obligatoria para el visado colegial.'
      },
      {
        pregunta: '¿Cuál es la escala habitual para detalles constructivos como la unión muro-forjado?',
        opciones: ['1:100', '1:50', '1:10 o 1:25', '1:500'],
        correcta: 2,
        explicacion: 'Los detalles constructivos se dibujan a 1:10 o 1:25 para mostrar el espesor de cada capa del cerramiento con claridad.'
      }
    ]
  },

  'conclusiones': {
    bloques: [
      { tipo: 'parrafo', texto: 'AutoCAD 2027 no es un programa nuevo: es tu AutoCAD de 2012 con 12 años de mejoras que se aprenden en 6 horas.' },
      { tipo: 'titulo', texto: '🎯 7 conclusiones clave del curso' },
      { tipo: 'lista', items: [
        '1. La base lógica no caduca: líneas, capas, bloques, cotas y atajos siguen igual. Estudiar desde cero sería tirar 30 horas.',
        '2. El cambio real es la interfaz Ribbon: la curva de readaptación es de 1-2 horas, no de un curso completo.',
        '3. AI Assistant 2027 es el diferenciador: automatiza cotar, etiquetar, contar y documentar multiplicando la productividad x3.',
        '4. Sheet Set Manager es la frontera entre aficionado y profesional: nunca se plotea desde Model Space.',
        '5. AutoCAD y Revit se complementan: AutoCAD para detalles 1:10, planos rápidos y visado; Revit cuando hay BIM contratado.',
        '6. Las plantillas DWT propias ahorran horas en cada proyecto y evitan visados rebotados.',
        '7. Combinar AutoCAD AI con Claude cubre el ciclo completo: la IA interna actúa sobre el DWG, Claude razona normativa y genera scripts LISP.'
      ]},
      { tipo: 'titulo', texto: '📊 Valoración final' },
      { tipo: 'lista', items: [
        'Dificultad: Baja (refresco, base intacta)',
        'Utilidad para FM/PM/CM: Media-alta (planos, detalles, replanteo)',
        'ROI tiempo invertido: Muy alto (6 h para recuperar 12 años)',
        'Demanda en ofertas 2026: Alta (requisito casi universal en edificación)'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Qué te llevas como candidato FM/PM/CM', texto: 'AutoCAD 2027 + AI Assistant reactiva una herramienta que ya dominabas y la actualiza con IA. Un portfolio con un caso de uso de IA explicado en 4 líneas es evidencia tangible de skill actualizada para cualquier entrevista.' },
      { tipo: 'titulo', texto: '🔭 Próximos pasos recomendados' },
      { tipo: 'lista', items: [
        'Architecture Toolset a fondo: bloques y mediciones automáticas incluidas en la licencia Pro',
        'Curso Revit + BIM: salto al modelado paramétrico y coordinación BIM',
        'Scripts LISP con Claude: automatizar rotulación masiva sin saber programar',
        'Certificado Autodesk Certified Professional (AutoCAD): ~150 €, aval formal para candidaturas'
      ]}
    ],
    flashcards: [
      { frente: '¿Cuál es el ROI de este curso de refresco según las conclusiones?', reverso: 'Muy alto: 6 horas de estudio para recuperar 12 años de dominio operativo y añadirle el AI Assistant 2027.' },
      { frente: '¿Cuándo NO usar AutoCAD y usar Revit en su lugar?', reverso: 'Para modelado paramétrico de un edificio completo, coordinación multidisciplinar (arquitectura + estructura + MEP) y flujos BIM contratados. AutoCAD no sustituye a Revit en esos casos.' },
      { frente: '¿Qué herramienta externa complementa al AI Assistant de AutoCAD para normativa y scripts LISP?', reverso: 'Claude (o ChatGPT). El AI de AutoCAD actúa dentro del DWG; Claude razona normativa CTE, genera scripts LISP y redacta documentación.' }
    ],
    preguntas: [
      {
        pregunta: 'Según las conclusiones del curso, ¿cuál es la limitación más importante del Autodesk AI Assistant?',
        opciones: ['Solo funciona en versión 2027', 'Es un Tech Preview que puede fallar y no sustituye el criterio profesional', 'No entiende comandos en español', 'Solo funciona conectado a internet por cable'],
        correcta: 1,
        explicacion: 'AI Assistant es Tech Preview: puede fallar, va mejor en inglés, tarda 5-15 segundos y no debes delegar en él el criterio profesional. Siempre verificas lo que genera.'
      },
      {
        pregunta: '¿Cuántas horas necesita un AT con experiencia previa para volver a ser operativo en AutoCAD 2027 según este curso?',
        opciones: ['Al menos 40 horas', 'Entre 5 y 6 horas de refresco focalizado', '2 horas', 'Depende: puede ser de 20 a 80 horas'],
        correcta: 1,
        explicacion: 'La base lógica está intacta al 90%. Con 5-6 horas de refresco quirúrgico se recupera el dominio operativo completo más las novedades clave.'
      },
      {
        pregunta: '¿Cuál de estas opciones recomienda el curso como siguiente paso tras el refresco de AutoCAD?',
        opciones: ['Volver a AutoCAD 2012 por estabilidad', 'Abandonar AutoCAD y migrar completamente a SketchUp', 'Curso Revit + BIM y Architecture Toolset a fondo', 'Estudiar AutoCAD desde cero con un curso de 100 horas'],
        correcta: 2,
        explicacion: 'El siguiente paso lógico es profundizar en Architecture Toolset (gratis con Pro) y hacer el curso Revit + BIM para cubrir el espectro completo AT en edificación.'
      }
    ]
  }
};
