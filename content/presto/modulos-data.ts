import type { ModuloData } from '@/content/revit/modulos-data';

export const PRESTO_DATA: Record<string, ModuloData> = {
  'conceptos-at-pem-pec': {
    bloques: [
      { tipo: 'parrafo', texto: 'El Arquitecto Técnico vive entre cuatro siglas económicas. Aprenderlas hoy evita meses de confusión en obra.' },
      { tipo: 'titulo', texto: '📐 PEM, PEC, GG y BI: las 4 siglas clave' },
      { tipo: 'lista', items: [
        'PEM = Presupuesto de Ejecución Material: mediciones x precios unitarios, sin gastos generales',
        'GG = Gastos Generales: 13 % sobre el PEM (oficina, técnicos, seguros)',
        'BI = Beneficio Industrial: 6 % sobre el PEM',
        'PEC = PEM + GG + BI + IVA (21 % general, 10 % vivienda nueva primera transmisión)'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'La cebolla del PEM al PEC', texto: 'Piensa en capas: el PEM es el corazón. Le añades GG y BI y obtienes el PEC sin IVA. Una capa más de IVA y tienes el PEC total que paga el promotor.' },
      { tipo: 'titulo', texto: '🏗️ Tipos de medición' },
      { tipo: 'lista', items: [
        'Lineal (m): rodapié, cornisa, bordillo',
        'Superficial (m2): solado, pintura, alicatado',
        'Volumen (m3): hormigón, tierra excavada',
        'Unidad (ud): puerta, ventana, sanitario',
        'Peso (kg): acero corrugado, perfiles metálicos'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Confundir m2 con m3', texto: 'Una losa de 100 m2 con 0,25 m de espesor son 25 m3, no 100. Revisa siempre la unidad de la partida antes de meter medición.' },
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'IVA segun tipo de obra', texto: 'Vivienda nueva primera transmisión: 10 %. Reforma de hogar particular: 21 %. VPO: 10 %. (Ley 28/2014).' }
    ],
    flashcards: [
      { frente: '¿Qué porcentajes se suman al PEM para obtener el PEC sin IVA?', reverso: '13 % de Gastos Generales + 6 % de Beneficio Industrial = 19 % sobre el PEM.' },
      { frente: '¿Qué es el FIEBDC-3?', reverso: 'Formato de Intercambio Estándar para Bases de Datos de Construcción. Archivo .bc3 compatible con Presto, Arquímedes y TCQ.' },
      { frente: '¿Qué IVA se aplica a una vivienda nueva?', reverso: 'IVA reducido del 10 % para vivienda nueva primera transmisión. El 21 % es para reforma particular.' }
    ],
    preguntas: [
      {
        pregunta: 'Un PEM de 1.000.000 euros con GG 13 %, BI 6 % e IVA 21 %. ¿Cuál es el PEC total?',
        opciones: ['1.190.000 euros', '1.210.000 euros', '1.439.900 euros', '1.300.000 euros'],
        correcta: 2,
        explicacion: 'PEM + 13 % GG + 6 % BI = 1.190.000 euros. Mas IVA 21 % (249.900) = 1.439.900 euros.'
      },
      {
        pregunta: '¿Qué es la retención del 5 % en una certificación mensual?',
        opciones: [
          'Un descuento por calidad de obra',
          'Una multa por retraso',
          'Un porcentaje retenido hasta fin del plazo de garantia como fianza del promotor',
          'El beneficio industrial del contratista'
        ],
        correcta: 2,
        explicacion: 'La retención del 5 % es la fianza del promotor contra vicios ocultos. Se libera al finalizar el plazo de garantia (1, 3 o 10 años segun la parte de la obra).'
      },
      {
        pregunta: '¿Para qué sirve el formato FIEBDC-3?',
        opciones: [
          'Solo para exportar planos en AutoCAD',
          'Como idioma común de intercambio de presupuestos entre Presto, Arquimedes y otros programas',
          'Para calcular el IVA de obra publica',
          'Para generar pliegos administrativos'
        ],
        correcta: 1,
        explicacion: 'El archivo .bc3 es el lenguaje universal de mediciones en España. Sin él, no puedes verificar mediciones automáticamente ni importar bases de datos comerciales.'
      }
    ]
  },

  'acceso-software': {
    bloques: [
      { tipo: 'parrafo', texto: 'El 95 % del mercado español usa Presto o Arquímedes. Aprender los dos te posiciona en cualquier empresa.' },
      { tipo: 'titulo', texto: '💻 Presto vs Arquímedes: cuándo usar cada uno' },
      { tipo: 'lista', items: [
        'Presto (RIB): estándar en constructoras grandes, curva alta, sin versión estudiante real',
        'Arquímedes (CYPE): estándar en estudios técnicos, versión estudiante 100 % gratis',
        'CYPE Project: versión ligera para reformas pequeñas y anteproyectos rápidos'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Lo que aprendes en Arquímedes vale para Presto', texto: 'Los conceptos son prácticamente iguales. Si dominas Arquímedes, trasladas el conocimiento a Presto en 2-3 semanas cuando entres en empresa.' },
      { tipo: 'titulo', texto: '🎓 Descarga Arquímedes gratis' },
      { tipo: 'lista', items: [
        'URL: no-te-presto-te-regalo.arquimedes.cype.es (broma al nombre del programa rival)',
        'Rellena el formulario con datos académicos',
        'Instalador .exe de unos 250 MB, totalmente operativo',
        'Exporta .bc3 sin marcas de agua, válido para autoformación y estudio'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Presto pirata: riesgo real', texto: 'RIB detecta instalaciones no licenciadas al abrir archivos. Han demandado a estudios técnicos en España. Para el CV es mejor decir que usas Arquímedes que Presto sin licencia.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Formatos de archivo', texto: '.cap = banco de precios CYPE. .bc3 = formato universal FIEBDC-3. .cer = certificación. Al enviar a otro técnico, usa siempre .bc3.' }
    ],
    flashcards: [
      { frente: '¿Cuál es la principal ventaja de Arquímedes frente a Presto para un estudiante?', reverso: 'Arquímedes tiene versión estudiante 100 % gratuita y operativa. Presto no tiene versión gratuita real, solo demo de 15 días.' },
      { frente: '¿Qué extensión usa el formato universal de intercambio?', reverso: '.bc3 (FIEBDC-3). Compatible con todos los programas españoles: Presto, Arquimedes, TCQ, SiGriD.' }
    ],
    preguntas: [
      {
        pregunta: '¿Dónde se descarga Arquímedes versión estudiante?',
        opciones: [
          'cype.es/descargas',
          'presto.es/estudiante',
          'no-te-presto-te-regalo.arquimedes.cype.es',
          'generadordeprecios.info'
        ],
        correcta: 2,
        explicacion: 'La URL es un guiño humorístico al nombre del programa rival. El formulario pide datos académicos; CYPE valida antes de dar acceso.'
      },
      {
        pregunta: '¿Qué formato debes usar al exportar un presupuesto para enviarlo a otro técnico?',
        opciones: ['.cap', '.cer', '.bc3', '.bim'],
        correcta: 2,
        explicacion: '.bc3 es el formato universal FIEBDC-3. El .cap es propio de CYPE y el destinatario puede no tener el programa. .cer es para certificaciones.'
      },
      {
        pregunta: '¿Para qué tipo de proyecto es mejor Presto según el mercado en 2026?',
        opciones: [
          'Estudios técnicos pequeños de reforma',
          'Obra pública grande y constructoras grandes',
          'Anteproyectos rápidos con presupuesto orientativo',
          'BIM 5D con Revit en proyectos universitarios'
        ],
        correcta: 1,
        explicacion: 'Presto domina en constructoras grandes y obra pública. Su módulo de certificaciones y control de coste es el más completo del mercado.'
      }
    ]
  },

  'bases-datos-bc3': {
    bloques: [
      { tipo: 'parrafo', texto: 'Una base de datos de precios es una colección estructurada de partidas, descompuestos y pliegos en formato .bc3. Elegir la correcta marca la diferencia entre un presupuesto rápido y uno preciso.' },
      { tipo: 'titulo', texto: '🗄️ Principales bases gratuitas en España' },
      { tipo: 'lista', items: [
        'Generador de Precios CYPE (generadordeprecios.info): gratis, toda España, la mas usada para autoformación',
        'BDC ITeC (itec.cat): gratis, foco en Cataluña y rehabilitación sostenible',
        'Construc IVE: gratis para registrados, Comunidad Valenciana',
        'Bases de pago: PRECIO Centro (~300 euros/año), BDEU Madrid'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Para empezar, no pagues bases', texto: 'Con el Generador CYPE y BDC ITeC cubre cualquier autoformación o proyecto pequeño. Las bases de pago se justifican cuando tienes clientes que lo requieren.' },
      { tipo: 'titulo', texto: '🔍 Estructura interna del archivo .bc3' },
      { tipo: 'lista', items: [
        '~V: version del formato FIEBDC-3',
        '~K: coeficientes globales (GG, BI, IVA)',
        '~C: codigos jerárquicos (capítulos, subcapítulos, partidas)',
        '~D: descomposición de cada partida (mano de obra, material, maquinaria)',
        '~M: mediciones detalladas',
        '~T: textos del pliego de condiciones'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Precios con retraso', texto: 'Los precios de bases públicas llevan 6-9 meses de retraso sobre el mercado real. En épocas de inflación alta eso supone 8-15 % menos que los precios actuales. Aplica coeficiente corrector cada enero.' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'BIM 5D con Arquímedes', texto: 'En Revit asignas a cada elemento un parámetro "Código Presupuesto" que enlaza con el código BC3. Sin esa convención previa, la vinculación automática no funciona.' }
    ],
    flashcards: [
      { frente: '¿Qué línea del archivo .bc3 contiene los descompuestos de partidas?', reverso: 'La línea ~D. Contiene mano de obra, material y maquinaria con sus rendimientos y precios.' },
      { frente: '¿Por qué los precios del Generador CYPE pueden estar desactualizados?', reverso: 'Llevan 6-9 meses de retraso. En periodos de inflación de materiales (2022-2024) la diferencia fue de hasta el 15 % respecto al mercado real.' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es la base de datos gratuita más recomendada para autoformación AT en España?',
        opciones: ['BDEU Madrid', 'PRECIO Centro', 'Generador de Precios CYPE', 'CYPE Tariffs'],
        correcta: 2,
        explicacion: 'El Generador de Precios CYPE es gratuito, cubre toda España con variantes regionales y se conecta directamente a Arquímedes con un clic.'
      },
      {
        pregunta: '¿Qué problema puede aparecer al importar un .bc3 con codificación errónea?',
        opciones: [
          'El archivo no se abre',
          'Las mediciones se duplican',
          'Aparecen caracteres raros en lugar de tildes y eñes',
          'Se pierden los capítulos del presupuesto'
        ],
        correcta: 2,
        explicacion: 'El conflicto UTF-8 vs ANSI provoca que tildes y eñes aparezcan como caracteres extraños. Solución: seleccionar explícitamente la codificación ANSI al importar.'
      },
      {
        pregunta: '¿Cuál de estos métodos para adaptar precios a tu zona es más preciso pero más lento?',
        opciones: [
          'Aplicar un coeficiente global a todo el presupuesto',
          'Usar la base de datos sin modificar',
          'Modificar manualmente el descompuesto de cada partida',
          'Importar una base regional diferente'
        ],
        correcta: 2,
        explicacion: 'Editar el descompuesto partida a partida (tasa horaria, precio material) da máxima precisión pero cuesta 30-50 minutos la primera vez. El coeficiente global es rápido pero impreciso.'
      }
    ]
  },

  'mediciones-arquimedes': {
    bloques: [
      { tipo: 'parrafo', texto: 'La pestaña Mediciones es donde pasas el 70 % del tiempo en Arquímedes. Aprende sus atajos antes que cualquier otra cosa.' },
      { tipo: 'titulo', texto: '🏗️ Capítulos típicos de una vivienda unifamiliar' },
      { tipo: 'lista', items: [
        '00 Replanteo y trabajos previos (1 %)',
        '02 Cimentación (8 %)',
        '03 Estructura (15 %)',
        '05 Cerramientos exteriores (14 %)',
        '09 Revestimientos y solados (12 %)',
        '12 Carpintería interior y exterior (10 %)'
      ]},
      { tipo: 'titulo', texto: '📏 Cómo se estructura una línea de medición' },
      { tipo: 'lista', items: [
        'Comentario: qué se mide (ejemplo: "Zapata Z1")',
        'Uds: cantidad de elementos iguales',
        'A, B, C: dimensiones a multiplicar (largo, ancho, alto)',
        'Total = Uds x A x B x C'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Deducir huecos con líneas negativas', texto: 'Muro completo: 1 x 6,00 x 2,80 = 16,80 m2. Ventana: -1 x 1,20 x 1,20 = -1,44 m2. Total neto: 15,36 m2. Mas limpio que calcular todo en una sola línea.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'El truco favorito del jefe de obra', texto: 'Medir tabiques en m2 x 2 (las dos caras) está prohibido por el convenio sectorial pero ocurre cada semana. Comprueba siempre la unidad declarada en la partida.' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'BIM 5D: mediciones automáticas', texto: 'Carga el modelo .ifc o .rvt en BIMserver.center (cuenta CYPE gratuita). Arquímedes vincula partidas a elementos del modelo y rellena mediciones solas. Un cambio en Revit actualiza Arquímedes.' }
    ],
    flashcards: [
      { frente: '¿Por qué se usan líneas negativas en mediciones?', reverso: 'Para deducir huecos (ventanas, puertas) de partidas de muro, pintura o alicatado. Es mas auditable que calcular la superficie neta manualmente.' },
      { frente: '¿Cuál es el atajo de teclado para insertar una línea de medición en Arquímedes?', reverso: 'Ctrl+I inserta una nueva línea de medición en la partida seleccionada.' }
    ],
    preguntas: [
      {
        pregunta: '¿Qué significa que la columna "Uds" valga 4 en una línea de medición de zapatas?',
        opciones: [
          'Que la zapata mide 4 metros',
          'Que hay 4 zapatas iguales y sus dimensiones se multiplican por 4',
          'Que el precio unitario se multiplica por 4',
          'Que la zapata tiene 4 refuerzos de acero'
        ],
        correcta: 1,
        explicacion: 'Uds es el multiplicador de elementos repetidos. 4 zapatas de 1,20 x 1,20 x 0,50 m = 4 x 1,20 x 1,20 x 0,50 = 2,88 m3 total.'
      },
      {
        pregunta: '¿Cuál es el porcentaje del PEM que suele representar la estructura en una vivienda unifamiliar?',
        opciones: ['5-8 %', '10-12 %', '15-18 %', '20-25 %'],
        correcta: 2,
        explicacion: 'La estructura (hormigón, pilares, forjados) supone entre el 14 y el 18 % del PEM en una unifamiliar estándar. Valores muy por encima o por debajo indican error de medición o presupuesto.'
      },
      {
        pregunta: '¿Qué hay que pedir siempre al importar mediciones desde Excel?',
        opciones: [
          'Que el archivo sea .xlsx y no .xls',
          'Que incluya una columna con el código de partida',
          'Que las cantidades estén en metros cuadrados',
          'Que no tenga fórmulas, solo valores'
        ],
        correcta: 1,
        explicacion: 'Sin la columna de código de partida, Arquímedes no puede mapear las filas Excel a las partidas del presupuesto. Es imprescindible pedírsela al subcontratista.'
      }
    ]
  },

  'presupuesto-completo': {
    bloques: [
      { tipo: 'parrafo', texto: 'El precio unitario es la receta de la partida. Cinco ingredientes que se suman y multiplican por la medición para obtener el importe de cada partida.' },
      { tipo: 'titulo', texto: '💶 Anatomía del precio unitario descompuesto' },
      { tipo: 'lista', items: [
        'Mano de obra: horas x tasa €/h (Oficial 1ª Madrid 2026: ~22 €/h)',
        'Material: cantidad x €/ud (ejemplo: Hormigón HA-25 = 90 €/m3)',
        'Maquinaria: uso x €/h (Retroexcavadora ~60 €/h)',
        'Medios auxiliares: 2 % sobre subtotal (sal y aceite de la receta)',
        'Costes indirectos: 3 % sobre subtotal'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Precio/m2 como control previo', texto: 'Divide el PEM entre los m2 construidos antes de enseñar el presupuesto al cliente. Unifamiliar acabado medio: 1.100-1.500 €/m2 PEM. Si sale a 500 o a 3.000, hay un error.' },
      { tipo: 'titulo', texto: '📊 Indicadores típicos vivienda unifamiliar' },
      { tipo: 'lista', items: [
        'Coste PEM: 1.100-1.500 €/m2',
        'Coste PEC total: 1.350-1.800 €/m2',
        'Mano de obra: 40-50 % del total',
        'Material: 35-45 % del total',
        'Maquinaria y auxiliares: 8-15 % del total'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Tasas de convenio desactualizadas', texto: 'El convenio provincial de construcción se renegocia cada año. Aplicar tasas del año anterior puede suponer un 5-8 % de diferencia. Consulta el BOE entre enero y marzo.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Presenta siempre el PEC, nunca el PEM', texto: 'Si le das el PEM al promotor cree que paga eso. Cuando llega el PEC con IVA se siente engañado. Presenta siempre el PEC total desde el primer email.' }
    ],
    flashcards: [
      { frente: '¿Qué porcentajes de GG y BI se aplican en el sector de la construcción?', reverso: '13 % de Gastos Generales + 6 % de Beneficio Industrial. En obra privada se pueden negociar a la baja, pero se arriesga margen.' },
      { frente: '¿Cómo afecta cambiar un "auxiliar" (como el mortero M-5) en Arquímedes?', reverso: 'El cambio se propaga a TODAS las partidas que usan ese auxiliar. Util para actualizaciones de precio, pero peligroso si solo querías cambiar una partida.' }
    ],
    preguntas: [
      {
        pregunta: '¿Qué son los "costes indirectos" en el descompuesto de una partida?',
        opciones: [
          'El IVA de los materiales',
          'Los gastos generales de la empresa constructora',
          'Un porcentaje (~3%) que cubre gastos no directamente asignables a la partida como administración o seguros',
          'El beneficio industrial del subcontratista'
        ],
        correcta: 2,
        explicacion: 'Los costes indirectos (3 % habitual) cubren gastos de obra no imputables a una partida concreta: vigilancia, pequeñas herramientas, coordinación. Van dentro del precio unitario, no en los GG del PEC.'
      },
      {
        pregunta: 'Una vivienda unifamiliar de 150 m2 tiene un PEM de 300.000 euros. ¿Cuál es el coste por m2?',
        opciones: ['1.200 €/m2', '2.000 €/m2', '1.500 €/m2', '900 €/m2'],
        correcta: 1,
        explicacion: '300.000 / 150 = 2.000 €/m2 PEM. Este valor supera la franja típica de 1.100-1.500 €/m2 para acabado medio. Habría que revisar el presupuesto antes de presentarlo.'
      },
      {
        pregunta: '¿Cómo se comparan dos escenarios (básico vs premium) de forma profesional en Arquímedes?',
        opciones: [
          'Se hace un presupuesto nuevo para cada escenario',
          'Se duplica la obra y se modifican los precios en la copia, o se crean partidas alternativas dentro del mismo proyecto',
          'Solo se puede comparar exportando a Excel',
          'Arquímedes no permite comparar escenarios'
        ],
        correcta: 1,
        explicacion: 'Duplicar la obra con "Guardar como" o crear partidas alternativas dentro del mismo proyecto son los dos métodos. Presentar 2-3 escenarios al cliente acelera el cierre del contrato.'
      }
    ]
  },

  'documentacion-final': {
    bloques: [
      { tipo: 'parrafo', texto: 'Un proyecto de ejecución entregado consta de 8 documentos clave. Si falta uno, el visado se rechaza.' },
      { tipo: 'titulo', texto: '📦 Documentos del proyecto de ejecución' },
      { tipo: 'lista', items: [
        'Memoria: justificación, objetivos y descripción técnica',
        'Mediciones: lista detallada por capítulo y partida',
        'Presupuesto: mediciones x precios con resumen económico',
        'Pliego de Condiciones: cómo se ejecuta cada partida',
        'Planos: gráfico de la obra (de Revit o AutoCAD)',
        'Estudio de Seguridad y Salud',
        'Estudio de Gestión de Residuos (obligatorio por RD 105/2008)',
        'Anejos: cálculos estructurales, geotécnico, eficiencia energética'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Estudio de Gestión de Residuos obligatorio', texto: 'El RD 105/2008 exige Estudio de Gestión de Residuos en obras con PEC superior a 40.000 euros. Sin él, el visado se deniega.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Pliego automático: 2 días de trabajo en 30 minutos', texto: 'Arquímedes genera el pliego técnico automáticamente desde el Generador de Precios. Solo tienes que revisarlo y añadir las particularidades del proyecto (forjado especial, fachada ventilada, etc.).' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Dos PDFs para el cliente', texto: 'Genera un PDF resumen de 4-8 páginas (solo capítulos y totales) para reuniones y uno completo con descompuestos para visado. El promotor mira solo el resumen.' }
    ],
    flashcards: [
      { frente: '¿Cuánto tarda un AT en generar un presupuesto PDF con pliego en Arquímedes?', reverso: 'Menos de 1 hora (PDF 5 min, pliego automático 30 min de revisión, Excel 2 min). Sin Arquímedes: hasta 28 horas de trabajo manual.' },
      { frente: '¿Por qué el pliego automático de CYPE necesita revisión manual?', reverso: 'El pliego generado es genérico. Si la obra tiene singularidades (forjado postensado, anclaje especial), hay que añadir párrafos específicos o el contratista ejecuta la opción más barata.' }
    ],
    preguntas: [
      {
        pregunta: '¿En qué supuestos es obligatorio el Estudio de Gestión de Residuos?',
        opciones: [
          'En todas las obras sin excepción',
          'Solo en obra publica',
          'En obras con PEC superior a 40.000 euros, segun RD 105/2008',
          'Solo cuando hay demoliciónes previas'
        ],
        correcta: 2,
        explicacion: 'El RD 105/2008 establece que obras con PEC mayor de 40.000 euros deben incluir un Estudio de Gestión de Residuos visado. Su ausencia implica denegación del visado.'
      },
      {
        pregunta: '¿Qué exportación debes usar para que el cliente promotor revise mediciones sin tener Arquímedes?',
        opciones: ['.cap', '.bc3', '.cer', 'Excel (.xlsx)'],
        correcta: 3,
        explicacion: 'El promotor no tiene Arquímedes ni Presto. Excel es el formato universal que cualquier persona puede abrir. .bc3 es para técnicos, .cap es exclusivo de CYPE.'
      },
      {
        pregunta: '¿Cuál de estos elementos completa el checklist profesional antes de entregar un presupuesto?',
        opciones: [
          'Verificar que el precio es mas bajo que el de la competencia',
          'Confirmar que el coste por m2 esta en la franja razonable del tipo de obra',
          'Incluir todas las partidas del Generador CYPE aunque no correspondan',
          'Imprimir en papel antes de exportar a PDF'
        ],
        correcta: 1,
        explicacion: 'El sanidad check de €/m2 es imprescindible. Un presupuesto de unifamiliar a 500 €/m2 o a 3.000 €/m2 tiene errores graves. Detectarlo antes de entregar evita reclamaciones.'
      }
    ]
  },

  'certificaciones': {
    bloques: [
      { tipo: 'parrafo', texto: 'La certificación mensual es el documento que recoge lo ejecutado en el mes y permite al contratista facturar al promotor. La firma el AT y es legalmente vinculante.' },
      { tipo: 'titulo', texto: '✅ Workflow mensual del AT' },
      { tipo: 'lista', items: [
        'Último día del mes: contratista presenta la relación valorada (sus mediciones)',
        'Día 1-3: AT mide in situ vs lo declarado',
        'Día 3-5: discusión y ajustes con el contratista',
        'Día 5-7: AT firma la certificación',
        'Día 7+: contratista factura y promotor paga a 30-60 días'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'El dia 3-5 es político', texto: 'Llega con tu propio muestreo de mediciones. Si vas sin datos, el contratista te pasa cualquier cifra y firmás algo que no has verificado.' },
      { tipo: 'titulo', texto: '📋 Retención y modificados' },
      { tipo: 'lista', items: [
        'Retención típica: 5 % retenido en cada certificación',
        'Se libera en dos partes: mitad a la recepción provisional, mitad al fin de garantia',
        'Modificado: cualquier cambio sobre lo contratado requiere acta firmada, siempre',
        'En obra publica: limite legal del modificado del 20-50 % segun LCSP'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Sobre-certificar es riesgo personal', texto: 'Firmar más de lo ejecutado es riesgo personal del AT y puede constituir un delito. Verifica siempre in situ antes de firmar, aunque el contratista "te jure" que es correcto.' },
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Revision de precios en obra publica', texto: 'En obras de plazo mayor de 1 año, el RD 1359/2011 regula la revisión de precios mediante índices (ITCC, IPRI). En obra privada es poco habitual.' }
    ],
    flashcards: [
      { frente: '¿Cuándo se libera la retención del 5 %?', reverso: 'En dos mitades: la primera a la recepción provisional de la obra, la segunda al finalizar el plazo de garantia (habitualmente 1 año para defectos de acabado).' },
      { frente: '¿Qué es un modificado de obra y qué documento lo formaliza?', reverso: 'Cualquier cambio sobre lo contratado (mas o menos obra, distinta calidad). Se formaliza con un acta firmada por la DF y aprobada por el promotor. Sin acta, discusión legal asegurada.' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es el método de certificación más adecuado para una obra pública grande?',
        opciones: [
          'Por porcentaje de avance estimado visualmente',
          'Por mediciones reales in situ verificadas por el AT',
          'Según el plan de obra inicial sin ajustes',
          'Por declaración del jefe de obra'
        ],
        correcta: 1,
        explicacion: 'La administración publica exige certificaciones por medición real. El porcentaje de avance es válido para obras pequeñas o privadas donde hay confianza mutua, pero es subjetivo y fácil de inflar.'
      },
      {
        pregunta: '¿Qué ocurre si un modificado de obra no se documenta con acta firmada?',
        opciones: [
          'Se puede regular a posteriori con un email',
          'El promotor paga igualmente si hay buena voluntad',
          'Genera disputa legal asegurada al cierre porque no hay constancia contractual',
          'No tiene consecuencias si el importe es menor de 1.000 euros'
        ],
        correcta: 2,
        explicacion: 'Sin acta firmada, el modificado no existe legalmente. Al cierre de obra, promotor y contratista pueden discrepar sobre lo aprobado. El AT sin documentación queda en posición débil.'
      },
      {
        pregunta: '¿Cuál es el truco más habitual de un contratista para inflar una certificación?',
        opciones: [
          'Duplicar el precio unitario de algunas partidas',
          'Certificar por porcentaje de avance al alza sin respaldo real de medición',
          'Eliminar la retención del cálculo',
          'Cambiar el IVA a aplicar'
        ],
        correcta: 1,
        explicacion: 'Declarar "cimentación al 80 %" cuando la realidad es un 60 % es el truco clasico de un contratista con problemas de caja. La única defensa es verificar in situ antes de firmar.'
      }
    ]
  },

  'caso-practico-unifamiliar': {
    bloques: [
      { tipo: 'parrafo', texto: 'Vivienda unifamiliar aislada en Móstoles, 200 m2, 2 plantas + cubierta plana. Estructura hormigón armado, acabados medio-alto. Objetivo: PEC de 380.000 euros.' },
      { tipo: 'titulo', texto: '🏠 Distribución del PEM por capítulos (principales)' },
      { tipo: 'lista', items: [
        'Estructura (03): 14 % · 37.000 euros',
        'Cerramientos exteriores (05): 12 % · 32.000 euros',
        'Revestimientos y solados (11): 12 % · 32.000 euros',
        'Carpintería (12): 10 % · 26.000 euros',
        'Cimentación (02): 7 % · 18.000 euros',
        'Gestión de residuos (17): 1 % · 2.500 euros (obligatorio RD 105/2008)'
      ]},
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Resultado del caso', texto: 'PEM: 265.000 euros. GG 13 %: 34.450 euros. BI 6 %: 15.900 euros. PEC sin IVA: 315.350 euros. IVA 21 %: 66.224 euros. PEC total: 381.574 euros. Coste: 1.327 €/m2 PEM, 1.908 €/m2 PEC.' },
      { tipo: 'titulo', texto: '⚙️ Workflow en 7 pasos' },
      { tipo: 'lista', items: [
        '1. Setup: nueva obra, banco CYPE Madrid, datos generales del proyecto',
        '2. Crear los 17 capítulos con sus códigos',
        '3. Importar partidas del Generador CYPE (objetivo: 60-80 partidas)',
        '4. Mediciones partida a partida con líneas y deducciones',
        '5. Sanidad check: €/m2 dentro de franja 1.100-1.500',
        '6. Aplicar GG 13 %, BI 6 %, IVA 21 %',
        '7. Generar PDF + pliego + Excel + .bc3'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Cronometra tu primer presupuesto', texto: 'La primera vez tarda unas 6-8 horas. Con experiencia y banco propio, el mismo presupuesto se hace en 3-4 horas. Sistematizar es lo que marca la diferencia.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Entregable al promotor', texto: 'Comprime todo en un ZIP con carpetas: 01_RESUMEN (1 PDF de 2 páginas), 02_MEDICIONES (Excel), 03_PLIEGO (Word). El promotor solo mira el 01_RESUMEN; el resto es para técnicos.' }
    ],
    flashcards: [
      { frente: '¿Cuánto tarda un AT con experiencia en hacer un presupuesto de vivienda unifamiliar?', reverso: '3-4 horas con banco de precios adaptado. La primera vez sin banco propio puede llevar 6-8 horas.' },
      { frente: '¿Cuál es el coste por m2 PEM tipico para una unifamiliar de acabado medio-alto?', reverso: '1.100-1.500 €/m2 PEM. El caso del curso dio 1.327 €/m2 PEM y 1.908 €/m2 PEC total.' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuántos capítulos se estructura habitualmente el presupuesto de una vivienda unifamiliar?',
        opciones: ['5-7 capítulos', '10-12 capítulos', '15-17 capítulos', 'Mas de 25 capítulos'],
        correcta: 2,
        explicacion: 'Una unifamiliar completa tiene entre 15 y 17 capítulos: desde trabajos previos hasta gestión de residuos. Menos capítulos suele indicar que se han agrupado partidas que merecen separación.'
      },
      {
        pregunta: 'En el caso práctico, el PEC total fue 381.574 euros para 200 m2. ¿Cuánto es el PEC por m2?',
        opciones: ['1.327 €/m2', '1.576 €/m2', '1.908 €/m2', '2.100 €/m2'],
        correcta: 2,
        explicacion: '381.574 / 200 = 1.907,87, redondeado a 1.908 €/m2 PEC total. El PEM fue 265.000 / 200 = 1.327 €/m2. Hay que distinguir PEM de PEC al comunicar costes al promotor.'
      },
      {
        pregunta: '¿Qué capítulo es obligatorio por ley y no puede faltar en ningún proyecto de ejecución?',
        opciones: [
          'Capítulo de urbanización exterior',
          'Capítulo de equipamiento (cocina y sanitarios)',
          'Capítulo de gestión de residuos (RD 105/2008)',
          'Capítulo de vidriería'
        ],
        correcta: 2,
        explicacion: 'La Gestión de Residuos es obligatoria por RD 105/2008 en obras con PEC superior a 40.000 euros. Olvidarla es uno de los errores más comunes y provoca denegación del visado.'
      }
    ]
  },

  'conclusiones': {
    bloques: [
      { tipo: 'parrafo', texto: 'Mediciones y presupuestos son la columna vertebral del Arquitecto Técnico. Ningún otro perfil de obra domina esta materia como tú puedes hacerlo, y es exactamente lo que valoran promotoras y constructoras.' },
      { tipo: 'titulo', texto: '🎓 7 conclusiones clave del curso' },
      { tipo: 'lista', items: [
        '1. El AT vive entre 4 siglas: PEM (mediciones x precios) + 13 % GG + 6 % BI + IVA = PEC total. Olvidar el IVA es el malentendido clásico con el promotor.',
        '2. La medición es el terreno de batalla: las líneas negativas para huecos son obligatorias o te roban sin querer.',
        '3. El descompuesto manda: precio = mano de obra + material + maquinaria; entenderlo permite negociar y detectar precios inflados.',
        '4. FIEBDC-3 (.bc3) es el idioma común: nunca aceptes solo PDF para certificar.',
        '5. La certificación la firma el AT y es legalmente vinculante: sobre-certificar es riesgo personal.',
        '6. La retención del 5 % es la fianza del promotor; se libera al fin del plazo de garantia.',
        '7. El modificado siempre con acta firmada: sin documentar, discusión legal asegurada al cierre.'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Por qué esto abre puertas FM/PM/CM', texto: 'Dominar Presto y Arquímedes te hace imprescindible en obra. El perfil AT + ADE que controla mediciones y costes es exactamente lo que buscan promotoras, constructoras y gestoras de patrimonio.' },
      { tipo: 'titulo', texto: '🚀 Siguientes pasos recomendados' },
      { tipo: 'lista', items: [
        'Hacer 5 presupuestos reales de reformas o locales pequeños',
        'Conseguir practicas en empresa con Presto para el CV',
        'Combinar con el curso Revit para cerrar el ciclo BIM 5D',
        'Estudiar el RD 1359/2011 si aspiras a obra publica',
        'Revisar la LCSP (límites de modificados) para puestos CM/PM en licitación'
      ]}
    ],
    flashcards: [
      { frente: '¿Para qué perfil profesional es mas útil dominar Presto y Arquímedes?', reverso: 'Para FM, PM y CM: el control de costes es el corazón del rol. Un AT que controla mediciones y presupuesto es imprescindible en obra y en gestión de patrimonio.' },
      { frente: '¿Qué limitación tiene Arquímedes respecto a la planificación de plazos?', reverso: 'No es un planificador de tiempos. Para cronograma y camino crítico hace falta MS Project o Primavera P6. Arquímedes gestiona costes, no fechas.' },
      { frente: '¿Por qué las bases de precios genéricas no sustituyen al mercado real?', reverso: 'Llevan 6-9 meses de retraso y pueden divergir un 8-15 % de los precios reales. Hay que ajustar coeficientes por zona y actualizar cada enero.' }
    ],
    preguntas: [
      {
        pregunta: '¿Por qué la doble formación AT + ADE es especialmente valiosa en presupuestos?',
        opciones: [
          'Porque permite usar mas programas a la vez',
          'Porque combina el conocimiento técnico de la obra con la comprensión de la cuenta de resultados y el control de costes',
          'Porque ADE enseña a usar Excel y AT enseña Arquímedes',
          'No aporta ventaja diferencial'
        ],
        correcta: 1,
        explicacion: 'El perfil AT entiende qué se mide y por qué; el perfil ADE entiende márgenes, rentabilidad y control presupuestario. La combinación es lo que buscan promotoras y gestoras de patrimonio para roles PM/CM/FM.'
      },
      {
        pregunta: '¿Cuál es el ROI (retorno de tiempo invertido) de aprender Presto y Arquímedes segun las conclusiones del curso?',
        opciones: [
          'Bajo, porque hay pocas ofertas que lo pidan',
          'Medio, es una habilidad complementaria',
          'Muy alto, es competencia core demandada en casi toda oferta AT de obra en 2026',
          'Solo alto si se trabaja en obra publica'
        ],
        correcta: 2,
        explicacion: 'Presto y Arquímedes aparecen en casi toda oferta AT de obra. Es la competencia más directamente ligada al control de costes que valoran PM, CM y FM. ROI muy alto segun el análisis del curso.'
      },
      {
        pregunta: '¿Qué se recomienda hacer tras terminar este curso para consolidar el aprendizaje?',
        opciones: [
          'Estudiar otro programa de presupuestos diferente',
          'Hacer al menos 5 presupuestos reales de reformas o locales pequeños con Arquímedes',
          'Esperar a conseguir trabajo para practicar',
          'Obtener la certificación oficial de CYPE'
        ],
        correcta: 1,
        explicacion: 'La práctica real es insustituible. 5 presupuestos de obras pequeñas consolidan el workflow, generan un banco de precios propio y producen piezas de portfolio demostrables en entrevistas.'
      }
    ]
  }
};
