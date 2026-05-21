/**
 * Datos de los módulos genéricos del curso Revit.
 * Cada módulo aquí define: bloques de contenido (caja, párrafo, lista), preguntas y flashcards.
 * Los módulos 1 y 2 son páginas dedicadas con más contenido visual.
 */

import type { Pregunta } from '@/components/Quiz';

export type Bloque =
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'lista'; items: string[] }
  | { tipo: 'titulo'; texto: string }
  | { tipo: 'caja'; tipoCaja: 'truco' | 'aviso' | 'obra' | 'ejemplo' | 'norma' | 'atajo' | 'cliente' | 'dato' | 'info'; titulo?: string; texto: string };

export type ModuloData = {
  bloques: Bloque[];
  flashcards?: { frente: string; reverso: string }[];
  preguntas: Pregunta[];
};

export const MODULOS_DATA: Record<string, ModuloData> = {
  plantillas: {
    bloques: [
      { tipo: 'parrafo', texto: 'Una plantilla (.rte) es el punto de partida de un proyecto. Lleva tipos de muro, suelos, vistas, planos y familias precargadas. Empezar con la plantilla correcta te ahorra HORAS.' },
      { tipo: 'titulo', texto: '🎯 Plantillas que vienen con Revit' },
      { tipo: 'lista', items: [
        'Construction Template (genérica)',
        'Architectural Template (arquitectura)',
        'Structural Template (estructuras)',
        'Mechanical/Electrical/Plumbing Template (instalaciones MEP)'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Plantilla propia', texto: 'Crea tu propia plantilla con: niveles base (cota 0, +3.00, +6.00…), tipos de muro tuyos, plumillas para impresión y catálogo de vistas. Reutilizable en todos los proyectos.' },
      { tipo: 'titulo', texto: '📐 Niveles: la base del edificio' },
      { tipo: 'parrafo', texto: 'Los niveles son los planos horizontales donde "viven" las cosas. Cada planta es un nivel. Los muros se anclan a un nivel inferior y otro superior. Si cambias la altura del nivel, los muros se ajustan automáticamente.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Atención al planificar', texto: 'NUNCA borres un nivel sin antes mover los elementos asociados. Revit te avisará, pero puedes perder muros y suelos.' }
    ],
    flashcards: [
      { frente: '¿Qué extensión tiene una plantilla Revit?', reverso: '.rte (Revit Template). Un proyecto normal es .rvt.' },
      { frente: '¿Cómo cambio la altura de una planta sin perder muros?', reverso: 'Edito el valor del nivel en una vista de alzado. Los elementos asociados se ajustan solos.' }
    ],
    preguntas: [
      { pregunta: '¿Qué extensión tiene una plantilla Revit?', opciones: ['.rvt', '.rte', '.rfa', '.rft'], correcta: 1, explicacion: '.rte = Template. .rvt = proyecto. .rfa = familia. .rft = plantilla de familia.' },
      { pregunta: 'Si subo un nivel +3.00 a +3.20, ¿qué pasa con los muros de Nivel 1 a Nivel 2?', opciones: ['Se quedan a la altura antigua', 'Se rompen', 'Se ajustan automáticamente', 'Hay que recrearlos'], correcta: 2, explicacion: 'Los muros anclados a niveles se ajustan en tiempo real. Esa es la potencia de Revit.' }
    ]
  },
  'muros-suelos-cubiertas': {
    bloques: [
      { tipo: 'parrafo', texto: 'Son las 3 familias de sistema más importantes. Vienen incluidas en Revit y no se pueden importar de fuera. Solo duplicar y editar.' },
      { tipo: 'titulo', texto: '🧱 Muros' },
      { tipo: 'lista', items: [
        'Comando: WA',
        'Tipo: Básico, Apilado, Cortina',
        'Estructura: editar capas (acabado, núcleo, aislante)',
        'Restricciones: nivel inferior, nivel superior o altura fija'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'En obra real', texto: 'Configura tus tipos de muro con las capas reales del pliego: ladrillo cara vista 11½ + cámara + aislante 5cm + ladrillo H7 + enlucido. Cuando midas, sale por capas.' },
      { tipo: 'titulo', texto: '⬛ Suelos' },
      { tipo: 'parrafo', texto: 'Comando SE. Se dibujan como un boceto de polilínea cerrada. Las capas funcionan igual que en muros: pavimento + mortero + forjado + falso techo.' },
      { tipo: 'titulo', texto: '🔺 Cubiertas' },
      { tipo: 'lista', items: [
        'Cubierta por perímetro: dibujas el contorno, defines pendientes en lados',
        'Cubierta por extrusión: dibujas el perfil y lo extruyes',
        'Cubierta por cara: usa una superficie de masa como base'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Pendiente correcta', texto: 'Para que la cubierta tenga pendiente, marca el icono "definir pendiente" en los lados del contorno. Si no, sale plana.' }
    ],
    preguntas: [
      { pregunta: '¿Atajo de teclado para Muro?', opciones: ['MU', 'WA', 'WL', 'WW'], correcta: 1, explicacion: 'WA = Wall.' },
      { pregunta: '¿Cómo defines la pendiente de una cubierta plana?', opciones: ['Modificando el suelo', 'Marcando "Definir pendiente" en los bordes del boceto', 'Solo se puede en alzado', 'Con un comando externo'], correcta: 1, explicacion: 'En el boceto de cubierta, seleccionas el borde y marcas el icono de pendiente.' }
    ]
  },
  'puertas-ventanas': {
    bloques: [
      { tipo: 'parrafo', texto: 'Puertas y ventanas son familias CARGABLES. Tienen su propio archivo (.rfa) y se cargan en el proyecto. Cuando seleccionas una puerta, puedes cambiar su tipo, tamaño, dirección de apertura…' },
      { tipo: 'titulo', texto: '🚪 Insertar puerta' },
      { tipo: 'lista', items: [
        'Atajo: DR',
        'Solo se puede colocar sobre un muro',
        'Cota: por defecto, al suelo del nivel del muro',
        'Apertura: barra espaciadora gira hacia el otro lado'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Mover sin perder altura', texto: 'Si la puerta queda a la altura equivocada, cambia el parámetro "Altura del alféizar" en Propiedades (negativo o positivo).' },
      { tipo: 'titulo', texto: '🪟 Ventanas' },
      { tipo: 'parrafo', texto: 'Igual que puertas pero con altura de alféizar > 0. Atajo WN. Si necesitas una ventana especial, cargas la familia desde la biblioteca: Insertar > Cargar Familia.' },
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'CTE DB-HE', texto: 'La ventana afecta a la demanda energética del edificio. Si modificas tamaño o U, el modelo (y CE3X) lo reflejarán.' }
    ],
    preguntas: [
      { pregunta: '¿Puedo poner una puerta flotando en el aire?', opciones: ['Sí', 'No, solo en muros', 'Solo en suelos', 'Solo en techos'], correcta: 1, explicacion: 'Puertas y ventanas son anfitrionas: necesitan un muro al que adherirse.' },
      { pregunta: 'Atajo para insertar ventana:', opciones: ['VE', 'WD', 'WN', 'VN'], correcta: 2, explicacion: 'WN = Window.' }
    ]
  },
  familias: {
    bloques: [
      { tipo: 'parrafo', texto: 'Una familia es una plantilla de objeto. Una familia "Puerta de Madera" puede tener varios TIPOS (90x210, 80x210). Y cada tipo, cuando se inserta, es un EJEMPLAR (instance).' },
      { tipo: 'titulo', texto: '🧩 Niveles de jerarquía' },
      { tipo: 'lista', items: [
        '1. Categoría: Puerta',
        '2. Familia: Puerta de paso de madera',
        '3. Tipo: 90 x 210 cm',
        '4. Ejemplar: la puerta concreta en la pared P-101'
      ]},
      { tipo: 'titulo', texto: '🛠️ Editor de familias' },
      { tipo: 'parrafo', texto: 'Para crear una familia desde cero: Archivo > Nuevo > Familia. Escoge una plantilla (.rft) según el tipo (Métrico genérico, Puerta métrica…). Dibujas formas, defines parámetros y guardas (.rfa).' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Parámetros vs cotas', texto: 'En el editor de familias, las cotas no son fijas. Las conviertes en parámetros con "Etiqueta", y ese parámetro lo cambias luego desde el proyecto.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'No abuses de familias in-place', texto: 'Las familias "in-place" (creadas dentro del proyecto) son pesadas y no reutilizables. Para algo único bien, pero no las uses para escaleras tipo o para 50 elementos iguales.' }
    ],
    preguntas: [
      { pregunta: '¿Qué extensión tiene una familia Revit?', opciones: ['.rvt', '.rte', '.rfa', '.rft'], correcta: 2, explicacion: '.rfa = Revit Family.' },
      { pregunta: '¿Cuál es la jerarquía correcta?', opciones: ['Familia > Categoría > Tipo > Ejemplar', 'Categoría > Familia > Tipo > Ejemplar', 'Tipo > Familia > Categoría > Ejemplar', 'Ejemplar > Tipo > Familia > Categoría'], correcta: 1, explicacion: 'De más general a más específico: Categoría → Familia → Tipo → Ejemplar.' }
    ]
  },
  'vistas-y-cotas': {
    bloques: [
      { tipo: 'parrafo', texto: 'Una vista es una representación del modelo. Plantas, alzados, secciones, 3D, leyendas, listados. Todas vienen del mismo modelo. Cambias el modelo, cambian las vistas.' },
      { tipo: 'titulo', texto: '👁️ Tipos de vista' },
      { tipo: 'lista', items: [
        'Planta de planta (planta de construcción)',
        'Planta de cielo (techos vista desde abajo)',
        'Alzado interior / exterior',
        'Sección (corte)',
        'Detalle (zoom de una zona)',
        '3D ortogonal o en perspectiva'
      ]},
      { tipo: 'titulo', texto: '📏 Cotas' },
      { tipo: 'parrafo', texto: 'Atajo DI (Dimension). Pulsas DI, eliges referencias (paredes, ejes) y cierras. Si después editas el modelo, las cotas se actualizan solas.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Cota inteligente', texto: 'Puedes BLOQUEAR una cota con el candado azul. Bloqueada significa que ese valor es fijo: si intentas mover algo, Revit lo respeta o protesta.' }
    ],
    preguntas: [
      { pregunta: 'Atajo para cota:', opciones: ['DM', 'DI', 'CT', 'CO'], correcta: 1, explicacion: 'DI = Dimension.' },
      { pregunta: 'Si modifico una pared, ¿las cotas de los planos se actualizan solas?', opciones: ['Sí, en tiempo real', 'No, hay que rehacerlas', 'Solo en planta', 'Solo si pulso F5'], correcta: 0, explicacion: 'Todo en Revit está vinculado. Modificas modelo → todas las vistas y cotas se refrescan.' }
    ]
  },
  'mediciones-tablas': {
    bloques: [
      { tipo: 'parrafo', texto: 'Aquí está la ventaja más visible para un AT: Revit MIDE el modelo automáticamente. Áreas de muro, m² de suelo, número de puertas, hormigón de pilares… Todo se calcula solo y se exporta.' },
      { tipo: 'titulo', texto: '📊 Crear tabla de planificación' },
      { tipo: 'lista', items: [
        '1. Vista > Tablas de planificación > Tabla/Cantidades',
        '2. Eliges la categoría (Muros, Puertas, Pilares…)',
        '3. Añades campos (tipo, área, volumen, comentarios…)',
        '4. Filtras y agrupas según necesites'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Lo que vendes al cliente', texto: '"Las mediciones salen del modelo, no de un Excel manual. Cero errores de transcripción. Si cambia el muro, cambia la medición."' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Exportar a Presto', texto: 'Tabla > Exportar > Reporte. Usa Cost-It plugin (Soft) o formato BC3 desde Presto. La medición de Revit entra como capítulo en tu presupuesto.' }
    ],
    preguntas: [
      { pregunta: 'Para crear una tabla de áreas de muro, vas a:', opciones: ['Archivo > Imprimir', 'Vista > Tablas de planificación', 'Anotar > Cotas', 'Insertar > Bloque'], correcta: 1, explicacion: 'Pestaña Vista contiene las tablas de planificación.' }
    ]
  },
  'mep-instalaciones': {
    bloques: [
      { tipo: 'parrafo', texto: 'MEP = Mechanical, Electrical, Plumbing. Las instalaciones del edificio. Revit tiene módulos específicos pero como AT te basta con saber leer e interpretar lo básico.' },
      { tipo: 'lista', items: [
        'Saneamiento: tuberías de evacuación con pendiente',
        'Fontanería: agua fría/caliente con bombas',
        'Electricidad: paneles, circuitos, luminarias',
        'Climatización: conductos, máquinas, rejillas'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Filtros de visibilidad por sistema', texto: 'Cada instalación tiene un sistema. En Visibilidad/Gráficos (VG) puedes mostrar solo fontanería, ocultar el resto. Brutal para coordinación.' },
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Conflictos', texto: 'Ejecuta "Comprobar interferencias" para detectar colisiones tubería ↔ viga, conducto ↔ falso techo, etc. Esencial antes de entregar.' }
    ],
    preguntas: [
      { pregunta: '¿Qué significa MEP?', opciones: ['Modelo Edificación Profesional', 'Mechanical Electrical Plumbing', 'Multi Edge Project', 'Mantenimiento Edificios Públicos'], correcta: 1, explicacion: 'Mechanical (climatización) + Electrical (electricidad) + Plumbing (fontanería).' }
    ]
  },
  'fases-y-grupos': {
    bloques: [
      { tipo: 'parrafo', texto: 'Las FASES son momentos del proyecto (existente, demolición, nueva construcción). Útil para REFORMAS: ves qué se mantiene, qué se tira y qué se añade.' },
      { tipo: 'titulo', texto: '🔄 Configuración de fases' },
      { tipo: 'lista', items: [
        'Gestionar > Fases > Definición de fases',
        'Cada elemento tiene "Fase de creación" y "Fase de demolición"',
        'Las vistas muestran "Filtro de fase": solo nuevo, solo existente, completo + demoler'
      ]},
      { tipo: 'titulo', texto: '🎨 Opciones de diseño' },
      { tipo: 'parrafo', texto: 'Sirven para COMPARAR alternativas: hueco circular vs cuadrado, escalera en U vs recta. Tienes "Conjuntos de opciones" con varias opciones; en cada vista escoges qué opción mostrar.' },
      { tipo: 'titulo', texto: '👥 Grupos' },
      { tipo: 'parrafo', texto: 'Si tienes 4 baños iguales, los modelas una vez, los conviertes en grupo y los copias. Si editas el grupo, todas las copias se actualizan.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'No abuses', texto: 'Los grupos pesan. Usa "vincular Revit" para apartamentos repetidos en bloques grandes.' }
    ],
    preguntas: [
      { pregunta: '¿Para qué sirven las fases?', opciones: ['Cambiar el color del proyecto', 'Definir momentos: existente, demolición, nuevo', 'Calcular el presupuesto', 'Imprimir más rápido'], correcta: 1, explicacion: 'Fases = momentos temporales. Imprescindibles en reformas.' }
    ]
  },
  'colaboracion-bim-360': {
    bloques: [
      { tipo: 'parrafo', texto: 'BIM 360 (ahora Autodesk Construction Cloud, ACC) es la plataforma en la nube de Autodesk. Permite que varios equipos trabajen sobre el mismo modelo desde sitios distintos.' },
      { tipo: 'titulo', texto: '☁️ Worksharing' },
      { tipo: 'parrafo', texto: 'Cuando un equipo necesita trabajar simultáneo sobre el mismo .rvt, se activa Worksharing. Cada usuario reserva "subproyectos" (Worksets) y trabaja sin pisar a los demás. Se sincroniza con el servidor cuando quieras.' },
      { tipo: 'titulo', texto: '🏗️ Modelo Federado' },
      { tipo: 'parrafo', texto: 'Cada disciplina (arquitectura, estructura, instalaciones) tiene su modelo. En coordinación se "federan": se montan todos en uno solo para detectar interferencias. ACC hace esto automáticamente.' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'RFI digitales', texto: 'En ACC abres una RFI desde el propio modelo: pinchas una zona, escribes la pregunta, asignas a un responsable. Trazabilidad completa. Adiós Excel.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Lo que pides al cliente', texto: '"Para coordinar bien necesito acceso a vuestro ACC como BIM Coordinator." Esto te diferencia en ofertas.' }
    ],
    preguntas: [
      { pregunta: '¿Qué es ACC?', opciones: ['Autodesk Construction Cloud', 'Architectural CAD Center', 'Auto Code Compiler', 'Aviso de Cambio Constructivo'], correcta: 0, explicacion: 'ACC es el nombre actual de BIM 360.' },
      { pregunta: '¿Worksharing sirve para…?', opciones: ['Imprimir planos', 'Trabajar varios usuarios simultáneamente sobre el mismo modelo', 'Crear vistas 3D', 'Exportar a IFC'], correcta: 1, explicacion: 'Worksharing permite el trabajo simultáneo dividiendo el modelo en Worksets.' }
    ]
  },
  'exportar-y-entregar': {
    bloques: [
      { tipo: 'parrafo', texto: 'Cierre profesional del proyecto. Cómo entregar lo que pide el cliente o la administración.' },
      { tipo: 'titulo', texto: '📤 Formatos de exportación' },
      { tipo: 'lista', items: [
        'PDF: para planos a visado, ofertas, presentaciones',
        'DWG: si la otra empresa solo tiene AutoCAD',
        'IFC: estándar abierto, lo pide la administración pública',
        'NWC/NWD: Navisworks, para revisiones y simulaciones 4D',
        'BCF: incidencias entre disciplinas (BIMcollab, Solibri)'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Visado de proyecto', texto: 'Los colegios profesionales aceptan PDF/A o PDF firmado digitalmente. Exporta cada plano con buena calidad y firma con tu certificado.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Plantilla de impresión', texto: 'Crea una plantilla de impresión con: A1, 200ppp, sin ventanas no visibles, formato de archivo PDF, nombre = código del plano. Una vez guardada, imprimes todos los planos a la vez.' }
    ],
    preguntas: [
      { pregunta: '¿Qué formato pide la administración pública para BIM?', opciones: ['DWG', 'PDF', 'IFC', 'RFA'], correcta: 2, explicacion: 'IFC es estándar abierto (buildingSMART). Es obligatorio en muchos pliegos públicos.' },
      { pregunta: 'BCF sirve para…', opciones: ['Imprimir planos', 'Gestionar incidencias entre disciplinas', 'Ver el modelo 3D', 'Crear listados'], correcta: 1, explicacion: 'BCF = BIM Collaboration Format. Estándar para pasar incidencias entre programas BIM.' }
    ]
  }
};
