import type { ModuloData } from '@/content/revit/modulos-data';

export const URBICAD_DATA: Record<string, ModuloData> = {
  'marco-normativo': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Toda obra de construcción en España debe cumplir una pirámide normativa. En la cima está la Constitución; en la base, las normas técnicas del INSST y el CTE. En medio, dos normas son clave para el Arquitecto Técnico: la LPRL y el RD 1627/1997.'
      },
      {
        tipo: 'titulo',
        texto: '📜 Las dos normas que mandan en obra'
      },
      {
        tipo: 'lista',
        items: [
          'Ley 31/1995 LPRL: base general de toda actividad laboral. El empresario garantiza la seguridad.',
          'RD 1627/1997: específico de obras de construcción. Define ESS, EBSS, PSS y el Coordinador SS.',
          'RD 39/1997 RSP: reglamenta los Servicios de Prevención.',
          'RD 171/2004 CAE: coordinación cuando coinciden varias empresas en un mismo centro.',
          'Ley 32/2006: subcontratación en construcción.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🎯 ESS o EBSS: tres umbrales del RD 1627/1997'
      },
      {
        tipo: 'lista',
        items: [
          'PEC igual o superior a 450.759 euros: ESS obligatorio.',
          'Duración igual o superior a 30 días Y más de 20 trabajadores alguna jornada: ESS obligatorio.',
          'Volumen igual o superior a 500 días-trabajador: ESS obligatorio.',
          'Resto de obras: EBSS suficiente. Ejemplo: vivienda unifamiliar PEC 380.000 euros = EBSS.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Umbral histórico sin actualizar',
        texto: 'El límite de 450.759 euros data de 1997 y no se ha corregido por inflación. Hoy una obra mediana lo supera con facilidad. Verifica siempre el PEC antes de decidir ESS o EBSS.'
      },
      {
        tipo: 'titulo',
        texto: '⚠️ Sanciones por incumplimiento (LISOS)'
      },
      {
        tipo: 'lista',
        items: [
          'Leve: 50 a 2.450 euros. Ejemplos: falta de orden, EPI básico ausente.',
          'Grave: 2.451 a 49.180 euros. Ejemplos: sin PSS, sin formación, EPIs específicos que faltan.',
          'Muy grave: 49.181 a 983.736 euros. Ejemplos: trabajos en altura sin protección, falta de CSS.',
          'Además: responsabilidad penal, civil y recargo en prestaciones del 30 al 50 por ciento.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'norma',
        titulo: 'LPRL art. 14',
        texto: 'El empresario deberá garantizar la seguridad y salud de los trabajadores a su servicio. Es la frase que abre cualquier reclamación ante un accidente.'
      }
    ],
    flashcards: [
      {
        frente: 'Mnemotécnico de la pirámide normativa',
        reverso: 'LPRL más RSP más 1627 más CAE más SUBC más técnicas. Es el orden que pregunta cualquier inspector.'
      },
      {
        frente: 'Obra con PEC 380.000 euros, 4 trabajadores y 9 meses de plazo: ¿ESS o EBSS?',
        reverso: 'EBSS. El PEC está por debajo de 450.759 euros y no se supera ningún otro umbral.'
      },
      {
        frente: '¿Qué norma regula las sanciones por incumplimiento en materia laboral?',
        reverso: 'LISOS: Ley de Infracciones y Sanciones en el Orden Social, RDLeg 5/2000.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es el umbral de PEC que obliga a redactar ESS en lugar de EBSS?',
        opciones: ['300.000 euros', '450.759 euros', '600.000 euros', '1.000.000 euros'],
        correcta: 1,
        explicacion: 'El RD 1627/1997 art. 4 fija el umbral en 450.759 euros. Es un valor de 1997 no actualizado por inflación.'
      },
      {
        pregunta: '¿Qué ley general regula la prevención de riesgos en toda actividad laboral, no solo en obras?',
        opciones: ['RD 1627/1997', 'RD 39/1997', 'Ley 31/1995 LPRL', 'Ley 32/2006'],
        correcta: 2,
        explicacion: 'La LPRL es la base general. El RD 1627/1997 es específico de obras de construcción.'
      },
      {
        pregunta: '¿A qué tipo de infracción corresponde no disponer de PSS en obra según la LISOS?',
        opciones: ['Leve', 'Grave', 'Muy grave', 'No es sancionable'],
        correcta: 1,
        explicacion: 'Carecer de PSS es infracción grave: de 2.451 a 49.180 euros. Si además hay accidente, puede escalar a muy grave.'
      }
    ]
  },

  'figuras-de-obra': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'En una obra intervienen ocho figuras con responsabilidades distintas. Conocerlas es clave para un Arquitecto Técnico: en una misma obra puedes ejercer como DF y como CSS a la vez, pero nunca confundas lo que hace cada rol.'
      },
      {
        tipo: 'titulo',
        texto: '👷 Las ocho figuras y su función'
      },
      {
        tipo: 'lista',
        items: [
          'Promotor: paga y decide qué se construye.',
          'Proyectista: diseña el proyecto y redacta el ESS o EBSS.',
          'Dirección Facultativa (DF): dirige técnicamente la obra (Arquitecto + AT como DEO).',
          'Coordinador de Seguridad y Salud (CSS): coordina la aplicación del PSS.',
          'Contratista: ejecuta la obra y redacta el PSS.',
          'Subcontratista: ejecuta una parte especializada.',
          'Recurso Preventivo: vigila in situ los trabajos de riesgo especial.',
          'Trabajador autónomo: ejecuta sin empleados; cumple prevención igual que una empresa.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🆚 CSS vs Recurso Preventivo'
      },
      {
        tipo: 'lista',
        items: [
          'CSS: lo nombra el promotor. Coordina, aprueba el PSS, visita la obra periódicamente.',
          'Recurso Preventivo: lo nombra el contratista. Vigila físicamente durante operaciones de riesgo.',
          'CSS: formación mínima nivel intermedio 200 h PRL más titulación habilitante.',
          'Recurso Preventivo: trabajador con 60 h básicas de PRL.',
          'CSS: honorarios 2.500 a 25.000 euros por obra. Recurso Preventivo: salario del contratista.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'obra',
        titulo: 'Cuándo es obligatorio el CSS',
        texto: 'En cuanto hay más de un contratista, o un contratista más autónomos, el promotor debe nombrar CSS. En la práctica, casi toda obra real tiene subcontratación, por lo que el CSS es casi siempre obligatorio.'
      },
      {
        tipo: 'titulo',
        texto: '🎓 Cómo acreditarse como CSS'
      },
      {
        tipo: 'lista',
        items: [
          '1. Titulación universitaria habilitante: AT, Arquitecto, Ingeniero o Ingeniero Técnico.',
          '2. Formación PRL acreditada: nivel intermedio 200 h o nivel superior 600 h.',
          '3. Colegiación vigente.',
          '4. Seguro de responsabilidad civil profesional contratado.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'Empieza por nivel intermedio',
        texto: 'Con el nivel intermedio (200 h) ya puedes ejercer como CSS. El nivel superior (600 h) es para quien quiere dirigir servicios de prevención propios. Si dudas, empieza por el intermedio y complementas después.'
      }
    ],
    flashcards: [
      {
        frente: 'Mnemotécnico de la cadena de mando en obra',
        reverso: 'Promotor manda, Proyectista dibuja, DF dirige, CSS coordina, Contratista ejecuta.'
      },
      {
        frente: '¿Quién nombra al CSS y quién nombra al Recurso Preventivo?',
        reverso: 'Al CSS lo nombra el PROMOTOR. Al Recurso Preventivo lo nombra el CONTRATISTA.'
      },
      {
        frente: '¿Qué titulación mínima necesita un AT para ejercer como CSS?',
        reverso: 'Titulación AT más formación PRL nivel intermedio (200 h) más colegiación más seguro RC.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Quién aprueba el Plan de Seguridad y Salud que presenta el contratista?',
        opciones: ['El promotor', 'La Inspección de Trabajo', 'El CSS', 'La Dirección Facultativa'],
        correcta: 2,
        explicacion: 'Es la función esencial del CSS: aprobar el PSS antes del inicio de obra. Sin PSS aprobado no puede arrancar la obra.'
      },
      {
        pregunta: '¿En qué situación es obligatorio nombrar CSS?',
        opciones: [
          'Solo en obras con PEC mayor de 1 millón de euros',
          'Cuando interviene más de una empresa o un contratista más autónomos',
          'Solo cuando hay más de 20 trabajadores simultáneos',
          'Solo en obras con ESS, no con EBSS'
        ],
        correcta: 1,
        explicacion: 'RD 1627/1997 art. 3: en cuanto hay más de una empresa, o empresa más autónomos, el CSS es obligatorio.'
      },
      {
        pregunta: '¿Qué diferencia principal hay entre el CSS y el Recurso Preventivo?',
        opciones: [
          'El CSS tiene más formación pero el Recurso Preventivo cobra más',
          'El CSS coordina y visita periódicamente; el Recurso Preventivo vigila físicamente durante la operación de riesgo',
          'Son la misma figura con distinto nombre según la CCAA',
          'El Recurso Preventivo aprueba el PSS y el CSS lo redacta'
        ],
        correcta: 1,
        explicacion: 'CSS: coordinación y visitas periódicas. Recurso Preventivo: presencia física continua durante la operación concreta de riesgo.'
      }
    ]
  },

  'documentos-ss': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Hay tres documentos clave en seguridad y salud en obras. Cada uno tiene un autor distinto y un momento concreto en el que debe estar listo. Confundirlos es el error más frecuente en examen y en obra.'
      },
      {
        tipo: 'titulo',
        texto: '🎯 Los tres documentos y su relación'
      },
      {
        tipo: 'lista',
        items: [
          'ESS (Estudio de Seguridad y Salud): lo redacta el proyectista en fase de proyecto. Obras grandes (PEC mayor o igual a 450.759 euros).',
          'EBSS (Estudio Básico de Seguridad y Salud): también el proyectista, también en fase de proyecto. Obras menores.',
          'PSS (Plan de Seguridad y Salud): lo redacta el contratista antes del inicio de obra, adaptando el ESS o EBSS a su forma de trabajar. El CSS lo aprueba.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'norma',
        titulo: 'Mnemotécnico',
        texto: 'ESS dice qué hacer, PSS dice cómo, CSS dice si vale. ESS es del proyectista. PSS es del contratista. CSS es el árbitro.'
      },
      {
        tipo: 'titulo',
        texto: '📋 Contenido mínimo del ESS (RD 1627/1997 art. 5)'
      },
      {
        tipo: 'lista',
        items: [
          '1. Memoria: descripción de la obra, procedimientos, identificación de riesgos por fase y medidas preventivas.',
          '2. Pliego de condiciones particulares: normativa, obligaciones de contratistas y condiciones técnicas.',
          '3. Planos: implantación del centro, acometidas, vallado, acceso, protecciones colectivas.',
          '4. Mediciones: cantidad de cada protección.',
          '5. Presupuesto: coste de la seguridad (mínimo 1-3 por ciento del PEM).'
        ]
      },
      {
        tipo: 'titulo',
        texto: '📄 Diferencia clave EBSS vs ESS'
      },
      {
        tipo: 'lista',
        items: [
          'EBSS: memoria concisa + pliego resumido. Sin planos específicos ni mediciones cuantificadas.',
          'ESS: memoria detallada por fases + pliego completo + planos + mediciones + presupuesto.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'PSS genérico = rechazo seguro',
        texto: 'Si el contratista presenta un PSS que parece copia del ESS sin adaptarlo a su método de trabajo, el CSS debe rechazarlo. La Inspección de Trabajo lo detecta al primer vistazo y puede sancionar.'
      }
    ],
    flashcards: [
      {
        frente: '¿Quién redacta el PSS y quién lo aprueba?',
        reverso: 'El PSS lo redacta el CONTRATISTA. Lo aprueba el CSS antes del Acta de Replanteo.'
      },
      {
        frente: '¿Qué documento de seguridad requiere planos, mediciones y presupuesto detallado?',
        reverso: 'El ESS (Estudio de Seguridad y Salud), para obras con PEC mayor o igual a 450.759 euros.'
      },
      {
        frente: '¿Qué porcentaje del PEM debe cubrir como mínimo el presupuesto de seguridad?',
        reverso: 'Entre el 1 y el 3 por ciento del PEM. Para riesgos especiales (altura, demolición, espacios confinados) hasta el 5 por ciento.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿En qué momento debe estar aprobado el PSS?',
        opciones: [
          'Al final de la obra para la recepción',
          'Antes del Acta de Replanteo (inicio formal de obra)',
          'Después del primer mes de ejecución',
          'Solo cuando la Inspección de Trabajo lo solicite'
        ],
        correcta: 1,
        explicacion: 'Sin PSS aprobado por el CSS no puede firmarse el Acta de Replanteo ni comenzar la obra.'
      },
      {
        pregunta: '¿Cuál de estos apartados NO es obligatorio en el EBSS?',
        opciones: ['Memoria', 'Pliego de condiciones', 'Planos detallados con mediciones', 'Identificación de riesgos'],
        correcta: 2,
        explicacion: 'El EBSS no requiere planos específicos ni mediciones cuantificadas. Eso es exclusivo del ESS completo.'
      },
      {
        pregunta: '¿Quién paga el ESS y quién paga el PSS?',
        opciones: [
          'Ambos los paga el promotor',
          'El ESS lo paga el proyectista y el PSS el CSS',
          'El ESS lo paga el promotor (forma parte del proyecto) y el PSS el contratista',
          'Ambos los paga el contratista'
        ],
        correcta: 2,
        explicacion: 'El ESS forma parte del proyecto y lo financia el promotor. El PSS es parte de la gestión del contratista y lo asume este.'
      }
    ]
  },

  'urbicad-acceso': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'UrbiCAD es una suite de software especializada en redactar ESS, EBSS y PSS. No es barata, pero para un CSS con más de 10 obras al año se paga sola por el tiempo que ahorra.'
      },
      {
        tipo: 'titulo',
        texto: '💻 Módulos relevantes para Arquitecto Técnico'
      },
      {
        tipo: 'lista',
        items: [
          'UrbiCAD Smart: ESS y PSS de edificación y obra civil. El más completo.',
          'UrbiCAD SmartCoordinadores: específico para CSS en fase de ejecución.',
          'UrbiCAD BIM Revit SS: integración con modelo Revit para generar planos de protecciones en 4D.',
          'UrbiCAD SmartPlan: solo PSS, pensado para contratistas.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🆓 Cómo conseguir la demo'
      },
      {
        tipo: 'lista',
        items: [
          '1. Entra en urbicad.com y pulsa "Probar gratis" o "Demo".',
          '2. Rellena el formulario con tipo de uso (académico o profesional) y volumen de obras.',
          '3. Recibirás una llamada comercial de validación.',
          '4. Demo activa entre 15 y 30 días, negociable si muestras interés real.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'Alternativa gratis para aprender',
        texto: 'CYPE PSS está incluido en la licencia estudiante de CYPE Arquímedes. Mismos conceptos que UrbiCAD, distinta interfaz. Para aprender sin gastar, es la mejor opción. Añádelo desde el menú Herramientas - Módulos adicionales - Seguridad y Salud.'
      },
      {
        tipo: 'titulo',
        texto: '📊 Comparativa UrbiCAD vs alternativas'
      },
      {
        tipo: 'lista',
        items: [
          'Word + plantillas INSST: gratis, 16-20 horas por ESS, sin asistente de riesgos.',
          'CYPE PSS: gratis con Arquímedes estudiante, 6-8 horas por ESS, base de 5.000 unidades.',
          'UrbiCAD Smart: 900 a 1.500 euros al año, 3 horas por ESS, 15.000 unidades INSST, plan de emergencia automático.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: '¿Cuándo compensa la licencia de UrbiCAD?',
        texto: 'A partir de unas 10 ESS o PSS al año, UrbiCAD se paga solo por el ahorro de tiempo. Por debajo de esa cifra, CYPE PSS o Word con plantillas INSST son opciones válidas y mucho más económicas.'
      }
    ],
    flashcards: [
      {
        frente: '¿Qué módulo de UrbiCAD es el más adecuado para un AT que ejerce como CSS?',
        reverso: 'UrbiCAD Smart (ESS y PSS completo) o UrbiCAD SmartCoordinadores (específico fase ejecución).'
      },
      {
        frente: '¿Cuánto tiempo tarda UrbiCAD en generar un ESS frente al método manual?',
        reverso: 'Manual: 16-20 horas. UrbiCAD: unas 3 horas. La diferencia está en el asistente de riesgos automático.'
      },
      {
        frente: '¿Qué alternativa gratuita permite aprender los conceptos de ESS y PSS sin pagar licencia?',
        reverso: 'CYPE PSS, incluido en la versión estudiante de CYPE Arquímedes. Se añade desde el menú de módulos adicionales.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuántas unidades de obra estructuradas incluye la base de datos de UrbiCAD Smart?',
        opciones: ['2.000', '5.000', '10.000', 'Más de 15.000'],
        correcta: 3,
        explicacion: 'UrbiCAD Smart incluye más de 15.000 unidades de obra según base INSST, frente a las 5.000 de CYPE PSS.'
      },
      {
        pregunta: '¿A partir de cuántos ESS o PSS al año suele compensar económicamente la licencia anual de UrbiCAD?',
        opciones: ['2 obras', '5 obras', '10 obras', '20 obras'],
        correcta: 2,
        explicacion: 'La regla orientativa es que a partir de 10 ESS o PSS al año el ahorro de tiempo amortiza la licencia de 900-1.500 euros.'
      },
      {
        pregunta: '¿Qué hay que hacer para añadir CYPE PSS a la licencia estudiante de CYPE Arquímedes?',
        opciones: [
          'Se instala automáticamente con Arquímedes',
          'Hay que descargarlo por separado de la web de CYPE y pagar',
          'Se activa desde el menú Herramientas - Módulos adicionales - Seguridad y Salud',
          'No es compatible con la versión estudiante'
        ],
        correcta: 2,
        explicacion: 'CYPE PSS es gratuito con la licencia estudiante pero no se instala automáticamente. Hay que añadirlo manualmente desde el menú de módulos adicionales.'
      }
    ]
  },

  'urbicad-workflow': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'UrbiCAD genera el ESS en unos 8 pasos. El más crítico es el segundo: identificar los riesgos por cada unidad de obra. Aquí es donde se gana o se pierde el valor real del documento.'
      },
      {
        tipo: 'titulo',
        texto: '⚙️ Workflow ESS paso a paso'
      },
      {
        tipo: 'lista',
        items: [
          '1. Datos de la obra: promotor, técnicos, PEC, plazo, ubicación.',
          '2. Identificar riesgos por unidad de obra con el asistente (30-60 min, la parte más importante).',
          '3. Protecciones colectivas: tipo, características técnicas, quién instala y quién mantiene.',
          '4. EPIs: lista con norma UNE asociada (casco UNE EN 397, arnés UNE EN 361, etc.).',
          '5. Pliego de condiciones: UrbiCAD lo genera automáticamente; revisar y personalizar.',
          '6. Planos: subir planta del proyecto e indicar accesos, acopios, casetas y vallado.',
          '7. Mediciones y presupuesto: mínimo 1-3 por ciento del PEM.',
          '8. Exportar PDF para entrega.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'No copies el ESS en el PSS',
        texto: 'El PSS no es un copia-pega del ESS. El contratista debe adaptarlo a sus métodos, equipos y subcontratas concretas. Si el CSS detecta que el PSS es idéntico al ESS, debe devolverlo con observaciones.'
      },
      {
        tipo: 'titulo',
        texto: '🚨 Protocolo ante accidente (7 pasos)'
      },
      {
        tipo: 'lista',
        items: [
          '1. Atender al accidentado (botiquín o llamar al 112 si es grave).',
          '2. Asegurar la zona: parar máquinas, acordonar el área.',
          '3. Notificar al jefe de obra y al CSS.',
          '4. Anotar en el Libro de Incidencias con todos los datos.',
          '5. Notificar a la Autoridad Laboral vía Sistema Delta (24 h si grave, 5 días si leve).',
          '6. Investigar causas: actos inseguros, condiciones inseguras, factores personales y de trabajo.',
          '7. Modificar el PSS si procede y comunicar las medidas correctoras a todos los trabajadores.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Ocultar un accidente = infracción muy grave',
        texto: 'Demorar o no notificar un accidente puede costar entre 49.181 y 983.736 euros de sanción. Notifica siempre y en plazo aunque el accidente parezca leve.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuál es el paso más crítico del workflow de UrbiCAD para el ESS?',
        reverso: 'El paso 2: identificación de riesgos por unidad de obra con el asistente. Puede durar 30-60 min y es donde se genera el valor real del documento.'
      },
      {
        frente: '¿En cuánto tiempo genera UrbiCAD un ESS frente al método manual?',
        reverso: 'UrbiCAD: unas 3 horas. Manual: 16-20 horas. La diferencia la marca el asistente automático de riesgos.'
      },
      {
        frente: '¿En cuántas horas hay que notificar a la Autoridad Laboral un accidente grave?',
        reverso: 'En 24 horas, vía Sistema Delta. Un accidente leve con baja: en 5 días hábiles.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Qué apartado del ESS requiere más tiempo en UrbiCAD y por eso más atención?',
        opciones: [
          'Los planos de implantación',
          'El pliego de condiciones',
          'La identificación de riesgos por unidad de obra',
          'El presupuesto de seguridad'
        ],
        correcta: 2,
        explicacion: 'La identificación de riesgos por unidad de obra con el asistente puede llevar 30-90 min y es la parte que da valor real al documento. El pliego y el plan de emergencia se generan casi automáticamente.'
      },
      {
        pregunta: '¿Cuál es la primera acción ante un accidente en obra?',
        opciones: [
          'Notificar inmediatamente a la Autoridad Laboral',
          'Anotar la incidencia en el Libro',
          'Atender al accidentado y asegurar la zona',
          'Llamar al promotor'
        ],
        correcta: 2,
        explicacion: 'Primero la persona: atender al herido y asegurar la zona. Después la documentación y las notificaciones legales.'
      },
      {
        pregunta: '¿Qué porcentaje mínimo del PEM debe representar el presupuesto de seguridad en un ESS estándar?',
        opciones: ['0 por ciento (no hay mínimo legal)', 'El 0,5 por ciento', 'Entre el 1 y el 3 por ciento', 'El 10 por ciento'],
        correcta: 2,
        explicacion: 'No hay porcentaje mínimo obligatorio en norma, pero la Inspección considera deficiente cualquier presupuesto por debajo del 1 por ciento del PEM. Para riesgos especiales se recomienda entre el 3 y el 5 por ciento.'
      }
    ]
  },

  'libro-incidencias': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'El Libro de Incidencias es un documento legal obligatorio en toda obra. Lo habilita el CSS antes del inicio y permanece físicamente en obra. Si hay accidente y algo no está anotado, el CSS puede asumir responsabilidad subsidiaria.'
      },
      {
        tipo: 'titulo',
        texto: '📒 ¿Quién puede anotar?'
      },
      {
        tipo: 'lista',
        items: [
          'CSS: lo más habitual, cualquier incidencia detectada en visita.',
          'Dirección Facultativa (Arquitecto y AT): si visitan la obra y ven algo.',
          'Inspección de Trabajo: durante sus visitas de inspección.',
          'Representantes legales de los trabajadores: anomalías detectadas.',
          'Contratistas y subcontratistas: para informar al CSS.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '📝 Datos obligatorios en cada hoja'
      },
      {
        tipo: 'lista',
        items: [
          'Fecha y hora exactas.',
          'Nombre, profesión, empresa y firma del anotante.',
          'Descripción de la incidencia: qué ha ocurrido, dónde y qué riesgo implica.',
          'Medida propuesta: qué hay que hacer para resolverlo.',
          'Plazo: en cuánto tiempo debe estar resuelto.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'norma',
        titulo: 'RD 1627/1997 art. 13',
        texto: 'En cada centro de trabajo existirá, con fines de control y seguimiento del PSS, un libro de incidencias que constará de hojas por duplicado. Original al promotor, copia al anotador.'
      },
      {
        tipo: 'titulo',
        texto: '📦 Custodia y archivo'
      },
      {
        tipo: 'lista',
        items: [
          'Durante la obra: en la caseta de oficina, custodiado por el CSS o jefe de obra.',
          'Tras la obra: original al promotor. Conservación mínima de 5 años.',
          'Si hay accidente con responsabilidades legales: conservar indefinidamente.',
          'Las fotos digitales son solo backup personal; no sustituyen la custodia legal del libro físico.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'La peor frase ante un juez',
        texto: 'Yo lo vi pero no lo anoté porque no parecía grave. Si lo viste, anótalo. La obligación del CSS es documentar cualquier desviación. Mejor sobrar que faltar.'
      }
    ],
    flashcards: [
      {
        frente: '¿Quién habilita el Libro de Incidencias y cuándo?',
        reverso: 'El CSS (o la DF si no hay CSS) lo habilita antes del inicio de la obra. Es su primera obligación formal.'
      },
      {
        frente: '¿Cuánto tiempo hay que conservar el Libro de Incidencias tras el fin de la obra?',
        reverso: 'Mínimo 5 años. Si hubo accidente con responsabilidades legales, se conserva indefinidamente.'
      },
      {
        frente: '¿Qué consecuencia legal tiene no habilitar el Libro de Incidencias?',
        reverso: 'Infracción muy grave según la LISOS: de 49.181 a 983.736 euros de sanción.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Dónde debe estar físicamente el Libro de Incidencias durante la obra?',
        opciones: [
          'En el despacho del CSS',
          'En la caseta de obra, accesible a quienes pueden anotar',
          'En el colegio profesional del CSS',
          'En la sede del contratista'
        ],
        correcta: 1,
        explicacion: 'El Libro debe permanecer en la obra, en la caseta de oficina, para que puedan acceder a él el CSS, la DF, la Inspección de Trabajo y los representantes de los trabajadores.'
      },
      {
        pregunta: '¿Qué tipo de infracción supone no habilitar el Libro de Incidencias?',
        opciones: ['Leve', 'Grave', 'Muy grave', 'No es infracción si no hay accidentes'],
        correcta: 2,
        explicacion: 'No habilitar el Libro de Incidencias es infracción muy grave según la LISOS, con sanción de 49.181 a 983.736 euros.'
      },
      {
        pregunta: '¿A quién corresponde custodiar el Libro de Incidencias original tras el fin de la obra?',
        opciones: ['Al contratista', 'Al CSS', 'Al promotor', 'A la Inspección de Trabajo'],
        correcta: 2,
        explicacion: 'Tras la obra, el original del Libro de Incidencias se entrega al PROMOTOR, que debe conservarlo un mínimo de 5 años.'
      }
    ]
  },

  'caso-practico': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Vivienda unifamiliar: PEC 381.574 euros, 9 meses de plazo, 4-6 trabajadores, 1 contratista principal más 4 subcontratas y 2 autónomos. Documento requerido: EBSS (no ESS). CSS obligatorio por subcontratación.'
      },
      {
        tipo: 'titulo',
        texto: '🏠 Workflow CSS completo: 12 pasos'
      },
      {
        tipo: 'lista',
        items: [
          '1. Designación del CSS por el promotor (documento firmado).',
          '2. Aceptación del CSS y notificación al colegio profesional.',
          '3. Revisión del EBSS del proyectista: riesgos cubiertos, normativa vigente.',
          '4. Recepción del PSS del contratista.',
          '5. Aprobación del PSS con sello y fecha (o devolución con observaciones).',
          '6. Habilitación del Libro de Incidencias: numerar, sellar en colegio, llevar a obra.',
          '7. Acta de Replanteo: promotor + DF + CSS + contratista firman.',
          '8. Visitas periódicas durante la obra (1-2 por semana).',
          '9. Validación documental de cada subcontrata antes de que entre a obra.',
          '10. Anotaciones en el Libro ante cualquier incidencia.',
          '11. Modificación del PSS si cambia el método o aparece un riesgo nuevo.',
          '12. Acta de Recepción Provisional + cierre del Libro + entrega al promotor.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'obra',
        titulo: 'Fases críticas en esta obra',
        texto: 'Estructura y cubiertas son las fases con más accidentes mortales. Programa una visita extra esos días. La validación de subcontratas (paso 9) es lo que más tiempo consume: cada una aporta TPC, formación PRL, seguro RC y evaluación de riesgos antes de entrar.'
      },
      {
        tipo: 'titulo',
        texto: '💰 Honorarios CSS orientativos 2026'
      },
      {
        tipo: 'lista',
        items: [
          'Reforma de vivienda (PEC menor de 50.000 euros): 600 a 1.200 euros.',
          'Vivienda unifamiliar (PEC en torno a 400.000 euros): 2.500 a 4.500 euros.',
          'Edificio plurifamiliar 50 viviendas (PEC 4 millones de euros): 12.000 a 25.000 euros.',
          'Modalidad de cobro: 30 por ciento al firmar, 60 por ciento mensual durante la obra, 10 por ciento a la recepción definitiva.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'CSS novato vs CSS profesional',
        texto: 'El novato firma el PSS sin leer y visita la obra una vez cada 15 días. El profesional devuelve el PSS con observaciones, visita 1-2 veces por semana y anota cualquier desviación. El novato cobra 1.500 euros en una unifamiliar; el profesional, 3.500-4.500 euros. La diferencia es la documentación y la exposición legal.'
      }
    ],
    flashcards: [
      {
        frente: '¿Qué documento de seguridad requiere una vivienda unifamiliar con PEC de 381.574 euros?',
        reverso: 'EBSS (Estudio Básico), porque el PEC es inferior a 450.759 euros. Pero si hay subcontratación, el CSS sigue siendo obligatorio.'
      },
      {
        frente: '¿Cuántos pasos tiene el workflow completo del CSS desde la designación hasta la recepción?',
        reverso: '12 pasos: designación, aceptación, revisión EBSS, recepción PSS, aprobación PSS, habilitación Libro, Acta Replanteo, visitas, validación subcontratas, anotaciones, modificaciones PSS y Acta Recepción.'
      },
      {
        frente: '¿Qué honorarios son orientativos para el CSS de una vivienda unifamiliar con PEC de 400.000 euros?',
        reverso: 'Entre 2.500 y 4.500 euros. Un CSS profesional documenta todo y cobra en el rango alto. Un novato que firma sin leer se expone a responsabilidad y cobra en el rango bajo.'
      }
    ],
    preguntas: [
      {
        pregunta: 'Una vivienda unifamiliar con PEC de 381.574 euros, 9 meses y 5 trabajadores: ¿qué documento de seguridad requiere?',
        opciones: [
          'ESS completo con planos y mediciones',
          'EBSS, porque no se supera ningún umbral del ESS',
          'Ni ESS ni EBSS, es obra menor',
          'ESS porque el plazo supera los 30 días'
        ],
        correcta: 1,
        explicacion: 'El PEC es inferior a 450.759 euros, el número de trabajadores no supera 20 y el volumen no alcanza 500 días-trabajador. Basta con EBSS.'
      },
      {
        pregunta: '¿En qué momento exacto del workflow debe estar aprobado el PSS?',
        opciones: [
          'Antes del Acta de Replanteo',
          'Antes de la primera visita del CSS',
          'Al inicio del segundo mes de obra',
          'Cuando entren las subcontratas'
        ],
        correcta: 0,
        explicacion: 'El PSS debe estar aprobado por el CSS antes de firmar el Acta de Replanteo. Sin PSS aprobado no arranca la obra.'
      },
      {
        pregunta: '¿Qué documentación debe aportar una subcontrata antes de entrar a obra?',
        opciones: [
          'Solo el contrato firmado con el contratista principal',
          'TPC de sus trabajadores, formación PRL, seguro RC y evaluación de riesgos',
          'Solo el alta en la Seguridad Social',
          'Basta con declaración responsable del jefe de obra'
        ],
        correcta: 1,
        explicacion: 'Antes de autorizar la entrada de una subcontrata, el CSS verifica TPC, certificados de formación PRL, seguro RC y evaluación de riesgos. Si falta algo, bloquea la entrada.'
      }
    ]
  },

  'conclusiones': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'La seguridad y salud en obras no es un trámite: es una figura legal obligatoria, bien pagada y con responsabilidad real. Para un Arquitecto Técnico es una de las vías más directas de diversificar ingresos sin abandonar la dirección de obra.'
      },
      {
        tipo: 'titulo',
        texto: '🎓 Las 7 conclusiones clave del curso'
      },
      {
        tipo: 'lista',
        items: [
          '1. Dos normas mandan: la LPRL (base general) y el RD 1627/1997 (específico obras).',
          '2. ESS o EBSS según tres umbrales: PEC, duración más trabajadores, o volumen de días-trabajador.',
          '3. El CSS aprueba el PSS antes del inicio de obra; sin PSS aprobado la obra no puede arrancar.',
          '4. El CSS es casi siempre obligatorio: en cuanto hay subcontratación, el promotor debe nombrarlo.',
          '5. CSS y Recurso Preventivo son figuras distintas: el CSS coordina y visita periódicamente; el RP vigila in situ durante operaciones de riesgo.',
          '6. UrbiCAD reduce de unas 18 horas a unas 3 horas la redacción de un ESS, pero hay que revisar y adaptar todo texto generado.',
          '7. El riesgo legal es alto y se reparte entre todos los técnicos: documentación impecable más seguro RC al día es la mejor defensa.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🚀 Aplicación práctica para tu perfil AT + ADE'
      },
      {
        tipo: 'lista',
        items: [
          'Reforma 50.000 euros: EBSS en UrbiCAD adaptado, documento legal correcto en pocas horas.',
          'Promoción 50 viviendas: ESS completo, honorarios 3.500 euros y obra cubierta legalmente.',
          'Aprobación de PSS de contratista: leer, anotar observaciones y firmar con condiciones reduce tu responsabilidad subsidiaria.',
          'Accidente en obra: protocolo de 7 pasos más notificación Delta en plazo.',
          'Rol FM con obras menores: coordinar CAE entre empresas en edificio en uso, gestión preventiva de mantenimiento.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Lo que este curso te abre',
        texto: 'Completando la formación PRL nivel intermedio (200 h), la colegiación y el seguro RC, sumas una figura obligatoria en casi toda obra. Como CSS habitual de 5-10 obras al año puedes facturar entre 25.000 y 50.000 euros extra compatibles con tu trabajo principal de DF.'
      },
      {
        tipo: 'titulo',
        texto: '📈 Valoración final del curso'
      },
      {
        tipo: 'lista',
        items: [
          'Dificultad: media. Normativa densa más responsabilidad legal real.',
          'Utilidad para FM/PM/CM: alta. CSS, CAE y cultura preventiva son transversales a cualquier gestión de obras.',
          'ROI del tiempo invertido: alto. Figura obligatoria con honorarios estables.',
          'Demanda en ofertas 2026: alta. CSS requerido en casi toda obra con subcontratación.'
        ]
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántas horas de formación PRL mínima necesita un AT para ejercer como CSS?',
        reverso: 'Nivel intermedio: 200 horas. Nivel superior: 600 horas. El nivel intermedio ya habilita para ejercer.'
      },
      {
        frente: '¿Qué ventaja principal aporta UrbiCAD frente al método manual?',
        reverso: 'Reduce la redacción de un ESS de 16-18 horas a unas 3 horas gracias al asistente automático de riesgos. Pero siempre hay que revisar y personalizar el resultado.'
      },
      {
        frente: '¿Puede un CSS cubrir el rol de FM en un edificio en uso?',
        reverso: 'No directamente: el RD 1627/1997 regula la fase de obra. En edificio en uso mandan otros marcos (mantenimiento, CAE permanente). Pero la cultura preventiva aprendida es directamente aplicable.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Qué requisitos debe cumplir un AT para poder ejercer legalmente como CSS?',
        opciones: [
          'Solo tener el título de AT y estar colegiado',
          'Titulación AT, formación PRL acreditada (200 h mínimo), colegiación y seguro RC',
          'Solo hace falta el seguro RC y la formación PRL',
          'Basta con haber cursado seguridad y salud en la carrera'
        ],
        correcta: 1,
        explicacion: 'Los cuatro requisitos son acumulativos: titulación habilitante, formación PRL acreditada (mínimo nivel intermedio 200 h), colegiación vigente y seguro de responsabilidad civil profesional.'
      },
      {
        pregunta: '¿Cuál es el número de obras al año a partir del cual UrbiCAD Smart suele amortizarse?',
        opciones: ['2', '5', '10', '20'],
        correcta: 2,
        explicacion: 'A partir de unas 10 obras al año el ahorro de tiempo (de 18 h a 3 h por ESS) cubre el coste de la licencia anual de 900-1.500 euros.'
      },
      {
        pregunta: '¿Qué cubre principalmente el RD 1627/1997 que NO cubre el marco de FM en edificio en uso?',
        opciones: [
          'La coordinación de actividades empresariales (CAE)',
          'La seguridad y salud durante la FASE DE OBRA (no el edificio en uso)',
          'Las sanciones por incumplimiento',
          'La evaluación de riesgos de los trabajadores'
        ],
        correcta: 1,
        explicacion: 'El RD 1627/1997 regula la prevención durante la fase de obra de construcción. El edificio en uso tiene su propio marco (mantenimiento, CAE permanente, PRL de empresa). Un FM necesita conocer ambos.'
      }
    ]
  }
};
