import type { ModuloData } from '@/content/revit/modulos-data';

export const TASACION_DATA: Record<string, ModuloData> = {
  'que-es-tasacion': {
    bloques: [
      { tipo: 'parrafo', texto: 'Una tasación es un informe técnico que asigna un valor oficial a un inmueble. Sigue metodología regulada, tiene validez legal y vincula a quien lo firma.' },
      { tipo: 'titulo', texto: '⚖️ La palabra "tasación" siempre lleva apellido' },
      { tipo: 'lista', items: [
        'Hipotecaria: para que el banco financie la compra.',
        'Pericial: para herencias o juicios.',
        'Catastral: para impuestos (la hace Hacienda).',
        'Judicial: la encarga el juez, la firma el perito designado.'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'ECO 805/2003', texto: 'Es la norma española que regula las tasaciones oficiales. Aprobada en 2003 y reformada en 2025 para incluir sostenibilidad y riesgo climático obligatorios.' },
      { tipo: 'titulo', texto: '💰 Tipos de valor según ECO' },
      { tipo: 'lista', items: [
        'Valor de mercado (VM): precio teórico en condiciones normales.',
        'Valor hipotecario (VH): VM descontando riesgos. El banco presta sobre VH, no sobre VM.',
        'VH suele ser el 80-90 % del VM.',
        'Valor de reemplazamiento: coste de reconstruir el edificio.'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Solo sociedades homologadas', texto: 'Para firmar tasaciones hipotecarias oficiales necesitas estar inscrito en una sociedad homologada por el Banco de España: Tinsa, Sociedad de Tasación, Arquitasa, Gloval o Krata. Sin esa inscripción, solo puedes hacer peritajes y dictámenes.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Validez: 6 meses', texto: 'Una tasación ECO caduca a los 6 meses. Si el banco la rechaza por caducada, hay que hacer una nueva completa desde cero.' }
    ],
    flashcards: [
      { frente: '¿Cuánto vale el VH frente al VM?', reverso: 'El VH es aproximadamente el 80-90 % del VM porque descuenta el riesgo a largo plazo. El banco presta sobre VH.' },
      { frente: '¿Cuánto tiempo es válida una tasación ECO?', reverso: '6 meses desde la fecha de emisión. Pasado ese plazo, hay que repetirla.' },
      { frente: '¿Qué es la Orden ECO 805/2003?', reverso: 'La norma española que regula la metodología de tasaciones oficiales. Reformada en 2025 para incluir sostenibilidad obligatoria.' }
    ],
    preguntas: [
      {
        pregunta: '¿Qué valor usa el banco para calcular el préstamo hipotecario?',
        opciones: [
          'El precio de venta acordado entre comprador y vendedor.',
          'El valor catastral del inmueble.',
          'El valor hipotecario (VH), que es aproximadamente el 80-90 % del VM.',
          'El valor de reemplazamiento del edificio.'
        ],
        correcta: 2,
        explicacion: 'El banco presta sobre el VH, que descuenta riesgos frente al VM. Por eso la hipoteca no cubre el 100 % del precio de compra.'
      },
      {
        pregunta: '¿Quién puede firmar una tasación hipotecaria oficial para un banco español?',
        opciones: [
          'Cualquier Arquitecto Técnico colegiado.',
          'Solo un Arquitecto con experiencia mínima de 5 años.',
          'Un Arquitecto Técnico inscrito en una sociedad de tasación homologada por el Banco de España.',
          'Cualquier técnico con titulación universitaria relacionada con la construcción.'
        ],
        correcta: 2,
        explicacion: 'La titulación AT habilita pero no autoriza. Se necesita además la inscripción en una sociedad homologada (Tinsa, ST, Arquitasa, Gloval, Krata).'
      },
      {
        pregunta: '¿Cuánto dura la validez de una tasación ECO?',
        opciones: [
          '3 meses.',
          '6 meses.',
          '12 meses.',
          'Indefinida si no cambia el mercado.'
        ],
        correcta: 1,
        explicacion: 'ECO 805/2003 fija 6 meses de validez. Pasado ese plazo, el banco no la acepta y hay que encargar una nueva tasación completa.'
      }
    ]
  },

  'metodos-valoracion': {
    bloques: [
      { tipo: 'parrafo', texto: 'ECO 805/2003 define cuatro métodos de valoración. Aplicar el método equivocado invalida el informe. La elección depende del tipo de inmueble.' },
      { tipo: 'titulo', texto: '🔢 Los 4 métodos' },
      { tipo: 'lista', items: [
        'Comparación: para viviendas y locales con mercado activo. Necesita al menos 6 comparables.',
        'Coste: para edificios singulares sin comparables (nave industrial, iglesia). Fórmula: construcción + suelo - depreciación.',
        'Capitalización: para inmuebles arrendados. Fórmula: V = Renta neta / Tasa de capitalización.',
        'Residual: para suelos y solares. Fórmula: valor venta - costes - beneficio promotor.'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Regla ECO: siempre dos métodos', texto: 'El art. 21 de ECO 805/2003 obliga a usar un método principal y un método de contraste. Si los resultados difieren más del 15 %, hay que investigar y justificar.' },
      { tipo: 'titulo', texto: '📊 Método de comparación: los pasos' },
      { tipo: 'lista', items: [
        '1. Seleccionar 6 o más comparables del mismo barrio y tipo.',
        '2. Homogeneizar: ajustar por superficie, planta, antigüedad, estado y calificación energética.',
        '3. Calcular la media ponderada de los valores ajustados.',
        '4. Documentar: adjuntar URLs de Idealista o referencias notariales.'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Descartar outliers', texto: 'Si un comparable se desvía más del 20 % del resto, descártalo y busca otro. Los valores extremos contaminan la media ponderada.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Cómo explicarlo al cliente', texto: 'Para tu vivienda aplico comparación porque hay mercado activo, y contrasto con capitalización por si la quieres alquilar. Eso aporta credibilidad inmediata.' }
    ],
    flashcards: [
      { frente: '¿Cuántos comparables mínimos exige ECO para el método de comparación?', reverso: 'Mínimo 6 comparables. Sin ellos, el informe es deficiente y puede ser rechazado.' },
      { frente: '¿Cuál es la fórmula del método de capitalización?', reverso: 'V = Renta neta anual / Tasa de capitalización. Ejemplo: 30.000 € / 0,05 = 600.000 €.' },
      { frente: '¿Para qué se usa el método residual?', reverso: 'Para valorar suelos y solares. Valor suelo = Valor venta esperada - costes construcción - gastos - beneficio promotor.' }
    ],
    preguntas: [
      {
        pregunta: '¿Qué método se usa para valorar una nave industrial sin comparables de mercado?',
        opciones: [
          'Comparación.',
          'Capitalización.',
          'Coste o valor de reemplazamiento.',
          'Residual.'
        ],
        correcta: 2,
        explicacion: 'El método del coste se aplica cuando no hay mercado activo: edificios singulares, industriales o dotacionales. Resultado: VRR = coste construcción + suelo - depreciación.'
      },
      {
        pregunta: 'Si los resultados del método principal y el método de contraste difieren un 18 %, ¿qué dice ECO 805/2003?',
        opciones: [
          'El informe es válido porque la diferencia es inferior al 20 %.',
          'Hay que investigar la causa y justificarla expresamente en el informe.',
          'Se usa siempre el valor más bajo para proteger al banco.',
          'Se descarta el método de contraste y se usa solo el principal.'
        ],
        correcta: 1,
        explicacion: 'Cuando la diferencia supera el 15 %, ECO obliga a analizar la causa y dejarla documentada. Una diferencia injustificada es motivo de impugnación.'
      },
      {
        pregunta: '¿Para qué tipo de inmueble es más adecuado el método de capitalización?',
        opciones: [
          'Vivienda en venta sin contrato de alquiler.',
          'Solar urbanizable pendiente de promoción.',
          'Inmueble arrendado o destinable a alquiler (oficinas, locales, viviendas de inversor).',
          'Edificio en construcción sin uso definido.'
        ],
        correcta: 2,
        explicacion: 'La capitalización parte de la renta que genera el inmueble. Aplicarla a una vivienda sin alquiler real distorsiona el valor y puede invalidar el informe.'
      }
    ]
  },

  'eco-vs-rics': {
    bloques: [
      { tipo: 'parrafo', texto: 'ECO 805/2003 es la norma española obligatoria para hipotecas y fondos nacionales. RICS Red Book es el estándar internacional usado por inversores institucionales de todo el mundo.' },
      { tipo: 'titulo', texto: '🌍 ¿Cuándo necesitas RICS?' },
      { tipo: 'lista', items: [
        'Inversores internacionales comprando en España.',
        'Fondos con sede en Reino Unido o Estados Unidos.',
        'Bancos internacionales no españoles.',
        'Inmuebles premium: hoteles, oficinas prime CBD, centros comerciales.'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'RICS no sustituye a ECO', texto: 'En España conviven las dos normas. Un edificio premium puede llevar ECO (para el banco español) y RICS (para el inversor extranjero) simultáneamente.' },
      { tipo: 'titulo', texto: '📋 Principales diferencias' },
      { tipo: 'lista', items: [
        'ECO: Banco de España, finalidad hipotecaria, sociedad homologada española, informe en español.',
        'RICS: institución británica (1868), inversión institucional global, RICS Registered Valuer, informe en inglés.',
        'ECO: honorarios 250-1.500 euros. RICS: honorarios 1.500-15.000 euros.',
        'Desde 2025, ECO incorpora principios RICS de sostenibilidad.'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Para AT residencial en España', texto: 'ECO es suficiente para el 95 % de los encargos. Solo necesitas RICS si tu objetivo es la valoración de grandes activos o carteras para inversores internacionales.' },
      { tipo: 'caja', tipoCaja: 'info', titulo: 'Cómo obtener RICS', texto: 'Titulación habilitante + 24 meses de experiencia documentada bajo supervisor RICS (APC) + examen escrito y oral. Cuota anual de 500-1.000 euros. Inversión total: 3.000-6.000 euros.' }
    ],
    flashcards: [
      { frente: '¿Qué significa RICS?', reverso: 'Royal Institution of Chartered Surveyors. Institución británica fundada en 1868 que regula la valoración inmobiliaria a escala internacional.' },
      { frente: '¿En qué se llama el estándar RICS de valoración?', reverso: 'Red Book (edición 2025). Define los principios y metodologías para valoraciones de activos de inversión.' }
    ],
    preguntas: [
      {
        pregunta: '¿Qué norma debes aplicar si un fondo de inversión americano quiere tasar un edificio de oficinas en Madrid?',
        opciones: [
          'Solo ECO 805/2003.',
          'Solo RICS Red Book.',
          'RICS Red Book para el fondo y opcionalmente ECO para el banco español si hay financiación local.',
          'IVS 2025 como estándar único global.'
        ],
        correcta: 2,
        explicacion: 'Los fondos internacionales requieren RICS. Si el edificio también tiene financiación bancaria española, se añade el informe ECO. Pueden coexistir.'
      },
      {
        pregunta: '¿Cuál es el proceso para obtener la acreditación RICS Registered Valuer?',
        opciones: [
          'Aprobar un examen online de 2 horas y pagar la cuota anual.',
          '24 meses de experiencia documentada bajo supervisor RICS (APC) más examen escrito y oral.',
          'Completar un máster oficial en valoración inmobiliaria.',
          'Inscribirse en una sociedad de tasación española y solicitar la equivalencia.'
        ],
        correcta: 1,
        explicacion: 'El APC (Assessment of Professional Competence) exige 24 meses de trabajo documentado bajo supervisor RICS, seguido de examen escrito y entrevista oral.'
      },
      {
        pregunta: 'Para un AT que ejerce exclusivamente en el mercado residencial español, ¿es imprescindible la certificación RICS?',
        opciones: [
          'Sí, desde la reforma ECO 2025 es obligatoria.',
          'No, ECO 805/2003 es suficiente para tasaciones hipotecarias y periciales en España.',
          'Solo si el inmueble supera los 500.000 euros de valor.',
          'Sí, si se trabaja con bancos privados y no cajas de ahorro.'
        ],
        correcta: 1,
        explicacion: 'RICS es para inversión institucional internacional. ECO cubre hipotecas, fondos españoles y seguros. Para AT residencial en España, RICS es opcional y un plus diferenciador.'
      }
    ]
  },

  'programas-tasacion': {
    bloques: [
      { tipo: 'parrafo', texto: 'Las sociedades de tasación tienen sus propias plataformas web. Si trabajas como asociado, te dan acceso sin coste. Si eres independiente, existen alternativas como ValorBI o CYPE Valoración.' },
      { tipo: 'titulo', texto: '💻 Software por sociedad' },
      { tipo: 'lista', items: [
        'Tinsa: TasaWeb (plataforma propia online, asistente paso a paso).',
        'Sociedad de Tasación: plataforma ST online.',
        'Arquitasa, Gloval, Krata: plataformas propias similares.',
        'Independiente: ValorBI (cloud, 50-150 euros/mes) o Eurovalor (escritorio Windows).'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Empezar gratis', texto: 'Inscribirte como asociado en Tinsa o ST te da acceso al software sin coste. Es la forma más rápida de empezar con herramientas profesionales reales.' },
      { tipo: 'titulo', texto: '📊 Bases de datos de comparables' },
      { tipo: 'lista', items: [
        'Catastro (sede.catastro.gob.es): gratis. Superficies, año construcción, valores de referencia.',
        'Idealista Pro: 50-150 euros/mes. Mercado de oferta y cierre de operaciones.',
        'CoLink (Tinsa): histórico de transacciones reales. Suscripción.',
        'Para empezar: Idealista Pro + Catastro es suficiente.'
      ]},
      { tipo: 'caja', tipoCaja: 'info', titulo: 'IA aplicada a tasación', texto: 'Herramientas como Claude permiten revisar borradores de informes, detectar incoherencias, redactar la sección de condicionantes y sugerir filtros de búsqueda para comparables. La firma sigue siendo del tasador.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Coste mensual según nivel', texto: 'Novato (asociado sociedad): 0 euros en software + 50 euros Idealista. Profesional independiente de alto volumen: 300-500 euros en herramientas. Rentable desde las 5 tasaciones mensuales.' }
    ],
    flashcards: [
      { frente: '¿Qué plataforma usa Tinsa para sus tasadores asociados?', reverso: 'TasaWeb, plataforma online propia con asistente guiado, base de datos de comparables y generación automática del informe PDF.' },
      { frente: '¿Qué base de datos gratuita es imprescindible en toda tasación?', reverso: 'El Catastro (sede.catastro.gob.es): datos catastrales, superficies, año de construcción y valores de referencia. Obligatorio consultarlo siempre.' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es la ventaja principal de trabajar como tasador asociado a Tinsa frente a ser independiente con ValorBI?',
        opciones: [
          'Cobras honorarios más altos por tasación.',
          'Tienes acceso al software TasaWeb sin coste y recibes encargos directos de la sociedad.',
          'Puedes firmar tasaciones sin inscripción previa.',
          'El seguro de responsabilidad civil lo paga la sociedad.'
        ],
        correcta: 1,
        explicacion: 'Como asociado accedes al software gratuitamente y Tinsa te asigna encargos directos. Como independiente tienes que conseguir los clientes y pagar el software.'
      },
      {
        pregunta: '¿Para qué sirve el Valor de Referencia del Catastro (RD 17/2024) en una tasación?',
        opciones: [
          'Como valor oficial que sustituye a la tasación hipotecaria.',
          'Como referencia mínima fiscal, no como sustituto de tasación. Sirve para contrastar.',
          'Solo para calcular el IBI del inmueble tasado.',
          'Para fijar el valor hipotecario del inmueble directamente.'
        ],
        correcta: 1,
        explicacion: 'Desde el RD 17/2024, el Valor de Referencia es una referencia fiscal (IBI, transmisiones) pero no sustituye a la tasación ECO. Sí es útil como dato de contraste.'
      },
      {
        pregunta: '¿Qué herramienta permite generar el croquis del inmueble visitado con el móvil cuando no hay plano disponible?',
        opciones: [
          'TasaWeb.',
          'Idealista Pro.',
          'Apps como CamToPlan o magicplan.',
          'El Catastro virtual.'
        ],
        correcta: 2,
        explicacion: 'CamToPlan y magicplan usan la cámara del móvil para generar un croquis digital rápido. Muy útil cuando el propietario no tiene plano del inmueble.'
      }
    ]
  },

  'visita-tecnica': {
    bloques: [
      { tipo: 'parrafo', texto: 'La visita técnica es el trabajo de campo del tasador. Sin datos de primera mano no hay informe defensible. La preparación previa y el cierre profesional marcan la diferencia.' },
      { tipo: 'titulo', texto: '🧰 Equipamiento básico' },
      { tipo: 'lista', items: [
        'Metro láser (Bosch GLM 50C o similar): superficies y alturas.',
        'Metro tradicional 5 m: rincones donde el láser no llega.',
        'Móvil con cámara de calidad: 20-30 fotos numeradas.',
        'Tablet con plano catastral precargado.',
        'Plantilla de toma de datos (papel o digital).',
        'Carnet del colegio profesional para identificarse.'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Pedir documentos antes de ir', texto: 'Solicita la escritura, la nota simple registral y el IBI por email antes de la visita. Llegar sin esos datos obliga a una segunda visita y daña la imagen profesional.' },
      { tipo: 'titulo', texto: '📸 Fotografías imprescindibles' },
      { tipo: 'lista', items: [
        'Fachada exterior y portal.',
        'Todas las estancias (salón, cocina, dormitorios, baños).',
        'Instalaciones: caldera, cuadro eléctrico.',
        'Patologías detectadas: humedades, grietas, desprendimientos.',
        'Mejoras energéticas: aerotermia, fotovoltaica (importante desde reforma 2025).'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Cierre de visita (5 minutos clave)', texto: 'Antes de irte, resume al propietario lo que has recogido, confirma el plazo de entrega y entrégale tu tarjeta. Un cierre claro evita reclamaciones posteriores.' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Novato vs profesional', texto: 'El novato llega sin haber consultado el catastro, hace 10 fotos y se va en 25 minutos. El profesional lleva el plano impreso, hace 30 fotos numeradas, mide superficie construida y útil, y dedica 5 minutos al cierre.' }
    ],
    flashcards: [
      { frente: '¿Cuántas fotos mínimas recomienda el estándar profesional en una visita a un piso de 80-100 m2?', reverso: 'Entre 20 y 30 fotos, numeradas en orden de recorrido. Incluir patologías y mejoras energéticas.' },
      { frente: '¿Qué documentos debes pedir al propietario antes de la visita?', reverso: 'Escritura de propiedad, nota simple registral, IBI último y certificado energético si lo tiene. Pedirlos por email con antelación.' }
    ],
    preguntas: [
      {
        pregunta: '¿Por qué es importante medir tanto la superficie construida como la superficie útil?',
        opciones: [
          'Son datos redundantes que sirven solo para rellenar el informe.',
          'El banco solo acepta la superficie catastral sin verificar.',
          'Cada una sirve a fines distintos y pueden diferir: la útil habitable descuenta muros y elementos no habitables.',
          'Solo se mide la superficie útil en edificios anteriores a 1990.'
        ],
        correcta: 2,
        explicacion: 'La superficie construida incluye muros y elementos estructurales. La útil es la habitable real. Ambas aparecen en el informe ECO y pueden diferir varios metros del catastro.'
      },
      {
        pregunta: '¿Qué ocurre si el metro láser no funciona correctamente al medir una superficie con ventanales de suelo a techo?',
        opciones: [
          'Se estima la medida por comparación con el plano catastral.',
          'Se usa el metro tradicional de 5 m como respaldo.',
          'Se aplica un coeficiente de corrección estándar.',
          'Se fotografia y se mide después con software de fotogrametría.'
        ],
        correcta: 1,
        explicacion: 'El metro láser no funciona bien contra superficies brillantes o acristaladas. El metro tradicional de 5 m es el respaldo obligatorio en cualquier visita.'
      },
      {
        pregunta: '¿En qué situación el tasador está obligado a consultar el SNCZI (Sistema Nacional de Cartografía de Zonas Inundables)?',
        opciones: [
          'Solo en inmuebles de plantas bajas.',
          'En todos los inmuebles desde la reforma ECO 2025, especialmente si están a menos de 500 m de un cauce o costa.',
          'Solo en municipios declarados zona de riesgo por el Gobierno central.',
          'Unicamente si el propietario lo solicita expresamente.'
        ],
        correcta: 1,
        explicacion: 'Desde la reforma 2025, el riesgo climático físico es obligatorio en el informe. El SNCZI debe consultarse siempre, especialmente en inmuebles próximos a cauces o costas. Omitirlo es motivo de impugnación.'
      }
    ]
  },

  'sostenibilidad-energetica': {
    bloques: [
      { tipo: 'parrafo', texto: 'Desde agosto de 2025, toda tasación ECO debe incluir una sección obligatoria de sostenibilidad y riesgo climático. No es opcional ni decorativa: afecta directamente al valor calculado.' },
      { tipo: 'titulo', texto: '🌱 Tres elementos obligatorios desde ECO 2025' },
      { tipo: 'lista', items: [
        '8.1 Calificación energética: ajuste de valor segun letra (A a G).',
        '8.2 Riesgo climático físico: inundaciones, calor extremo, tormentas (fuente: SNCZI + AEMET).',
        '8.3 Riesgo de transición: regulaciones futuras que pueden reducir el valor (prohibición edificios G en 2030+).'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Impacto típico en el valor', texto: 'Una calificación A suma entre el 3 % y el 8 % al valor base. Una calificación G resta entre el 10 % y el 15 %. En una vivienda de 300.000 euros, la diferencia puede ser de 30.000 a 45.000 euros por la letra energética.' },
      { tipo: 'titulo', texto: '⚠️ Riesgo de transición: ya descuenta valor hoy' },
      { tipo: 'lista', items: [
        'La UE propone prohibir la venta de viviendas con calificación G a partir de 2030.',
        'Los edificios ineficientes perderán acceso a hipotecas verdes (mejores tipos).',
        'Las calderas de gas tienen riesgo de obsolescencia regulatoria en 2040.',
        'Fondos e inversores ya aplican descuento por riesgo de transición en sus due diligence.'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Argumento de venta para el AT', texto: 'Invertir 8.000-12.000 euros en carpintería y caldera nueva puede subir la calificación de F a C y aumentar el valor 15.000-25.000 euros. El AT que ofrece tasacion, certificado energético y asesoramiento de reforma tiene tres honorarios donde otros solo tienen uno.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Sin seccion 8, el informe es invalido', texto: 'Desde la aplicación de la reforma el 12 de agosto de 2025, omitir el análisis de sostenibilidad es motivo de sanción por parte del Banco de España y puede obligar a repetir la tasación.' }
    ],
    flashcards: [
      { frente: '¿Qué ajuste sobre el valor puede provocar una calificación energética G?', reverso: 'Entre -10 % y -15 % del valor base. En una vivienda de 300.000 euros puede significar hasta 45.000 euros menos.' },
      { frente: '¿Qué fuente oficial se usa para evaluar el riesgo de inundación en una tasación ECO 2025?', reverso: 'El SNCZI (Sistema Nacional de Cartografía de Zonas Inundables), disponible en sig.mapama.gob.es.' }
    ],
    preguntas: [
      {
        pregunta: '¿Desde cuándo es obligatoria la sección de sostenibilidad y riesgo climático en los informes de tasación ECO?',
        opciones: [
          'Desde enero de 2023 con el primer borrador de reforma.',
          'Desde la publicación del RD 234/2024.',
          'Desde el 12 de agosto de 2025, fecha de aplicación principal de la reforma.',
          'Solo es obligatoria para inmuebles de nueva construcción.'
        ],
        correcta: 2,
        explicacion: 'El texto consolidado se actualizó el 12 de junio de 2025 y su aplicación principal entró en vigor el 12 de agosto de 2025. Desde esa fecha, el análisis de sostenibilidad es obligatorio en todo informe ECO.'
      },
      {
        pregunta: 'Una vivienda tiene calificación energética F y está en zona de bajo riesgo de inundación. Aplicas -8 % por la letra y -2 % por riesgo de transición. Si el valor base por comparación es 250.000 euros, ¿cuál es el valor final ajustado?',
        opciones: [
          '230.000 euros.',
          '225.000 euros.',
          '227.500 euros.',
          '220.000 euros.'
        ],
        correcta: 1,
        explicacion: '250.000 x 0,92 = 230.000 (ajuste energético -8 %). Luego 230.000 x 0,98 = 225.400 euros (ajuste transición -2 %). La opción más cercana es 225.000 euros.'
      },
      {
        pregunta: '¿Qué significa "riesgo de transición" en el contexto de la valoración inmobiliaria?',
        opciones: [
          'El riesgo de que el inmueble cambie de propietario durante el proceso de tasación.',
          'Los impactos físicos directos del cambio climático como inundaciones o calor extremo.',
          'Los riesgos derivados de cambios regulatorios hacia una economía baja en carbono, como prohibiciones de venta de edificios ineficientes.',
          'La depreciación por cambios de uso urbanístico del entorno.'
        ],
        correcta: 2,
        explicacion: 'El riesgo de transición refleja el impacto de la descarbonización regulatoria: prohibiciones de edificios G, calderas de gas, incentivos a hipotecas verdes. Es un riesgo futuro que ya descuenta valor en 2025.'
      }
    ]
  },

  'caso-practico-mostoles': {
    bloques: [
      { tipo: 'parrafo', texto: 'Tasación real de principio a fin. Vivienda heredada en Móstoles. Cliente quiere venderla. Workflow de 12 pasos con IA integrada.' },
      { tipo: 'titulo', texto: '🏠 Datos del caso' },
      { tipo: 'lista', items: [
        'Piso 95 m2 construidos, 76 m2 útiles reales (catastro decia 78).',
        'Calle Padilla 17, 4o A, Móstoles. 4a planta, sin ascensor.',
        'Año 1985. Sin reformas. Calificación energética F.',
        'Carpintería: aluminio sin RPT, vidrio simple. Caldera gas 2008.',
        'Finalidad: venta (no hipoteca). Honorarios: 320 euros + IVA.'
      ]},
      { tipo: 'titulo', texto: '🔢 Resultado del análisis' },
      { tipo: 'lista', items: [
        'Método principal (comparación): 6 testigos homogeneizados -> 2.895 euros/m2 -> valor base 220.020 euros.',
        'Método de contraste (capitalización al 5,5 %): 141.818 euros. Diferencia alta pero normal en zona urbana.',
        'Ajuste reforma 2025: -8 % calificación F y -2 % riesgo de transición -> valor final 198.018 euros.',
        'Tiempo total: 4 horas. Honorarios: ~80 euros/hora efectiva.'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'IA en la revisión previa', texto: 'Antes de entregar, se pasa el borrador a Claude para detectar incoherencias: comparables sin documentar, justificacion insuficiente de la diferencia entre metodos, o ausencia de la seccion de sostenibilidad. Ahorra errores costosos.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'El momento más comercial: la entrega', texto: 'Al entregar el informe, el AT explica que la vivienda vale 198.000 euros por la calificación F y la falta de ascensor. Ofrece asesoramiento de reforma (carpintería + caldera) por 500 euros que podría subir el valor 15.000-25.000 euros. Un 30-40 % de clientes acepta.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Los 5 errores que invalidan un informe', texto: '1. Menos de 6 comparables sin justificar. 2. Confundir VM con VH en finalidad hipotecaria. 3. Omitir cargas registrales verificables. 4. Aplicar metodo inadecuado al tipo de inmueble. 5. No aplicar la seccion de sostenibilidad desde agosto 2025.' }
    ],
    flashcards: [
      { frente: '¿Cuántas fases tiene el workflow profesional de una tasación ECO?', reverso: '12 pasos: recepción del encargo, verificación de finalidad, aceptación con honorarios, solicitud de documentación, pre-trabajo de oficina, cita de visita, visita técnica, análisis de comparables, cálculo del valor, aplicación reforma 2025, revisión con IA y entrega.' },
      { frente: '¿A cuánto asciende el beneficio bruto si realizas 20 tasaciones al mes a 320 euros cada una?', reverso: '6.400 euros brutos mensuales con unas 16-20 horas semanales dedicadas. Compatible con cualquier empleo principal como FM o PM.' }
    ],
    preguntas: [
      {
        pregunta: 'En el caso de Móstoles, la comparación da 220.000 euros y la capitalización da 141.000 euros (diferencia del 36 %). ¿Qué debe hacer el tasador?',
        opciones: [
          'Usar la media de los dos valores como valor final.',
          'Usar siempre el valor más bajo para no arriesgar.',
          'Investigar la causa y justificarla expresamente: en zonas urbanas la renta no refleja el valor de mercado, y la comparación es el método principal adecuado.',
          'Repetir el análisis con nuevos comparables hasta que la diferencia baje del 15 %.'
        ],
        correcta: 2,
        explicacion: 'Una diferencia del 36 % es alta pero puede ser normal cuando el mercado de compra y el de alquiler no están alineados. ECO exige documentar la justificación, no rechazar el informe.'
      },
      {
        pregunta: '¿Por qué la falta de ascensor reduce el valor en el caso práctico de Móstoles?',
        opciones: [
          'Porque el Catastro penaliza a los edificios sin ascensor en su valor de referencia.',
          'Porque ECO 805/2003 obliga a aplicar un coeficiente fijo por cada planta sin ascensor.',
          'Porque en la homogeneización de comparables, el ascensor es un factor de ajuste: los comparables con ascensor se corrigen a la baja, reflejando que el inmueble sin ascensor vale menos.',
          'Porque el banco nunca financia viviendas sin ascensor por encima de la 2a planta.'
        ],
        correcta: 2,
        explicacion: 'En el método de comparación, el ascensor es uno de los factores de homogeneización. Los comparables con ascensor reciben un ajuste negativo (del orden del -5 %) para hacerlos equivalentes al inmueble sin ascensor.'
      },
      {
        pregunta: '¿En qué paso del workflow de 12 fases se integra la revisión con IA?',
        opciones: [
          'En el paso 5, durante el pre-trabajo de oficina para buscar comparables.',
          'En el paso 11, después del cálculo y antes de redactar el informe final.',
          'En el paso 7, durante la visita técnica para identificar patologías.',
          'En el paso 12, una vez firmado el informe como comprobación de archivado.'
        ],
        correcta: 1,
        explicacion: 'La revisión con IA (paso 11) se hace sobre el borrador del análisis, antes de redactar el informe definitivo. Detecta incoherencias, comparables mal documentados y ausencias normativas antes de que lleguen al cliente.'
      }
    ]
  },

  'conclusiones': {
    bloques: [
      { tipo: 'parrafo', texto: 'La tasación inmobiliaria es el lenguaje económico del activo. Saber cuánto vale lo que gestionas te diferencia de un técnico operativo y te acerca al rol de Asset Manager o FM con voz ante el CFO.' },
      { tipo: 'titulo', texto: '🎓 Las 7 conclusiones clave del curso' },
      { tipo: 'lista', items: [
        '1. "Tasación" siempre lleva apellido: hipotecaria, pericial, catastral, judicial. Confundirlas ante un cliente es un error de nivel básico.',
        '2. El AT está legalmente habilitado (art. 13 ECO), pero necesita inscripción en sociedad homologada para firmar tasaciones hipotecarias oficiales.',
        '3. El método lo dicta el tipo de inmueble: comparación para vivienda, residual para suelo, capitalización para renta, coste para singulares.',
        '4. VM distinto a VH: el banco presta sobre VH (~80-90 % del VM). Explicarlo al cliente es posicionarte como asesor frente al agente inmobiliario.',
        '5. La reforma ECO 2025 hace obligatoria la sección de sostenibilidad y riesgo climático en todo informe.',
        '6. 20 tasaciones/mes como asociado generan 2.000-4.000 euros brutos adicionales compatibles con cualquier puesto FM o PM.',
        '7. Usar IA (Claude) para homogeneizar testigos y revisar borradores reduce el tiempo de una tasación de 6 horas a 2 horas.'
      ]},
      { tipo: 'titulo', texto: '📊 Valoración del curso para tu perfil' },
      { tipo: 'lista', items: [
        'Dificultad: media. Con 30 dias de práctica real ya produces informes entregables.',
        'Utilidad FM/PM/CM: alta. El FM que habla el idioma del valor del activo reporta directo al CFO.',
        'ROI tiempo invertido: muy alto. 60-80 horas de formación se amortizan con 10-15 tasaciones como asociado.',
        'Demanda 2026: alta y creciente por la reforma 2025 (todas las tasaciones existentes deben actualizarse).'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Tu primer entregable esta semana', texto: 'Tasa tu propia vivienda: 6 testigos reales de Idealista, homogeneización con Claude, informe ECO completo. Ese ejercicio es tu portfolio para la inscripción como asociado en Tinsa o Sociedad de Tasación.' },
      { tipo: 'caja', tipoCaja: 'info', titulo: 'Próximos pasos de formación', texto: 'Certificación energética CE3X/HULC (necesaria para la sección 8 del informe). RICS Red Book si apuntas a Asset Manager en fondos internacionales. Presto/Arquímedes para el método del coste con presupuestos reales.' }
    ],
    flashcards: [
      { frente: '¿Por qué el AT con tasación se diferencia del FM puramente operativo ante el CFO?', reverso: 'Porque puede justificar inversiones de CAPEX con criterio de valor: esta reforma suma X euros al activo y X % al rendimiento de alquiler. El FM operativo solo gestiona incidencias.' },
      { frente: '¿Cuál es la limitación principal del AT para firmar tasaciones ECO sin más tramites?', reverso: 'Sin inscripción en sociedad homologada por el Banco de España no puede firmar tasaciones hipotecarias oficiales. La titulación habilita pero no autoriza por sí sola.' },
      { frente: '¿Cuántas horas de formación se amortizan con cuántas tasaciones como asociado?', reverso: '60-80 horas de formación se amortizan con 10-15 tasaciones. A 130-200 euros por tasación como asociado, la inversión formativa se recupera en el primer mes de actividad.' }
    ],
    preguntas: [
      {
        pregunta: '¿Qué habilitación adicional necesita un AT para firmar tasaciones hipotecarias oficiales?',
        opciones: [
          'Un máster oficial en valoración inmobiliaria.',
          'La inscripción en una sociedad de tasación homologada por el Banco de España.',
          'La certificación RICS AssocRICS.',
          'Un curso de al menos 200 horas reconocido por el COAAT.'
        ],
        correcta: 1,
        explicacion: 'El art. 13 de ECO 805/2003 habilita al AT, pero para el producto hipotecario regulado necesita además la inscripción en una sociedad homologada: Tinsa, Sociedad de Tasación, Arquitasa, Gloval o Krata.'
      },
      {
        pregunta: '¿Cuál de estos roles se beneficia directamente del dominio del método residual dinámico?',
        opciones: [
          'El Facility Manager en operaciones de mantenimiento correctivo.',
          'El Project Manager o Construction Manager en promotoras, para evaluar la viabilidad de un solar antes de lanzar la promoción.',
          'El tasador asociado en tasaciones hipotecarias de vivienda residencial.',
          'El técnico de certificación energética CE3X.'
        ],
        correcta: 1,
        explicacion: 'El PM o CM que domina el residual dinámico puede detectar proyectos inviables antes de comprometer recursos. Es una competencia financiera diferenciadora frente al perfil técnico puro.'
      },
      {
        pregunta: '¿Cuál es el ROI estimado de la formación en tasación para un AT autónomo que alcanza 20 tasaciones mensuales como asociado?',
        opciones: [
          '800-1.200 euros brutos adicionales al mes.',
          '2.000-4.000 euros brutos adicionales al mes, compatibles con empleo principal.',
          '6.000-8.000 euros brutos adicionales al mes a tiempo completo.',
          'Depende exclusivamente de los honorarios fijados por el colegio.'
        ],
        correcta: 1,
        explicacion: 'Con 20 tasaciones mensuales a 130-200 euros como asociado, el ingreso bruto adicional se sitúa entre 2.600 y 4.000 euros. Es compatible con cualquier puesto FM/PM como actividad complementaria.'
      }
    ]
  }
};
