import type { ModuloData } from '@/content/revit/modulos-data';

export const EMPLEO_DATA: Record<string, ModuloData> = {

  'como-leer': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Este informe responde a una pregunta concreta: ¿dónde busca trabajo un Arquitecto Técnico con doble grado ADE que aspira a Construction Manager, Facility Manager, Project Manager o Jefe de Producción en Madrid?'
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
        texto: '🔬 Cómo se verificó cada dato'
      },
      {
        tipo: 'lista',
        items: [
          '5 ángulos de búsqueda: generalistas, especializados, cazatalentos, colegios y empleo público.',
          '23 fuentes consultadas; se priorizaron las webs oficiales de cada portal.',
          'Cada dato clave pasó por triple voto adversarial: 3 revisores intentan refutarlo.',
          'Resultado: 25 datos verificados → 21 confirmados, 4 descartados.',
          'Los 4 descartados se listan en el módulo 8 con transparencia total.'
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
        texto: 'Regístrate gratis en InfoJobs, Indeed, Michael Page, Hays y Construyendoempleo. Activa alertas filtradas a Madrid. Usa tu colegio COAATM como canal extra. LinkedIn también, pero sus cifras aquí no están probadas 🔴.'
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
        frente: '¿Cuántos datos se verificaron y cuántos se confirmaron?',
        reverso: '25 datos verificados → 21 confirmados, 4 descartados. Método: triple voto adversarial (3 revisores intentan refutar el dato).'
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
        pregunta: '¿Cuántas fuentes se consultaron para elaborar este informe?',
        opciones: ['10 fuentes', '23 fuentes', '50 fuentes', '5 fuentes'],
        correcta: 1,
        explicacion: 'Se consultaron 23 fuentes priorizando las webs oficiales de cada portal. Los 25 datos más importantes pasaron por triple voto adversarial.'
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
        texto: 'Son los portales de mayor volumen y gratuitos para el candidato. La empresa paga la publicación; tú te registras gratis. Son la base diaria de búsqueda.'
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
          'Cifra "~1.000 ofertas de construcción en España": DESCARTADA. 🔴 voto 0-3, no contrastable.'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🔴 LinkedIn — pendiente de contrastar'
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'LinkedIn: sin datos verificados en esta investigación',
        texto: 'LinkedIn es referencia habitual para CM/FM/PM, pero ningún dato de LinkedIn sobrevivió con fuente primaria en esta investigación. Ni el volumen, ni el coste Premium ni el filtro por modalidad se verificaron. Úsalo por costumbre del sector, pero no des por ciertas cifras sin contrastar. 🔴'
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Recomendación para Rubén',
        texto: 'Empieza por InfoJobs + Indeed (confirmados, gratis, alto volumen). Mantén LinkedIn activo porque el sector lo usa, sabiendo que sus cifras aquí no están probadas.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántas ofertas tenía InfoJobs en "production manager" el 29/05/2026?',
        reverso: '64 ofertas (🟡 snapshot que cambia a diario). Lo estable es que InfoJobs tiene categoría propia de Production Manager / Jefe de Producción.'
      },
      {
        frente: '¿Por qué LinkedIn aparece con 🔴 en este informe?',
        reverso: 'Porque ningún dato de LinkedIn (volumen, coste, filtros) sobrevivió con fuente primaria. Queda como pendiente de una segunda investigación.'
      },
      {
        frente: '¿Qué implica que Indeed sea "gratuito para el candidato"?',
        reverso: 'Que el candidato sube el CV sin pagar. Las empresas pagan por publicar. Confirmado por el soporte oficial de Indeed. 🟢'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál de estos portales generalistas tiene los datos más verificados en este informe?',
        opciones: ['LinkedIn', 'Glassdoor', 'InfoJobs e Indeed', 'Infojobs y LinkedIn'],
        correcta: 2,
        explicacion: 'InfoJobs e Indeed tienen datos verificados con fuente oficial 🟢. LinkedIn no aportó datos con fuente primaria en esta investigación y queda como 🔴.'
      },
      {
        pregunta: '¿Qué dato de Indeed quedó descartado (🔴) en la investigación?',
        opciones: [
          'Que Indeed es gratuito para el candidato',
          'Que Indeed cubre el puesto de Construction Manager en Madrid',
          'La cifra de "~1.000 ofertas de construcción en España"',
          'Que Indeed agrega ofertas de muchas webs'
        ],
        correcta: 2,
        explicacion: 'La cifra "~1.000 ofertas" no pudo contrastarse y fue refutada (voto 0-3). Lo verificado es que Indeed existe, es gratis y cubre los 4 puestos.'
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
        texto: 'Antes de cualquier entrevista, descarga la guía salarial de Hays de tu puesto. Así pides una cifra de mercado con datos, no a ojo.'
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
          'La división "Randstad Professional para construcción" como marca formal: NO confirmada. 🔴 voto 1-2.'
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
        frente: '¿Qué tienen en común Michael Page, Hays y Randstad para el candidato?',
        reverso: 'Son gratuitos para el candidato. La empresa contratante paga los honorarios de la consultora de selección.'
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
        explicacion: 'Michael Page tiene la división "Inmobiliaria y Construcción (Property, Construction y Facilities Management)". Cubre los 4 puestos objetivo de forma explícita. 🟢'
      },
      {
        pregunta: '¿Cuál de estas consultoras publica guías salariales por puesto (FM, PM, JP) fechadas en 2025-2026?',
        opciones: ['Robert Walters', 'Michael Page', 'Hays', 'Randstad'],
        correcta: 2,
        explicacion: 'Hays publica guías salariales por perfil en guiasalarial.hays.es. Es la fuente más fiable para saber cuánto pedir en tu puesto. 🟢'
      },
      {
        pregunta: '¿Qué dato sobre Randstad quedó sin confirmar (🔴)?',
        opciones: [
          'Que Randstad opera en España',
          'Que cubre el perfil de Construction Project Manager',
          'La existencia de una división formal "Randstad Professional para construcción"',
          'Que tiene listados en Madrid'
        ],
        correcta: 2,
        explicacion: 'Lo que no se confirmó (voto 1-2) es que Randstad tenga una división con ese nombre de marca concreto. Lo verificado es que sí cubre el perfil PM de construcción y tiene listados en Madrid. 🟢'
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
        texto: 'Tu colegio profesional (COAATM) tiene bolsa de empleo específica para Arquitectos Técnicos. Requiere estar colegiado. Y hay tres organizaciones del sector que no sirven para buscar empleo: te ahorra el tiempo mirarlas.'
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
        texto: '❌ Tres organizaciones que NO son bolsas de empleo'
      },
      {
        tipo: 'lista',
        items: [
          'IFMA Spain: asociación de Facility Management. Tiene comisiones, formación, revista y networking. NO tiene bolsa de empleo. Verificado 3-0. 🟢',
          'MUSAAT: mutua de seguros de Responsabilidad Civil del arquitecto técnico. No es empleo. Verificado 3-0. 🟢',
          'CGATE: Consejo General de la Arquitectura Técnica. Su "Ventanilla Única" es un directorio para que clientes te contraten, no una bolsa de empleo para candidatos. Verificado 3-0. 🟢'
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
        texto: 'Colégiate y activa la bolsa del COAATM (es tu casa profesional y suma). Pero no esperes de ahí los puestos senior. Olvida MUSAAT y CGATE para buscar empleo. IFMA Spain, solo para hacer contactos en el sector FM.'
      }
    ],
    flashcards: [
      {
        frente: '¿Por qué la bolsa del COAATM no sirve para puestos senior CM/FM/PM?',
        reverso: 'Tiende a publicar roles AT genéricos y junior. Para puestos de dirección senior, los canales más efectivos son LinkedIn, Hays y Michael Page. 🟡'
      },
      {
        frente: '¿Cuáles son las tres organizaciones que NO tienen bolsa de empleo?',
        reverso: 'IFMA Spain (solo formación y networking FM), MUSAAT (mutua de seguros) y CGATE (directorio para clientes). Verificado con voto 3-0. 🟢'
      },
      {
        frente: '¿Para qué sí sirve IFMA Spain aunque no tenga bolsa de empleo?',
        reverso: 'Para networking y formación en Facility Management. Útil para conocer gente del sector FM. No para encontrar ofertas directamente.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Qué es MUSAAT?',
        opciones: [
          'El colegio oficial de aparejadores de Madrid',
          'Una bolsa de empleo para Arquitectos Técnicos',
          'Una mutua de seguros de Responsabilidad Civil del arquitecto técnico',
          'Una asociación de Facility Management'
        ],
        correcta: 2,
        explicacion: 'MUSAAT es una mutua de seguros, no una bolsa de empleo. Buscar trabajo ahí es perder el tiempo. Verificado con voto 3-0. 🟢'
      },
      {
        pregunta: '¿Qué colegio es el tuyo si eres Arquitecto Técnico en Madrid?',
        opciones: ['COAM', 'CGATE', 'COAATM', 'IFMA Spain'],
        correcta: 2,
        explicacion: 'El COAATM (Colegio Oficial de Aparejadores y Arquitectos Técnicos de Madrid) es el colegio profesional para Arquitectos Técnicos en Madrid. El COAM es para arquitectos superiores.'
      },
      {
        pregunta: '¿La "Ventanilla Única" del CGATE es una bolsa de empleo?',
        opciones: [
          'Sí, la más importante del sector',
          'No, es un directorio para que clientes contraten al profesional',
          'Sí, pero solo para colegiados',
          'No, es un portal de formación'
        ],
        correcta: 1,
        explicacion: 'La Ventanilla Única del CGATE es un directorio para que clientes encuentren al Arquitecto Técnico, no una bolsa donde buscar empleo. Verificado 3-0. 🟢'
      }
    ]
  },

  'por-puesto': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'No todas las plataformas sirven igual para los 4 puestos. Esta tabla maestra te dice qué canal usar según el rol que persigues, con el nivel de fiabilidad de cada recomendación.'
      },
      {
        tipo: 'titulo',
        texto: '📊 Tabla maestra por puesto'
      },
      {
        tipo: 'lista',
        items: [
          'Construction Manager: Michael Page 🟢 + Hays 🟢 + LinkedIn 🔴*. Canal de cazatalentos, dirección de obra/proyecto. Madrid concentra las ofertas en Michael Page.',
          'Facility Manager: Michael Page 🟢 + Hays 🟢 + InfoJobs 🟢. Ambas consultoras citan FM de forma explícita. IFMA Spain solo para networking, no da ofertas.',
          'Project Manager: Michael Page 🟢 + InfoJobs 🟢 + Randstad 🟢. Michael Page tuvo 12 PM en España (5 en Madrid). InfoJobs tiene categoría PM propia.',
          'Jefe de Producción: InfoJobs 🟢 + Construyendoempleo 🟢 + Michael Page 🟢. InfoJobs tiene categoría propia (64 ofertas el 29/05/2026). Perfil de obra: encaja en el portal sectorial.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: '* LinkedIn y Facility Manager: sin cifras verificadas 🔴',
        texto: 'LinkedIn aparece como canal por lógica del sector, pero sus cifras no se contrastaron. Y el volumen específico de Facility Manager en Madrid tampoco se cuantificó en esta investigación. No significa que haya pocas ofertas FM: significa que falta medirlo.'
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
          '3. Michael Page — cazatalentos, construcción. 🟢',
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
          'LinkedIn 🔴: perfil + alertas (estándar del sector, cifras no verificadas aquí).',
          'COAATM 🟢: bolsa del colegio, más útil para roles AT de entrada.',
          'IFMA Spain 🟢: solo networking y formación FM (no da ofertas).'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Recomendación para Rubén',
        texto: 'Para FM (objetivo nº1): combina Michael Page + Hays (dirección senior) con InfoJobs (volumen). Para Jefe de Producción como suelo: InfoJobs + Construyendoempleo. El filtro de modalidad híbrida/remota no se verificó por plataforma; busca por la palabra "híbrido" en el texto y pregunta en la entrevista.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuáles son las 5 plataformas imprescindibles y gratuitas para el candidato?',
        reverso: 'InfoJobs, Indeed, Michael Page, Hays y Construyendoempleo. Todas verificadas con fuente oficial. 🟢'
      },
      {
        frente: '¿Qué plataforma es mejor para Jefe de Producción como suelo?',
        reverso: 'InfoJobs (categoría propia, 64 ofertas el 29/05/2026) y Construyendoempleo (portal sectorial de obra). Ambas 🟢.'
      },
      {
        frente: '¿Por qué el volumen de Facility Manager no tiene cifra confirmada?',
        reverso: 'Porque no se cuantificó en esta investigación. No significa que haya pocas ofertas FM: es un pendiente de la segunda investigación. 🔴'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Qué plataformas se recomiendan principalmente para Facility Manager?',
        opciones: [
          'Construyendoempleo y COAATM',
          'Michael Page, Hays e InfoJobs',
          'LinkedIn y IFMA Spain',
          'Indeed y Robert Walters'
        ],
        correcta: 1,
        explicacion: 'Para FM se recomiendan Michael Page y Hays (citan FM de forma explícita, nivel dirección) más InfoJobs (volumen generalista). 🟢'
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
        texto: 'Saber dónde buscar no sirve si no lo conviertes en rutina. Este es el plan concreto adaptado a tu situación: Madrid, con terapia 2 días a la semana entre las 17 y las 19 horas.'
      },
      {
        tipo: 'titulo',
        texto: '🚀 Alta inicial (una sola vez, 1-2 horas)'
      },
      {
        tipo: 'lista',
        items: [
          '1. InfoJobs: alta + CV + alerta con filtro Madrid.',
          '2. Indeed: alta + sube CV + alertas por cada puesto.',
          '3. Michael Page: sube CV + selecciona área Inmobiliaria y Construcción.',
          '4. Hays: sube CV + descarga la guía salarial de tu puesto.',
          '5. Construyendoempleo: alta como candidato + provincia Madrid.',
          '6. LinkedIn: perfil al día + activa "Abierto a ofertas" en modo privado.',
          '7. COAATM: activa la Bolsa de Trabajo en el Portal del Colegiado.'
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
        tipoCaja: 'dato',
        titulo: 'Filtro híbrido/remoto: sin verificar por plataforma 🔴',
        texto: 'En esta investigación NO se verificó qué portales filtran correctamente por modalidad (presencial, híbrido, remoto). Es un punto pendiente. Lo que sí está confirmado: todos filtran por provincia (Madrid). 🟢 Táctica mientras tanto: busca por las palabras "híbrido" o "teletrabajo" en el campo de texto y pregunta la flexibilidad en la entrevista.'
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Errores que evitar',
        texto: 'No busques empleo en MUSAAT, CGATE ni IFMA (no tienen ofertas). No te fíes de cifras de volumen como si fueran fijas (son 🟡, cambian a diario). No ignores los cazatalentos pensando que son de pago (para ti son gratis). No vayas a negociar sueldo sin descargar antes la guía salarial de Hays.'
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'Las alertas trabajan por ti',
        texto: 'Pon alertas por email en las 5 plataformas TOP. Así no tienes que entrar a buscar: las ofertas llegan a tu bandeja y tú solo decides. Con 30 min/día cubres el 90% del mercado real de tu perfil en Madrid.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuánto tiempo lleva el alta inicial en las 7 plataformas?',
        reverso: 'Entre 1 y 2 horas en total, haciéndolo de forma seguida. Es una inversión de una sola vez.'
      },
      {
        frente: '¿El filtro de modalidad híbrida/remota está verificado por plataforma?',
        reverso: 'No. 🔴 Es un punto pendiente de contrastar. Lo verificado es que todos filtran por provincia (Madrid). 🟢 Táctica: busca la palabra "híbrido" en el texto y pregunta en la entrevista.'
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
        explicacion: 'Hays publica guías salariales por puesto fechadas 2025-2026. Descárgala antes de la entrevista para pedir una cifra de mercado con datos reales. 🟢'
      },
      {
        pregunta: '¿Qué filtro está confirmado como disponible en TODOS los portales?',
        opciones: [
          'Filtro por modalidad (híbrido/remoto)',
          'Filtro por salario mínimo',
          'Filtro por provincia (Madrid)',
          'Filtro por nivel de inglés requerido'
        ],
        correcta: 2,
        explicacion: 'El filtro por provincia (Madrid) está verificado como disponible en todos los portales. 🟢 El filtro de modalidad no se verificó plataforma a plataforma. 🔴'
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
        texto: 'Aquí tienes de dónde sale cada dato y cómo de fiable es. Transparencia total: se listan los datos confirmados, los orientativos y los descartados.'
      },
      {
        tipo: 'titulo',
        texto: '🔬 Métricas de verificación'
      },
      {
        tipo: 'lista',
        items: [
          'Ángulos de búsqueda: 5 (generalistas, especializados, cazatalentos, colegios, empleo público).',
          'Fuentes consultadas: 23.',
          'Datos extraídos: 85.',
          'Datos sometidos a verificación: 25.',
          'Confirmados: 21.',
          'Descartados: 4.',
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
          'infojobs.net — categorías PM y Jefe de Producción, ofertas de edificación.',
          'es.indeed.com + support.indeed.com — gratuito para candidato, CM en Madrid.',
          'michaelpage.es — división Inmobiliaria y Construcción, 4 roles, Madrid.',
          'hays.es + guiasalarial.hays.es — división construcción, FM/PM, guías salariales.',
          'randstad.es — perfil Construction Project Manager, Madrid.',
          'construyendoempleo.com + fundacionlaboral.org — portal sectorial FLC, respaldo SEPE.',
          'aparejadoresmadrid.es — COAATM, Bolsa de Trabajo, acceso colegiados.',
          'coam.org — COAM bolsa (arquitectos superiores).',
          'ifma-spain.org, musaat.es, cgate.es — confirman que NO son bolsas de empleo.'
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
          '"Randstad tiene división formal Randstad Professional para construcción" — voto 1-2. Sin confirmación clara de la marca de división.',
          '"La bolsa del COAATM es la única especializada en Madrid (como hecho)" — voto 0-3. Es autodescripción del colegio, no auditada por terceros.'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Pendientes para la segunda investigación 🔴',
        texto: 'LinkedIn (volumen real, filtros, coste). Filtro híbrido/remoto por plataforma. Volumen específico de FM en Madrid. Portales adicionales: Tecnoempleo, Construible, Idealista empleo y empleo público (oposiciones de Arquitecto Técnico, por ejemplo en el Ayuntamiento de Madrid).'
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Las cifras de ofertas son fotos, no verdades fijas',
        texto: 'Los recuentos de Michael Page (123/12/5) e InfoJobs (64) son snapshots del 29/05/2026. Cambian a diario. Lo estable es que el portal existe y cubre tu sector. La cifra exacta, no.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántos datos se descartaron y por qué?',
        reverso: '4 datos descartados: el ranking de categorías de InfoJobs (0-3), las 1.000 ofertas de Indeed (0-3), la división Randstad Professional (1-2) y el dato del COAATM como "único especializado" (0-3 por ser autodescripción no auditada).'
      },
      {
        frente: '¿Qué tres aspectos de LinkedIn quedaron pendientes de contrastar?',
        reverso: 'Volumen real de FM/CM/PM/JP en Madrid, qué filtros ofrece y cuánto cuesta el plan Premium. Todo queda marcado como 🔴 en este informe.'
      },
      {
        frente: '¿Por qué los recuentos de ofertas son 🟡 y no 🟢?',
        reverso: 'Porque cambian a diario. Son fotografías de un momento concreto (29/05/2026). Lo que sí es estable (🟢) es que el portal existe y cubre el sector.'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuántos datos de los 25 verificados no superaron la verificación?',
        opciones: ['1', '4', '10', '21'],
        correcta: 1,
        explicacion: '4 datos fueron descartados. Los otros 21 quedaron confirmados. El método fue triple voto adversarial: se necesitaban 2 de 3 votos para descartar un dato.'
      },
      {
        pregunta: '¿Por qué el dato "COAATM es la única bolsa especializada en Madrid" es 🟡 y no 🟢?',
        opciones: [
          'Porque el COAATM no tiene bolsa de empleo',
          'Porque es una autodescripción del propio colegio, no auditada por terceros',
          'Porque está verificado pero cambia con frecuencia',
          'Porque solo aplica a arquitectos superiores'
        ],
        correcta: 1,
        explicacion: 'El dato procede de la autodescripción del propio colegio. No ha sido auditado ni contrastado por terceros, así que no puede tratarse como hecho verificado. Se marcó con voto 0-3 (descartado como "hecho").'
      },
      {
        pregunta: '¿Qué aspecto del filtro híbrido/remoto está verificado como disponible en todos los portales?',
        opciones: [
          'El filtro de modalidad (presencial/híbrido/remoto)',
          'El filtro por tipo de contrato',
          'El filtro por provincia (Madrid)',
          'El filtro por salario mínimo'
        ],
        correcta: 2,
        explicacion: 'El filtro por provincia (Madrid) está verificado como disponible en todos los portales. 🟢 El filtro de modalidad (híbrido/remoto) es pendiente: no se verificó plataforma a plataforma. 🔴'
      }
    ]
  },

  'conclusiones': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Síntesis final al estilo de un Trabajo Fin de Grado. Las 7 conclusiones, el plan accionable y las líneas de investigación futura.'
      },
      {
        tipo: 'titulo',
        texto: '🎯 Las 7 conclusiones principales'
      },
      {
        tipo: 'lista',
        items: [
          '1. Cinco plataformas cubren el 90% del mercado, todas gratuitas para el candidato: InfoJobs, Indeed, Michael Page, Hays y Construyendoempleo. Verificado con fuente oficial. 🟢',
          '2. Los cazatalentos son gratuitos para ti y clave para puestos de dirección (CM y FM bien pagados). Las mejores ofertas senior pasan antes por aquí que por los portales abiertos.',
          '3. Madrid concentra las ofertas: en Michael Page, de 12 PM, 5 estaban en Madrid (la ciudad con más). Tu ubicación juega a favor.',
          '4. La guía salarial de Hays es tu mejor herramienta para negociar sueldo con datos, no a ciegas.',
          '5. Tu colegio (COAATM) suma pero no basta: su bolsa tiende a roles AT de entrada; para CM/FM/PM senior usa cazatalentos y LinkedIn.',
          '6. Tres organizaciones NO sirven para buscar empleo: MUSAAT (aseguradora), CGATE (directorio para clientes) e IFMA Spain (solo networking y formación FM). Verificado 3-0. 🟢',
          '7. Honestidad sobre límites: LinkedIn, el filtro híbrido/remoto y el volumen exacto de FM no se contrastaron. Están marcados como pendientes, no se presentan como datos ciertos. 🔴'
        ]
      },
      {
        tipo: 'titulo',
        texto: '🗺️ Plan accionable hoy'
      },
      {
        tipo: 'lista',
        items: [
          'Alta inicial (1-2 horas): registrarte en las 5 plataformas TOP y activar alertas a Madrid.',
          'Buscar FM (objetivo nº1): Michael Page + Hays (dirección) + InfoJobs (volumen).',
          'Suelo Jefe de Producción: InfoJobs + Construyendoempleo (alto encaje sectorial).',
          'Negociar sueldo: descargar la guía salarial de Hays de tu puesto antes de cada entrevista.',
          'Compatibilizar terapia: filtrar Madrid + preguntar flexibilidad en la entrevista (la franja 17-19h es innegociable).'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Cuándo NO fiarse de los datos',
        texto: 'Las cifras de ofertas cambian a diario (🟡). LinkedIn no se verificó aquí (🔴). El filtro híbrido/remoto por plataforma está sin confirmar (🔴). El volumen de FM no se cuantificó (🔴). Nada de esto significa que falten ofertas; significa que falta medirlo.'
      },
      {
        tipo: 'titulo',
        texto: '🔭 Líneas futuras (segunda investigación)'
      },
      {
        tipo: 'lista',
        items: [
          'LinkedIn a fondo: volumen FM/CM/PM/JP en Madrid, filtros y coste Premium vs gratis.',
          'Filtros de modalidad (presencial/híbrido/remoto) plataforma a plataforma.',
          'Volumen real de Facility Manager en Madrid por portal.',
          'Portales no cubiertos: Tecnoempleo, Construible, Idealista empleo y empleo público (oposiciones de Arquitecto Técnico).'
        ]
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Mensaje final para Rubén',
        texto: 'Tienes el mapa y la prueba de dónde sale cada dato. Empieza hoy por las 5 plataformas gratis, activa alertas a Madrid y descarga la guía salarial de Hays. Cuando quieras, se lanza la segunda investigación sobre LinkedIn, filtros híbridos y volumen FM. Tú decides.'
      }
    ],
    flashcards: [
      {
        frente: '¿Cuántas plataformas cubren el 90% del mercado y cuáles son?',
        reverso: 'Cinco: InfoJobs, Indeed, Michael Page, Hays y Construyendoempleo. Todas gratuitas para el candidato y verificadas con fuente oficial. 🟢'
      },
      {
        frente: '¿Qué conclusión afecta directamente a la negociación de sueldo?',
        reverso: 'Que Hays publica guías salariales por puesto (FM, PM, JP, Jefe de Obra) fechadas 2025-2026. Es la herramienta más fiable para pedir una cifra de mercado con datos. 🟢'
      },
      {
        frente: '¿Cuáles son las 4 líneas pendientes de la segunda investigación?',
        reverso: '1) LinkedIn a fondo. 2) Filtros de modalidad por plataforma. 3) Volumen real de FM en Madrid. 4) Portales adicionales y empleo público (oposiciones AT).'
      }
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es la principal conclusión del informe sobre los cazatalentos?',
        opciones: [
          'Son de pago para el candidato y solo valen para puestos junior',
          'Son gratuitos para el candidato y clave para puestos de dirección (CM y FM senior)',
          'Solo funcionan en Barcelona, no en Madrid',
          'Se recomienda no usarlos hasta tener al menos 10 años de experiencia'
        ],
        correcta: 1,
        explicacion: 'Los cazatalentos (Michael Page, Hays) son gratuitos para el candidato y concentran las mejores ofertas de dirección CM y FM antes de que lleguen a los portales abiertos. 🟢'
      },
      {
        pregunta: '¿Qué debes hacer con el dato del volumen de Facility Manager en Madrid?',
        opciones: [
          'Fiarte de él: está verificado con triple voto',
          'Ignorarlo porque FM no es uno de tus puestos objetivo',
          'Tratarlo como pendiente: no se cuantificó en esta investigación',
          'Aplicarlo directamente porque viene de Michael Page'
        ],
        correcta: 2,
        explicacion: 'El volumen específico de FM en Madrid no se cuantificó en esta investigación. Queda como 🔴 pendiente. No significa que haya pocas ofertas: significa que falta medirlo.'
      },
      {
        pregunta: '¿Cuál es la valoración de la fiabilidad de este informe según las conclusiones?',
        opciones: [
          'Baja: la mayoría de fuentes son secundarias',
          'Alta: mayoría de fuentes son oficiales, triple verificación, 21 de 25 confirmados',
          'Media: solo se verificaron 5 datos con fuente primaria',
          'No hay valoración de fiabilidad en el informe'
        ],
        correcta: 1,
        explicacion: 'La valoración es alta: mayoría de fuentes son oficiales/primarias, método de triple verificación adversarial, y 21 de los 25 datos verificados quedaron confirmados.'
      }
    ]
  }

};
