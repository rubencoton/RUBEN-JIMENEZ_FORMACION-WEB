import type { ModuloData } from '@/content/revit/modulos-data';

export const EMPLEO_DATA: Record<string, ModuloData> = {

  'como-leer': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Este informe responde a una pregunta concreta: ¿dónde busca trabajo un Arquitecto Técnico con doble grado ADE que aspira a Construction Manager, Facility Manager, Project Manager o Jefe de Producción en Madrid? Se hicieron 2 investigaciones. Fecha de verificación: 29/05/2026.'
      },
      {
        tipo: 'titulo',
        texto: '🧭 Para quién es este informe'
      },
      {
        tipo: 'lista',
        items: [
          'Perfil: Grado en Edificación (Arquitecto Técnico) + Grado en ADE.',
          'Puestos objetivo: Construction Manager (CM), Facility Manager (FM), Project Manager (PM) y Jefe de Producción (JP).',
          'Mercado: España con foco en Madrid. Se filtra por provincia y modalidad híbrida/remota.',
          'Fecha de verificación de cifras: 29/05/2026. Los números de ofertas cambian a diario.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🔬 Cómo se verificó cada dato (2 investigaciones)'
      },
      {
        tipo: 'lista',
        items: [
          '5 ángulos de búsqueda: generalistas, especializados, cazatalentos, colegios y empleo público.',
          '23 fuentes en la 1ª investigación; 22 en la 2ª. Se priorizaron las webs oficiales de cada portal.',
          'Cada dato clave pasó por triple voto adversarial: 3 revisores intentan refutarlo.',
          '1ª investigación: 25 datos → 21 confirmados, 4 descartados.',
          '2ª investigación (29/05/2026): cerró los pendientes de LinkedIn, filtros de modalidad, volumen FM, Tecnoempleo y empleo público. 22 confirmados, 3 descartados.',
          'Los datos descartados se listan en el módulo 8 con transparencia total.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🚦 El semáforo de fiabilidad'
      },
      {
        tipo: 'lista',
        items: [
          '🟢 Fiable: fuente oficial o primaria, verificada con voto 3-0. Puedes fiarte.',
          '🟡 Orientativo: cifra real pero que fluctúa, o fuente secundaria. Úsala como orden de magnitud.',
          '🔴 No confirmado: no se pudo contrastar o quedó refutado. Trátalo como pista, no como hecho.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Resumen ejecutivo para Rubén',
        texto: 'Regístrate gratis en LinkedIn, InfoJobs, Indeed, Michael Page, Hays y Construyendoempleo. Activa alertas filtradas a Madrid. LinkedIn es ahora plataforma TOP: tiene filtro nativo híbrido/remoto y ~75 ofertas FM en Madrid. Usa tu colegio COAATM como canal extra.'
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Sobre los datos 🔴',
        texto: 'Trata los datos marcados con 🔴 como pistas, no como hechos. Este informe avisa siempre que un dato sea 🟡 u 🔴. Si algo es 🟢, puedes fiarte con seguridad.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántas investigaciones se hicieron y cuántos datos se confirmaron en total?',
        reverso: '2 investigaciones. En la 1ª: 25 datos → 21 confirmados, 4 descartados. En la 2ª: cerró pendientes de LinkedIn, filtros y FM. 22 confirmados, 3 descartados. Método: triple voto adversarial.'
      },
      {
        frente: '¿Qué significa el icono 🟡 en este informe?',
        reverso: 'Dato orientativo: la cifra es real pero fluctúa, o la fuente es secundaria. Úsalo como orden de magnitud, no como verdad fija.'
      },
      {
        frente: '¿Qué fecha tienen las cifras de número de ofertas?',
        reverso: '29/05/2026. Los recuentos de ofertas cambian a diario; lo estable es que el portal existe y cubre el sector.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuántas investigaciones se realizaron para elaborar este informe?',
        opciones: ['Solo una investigación', 'Dos investigaciones', 'Tres investigaciones', 'Cuatro investigaciones'],
        correcta: 1,
        explicacion: 'Se hicieron 2 investigaciones. La 2ª (29/05/2026) cerró los pendientes de LinkedIn, filtros de modalidad, volumen FM, Tecnoempleo y empleo público de la Comunidad de Madrid.'
      },
      {
        pregunta: '¿Qué indica el icono 🔴 junto a un dato?',
        opciones: [
          'El dato es fiable y oficial',
          'El dato fluctúa pero es real',
          'El dato no se pudo contrastar o quedó refutado',
          'El dato solo aplica a Madrid'
        ],
        correcta: 2,
        explicacion: '🔴 significa no confirmado: no superó la verificación o no se encontró fuente primaria. Debe tratarse como pista, nunca como hecho.'
      },
      {
        pregunta: '¿Cuáles son los 4 puestos objetivo de este informe?',
        opciones: [
          'Jefe de Obra, Arquitecto, Aparejador y Delineante',
          'Construction Manager, Facility Manager, Project Manager y Jefe de Producción',
          'Director de Proyectos, RRHH, Comercial y Técnico de Calidad',
          'Responsable BIM, Gestor de Activos, Tasador y Coordinador de Seguridad'
        ],
        correcta: 1,
        explicacion: 'Los 4 puestos objetivo son CM, FM, PM y JP. Jefe de Obra no es objetivo; Jefe de Producción es el suelo aceptable.'
      }
    ]
  },

  'portales-generalistas': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Son los portales de mayor volumen y gratuitos para el candidato. La empresa paga la publicación; tú te registras gratis. Son la base diaria de búsqueda. LinkedIn fue verificado en la 2ª investigación y pasa a ser plataforma TOP.'
      },
      {
        tipo: 'titulo',
        texto: '🟢 InfoJobs — el más grande de España'
      },
      {
        tipo: 'lista',
        items: [
          'Mayor portal de empleo generalista de España. 🟢 oficial.',
          'Categorías propias: Project Manager / Jefe de Proyecto y Production Manager / Jefe de Producción. 🟢',
          'Ejemplos reales (29/05/2026): "Senior Project Manager - Grandes Proyectos Edificación", "Jefe de Producción - Edificación". 🟢',
          'Volumen: 64 ofertas en categoría "production manager" (snapshot 29/05/2026). 🟡 cambia a diario.',
          'Filtro de modalidad NATIVO: "Presencial/Teletrabajo" con opciones Solo teletrabajo / Híbrido / Presencial. 🟢 ayuda oficial.',
          'Coste para el candidato: gratis (la empresa paga la selección, entre 120 y 400 euros al mes). 🟢'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Dato descartado sobre InfoJobs 🔴',
        texto: 'Se investigó si "Jefe de proyectos" estaba dominado por construcción/inmobiliaria en InfoJobs. Resultado: refutado (voto 0-3). InfoJobs sí publica esos perfiles, pero no está probado que sean los más numerosos.'
      },
      {
        tipo: 'titulo',
        texto: '🟢 Indeed — el buscador global'
      },
      {
        tipo: 'lista',
        items: [
          'Agrega ofertas de muchas webs. Muy útil para ampliar cobertura. 🟢',
          'Gratuito: "Sube tu CV y deja que las empresas te encuentren" (fuente: soporte oficial Indeed). 🟢',
          'Cubre los 4 puestos, incluido Construction Manager en Madrid. 🟢',
          'Filtro de modalidad disponible: "Remote" / por ubicación. Versión global confirmada. 🟡 en es.indeed por URL/ubicación.',
          'Cifra "~1.000 ofertas de construcción en España": DESCARTADA. 🔴 voto 0-3, no contrastable.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🟢 LinkedIn — VERIFICADO (2ª investigación)'
      },
      {
        tipo: 'lista',
        items: [
          'Publica los 4 perfiles en Madrid. Verificado con web oficial de LinkedIn. 🟢',
          'Volumen: "1000+" Project Manager y ~75 Facility Management en Madrid (la palabra PM incluye PM de informática). 🟡 snapshot, fluctúa.',
          'Títulos FM reales vistos: Facility Manager, Technical Property Manager, Facilities Coordinator, Gestor de Servicios FM, Junior Portfolio Manager. 🟢',
          'Alertas de empleo GRATIS: activas un botón en la búsqueda, diarias o semanales, por email y app. Hasta 20 alertas. 🟢 ayuda oficial LinkedIn.',
          'Filtro de modalidad NATIVO: Híbrido / Presencial / En remoto (con número de ofertas en cada uno). 🟢',
          'Filtro por municipio: Madrid capital, Tres Cantos, Getafe, Alcobendas, Pozuelo... 🟢'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: '¿Vale la pena LinkedIn Premium? 🔴',
        texto: 'Premium añade 5 InMails/mes para escribir a reclutadores fuera de tu red, y datos de encaje con IA (aunque esos insights podrían NO estar disponibles en España). El precio exacto en España (2025-2026) NO se pudo verificar en fuente oficial 🔴. Como las alertas y los filtros clave son gratis, empieza con la cuenta gratuita. Valora Premium solo si quieres escribir en frío a reclutadores.'
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Recomendación para Rubén',
        texto: 'LinkedIn pasa a ser plataforma TOP por su filtro nativo híbrido/remoto + por municipio: justo lo que necesitas por la terapia. Úsalo gratis con alertas. Combínalo con InfoJobs + Indeed (confirmados, alto volumen). Premium, de momento, no hace falta.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántas ofertas tenía InfoJobs en "production manager" el 29/05/2026?',
        reverso: '64 ofertas (🟡 snapshot que cambia a diario). Lo estable es que InfoJobs tiene categoría propia de Production Manager / Jefe de Producción.'
      },
      {
        frente: '¿Por qué LinkedIn es ahora plataforma TOP para Rubén?',
        reverso: 'Porque tiene filtro NATIVO de modalidad (Híbrido/Presencial/En remoto) + filtro por municipio (Madrid, Getafe...). Justo lo que necesita por la terapia 2 días/semana. Verificado en la 2ª investigación. 🟢'
      },
      {
        frente: '¿Qué implica que LinkedIn Premium no tenga precio verificado en España?',
        reverso: 'Está marcado 🔴: no se encontró fuente oficial con el precio exacto para España 2025-2026. Además, los insights con IA podrían no estar disponibles en España. Recomendación: empezar gratis.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es el nivel de fiabilidad de LinkedIn en este informe tras la 2ª investigación?',
        opciones: ['🔴 Sin verificar', '🟡 Solo orientativo', '🟢 Verificado con fuente oficial', 'No se menciona LinkedIn'],
        correcta: 2,
        explicacion: 'LinkedIn fue verificado en la 2ª investigación con la web oficial de LinkedIn Jobs y el Centro de Ayuda. Volumen, alertas gratis y filtro nativo de modalidad están confirmados 🟢.'
      },
      {
        pregunta: '¿Qué dato de LinkedIn sigue marcado como 🔴?',
        opciones: [
          'Que LinkedIn publica los 4 puestos en Madrid',
          'Que las alertas son gratuitas',
          'El precio exacto de LinkedIn Premium en España',
          'Que tiene filtro nativo de modalidad'
        ],
        correcta: 2,
        explicacion: 'El precio exacto de LinkedIn Premium en España (2025-2026) no se pudo verificar en fuente oficial. Queda 🔴. Los filtros y alertas gratuitas sí están verificados 🟢.'
      },
      {
        pregunta: '¿Cuánto paga el candidato por registrarse en InfoJobs?',
        opciones: ['120 euros al mes', '400 euros al mes', 'Nada, es gratis para el candidato', 'Solo paga si activa Premium'],
        correcta: 2,
        explicacion: 'InfoJobs es gratuito para el candidato. Son las empresas las que pagan entre 120 y 400 euros al mes por la selección inteligente. 🟢'
      }
    ]
  },

  'cazatalentos': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Los cazatalentos buscan candidatos para empresas. Para el candidato son gratuitos. Aquí están las mejores ofertas de dirección que no siempre se publican en los portales abiertos.'
      },
      {
        tipo: 'titulo',
        texto: '🟢 Michael Page — la más verificada'
      },
      {
        tipo: 'lista',
        items: [
          'Marca de PageGroup (fundada en Reino Unido en 1976, cotiza en la Bolsa de Londres, más de 5.500 empleados, 150 oficinas en 35 países). 🟢',
          'División específica: "Inmobiliaria y Construcción" (Property, Construction y Facilities Management). 🟢 oficial.',
          'Sección/vertical FM dedicada verificada en michaelpage.es/jobs/facility-management. 🟢',
          'Cubre los 4 puestos explícitamente: Construction Manager, Project Manager, Jefe de Producción, Jefe de Obra y Facility Manager. 🟢',
          'Volumen (snapshot 29/05/2026): 123 ofertas de "manager" en España; 12 puestos de PM, 5 en Madrid. 🟡 cambia a diario.',
          'Coste para el candidato: gratis. 🟢',
          'Oficinas en Madrid, Barcelona, Valencia, Sevilla, Bilbao y Zaragoza. 🟢'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🟢 Hays España — y su guía salarial'
      },
      {
        tipo: 'lista',
        items: [
          'Hays PLC: multinacional británica, unos 33 países, cotiza en el FTSE 250 de Londres. 🟢',
          'División "Construcción e Inmobiliaria" con mención expresa a jefe de obra, arquitecto, dirección, consultoría y project y facility management. 🟢',
          'Publica guías salariales por perfil (Jefe de Obra, Project Manager, Facility Manager, Jefe de Producción) fechadas 2025-2026. 🟢',
          'Coste para el candidato: gratis, estándar del sector. 🟡'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'La guía salarial de Hays es tu arma para negociar',
        texto: 'Antes de cualquier entrevista, descarga la guía salarial de Hays de tu puesto en guiasalarial.hays.es. Así pides una cifra de mercado con datos, no a ojo.'
      },
      {
        tipo: 'titulo',
        texto: '🟢 Randstad — con un matiz'
      },
      {
        tipo: 'lista',
        items: [
          'Cubre el perfil "Construction Project Manager": supervisa el progreso de las obras desde la planificación hasta la finalización. 🟢 oficial.',
          'Listados vivos en Madrid verificados en mayo de 2026. 🟢',
          'La división "Randstad Professional para construcción" como marca formal: NO confirmada. 🔴 voto 1-2.',
          'Filtro de modalidad en cazatalentos (Michael Page, Hays): NO verificado. 🔴'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Robert Walters — sin datos fiables 🔴',
        texto: 'Robert Walters tiene un área de Inmobiliario, Construcción e Infraestructuras, pero su página no aportó datos contrastables en esta investigación. Puedes mirarla, pero no te fíes de números sin contrastar.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántas ofertas de PM tenía Michael Page en Madrid el 29/05/2026?',
        reverso: '5 ofertas de Project Manager en Madrid, de un total de 12 en España. Dato 🟡 (cambia a diario). Madrid era la ciudad con más concentración.'
      },
      {
        frente: '¿Para qué sirve la guía salarial de Hays?',
        reverso: 'Para negociar sueldo con datos reales del mercado. Hays publica guías por puesto (PM, FM, JP, Jefe de Obra) fechadas 2025-2026. Descárgala antes de cualquier entrevista. 🟢'
      },
      {
        frente: '¿Qué tiene Michael Page que lo hace especialmente útil para Facility Manager?',
        reverso: 'Tiene una sección/vertical FM dedicada (michaelpage.es/jobs/facility-management), verificada 🟢. Junto con LinkedIn (~75 FM en Madrid), es la primera parada para buscar FM.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Qué división tiene Michael Page para perfiles de construcción?',
        opciones: [
          'Ingeniería e Industria',
          'Inmobiliaria y Construcción (Property, Construction y Facilities Management)',
          'Tecnología y Digital',
          'Finanzas y Banca'
        ],
        correcta: 1,
        explicacion: 'Michael Page tiene la división "Inmobiliaria y Construcción (Property, Construction y Facilities Management)". Cubre los 4 puestos objetivo de forma explícita. Además tiene vertical FM dedicada. 🟢'
      },
      {
        pregunta: '¿Cuál de estas consultoras publica guías salariales por puesto (FM, PM, JP) fechadas en 2025-2026?',
        opciones: ['Robert Walters', 'Michael Page', 'Hays', 'Randstad'],
        correcta: 2,
        explicacion: 'Hays publica guías salariales por perfil en guiasalarial.hays.es. Es la fuente más fiable para saber cuánto pedir en tu puesto. 🟢'
      },
      {
        pregunta: '¿El filtro de modalidad (híbrido/presencial) está verificado en los cazatalentos?',
        opciones: [
          'Sí, está verificado en Michael Page y Hays',
          'Sí, en Randstad',
          'No, no se pudo verificar en ningún cazatalentos',
          'Sí, solo en Robert Walters'
        ],
        correcta: 2,
        explicacion: 'El filtro de modalidad en cazatalentos (Michael Page, Hays) NO se verificó. Queda 🔴. Sí está verificado en LinkedIn e InfoJobs, pero no en las consultoras de selección.'
      }
    ]
  },

  'portal-sectorial': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Construyendoempleo.com es el portal de empleo específico del sector de la construcción. Público, sin ánimo de lucro y 100% gratuito para el candidato. No es un generalista: solo construcción.'
      },
      {
        tipo: 'titulo',
        texto: '🟢 Quién lo opera'
      },
      {
        tipo: 'lista',
        items: [
          'Fundación Laboral de la Construcción (FLC): organismo paritario sin ánimo de lucro. 🟢 oficial.',
          'Formado por patronal (CNC) y sindicatos (CCOO del Hábitat y UGT FICA).',
          'Autorizado por el SEPE como intermediario laboral gratuito desde 2013. 🟢',
          'Para las empresas es gratis si están al corriente de cuotas del convenio. Para ti, candidato, eso no importa: entras gratis siempre.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '📊 Datos de actividad'
      },
      {
        tipo: 'lista',
        items: [
          'Volumen 2025: más de 7.000 profesionales registrados y más de 4.500 ofertas. 🟡 dato de prensa FLC.',
          'Portal especializado: menos ruido que un generalista porque solo hay ofertas de construcción.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🎯 Encaje por puesto'
      },
      {
        tipo: 'lista',
        items: [
          'Jefe de Producción: muy buen encaje. Perfil de obra, núcleo del sector. 🟢',
          'Construction Manager: buen encaje. Dirección de obra y proyecto. 🟢',
          'Project Manager: correcto, aunque más orientado al PM de obra que al PM corporativo.',
          'Facility Manager: encaje menor. FM es más "edificio en uso" que "construcción activa".'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'Alta en 4 pasos',
        texto: '1) Entra en construyendoempleo.com y regístrate como candidato. 2) Sube tu CV y selecciona la provincia Madrid. 3) Activa alertas por email. 4) Consulta también la formación gratuita de la FLC: suma en tu CV técnico.'
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Recomendación para Rubén',
        texto: 'Dalo de alta como tercer pilar junto a InfoJobs/Indeed y los cazatalentos. Gratis, sectorial y serio (respaldo SEPE). Especialmente útil para JP y CM.'
      }
    ],
    flashcards: [
      {
        frente: '¿Quién opera Construyendoempleo.com?',
        reverso: 'La Fundación Laboral de la Construcción (FLC): organismo paritario sin ánimo de lucro, con patronal y sindicatos. Autorizado por el SEPE desde 2013. 🟢'
      },
      {
        frente: '¿Para qué puestos encaja mejor Construyendoempleo?',
        reverso: 'Para Jefe de Producción y Construction Manager (perfil muy de obra). Para FM encaja menos porque ese portal es más de construcción activa que de edificio en uso.'
      },
      {
        frente: '¿Cuánto cuesta registrarse en Construyendoempleo siendo candidato?',
        reverso: 'Gratis y sin límite, con control de visibilidad de tus datos. La FLC lo financia; el candidato no paga nada. 🟢'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Qué organismo respaldó a Construyendoempleo como intermediario laboral gratuito desde 2013?',
        opciones: ['El Ministerio de Fomento', 'El SEPE', 'La patronal CNC sola', 'La Comunidad de Madrid'],
        correcta: 1,
        explicacion: 'El SEPE (Servicio Público de Empleo Estatal) autorizó a Construyendoempleo como intermediario laboral gratuito desde 2013. 🟢'
      },
      {
        pregunta: '¿Para qué puesto encaja peor Construyendoempleo?',
        opciones: ['Jefe de Producción', 'Construction Manager', 'Facility Manager', 'Project Manager de obra'],
        correcta: 2,
        explicacion: 'El Facility Manager es el que encaja peor porque FM es "edificio en uso", mientras que Construyendoempleo está orientado a la construcción activa. JP y CM son los que mejor encajan.'
      },
      {
        pregunta: 'El dato "más de 7.000 profesionales y 4.500 ofertas en 2025" en Construyendoempleo, ¿qué nivel de fiabilidad tiene?',
        opciones: [
          '🟢 Verificado con triple voto',
          '🟡 Orientativo, procede de prensa/memoria de la FLC',
          '🔴 Descartado por refutación',
          '🟢 Confirmado por el SEPE'
        ],
        correcta: 1,
        explicacion: 'El dato es 🟡 orientativo: procede de prensa o memorias de la FLC, no de una verificación adversarial directa. Úsalo como orden de magnitud.'
      }
    ]
  },

  'colegios-y-descartar': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Tu colegio profesional (COAATM) tiene bolsa de empleo específica para Arquitectos Técnicos. Requiere estar colegiado. La 2ª investigación descartó Tecnoempleo (solo IT) y añadió el empleo público de la Comunidad de Madrid.'
      },
      {
        tipo: 'titulo',
        texto: '🟢 COAATM — tu colegio'
      },
      {
        tipo: 'lista',
        items: [
          'Colegio Oficial de Aparejadores y Arquitectos Técnicos de Madrid (Maestro Victoria, 3). Tu profesión exacta. 🟢',
          'Tiene "Bolsa de Trabajo". Se autodescribe como el único especializado en colocar aparejadores y AT en Madrid. 🟢 (autodescripción, no auditada por terceros, ver aviso).',
          'Acceso restringido a colegiados: alta en el Portal del Colegiado. El subdominio de empleo devuelve error 403 si no estás dentro. 🟢',
          'Tipo de ofertas: tiende a roles AT genéricos y junior. 🟡'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'COAATM: datos con matiz',
        texto: 'Lo de "el único especializado" es lo que dice el propio colegio, no un dato auditado por terceros (🟡). Además, la bolsa es más floja para puestos senior CM/FM/PM de dirección. Para esos roles, usa LinkedIn, Hays y Michael Page. El COAATM sirve más como respaldo y para roles AT de entrada.'
      },
      {
        tipo: 'titulo',
        texto: '🟢 COAM — arquitectos superiores (poco útil para ti)'
      },
      {
        tipo: 'lista',
        items: [
          'Colegio Oficial de Arquitectos de Madrid. No es tu colegio: es para arquitectos superiores, no técnicos.',
          'Tiene bolsa pero exige colegiación en el COAM.',
          'Utilidad para ti: limitada. Solo si te colegiaras también allí, lo cual no es habitual en tu perfil. 🟢'
        ]
      },
      {
        tipo: 'titulo',
        texto: '❌ Organizaciones que NO son bolsas de empleo'
      },
      {
        tipo: 'lista',
        items: [
          'IFMA Spain: asociación de Facility Management. Tiene comisiones, formación, revista y networking. NO tiene bolsa de empleo. Verificado 3-0. 🟢',
          'MUSAAT: mutua de seguros de Responsabilidad Civil del arquitecto técnico. No es empleo. Verificado 3-0. 🟢',
          'CGATE: Consejo General de la Arquitectura Técnica. Su "Ventanilla Única" es un directorio para que clientes te contraten, no una bolsa de empleo. Verificado 3-0. 🟢',
          'Tecnoempleo: portal EXCLUSIVO de Informática y Telecomunicaciones. "Facility manager" y "construction manager" dan 0 resultados. El "Jefe de Proyecto" que aparece es de IT. DESCARTADO. 🟢'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🟢 Empleo público · Comunidad de Madrid'
      },
      {
        tipo: 'lista',
        items: [
          'Sede Comunidad de Madrid: ofertas de empleo de Arquitectura Técnica (oposiciones) en sede.comunidad.madrid/oferta-empleo. 🟢 oficial.',
          'Bolsas de empleo temporal en la Administración autonómica. 🟢 oficial.',
          'Ayuntamiento de Madrid: convoca plazas de Arquitecto/a Técnico/a. 🟡 portal a veces inaccesible, conviene confirmar.',
          'Para ti: estabilidad máxima y horario compatible con terapia, pero proceso lento (oposición). Buena vía paralela, no sustituye a la privada.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'info',
        titulo: 'IFMA Spain: networking FM, no ofertas',
        texto: 'IFMA Spain no da ofertas de empleo, pero sí networking y formación en Facility Management. Útil para conocer gente del sector FM. No para encontrar la oferta directamente.'
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Recomendación para Rubén',
        texto: 'Colégiate y activa la bolsa del COAATM (es tu casa profesional y suma). Pero no esperes de ahí los puestos senior. Olvida Tecnoempleo, MUSAAT y CGATE para buscar empleo. IFMA Spain, solo para hacer contactos en el sector FM. Si buscas estabilidad, mira la Comunidad de Madrid (proceso lento pero horario compatible con terapia).'
      }
    ],
    flashcards: [
      {
        frente: '¿Por qué Tecnoempleo fue descartado en la 2ª investigación?',
        reverso: 'Porque es un portal exclusivo de Informática y Telecomunicaciones. "Facility manager" y "construction manager" dan 0 resultados. El "Jefe de Proyecto" que aparece es de IT, no de construcción. 🟢 confirmado.'
      },
      {
        frente: '¿Cuáles son las organizaciones que NO tienen bolsa de empleo?',
        reverso: 'IFMA Spain (solo formación y networking FM), MUSAAT (mutua de seguros), CGATE (directorio para clientes) y Tecnoempleo (solo IT). Verificado con voto 3-0. 🟢'
      },
      {
        frente: '¿Qué añadió la 2ª investigación sobre empleo público?',
        reverso: 'La Comunidad de Madrid tiene sede oficial con ofertas de Arquitectura Técnica y bolsas de empleo temporal 🟢. El Ayuntamiento de Madrid queda 🟡 (portal inaccesible en vivo). Proceso lento, pero horario compatible con terapia.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Por qué Tecnoempleo NO sirve para buscar empleo de FM o CM?',
        opciones: [
          'Porque es de pago para candidatos',
          'Porque solo opera en Barcelona',
          'Porque es un portal exclusivo de Informática y Telecomunicaciones, con 0 resultados para FM o CM',
          'Porque exige estar colegiado'
        ],
        correcta: 2,
        explicacion: 'Tecnoempleo es exclusivo de IT/Telecomunicaciones. La búsqueda de "facility manager" y "construction manager" da 0 resultados. Fue descartado en la 2ª investigación. 🟢'
      },
      {
        pregunta: '¿Qué colegio es el tuyo si eres Arquitecto Técnico en Madrid?',
        opciones: ['COAM', 'CGATE', 'COAATM', 'IFMA Spain'],
        correcta: 2,
        explicacion: 'El COAATM (Colegio Oficial de Aparejadores y Arquitectos Técnicos de Madrid) es el colegio profesional para Arquitectos Técnicos en Madrid. El COAM es para arquitectos superiores.'
      },
      {
        pregunta: '¿Qué nivel de fiabilidad tiene el empleo público de la Comunidad de Madrid?',
        opciones: [
          '🔴 No verificado',
          '🟡 Solo orientativo',
          '🟢 Verificado con fuentes oficiales (sede.comunidad.madrid)',
          'No se menciona el empleo público'
        ],
        correcta: 2,
        explicacion: 'La Comunidad de Madrid está verificada 🟢 con sede.comunidad.madrid y comunidad.madrid. El Ayuntamiento de Madrid queda 🟡 (portal no cargó en vivo). Fue añadido en la 2ª investigación.'
      }
    ]
  },

  'por-puesto': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'No todas las plataformas sirven igual para los 4 puestos. Esta tabla maestra actualizada (2ª investigación) te dice qué canal usar según el rol que persigues, con el nivel de fiabilidad de cada recomendación.'
      },
      {
        tipo: 'titulo',
        texto: '📊 Tabla maestra por puesto (actualizada)'
      },
      {
        tipo: 'lista',
        items: [
          'Construction Manager: LinkedIn 🟢 + Michael Page 🟢 + Hays 🟢. Dirección de obra/proyecto: cazatalentos + LinkedIn (filtro híbrido). Madrid concentra ofertas.',
          'Facility Manager: LinkedIn 🟢 + Michael Page 🟢 + Hays 🟢. LinkedIn ~75 FM en Madrid (snapshot 🟡); Michael Page tiene vertical FM dedicada. Empresas FM: Centauro, Data4, Prosegur, Savills, MVGM, Clikalia.',
          'Project Manager: LinkedIn 🟢 + Michael Page 🟢 + InfoJobs 🟢. LinkedIn 1000+ PM en Madrid (incluye IT, 🟡); Michael Page concentra PM; InfoJobs tiene categoría propia.',
          'Jefe de Producción: InfoJobs 🟢 + Construyendoempleo 🟢 + Michael Page 🟢. InfoJobs categoría propia (64 ofertas el 29/05/2026 🟡). Perfil de obra: encaja en el portal sectorial.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'Facility Manager: LinkedIn es tu primera parada',
        texto: 'La 2ª investigación confirmó que FM se concentra en LinkedIn (~75 Madrid, snapshot 🟡) y en Michael Page (vertical FM dedicada). Empresas que publican FM: Centauro, Data4, Prosegur, Savills, MVGM, Clikalia. Para FM, empieza por LinkedIn + Michael Page.'
      },
      {
        tipo: 'titulo',
        texto: '✅ Las 5 plataformas que activas sí o sí (todas gratis)'
      },
      {
        tipo: 'lista',
        items: [
          '1. InfoJobs — generalista, alto volumen. 🟢',
          '2. Indeed — generalista + alertas por email. 🟢',
          '3. Michael Page — cazatalentos, construcción + vertical FM. 🟢',
          '4. Hays — cazatalentos + guía salarial. 🟢',
          '5. Construyendoempleo — sectorial público (FLC/SEPE). 🟢'
        ]
      },
      {
        tipo: 'titulo',
        texto: '⬛ Canales de apoyo (segundo nivel)'
      },
      {
        tipo: 'lista',
        items: [
          'LinkedIn 🟢: perfil + alertas + filtro nativo híbrido/remoto (verificado en 2ª investigación). Para FM es primer nivel.',
          'COAATM 🟢: bolsa del colegio, más útil para roles AT de entrada.',
          'IFMA Spain 🟢: solo networking y formación FM (no da ofertas).'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Recomendación para Rubén',
        texto: 'Para FM (objetivo nº1): LinkedIn (más volumen + filtro híbrido) + Michael Page + Hays (dirección). Para Jefe de Producción como suelo: InfoJobs + Construyendoempleo. Filtro de modalidad nativo confirmado en LinkedIn e InfoJobs. Cazatalentos: filtro de modalidad sin verificar 🔴 (pregunta en la entrevista).'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuáles son las 5 plataformas imprescindibles y gratuitas para el candidato?',
        reverso: 'InfoJobs, Indeed, Michael Page, Hays y Construyendoempleo. Todas verificadas con fuente oficial. 🟢'
      },
      {
        frente: '¿Qué plataformas son TOP para Facility Manager y qué empresas publican FM?',
        reverso: 'LinkedIn (~75 FM Madrid 🟡) + Michael Page (vertical FM dedicada 🟢). Empresas FM: Centauro, Data4, Prosegur, Savills, MVGM, Clikalia.'
      },
      {
        frente: '¿Qué plataforma es mejor para Jefe de Producción como suelo?',
        reverso: 'InfoJobs (categoría propia, 64 ofertas el 29/05/2026 🟡) y Construyendoempleo (portal sectorial de obra). Ambas 🟢.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Qué plataformas se recomiendan principalmente para Facility Manager?',
        opciones: [
          'Construyendoempleo y COAATM',
          'LinkedIn y Michael Page (con vertical FM dedicada)',
          'Solo IFMA Spain',
          'Indeed y Robert Walters'
        ],
        correcta: 1,
        explicacion: 'Para FM se recomiendan LinkedIn (~75 FM en Madrid, snapshot 🟡) y Michael Page (vertical FM dedicada 🟢). Empresas que publican FM: Centauro, Data4, Prosegur, Savills, MVGM, Clikalia.'
      },
      {
        pregunta: '¿Cuántas ofertas de Project Manager tenía Michael Page en Madrid el 29/05/2026?',
        opciones: ['0', '64', '5', '123'],
        correcta: 2,
        explicacion: '5 ofertas de PM en Madrid, de un total de 12 en España. Madrid era la ciudad con más concentración. Dato 🟡 (cambia a diario).'
      },
      {
        pregunta: '¿Cuál de estos canales NO da ofertas de empleo, solo networking?',
        opciones: ['Michael Page', 'InfoJobs', 'IFMA Spain', 'Construyendoempleo'],
        correcta: 2,
        explicacion: 'IFMA Spain es una asociación de FM que ofrece formación y networking, pero no tiene bolsa de empleo. Verificado 3-0. 🟢'
      }
    ]
  },

  'plan-de-accion': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Saber dónde buscar no sirve si no lo conviertes en rutina. Este es el plan concreto adaptado a tu situación: Madrid, con terapia 2 días a la semana entre las 17 y las 19 horas. Los filtros de modalidad ya están verificados en las plataformas clave.'
      },
      {
        tipo: 'titulo',
        texto: '🚀 Alta inicial (una sola vez, 1-2 horas)'
      },
      {
        tipo: 'lista',
        items: [
          '1. InfoJobs: alta + CV + alerta con filtro Madrid + filtro modalidad "Híbrido".',
          '2. Indeed: alta + sube CV + alertas por cada puesto.',
          '3. Michael Page: sube CV + selecciona área Inmobiliaria y Construcción.',
          '4. Hays: sube CV + descarga la guía salarial de tu puesto.',
          '5. Construyendoempleo: alta como candidato + provincia Madrid.',
          '6. LinkedIn: perfil al día + activa "Abierto a ofertas" (modo privado) + alertas con filtro Híbrido + municipio Madrid.',
          '7. COAATM: activa la Bolsa de Trabajo en el Portal del Colegiado.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🔍 El filtro híbrido/remoto (verificado en la 2ª investigación) 🟢'
      },
      {
        tipo: 'lista',
        items: [
          'LinkedIn: NATIVO Híbrido / Presencial / En remoto + por municipio (Madrid, Getafe...). 🟢 oficial.',
          'InfoJobs: NATIVO "Presencial/Teletrabajo" con opciones Solo teletrabajo / Híbrido / Presencial. 🟢 ayuda oficial.',
          'Indeed: filtro "Remote" / por ubicación. Versión global confirmada. 🟡 en es.indeed por URL/ubicación.',
          'Cazatalentos (Michael Page, Hays): filtro de modalidad explícito NO verificado. 🔴',
          'Matiz honesto: el filtro funciona, pero algunos empleadores etiquetan mal. Confirma siempre en la entrevista.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '📅 Rutina semanal (30-40 minutos al día)'
      },
      {
        tipo: 'lista',
        items: [
          'Lunes: revisar alertas de InfoJobs + Indeed. Aplicar a 3-5 ofertas.',
          'Martes: Michael Page + Hays + Construyendoempleo.',
          'Miércoles: LinkedIn, contactar 2 reclutadores del sector.',
          'Jueves: COAATM + ofertas nuevas. Seguimiento de aplicaciones anteriores.',
          'Viernes: actualizar CV según feedback recibido. Networking en IFMA (FM).'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Errores que evitar',
        texto: 'No busques empleo en Tecnoempleo (solo IT), MUSAAT, CGATE ni IFMA (no tienen ofertas). No te fíes de cifras de volumen como si fueran fijas (son 🟡, cambian a diario). No ignores los cazatalentos pensando que son de pago (para ti son gratis). No vayas a negociar sueldo sin descargar antes la guía salarial de Hays.'
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'Las alertas trabajan por ti',
        texto: 'Pon alertas por email en las 5 plataformas TOP + LinkedIn. Así no tienes que entrar a buscar: las ofertas llegan a tu bandeja y tú solo decides. Con 30 min/día cubres el 90% del mercado real de tu perfil en Madrid.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuánto tiempo lleva el alta inicial en las 7 plataformas?',
        reverso: 'Entre 1 y 2 horas en total, haciéndolo de forma seguida. Es una inversión de una sola vez.'
      },
      {
        frente: '¿El filtro de modalidad híbrida/remota está verificado? ¿En cuáles?',
        reverso: 'Sí, en LinkedIn 🟢 (nativo: Híbrido/Presencial/En remoto + municipio) e InfoJobs 🟢 (nativo: Solo teletrabajo/Híbrido/Presencial). En cazatalentos: NO verificado 🔴. Confirma siempre en la entrevista.'
      },
      {
        frente: '¿Cuánto tiempo al día requiere la rutina semanal?',
        reverso: 'Entre 30 y 40 minutos al día. Con alertas activas las ofertas llegan solas y solo hay que decidir si aplicar.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Qué debes descargar en Hays antes de una entrevista de trabajo?',
        opciones: [
          'Su oferta de empleo en PDF',
          'Su contrato de servicio para empresas',
          'La guía salarial de tu puesto (FM, PM, JP, etc.)',
          'El informe anual de PageGroup'
        ],
        correcta: 2,
        explicacion: 'Hays publica guías salariales por puesto fechadas 2025-2026 en guiasalarial.hays.es. Descárgala antes de la entrevista para pedir una cifra de mercado con datos reales. 🟢'
      },
      {
        pregunta: '¿En qué plataformas está confirmado el filtro nativo de modalidad (híbrido/remoto)?',
        opciones: [
          'Solo en Indeed',
          'En LinkedIn e InfoJobs',
          'En Michael Page y Hays',
          'En todos los portales por igual'
        ],
        correcta: 1,
        explicacion: 'El filtro nativo de modalidad está verificado 🟢 en LinkedIn (Híbrido/Presencial/En remoto) e InfoJobs (Solo teletrabajo/Híbrido/Presencial). En cazatalentos no se verificó 🔴.'
      },
      {
        pregunta: '¿Con qué frecuencia hay que revisar las plataformas según la rutina propuesta?',
        opciones: [
          'Una vez a la semana (solo los lunes)',
          'Cada dos días en bloques de 2 horas',
          'Cada día de la semana laborable, 30-40 minutos',
          'Solo cuando hay respuesta de una empresa'
        ],
        correcta: 2,
        explicacion: 'La rutina propuesta es 30-40 minutos cada día laborable, con tareas específicas asignadas a cada día. Con alertas activas el tiempo real baja mucho.'
      }
    ]
  },

  'fuentes-y-fiabilidad': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Aquí tienes de dónde sale cada dato y cómo de fiable es. Transparencia total: se listan los datos confirmados, los orientativos y los descartados. Se hicieron 2 investigaciones.'
      },
      {
        tipo: 'titulo',
        texto: '🔬 Métricas de verificación (2 investigaciones)'
      },
      {
        tipo: 'lista',
        items: [
          '1ª investigación: 5 ángulos, 23 fuentes, 25 datos → 21 confirmados, 4 descartados.',
          '2ª investigación (29/05/2026): 5 ángulos, 22 fuentes, 25 datos → 22 confirmados, 3 descartados.',
          'La 2ª cerró los pendientes: LinkedIn, filtros de modalidad, volumen FM, Tecnoempleo y empleo público.',
          'Método: triple voto adversarial (3 revisores intentan refutar; se necesitan 2 de 3 para descartar).'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🟢 Fuentes oficiales usadas (primarias)'
      },
      {
        tipo: 'lista',
        items: [
          'infojobs.net — categorías PM y Jefe de Producción, filtro nativo de modalidad.',
          'es.indeed.com + support.indeed.com — gratuito para candidato, CM en Madrid.',
          'michaelpage.es — división Inmobiliaria y Construcción, 4 roles, vertical FM.',
          'hays.es + guiasalarial.hays.es — división construcción, FM/PM, guías salariales.',
          'randstad.es — perfil Construction Project Manager, Madrid.',
          'construyendoempleo.com + fundacionlaboral.org — portal sectorial FLC, respaldo SEPE.',
          'aparejadoresmadrid.es — COAATM, Bolsa de Trabajo, acceso colegiados.',
          'coam.org — COAM bolsa (arquitectos superiores).',
          'ifma-spain.org, musaat.es, cgate.es, tecnoempleo.com — confirman que NO son bolsas de su sector.',
          'es.linkedin.com/jobs + Centro de Ayuda LinkedIn — volumen PM/FM Madrid, alertas gratis, filtro nativo de modalidad.',
          'premium.linkedin.com/careers/compare-plans — qué añade LinkedIn Premium (InMails, insights IA).',
          'indeed.com (career-advice) + orientacion-laboral.infojobs.net — filtros nativos de modalidad.',
          'michaelpage.es/jobs/facility-management — vertical FM dedicada en cazatalentos.',
          'sede.comunidad.madrid + comunidad.madrid — empleo público Arquitectura Técnica + bolsas temporales.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🟡 Fuentes secundarias (orientativas)'
      },
      {
        tipo: 'lista',
        items: [
          'oficinaempleo.com, trabajalia.com, trabajarporelmundo.org, adslzone.net.',
          'Útiles como contexto y comparativas de portales 2025. No como dato duro.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🔴 Datos descartados (no te fíes de estos)'
      },
      {
        tipo: 'lista',
        items: [
          '"InfoJobs está dominado por la categoría inmobiliaria/construcción" — voto 0-3. No se pudo confirmar el ranking de categorías.',
          '"Indeed tiene ~1.000 ofertas de construcción en España" — voto 0-3. Cifra no contrastable.',
          '"Randstad tiene división formal Randstad Professional para construcción" — voto 1-2. Sin confirmación clara de la marca de división.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '✅ Resuelto en la 2ª investigación'
      },
      {
        tipo: 'lista',
        items: [
          '✅ LinkedIn: verificado (volumen 🟡, alertas gratis 🟢, filtro nativo de modalidad 🟢).',
          '✅ Filtro híbrido/remoto: confirmado nativo en LinkedIn e InfoJobs. 🟢',
          '✅ Volumen Facility Manager: localizado (LinkedIn ~75 Madrid 🟡 + Michael Page vertical FM 🟢).',
          '✅ Tecnoempleo: descartado definitivamente (solo IT, 0 resultados FM/CM).',
          '✅ Empleo público Comunidad de Madrid: añadido (sede.comunidad.madrid). 🟢'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Lo que sigue pendiente 🔴',
        texto: 'Precio exacto de LinkedIn Premium en España (2025-2026): no verificado. Los insights con IA podrían no estar disponibles en España. Portales no investigados: Construible, Idealista empleo. Buscador de oposiciones del Ayuntamiento de Madrid: portal no cargó en vivo (la Comunidad de Madrid sí está verificada 🟢).'
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Las cifras de ofertas son fotos, no verdades fijas',
        texto: 'Los recuentos de Michael Page (123/12/5), InfoJobs (64) y LinkedIn (~75 FM, 1000+ PM) son snapshots del 29/05/2026. Cambian a diario. Lo estable es que el portal existe y cubre tu sector. La cifra exacta, no.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántos datos se descartaron en total entre las 2 investigaciones?',
        reverso: '1ª: 4 datos descartados. 2ª: se recuperó 1 (COAATM quedó como 🟡 autodescripción) → 3 descartados. Los 3 definitivos: ranking InfoJobs (0-3), 1.000 ofertas Indeed (0-3) y división Randstad Professional (1-2).'
      },
      {
        frente: '¿Qué cerró la 2ª investigación?',
        reverso: 'Cerró 5 pendientes: LinkedIn verificado 🟢, filtros de modalidad confirmados en LinkedIn e InfoJobs 🟢, volumen FM localizado (~75 Madrid LinkedIn + Michael Page vertical 🟡/🟢), Tecnoempleo descartado, empleo público Comunidad de Madrid añadido 🟢.'
      },
      {
        frente: '¿Por qué los recuentos de ofertas son 🟡 y no 🟢?',
        reverso: 'Porque cambian a diario. Son fotografías de un momento concreto (29/05/2026). Lo que sí es estable (🟢) es que el portal existe y cubre el sector.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuántas fuentes se consultaron en la 2ª investigación?',
        opciones: ['5 fuentes', '22 fuentes', '25 fuentes', '45 fuentes'],
        correcta: 1,
        explicacion: 'La 2ª investigación consultó 22 fuentes (la 1ª fueron 23). De 25 datos verificados, 22 quedaron confirmados y 3 descartados. Método: triple voto adversarial.'
      },
      {
        pregunta: '¿Qué sigue pendiente de verificar tras la 2ª investigación?',
        opciones: [
          'LinkedIn y sus filtros',
          'El precio exacto de LinkedIn Premium en España y los portales Construible/Idealista',
          'Si Michael Page tiene ofertas FM',
          'Si Construyendoempleo existe'
        ],
        correcta: 1,
        explicacion: 'Siguen pendientes 🔴: precio exacto de LinkedIn Premium en España, portales Construible e Idealista empleo, y el buscador del Ayuntamiento de Madrid (la Comunidad de Madrid sí está verificada 🟢).'
      },
      {
        pregunta: '¿Cuál es el nivel de fiabilidad del filtro nativo de modalidad en LinkedIn e InfoJobs?',
        opciones: [
          '🔴 No verificado',
          '🟡 Solo orientativo',
          '🟢 Verificado con fuentes oficiales',
          'No tiene filtro de modalidad'
        ],
        correcta: 2,
        explicacion: 'El filtro nativo de modalidad en LinkedIn (Híbrido/Presencial/En remoto) e InfoJobs (Solo teletrabajo/Híbrido/Presencial) fue verificado 🟢 con las webs y ayudas oficiales de ambas plataformas en la 2ª investigación.'
      }
    ]
  },

  'conclusiones': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Síntesis final al estilo de un Trabajo Fin de Grado. Se hicieron 2 investigaciones. LinkedIn pasa a ser plataforma TOP. FM se concentra en LinkedIn + Michael Page. Las cifras y el plan son accionables hoy.'
      },
      {
        tipo: 'titulo',
        texto: '🎯 Las conclusiones principales'
      },
      {
        tipo: 'lista',
        items: [
          '1. Cinco plataformas cubren el 90% del mercado, todas gratuitas para el candidato: InfoJobs, Indeed, Michael Page, Hays y Construyendoempleo. Verificado con fuente oficial. 🟢',
          '2. LinkedIn es ahora plataforma TOP para tu perfil: filtro nativo híbrido/remoto + por municipio. Útil para los 4 perfiles. Verificado en la 2ª investigación. 🟢',
          '3. Los cazatalentos son gratuitos para ti y clave para puestos de dirección (CM y FM bien pagados). Las mejores ofertas senior pasan antes por aquí que por los portales abiertos.',
          '4. Facility Manager se concentra en LinkedIn (~75 Madrid, snapshot 🟡) y Michael Page (vertical FM dedicada 🟢). Empresas: Centauro, Data4, Prosegur, Savills, MVGM, Clikalia.',
          '5. Madrid concentra las ofertas: en Michael Page, de 12 PM, 5 estaban en Madrid (la ciudad con más). Tu ubicación juega a favor.',
          '6. La guía salarial de Hays es tu mejor herramienta para negociar sueldo con datos, no a ciegas.',
          '7. Tres organizaciones NO sirven para buscar empleo: MUSAAT (aseguradora), CGATE (directorio para clientes) e IFMA Spain (solo networking FM). Tecnoempleo también descartado (solo IT). Verificado. 🟢'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🗺️ Plan accionable hoy'
      },
      {
        tipo: 'lista',
        items: [
          'Alta inicial (1-2 horas): registrarte en las 6 plataformas TOP y activar alertas a Madrid.',
          'Buscar FM (objetivo nº1): LinkedIn (filtro híbrido + ~75 FM Madrid) + Michael Page + Hays (dirección).',
          'Suelo Jefe de Producción: InfoJobs + Construyendoempleo (alto encaje sectorial).',
          'Negociar sueldo: descargar la guía salarial de Hays de tu puesto antes de cada entrevista.',
          'Compatibilizar terapia: usar filtro híbrido nativo en LinkedIn e InfoJobs + preguntar en la entrevista (la franja 17-19h es innegociable).'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Cuándo NO fiarse de los datos',
        texto: 'Las cifras de ofertas cambian a diario (🟡). El precio de LinkedIn Premium en España no se verificó (🔴). El filtro de modalidad en cazatalentos no se confirmó (🔴). El buscador del Ayuntamiento de Madrid no cargó en vivo (🟡). Nada de esto significa que falten ofertas; significa que falta medirlo.'
      },
      {
        tipo: 'titulo',
        texto: '🔭 Líneas futuras (3ª investigación, si la quieres)'
      },
      {
        tipo: 'lista',
        items: [
          'Precio real de LinkedIn Premium en España y si compensa para tu perfil.',
          'Portales Construible e Idealista empleo (arquitectura/construcción e inmobiliario).',
          'Buscador de oposiciones del Ayuntamiento de Madrid (la Comunidad ya está verificada).'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Mensaje final para Rubén',
        texto: 'Tienes el mapa y la prueba de dónde sale cada dato. LinkedIn es ya plataforma TOP: úsalo para FM con el filtro híbrido. Empieza hoy por las 6 plataformas gratis, activa alertas a Madrid y descarga la guía salarial de Hays. Cuando quieras, lanzamos la 3ª investigación sobre Construible, Idealista y el precio de Premium. Tú decides.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántas plataformas cubren el 90% del mercado y cuáles son?',
        reverso: 'Cinco imprescindibles: InfoJobs, Indeed, Michael Page, Hays y Construyendoempleo. Todas gratuitas y verificadas 🟢. LinkedIn se añade como TOP para FM y CM por el filtro híbrido.'
      },
      {
        frente: '¿Qué conclusión nueva añade la 2ª investigación sobre LinkedIn?',
        reverso: 'LinkedIn pasa a plataforma TOP: verificado 🟢 con filtro nativo híbrido/remoto + municipio y ~75 FM en Madrid (🟡 snapshot). Útil para los 4 perfiles. Alertas gratis hasta 20. Precio Premium sigue 🔴.'
      },
      {
        frente: '¿Cuáles son las líneas pendientes de la 3ª investigación?',
        reverso: '1) Precio real de LinkedIn Premium en España. 2) Portales Construible e Idealista empleo. 3) Buscador de oposiciones del Ayuntamiento de Madrid (la Comunidad ya está verificada 🟢).'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es la principal conclusión nueva de la 2ª investigación sobre LinkedIn?',
        opciones: [
          'LinkedIn sigue sin verificar y queda 🔴',
          'LinkedIn es ahora plataforma TOP con filtro nativo híbrido/remoto verificado 🟢',
          'LinkedIn solo sirve para PM, no para FM',
          'LinkedIn Premium es gratuito en España'
        ],
        correcta: 1,
        explicacion: 'La 2ª investigación verificó LinkedIn con fuente oficial 🟢: tiene filtro nativo de modalidad (Híbrido/Presencial/En remoto), alertas gratis y ~75 FM en Madrid. Pasa a ser plataforma TOP para tu perfil.'
      },
      {
        pregunta: '¿Dónde se concentran las ofertas de Facility Manager?',
        opciones: [
          'Solo en Construyendoempleo',
          'En LinkedIn (~75 Madrid) y Michael Page (vertical FM dedicada)',
          'En Tecnoempleo y CGATE',
          'Solo en el COAATM'
        ],
        correcta: 1,
        explicacion: 'FM se concentra en LinkedIn (~75 Madrid, snapshot 🟡) y Michael Page (vertical FM dedicada, 🟢). Empresas que publican FM: Centauro, Data4, Prosegur, Savills, MVGM, Clikalia.'
      },
      {
        pregunta: '¿Cuál es la valoración de la fiabilidad de este informe?',
        opciones: [
          'Baja: la mayoría de fuentes son secundarias',
          'Alta: fuentes oficiales, triple verificación, 2 investigaciones y trazabilidad total',
          'Media: solo se verificaron 5 datos con fuente primaria',
          'No hay valoración de fiabilidad en el informe'
        ],
        correcta: 1,
        explicacion: 'La valoración es alta: mayoría de fuentes son oficiales/primarias, método de triple verificación adversarial, 2 investigaciones, y 22 de los 25 datos de la 2ª investigación quedaron confirmados.'
      }
    ]
  }

};
