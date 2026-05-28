import type { ModuloData } from '@/content/revit/modulos-data';

export const FACILITY_DATA: Record<string, ModuloData> = {
  'que-es-un-fm': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'El Facility Manager (FM) es el profesional responsable de que un edificio funcione bien todos los días. Integra personas, lugares y procesos para mejorar la calidad de vida y la productividad del negocio.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'norma',
        titulo: 'Definición oficial',
        texto: 'ISO 41011:2017 define FM como la función organizativa que integra personas, lugares y procesos. ISO 41001:2018 es el sistema de gestión FM. Las dos normas aparecen en cualquier auditoría seria.',
      },
      {
        tipo: 'titulo',
        texto: '🏢 Los 3 niveles del puesto',
      },
      {
        tipo: 'lista',
        items: [
          'Nivel 1 Operativo (Facility Officer): 28-40K, resuelve incidencias diarias, reporta al jefe FM.',
          'Nivel 2 Táctico (Facility Manager): 40-60K, planifica, gestiona contratos y KPIs, reporta al Head of FM.',
          'Nivel 3 Estratégico (Head of FM / Director FM): 65-110K, optimiza cartera, presupuesto grande, reporta al CFO o COO.',
        ],
      },
      {
        tipo: 'titulo',
        texto: '📈 Por qué crece la demanda',
      },
      {
        tipo: 'lista',
        items: [
          'Sostenibilidad: edificios eficientes obligatorios desde 2030 (UE Fit for 55).',
          'Externalización: empresas externalizan todo lo que no es su negocio principal.',
          'SOCIMIs y fondos inmobiliarios compran cartera y necesitan FM para operarla.',
          'IoT: edificios inteligentes piden profesionales con conocimiento técnico y tecnológico.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Mercado FM España 2026',
        texto: 'El mercado FM en España alcanza 40.080 millones USD en 2026 y crece al +4,98% anual hasta llegar a 51.110 millones en 2031 (Mordor Intelligence). Citar este dato en entrevista te posiciona como profesional que entiende el mercado.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Cómo lo explicas en entrevista',
        texto: 'Frase corta para cualquier reclutador: "El FM es el responsable de que un edificio funcione bien todos los días, una vez está terminado y en uso." Aprende los nombres de las 3 SOCIMIs grandes (Merlin, Colonial, Lar España) y las 5 consultoras FM top (Ferrovial, ISS, Sodexo, Veolia, Eulen).',
      },
    ],
    flashcards: [
      {
        frente: '¿Cuál es la norma ISO que define el Facility Management?',
        reverso: 'ISO 41011:2017 define los términos de FM. ISO 41001:2018 regula el sistema de gestión FM. Las dos aparecen en auditorías serias.',
      },
      {
        frente: '¿A qué nivel salarial corresponde el Facility Manager táctico?',
        reverso: 'Nivel 2 Táctico: 40-60K bruto/año. Planifica, gestiona contratos y KPIs, y reporta al Head of FM.',
      },
      {
        frente: '¿A cuánto asciende el mercado FM en España en 2026?',
        reverso: '40.080 millones USD, con crecimiento anual del +4,98% hasta 2031 según Mordor Intelligence.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Qué norma ISO define oficialmente el Facility Management?',
        opciones: [
          'ISO 9001:2015',
          'ISO 41011:2017',
          'ISO 14001:2015',
          'ISO 50001:2018',
        ],
        correcta: 1,
        explicacion: 'ISO 41011:2017 define los términos de FM. ISO 41001:2018 es el sistema de gestión, pero la definición de la función FM proviene de ISO 41011.',
      },
      {
        pregunta: '¿Cuál es el rango salarial típico del Facility Manager a nivel táctico (Nivel 2)?',
        opciones: [
          '20-28K bruto/año',
          '28-40K bruto/año',
          '40-60K bruto/año',
          '65-110K bruto/año',
        ],
        correcta: 2,
        explicacion: 'El Nivel 2 Táctico (Facility Manager) tiene un rango de 40-60K. El Nivel 1 Operativo es 28-40K y el Nivel 3 Estratégico es 65-110K.',
      },
      {
        pregunta: '¿Cuál de estas opciones NO es un motor real del crecimiento del sector FM en España?',
        opciones: [
          'Sostenibilidad y directiva europea Fit for 55',
          'Externalización de servicios por parte de empresas',
          'Reducción de precios del mercado inmobiliario',
          'Crecimiento de SOCIMIs y fondos que compran cartera de inmuebles',
        ],
        correcta: 2,
        explicacion: 'La reducción de precios inmobiliarios no impulsa el FM. Los motores reales son sostenibilidad, externalización, fondos/SOCIMIs e IoT.',
      },
    ],
  },

  'dia-a-dia': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'La jornada FM combina visitas técnicas al edificio, reuniones con proveedores y dirección, y gestión de incidencias planificadas. Es trabajo de oficina con 1-2 visitas técnicas al día, sin el estrés de obra a destajo.',
      },
      {
        tipo: 'titulo',
        texto: '📋 Las 9 áreas que gestiona un FM',
      },
      {
        tipo: 'lista',
        items: [
          '1. Mantenimiento técnico: preventivo, correctivo y predictivo (IoT). KPI: >70% preventivo vs correctivo.',
          '2. Energía y eficiencia: facturas, auditorías, renovables y certificaciones (LEED, BREEAM). KPI: -3% kWh/m2/año.',
          '3. Limpieza y conserjería: contrato externo, SLA y auditorías periódicas. KPI: cumplimiento SLA >95%.',
          '4. Seguridad: vigilancia, control de accesos y Plan Contra Incendios. KPI: 0 incidentes graves/año.',
          '5. Espacios y mobiliario: distribución de oficinas, mudanzas internas y ergonomía.',
          '6. Logística interna: recepción de paquetes, material de oficina y archivos.',
          '7. Servicios al empleado: catering, parking, gimnasio y eventos internos. KPI: NPS empleado >7,5/10.',
          '8. Sostenibilidad y ESG: huella de carbono, residuos y reporte trimestral ISO 50001.',
          '9. Gestión económica: presupuesto anual, OPEX vs CAPEX y KPIs para dirección. KPI: <120 €/m2/año.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'Tu rol: decides, no ejecutas',
        texto: 'Tu función es decidir y gestionar, no ejecutar el oficio. Si te ves poniendo bombillas o limpiando, el rol se devalúa y no puedes con todo. Tu equipo y proveedores ejecutan; tú planificas, auditas y reportas.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'norma',
        titulo: 'Mantenimiento obligatorio por ley',
        texto: 'El mantenimiento preventivo de instalaciones es legalmente obligatorio en España: RITE (climatización), RIPCI (PCI), RD 88/2013 (ascensores), Legionella (RD 487/2022). Saltárselo = sanción.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Cómo explicas el rol a un reclutador',
        texto: 'Frase corta: "El FM es el responsable de que un edificio funcione bien todos los días, una vez está terminado y en uso." FM = mejor equilibrio sueldo + paz mental para perfil AT + ADE.',
      },
    ],
    flashcards: [
      {
        frente: '¿Cuántas áreas de gestión tiene el Facility Manager?',
        reverso: '9 áreas: Mantenimiento, Energía, Limpieza, Seguridad, Espacios, Logística, Servicios al empleado, ESG y Gestión económica.',
      },
      {
        frente: '¿Cuál es el KPI de referencia para el ratio preventivo vs correctivo?',
        reverso: 'Objetivo >70% mantenimiento preventivo frente al correctivo. Si bajas del 60%, vas reactivo y el presupuesto se descontrola.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Cuántas áreas de gestión abarca el trabajo diario de un Facility Manager?',
        opciones: ['5 áreas', '7 áreas', '9 áreas', '12 áreas'],
        correcta: 2,
        explicacion: 'El FM gestiona exactamente 9 áreas: Mantenimiento técnico, Energía, Limpieza, Seguridad, Espacios, Logística, Servicios al empleado, ESG y Gestión económica.',
      },
      {
        pregunta: '¿Cuál es el objetivo del KPI de mantenimiento preventivo frente al correctivo?',
        opciones: [
          'Mayor del 50% preventivo',
          'Mayor del 60% preventivo',
          'Mayor del 70% preventivo',
          'Mayor del 90% preventivo',
        ],
        correcta: 2,
        explicacion: 'El objetivo es superar el 70% de mantenimiento preventivo frente al correctivo. Por debajo del 60% vas reactivo y el presupuesto se descontrola.',
      },
      {
        pregunta: '¿Qué diferencia principal existe entre un FM y un Jefe de Obra en cuanto al nivel de estrés?',
        opciones: [
          'El FM tiene más estrés porque gestiona más áreas',
          'El Jefe de Obra tiene menos estrés al tener plazos más largos',
          'El FM trabaja con el edificio EN USO, todo planificado, estrés bajo; el JO tiene plazos diarios y estrés muy alto',
          'No hay diferencia significativa en nivel de estrés entre ambos roles',
        ],
        correcta: 2,
        explicacion: 'El FM trabaja con el edificio en uso, todo planificado y con protocolo. El JO tiene plazos diarios, obras a destajo y 60-70 horas semanales. La diferencia de estrés es radical.',
      },
    ],
  },

  'competencias-clave': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'El FM requiere 10 competencias que combinan conocimiento técnico, visión financiera, habilidades de liderazgo y orientación al servicio. Tu doble grado AT + ADE cubre la mayoría desde el día 1.',
      },
      {
        tipo: 'titulo',
        texto: '🎯 Las 10 competencias del FM',
      },
      {
        tipo: 'lista',
        items: [
          '1. Gestión técnica del edificio: saber qué falla y cómo auditarlo al proveedor.',
          '2. Gestión económica y presupuestaria: OPEX vs CAPEX, TCO, ROI de eficiencia.',
          '3. Negociación con proveedores: el 70% del coste FM son contratos externos.',
          '4. Liderazgo de equipos: 5-50 personas según el nivel del puesto.',
          '5. Comunicación con dirección: convencer al CEO de invertir en lo invisible.',
          '6. Normativa y compliance: PRL, CTE, RITE, RIPCI, RD energía.',
          '7. Sostenibilidad y ESG: cada vez más obligatorio (UE Fit for 55).',
          '8. Datos y KPIs: lo que no se mide no se mejora. Máximo 4-5 KPIs por reunión.',
          '9. Tecnología e IoT: CAFM, BMS, sensores, dashboards Power BI.',
          '10. Orientación al cliente interno: el empleado-usuario es tu jefe real.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Errores típicos del FM novato',
        texto: 'Decir "no es mi problema" pierde la confianza interna. Subir problemas al CEO sin soluciones te cierra puertas. Aprobar facturas sin auditar genera sobrecoste del 5-15% anual. Reportar 20 KPIs a dirección hace que no lean ninguno.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Tu ventaja ADE',
        texto: 'La mayoría de FM vienen solo del lado técnico y se atascan con presupuestos y presentaciones a dirección. Tu grado ADE te da el idioma financiero desde el primer día. Es una ventaja diferencial real en el mercado.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Cómo vendes tus competencias en entrevista',
        texto: 'Posiciónate como el único candidato que habla tanto el idioma técnico como el financiero. Ejemplo: "Tengo formación de Arquitecto Técnico para auditar instalaciones y formación ADE para gestionar el presupuesto y reportar KPIs a dirección."',
      },
    ],
    flashcards: [
      {
        frente: '¿Cuántas competencias clave se identifican para un FM y cuáles son los tres bloques principales?',
        reverso: '10 competencias. Tres bloques: Técnicas (gestión técnica, normativa, IoT), Económicas (presupuesto, negociación, KPIs) y Personas (liderazgo, comunicación, orientación servicio).',
      },
      {
        frente: '¿Por qué el perfil ADE es una ventaja diferencial en FM?',
        reverso: 'La mayoría de FM vienen solo del lado técnico. El ADE aporta OPEX/CAPEX, TCO, ROI, forecasting y lenguaje directivo. Muy pocos candidatos tienen los dos perfiles a la vez.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Qué porcentaje del coste FM suelen representar los contratos con proveedores externos?',
        opciones: ['El 30%', 'El 50%', 'El 70%', 'El 90%'],
        correcta: 2,
        explicacion: 'Aproximadamente el 70% del coste FM son contratos externos: limpieza, vigilancia, mantenimiento técnico y servicios al empleado. Por eso la negociación con proveedores es una competencia crítica.',
      },
      {
        pregunta: '¿Cuántos KPIs como máximo debe presentar el FM en cada reunión con dirección?',
        opciones: ['2-3 KPIs', '4-5 KPIs', '8-10 KPIs', '15-20 KPIs'],
        correcta: 1,
        explicacion: 'Máximo 4-5 KPIs por reunión. Si presentas 20, dirección no lee ninguno. Lo que no cabe en el dashboard ejecutivo va a un anexo.',
      },
      {
        pregunta: '¿Cuál de estas competencias es considerada la más crítica para que el FM no sea percibido como "solo técnico"?',
        opciones: [
          'Conocimiento de BMS y domótica',
          'Comunicación con stakeholders y dirección',
          'Manejo de software CAFM',
          'Conocimiento de normativa RITE',
        ],
        correcta: 1,
        explicacion: 'La comunicación con stakeholders es la competencia que diferencia al FM de un técnico de mantenimiento. Convencer al CEO de invertir en lo invisible, presentar con 3 KPIs claros y subir siempre con soluciones propuestas son las claves.',
      },
    ],
  },

  'conocimientos-tecnicos': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Como Arquitecto Técnico ya tienes el 70% del conocimiento técnico que necesita un FM. Solo hay que reforzar tres áreas específicas: RITE, RIPCI y BMS. Tres cursos de 40-60 horas cada uno y estás cubierto.',
      },
      {
        tipo: 'titulo',
        texto: '🔧 Áreas técnicas con marco legal propio',
      },
      {
        tipo: 'lista',
        items: [
          'Eléctrica: REBT + autoconsumo solar (RD 244/2019). Riesgo: sanción de Industria.',
          'Climatización HVAC: RITE (RD 1027/2007). Mantenimiento trimestral o semestral obligatorio con libro registrado.',
          'Agua y Legionella: RD 487/2022 obliga a programa de mantenimiento y análisis. Caso positivo = cierre del edificio.',
          'PCI Protección Contra Incendios: RIPCI (RD 513/2017). Simulacro anual obligatorio para empresas con más de 50 empleados.',
          'Ascensores: RD 88/2013. Mantenimiento mensual por empresa autorizada e inspección OCA cada 4-6 años.',
          'BMS Building Management System: integra clima, iluminación, seguridad y accesos en una sola pantalla.',
          'BIM 4 FM: modelo as-built con COBie, digital twin y alimentación del CAFM con datos de activos.',
          'Energía: auditoría energética RD 56/2016 cada 4 años para empresas con más de 250 empleados.',
          'ESG: CSRD obliga a reportar emisiones Alcance 1+2+3. Empresas cotizadas ya reportan desde 2024.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'norma',
        titulo: 'Las 9 áreas tienen marco legal propio',
        texto: 'Como FM eres responsable del cumplimiento aunque ejecuten proveedores. La inspección de Industria audita RITE, RIPCI y REBT con sanciones de 6.000 a 300.000 euros.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'CAFM: el ERP del FM',
        texto: 'Sin CAFM (Planon, Archibus, FSI Concept) gestionas en Excel con resultados muy limitados. Para entrevistas en consultoras FM (Ferrovial, ISS, Sodexo) te preguntarán qué CAFM has tocado. Muchos tienen trial gratuito de 30 días. Una tarde dedicada a Planon o FSI suma puntos.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Tu ventaja: BIM + IA',
        texto: 'Tu formación Revit te coloca por delante. Puedes pedir modelos BIM as-built a constructoras y traducirlos al CAFM. Además, tu stack de IA propio te permite automatizar informes y auditorías que a otros les llevan días.',
      },
    ],
    flashcards: [
      {
        frente: '¿Con qué frecuencia obliga la ley a realizar la auditoría energética según el RD 56/2016?',
        reverso: 'Cada 4 años para empresas con más de 250 empleados o más de 50 millones de euros de facturación. Sin auditoría = multa.',
      },
      {
        frente: '¿Qué es el BMS y para qué sirve en FM?',
        reverso: 'Building Management System: integra clima, iluminación, seguridad y control de accesos en una sola pantalla. Fabricantes líderes: Siemens Desigo, Schneider EcoStruxure, Niagara Tridium.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es el reglamento que obliga al mantenimiento registrado de las instalaciones de climatización?',
        opciones: [
          'RD 88/2013 (Ascensores)',
          'RIPCI RD 513/2017 (PCI)',
          'RITE RD 1027/2007 (Instalaciones térmicas)',
          'REBT RD 842/2002 (Baja tensión)',
        ],
        correcta: 2,
        explicacion: 'El RITE (RD 1027/2007) obliga a un mantenimiento registrado trimestral o semestral según potencia para instalaciones térmicas. Sin libro de mantenimiento, sanción de Industria.',
      },
      {
        pregunta: '¿Con qué frecuencia es obligatorio el simulacro de evacuación para empresas con más de 50 empleados?',
        opciones: [
          'Cada 2 años',
          'Cada 6 meses',
          'Anualmente',
          'Solo cuando lo exige la inspección',
        ],
        correcta: 2,
        explicacion: 'El simulacro de evacuación es obligatorio anualmente para empresas con más de 50 empleados. Debe documentarse con acta y lista de asistentes.',
      },
      {
        pregunta: '¿Qué es el COBie en el contexto del BIM aplicado a FM?',
        opciones: [
          'Un software de gestión de mantenimiento',
          'Un estándar de datos para transferir información del edificio al sistema FM',
          'Una norma ISO de sostenibilidad para edificios',
          'Un certificado energético de la Unión Europea',
        ],
        correcta: 1,
        explicacion: 'COBie (Construction Operations Building Information Exchange) es el estándar que permite trasladar los datos del modelo BIM as-built al CAFM: marca, fecha de instalación, próxima revisión de cada activo.',
      },
    ],
  },

  'conocimientos-gestion': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'La gestión económica es donde brilla el perfil ADE. La mayoría de FM vienen solo del lado técnico y se atascan con presupuestos y reporting a dirección. Tu formación en ADE ya te da el idioma financiero.',
      },
      {
        tipo: 'titulo',
        texto: '📊 Estructura del presupuesto FM',
      },
      {
        tipo: 'lista',
        items: [
          'Mantenimiento técnico: 25-35% del presupuesto total FM.',
          'Limpieza: 15-25%. Contratos con empresa externa y auditorías de SLA.',
          'Vigilancia: 10-20%. Puede ser 24/7 o por jornadas según el edificio.',
          'Energía (luz, gas, agua): 15-25%. Muy volátil según precios de mercado.',
          'Reformas e inversiones CAPEX: 5-15%. Necesitan aprobación del CFO.',
          'Otros servicios (catering, jardinería, plagas): 5-10%. Variable.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'KPI clave: euros por metro cuadrado y año',
        texto: 'El ratio de referencia es 120 euros/m2/año para oficinas. Logística puede ser 30 euros y data centers hasta 350 euros. Saber este número de tu edificio es lo primero que hay que calcular al incorporarse.',
      },
      {
        tipo: 'titulo',
        texto: '📑 Contratos FM bien hechos',
      },
      {
        tipo: 'lista',
        items: [
          'SLA (niveles de servicio): tiempos de respuesta, disponibilidad garantizada.',
          'KPIs e indicadores: lo que se mide cada mes.',
          'Penalizaciones: 10-25% del importe mensual si el proveedor incumple.',
          'Revisión económica anual: IPC vs precio cerrado.',
          'Cláusula de salida: para no quedarte cautivo de un proveedor.',
          'CAE Coordinación Actividades Empresariales: obligatorio por PRL. Sin CAE y con accidente del proveedor en tus instalaciones, responsabilidad solidaria de tu empresa.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'TCO: el precio inicial no es el coste',
        texto: 'Una caldera de 25.000 euros que consume un 30% menos en 15 años puede ahorrar entre 80.000 y 120.000 euros. Llevar el análisis TCO (Total Cost of Ownership) al CFO con un Excel claro es la forma más efectiva de ganar la negociación interna para inversiones de eficiencia.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Reporting a dirección: la regla de oro',
        texto: 'Dirección no tiene tiempo para 20 páginas. Una página, tres bloques y decisiones claras: Top 3 hitos del mes, situación financiera vs presupuesto e incidencias abiertas con propuesta de acción. Novato = 12 páginas con 18 KPIs. Pro = 1 página con 4-5 KPIs y decisión propuesta.',
      },
    ],
    flashcards: [
      {
        frente: '¿Cuál es la diferencia entre OPEX y CAPEX en el presupuesto FM?',
        reverso: 'OPEX son gastos operativos recurrentes (contratos anuales, va al P&L del mes). CAPEX son inversiones que duran años (reformas, van al balance y se amortizan). El CAPEX necesita aprobación del CFO.',
      },
      {
        frente: '¿Por qué es obligatorio incluir la cláusula CAE en los contratos con proveedores?',
        reverso: 'La Coordinación de Actividades Empresariales (PRL Ley 31/1995) es obligatoria. Sin CAE, si hay un accidente del proveedor en tus instalaciones, tu empresa tiene responsabilidad solidaria.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es el rango típico del KPI euros por metro cuadrado y año para oficinas en Madrid?',
        opciones: [
          'Entre 30 y 50 euros/m2/año',
          'Entre 70 y 100 euros/m2/año',
          'Entre 120 y 150 euros/m2/año',
          'Entre 200 y 300 euros/m2/año',
        ],
        correcta: 2,
        explicacion: 'El rango de referencia para oficinas prime en Madrid es 120-150 euros/m2/año. Logística puede ser 30 euros y data centers hasta 350 euros.',
      },
      {
        pregunta: '¿Qué penalización típica puede aplicar el FM al proveedor si incumple el SLA?',
        opciones: [
          'Entre el 1% y el 5% del importe mensual',
          'Entre el 10% y el 25% del importe mensual',
          'Entre el 30% y el 50% del importe mensual',
          'La penalización no se puede pactar contractualmente',
        ],
        correcta: 1,
        explicacion: 'Una penalización contractual típica por incumplimiento de SLA es del 10-25% del importe mensual. Esta cláusula es una de las 8 secciones obligadas en un contrato FM bien hecho.',
      },
      {
        pregunta: '¿En qué periodo del año se prepara normalmente el presupuesto FM para el siguiente ejercicio?',
        opciones: [
          'Enero-Febrero (principio del ejercicio)',
          'Abril-Junio (mitad del año)',
          'Septiembre-Octubre (preparación) con negociación en Noviembre-Diciembre',
          'Solo se prepara cuando lo pide el CFO',
        ],
        correcta: 2,
        explicacion: 'El ciclo presupuestario FM: Sep-Oct preparación, Nov-Dic negociación con dirección, Enero aprobación y arranque, cada mes seguimiento de varianzas y Q3 reforecast si hay desviación.',
      },
    ],
  },

  'soft-skills': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'El 80% de los FM fallan por soft skills, no por falta de conocimiento técnico. Las 7 habilidades blandas críticas marcan la diferencia entre un FM que dura y uno que quema en el primer año.',
      },
      {
        tipo: 'titulo',
        texto: '🤝 Las 7 soft skills críticas del FM',
      },
      {
        tipo: 'lista',
        items: [
          '1. Templanza ante crisis: respirar 3 segundos, mirar el protocolo y asignar 3 tareas a 3 personas. Simulacros mensuales.',
          '2. Negociación ganar-ganar: trabajar intereses, no posiciones. BATNA real (2 ofertas de competidores) antes de entrar a negociar.',
          '3. Comunicación con stakeholders: cambias de lenguaje según con quién hablas. CEO = 3 KPIs y decisión. Proveedor = directo y práctico.',
          '4. Priorización feroz: Matriz Eisenhower, regla de 2 minutos y bloques temporales. Una sola lista en el CAFM, sin post-its sueltos.',
          '5. Pensamiento sistémico: antes de actuar, simula los efectos cruzados. Cambiar LEDs puede aumentar el consumo de calefacción.',
          '6. Mentalidad de servicio: las quejas son datos, no ataques personales. La invisibilidad es éxito.',
          '7. Curiosidad técnica permanente: 30 minutos de lectura de sector al día, 1 webinar a la semana y 1 certificación al año.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'La frase que construye reputación',
        texto: '"Lo miro y te confirmo en 30 minutos." Repetida 100 veces y cumplida, te convierte en el FM al que todos llaman primero. La reputación de servicio se construye con consistencia diaria, no con grandes proyectos.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'BATNA: nunca entres sin alternativa',
        texto: 'Antes de negociar la renovación del contrato de limpieza, ten mínimo 2 ofertas de competidores validadas. Sin BATNA real la negociación es teatro y el proveedor lo sabe.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Soft skills que ya tienes en tu perfil',
        texto: 'Doble grado AT + ADE: hablas idioma técnico y financiero. Experiencia de obra real: sabes cómo se construye lo que vas a mantener. 5 sistemas IA en producción: eres FM digital 3 años antes del mercado. TDAH: muy visual, ideal para FM (dashboards, no Excel en bruto).',
      },
    ],
    flashcards: [
      {
        frente: '¿Qué significa BATNA en el contexto de la negociación con proveedores?',
        reverso: 'Best Alternative To a Negotiated Agreement: la mejor alternativa que tienes si la negociación fracasa. Sin BATNA real (mínimo 2 ofertas de competidores), la negociación es teatro.',
      },
      {
        frente: '¿Por qué la Matriz Eisenhower es útil para el FM?',
        reverso: 'Clasifica tareas por urgencia e importancia. Evita dedicar tiempo a lo urgente pero no importante. Un día FM normal tiene 15 emails, 8 incidencias y una reunión con el CFO en 1 hora: sin Eisenhower, todo parece igual de urgente.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Qué porcentaje de los fracasos de FM se atribuyen a falta de soft skills según el módulo?',
        opciones: ['El 30%', 'El 50%', 'El 65%', 'El 80%'],
        correcta: 3,
        explicacion: 'El 80% de los FM fallan por soft skills, no por falta de conocimiento técnico. La competencia técnica es necesaria pero no suficiente para tener éxito en el puesto.',
      },
      {
        pregunta: '¿Cuál es la acción recomendada ante una crisis en el edificio (fallo de suministro eléctrico, ascensor con gente dentro)?',
        opciones: [
          'Llamar al CEO inmediatamente para informar de la incidencia',
          'Esperar a que el proveedor de mantenimiento resuelva antes de actuar',
          'Respirar 3 segundos, consultar el protocolo, asignar 3 tareas a 3 personas y reportar al CEO con 1 párrafo',
          'Escalar la incidencia al departamento de RRHH',
        ],
        correcta: 2,
        explicacion: 'La fórmula para crisis es: 3 segundos de calma, protocolo escrito, delegación de 3 tareas concretas a 3 personas y reporte breve al CEO. El FM novato grita órdenes contradictorias; el pro sigue el protocolo.',
      },
      {
        pregunta: '¿Por qué el pensamiento sistémico es crítico en FM antes de tomar decisiones técnicas?',
        opciones: [
          'Porque las decisiones técnicas requieren aprobación del CFO',
          'Porque cambiar un elemento del edificio puede tener efectos inesperados en otros sistemas (ejemplo: LEDs reducen calor interno y aumentan la calefacción en invierno)',
          'Porque los proveedores necesitan tiempo para adaptarse a cualquier cambio',
          'Porque la normativa obliga a analizar el impacto antes de cada intervención',
        ],
        correcta: 1,
        explicacion: 'Un edificio es un sistema interconectado. Cambiar la iluminación a LED puede reducir el calor interno y aumentar el consumo de calefacción en invierno. El ahorro neto real puede ser del 1% en lugar del 15% esperado. Simular antes de actuar evita sorpresas.',
      },
    ],
  },

  'certificaciones': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Las certificaciones FM son el atajo para acelerar la carrera y conseguir un salto salarial de 10-15K. La combinación óptima para el mercado español es IFMA FMP rápida en 2026 y RICS APC en proceso desde 2027.',
      },
      {
        tipo: 'titulo',
        texto: '🏅 Las 3 certificaciones FM de referencia',
      },
      {
        tipo: 'lista',
        items: [
          'IFMA FMP (Facility Management Professional): primer paso real. 60-80 horas, 1.000-1.500 euros. Reconocimiento alto en España. Prioridad máxima en 2026.',
          'RICS APC (Assessment of Professional Competence): pathway de 1-3 años, 600 euros/año + 500-700 euros de examen. Clave para SOCIMIs y fondos (Merlin, Colonial, Lar España).',
          'IWFM Level 4+ (antes BIFM): útil en UK e Irlanda, reconocimiento limitado en España.',
        ],
      },
      {
        tipo: 'titulo',
        texto: '📅 Plan formativo recomendado',
      },
      {
        tipo: 'lista',
        items: [
          'Q1 2026: IFMA FMP online en inglés (1.000-1.500 euros, 60 horas).',
          'Q2 2026: PRL Nivel Intermedio online (800 euros, 300 horas en 3 meses). Obligatorio en empresas medianas.',
          'Q3 2026: ISO 41001 Foundation (500 euros, 30 horas).',
          'Q4 2026: Inglés técnico B2 a C1 (1.500 euros, 6 meses).',
          '2027: iniciar RICS APC pathway y LEED Green Associate.',
          '2028-2029: MRICS al pasar el APC y CFM IFMA con 5 años de experiencia.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Inversión total año 2026',
        texto: 'Aproximadamente 3.800-4.300 euros para FMP + PRL + ISO 41001 + inglés. Todo deducible si trabajas por cuenta ajena o como autónomo. El primer aumento de sueldo de 10-15K lo amortiza en el primer año.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'Recursos gratuitos para empezar hoy',
        texto: 'IFMA YouTube (youtube.com/IFMAvideos): 1 hora al día durante 1 mes. Coursera Facilities Management: cursos gratuitos, pagas solo el certificado. Blogs: facilitiesnet.com, ifma.org/blog. 20-30 minutos de lectura diaria ya te diferencia de la mayoría de candidatos.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Cómo hablas de certificaciones en entrevista',
        texto: 'Si aún no tienes la FMP: "Estoy en proceso de la IFMA FMP, la terminaré en X meses. Paralelamente he iniciado el itinerario RICS APC para multinacionales y SOCIMIs." Demuestra que conoces el mapa del sector y tienes un plan concreto.',
      },
    ],
    flashcards: [
      {
        frente: '¿Cuál es la diferencia principal entre IFMA y RICS en el contexto del mercado español?',
        reverso: 'IFMA (origen USA): reconocimiento alto en consultoras FM y multinacionales, más accesible y rápido. RICS (origen UK): excelente para SOCIMIs y fondos inmobiliarios (Merlin, Colonial, Lar España). La combinación FMP + APC es el perfil premium del mercado.',
      },
      {
        frente: '¿Por qué es obligatorio el PRL Nivel Intermedio para un FM en empresa mediana española?',
        reverso: 'La Ley 31/1995 obliga al PRL Nivel Intermedio (300 horas) en empresas con más de 50 empleados que no externalicen la prevención. Para FM en empresas medianas, es requisito habitual en las ofertas.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es la certificación IFMA recomendada como primer paso para entrar al sector FM en España?',
        opciones: [
          'IFMA CFM (Certified Facility Manager)',
          'IFMA SFP (Sustainability Facility Professional)',
          'IFMA FMP (Facility Management Professional)',
          'IFMA MRICS Fellow',
        ],
        correcta: 2,
        explicacion: 'La IFMA FMP es el primer paso real: 60-80 horas, 1.000-1.500 euros, se puede obtener en 2-3 meses online. Es la inversión más rentable de 2026 para entrar al sector FM en España.',
      },
      {
        pregunta: '¿Para qué tipo de empresa es especialmente recomendable la certificación RICS APC?',
        opciones: [
          'Pequeñas empresas de servicios FM',
          'Administración pública española',
          'SOCIMIs y fondos inmobiliarios como Merlin Properties o Inmobiliaria Colonial',
          'Empresas de logística y almacenamiento',
        ],
        correcta: 2,
        explicacion: 'El RICS APC (y el estatus MRICS resultante) es muy valorado en SOCIMIs y fondos inmobiliarios. Si tu carrera va a Merlin, Colonial o Lar España, iniciar el APC es prioritario.',
      },
      {
        pregunta: '¿Cuál es el máster de precio público más asequible recomendado en España para FM?',
        opciones: [
          'MBA + FM en IE Business School (30-40K)',
          'Máster Facility Management en La Salle URL Barcelona (12-15K)',
          'Máster en Patrimonio y Gestión en la UPM (5-8K)',
          'Máster Property Management en UNED online (4-7K)',
        ],
        correcta: 2,
        explicacion: 'El Máster de Patrimonio y Gestión de la UPM tiene precio público de 5-8K, cubre las necesidades FM y es compatible con la candidatura docente al ser de universidad pública de referencia. La UPM es la universidad de origen del perfil.',
      },
    ],
  },

  'mercado-sueldos': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'El mercado FM en España tiene 1.500-2.000 vacantes activas simultáneas en LinkedIn. Madrid es el mercado número uno. El rango salarial junior es 35-45K y crece hasta 100-150K en posiciones directivas.',
      },
      {
        tipo: 'titulo',
        texto: '💼 Rangos salariales FM en España 2026',
      },
      {
        tipo: 'lista',
        items: [
          'Facility Officer / Coordinator: 28-40K bruto/año, sin o escaso variable.',
          'Facility Manager: 40-60K + variable 5-15%. Total potencial hasta 70K.',
          'Senior Facility Manager: 55-75K + variable 10-20%. Total potencial hasta 90K.',
          'Head of Facility Management: 70-95K + variable 15-25%. Total potencial 120K.',
          'Director Facility Management: 90-130K + variable 20-30% y bonus. Total potencial 170K.',
        ],
      },
      {
        tipo: 'titulo',
        texto: '🏆 Plan de 90 días para el primer FM',
      },
      {
        tipo: 'lista',
        items: [
          'Días 1-30 (Posicionarte): foto LinkedIn profesional, headline "Facility Manager Junior - Arquitecto Técnico + ADE - Madrid", conectar con 30 FM en Madrid, empezar IFMA FMP.',
          'Días 31-60 (Aplicar): CV adaptado para FM (no para Jefe de Obra), aplicar 5-8 ofertas por semana, entrevistar con 3-5 headhunters, enviar candidatura abierta a 20 empresas objetivo.',
          'Días 61-90 (Cerrar): negociar con rango 38-45K como Facility Officer/Junior, pedir cláusula de formación pagada (FMP, RICS APC), confirmar flexibilidad horaria para terapia.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Sectores que pagan más',
        texto: 'Banca y seguros: multiplicador x1,2-1,4 sobre el rango base. Tecnología (Google, Microsoft, Amazon España): x1,3-1,5. Madrid + sector banca o tech = techo salarial más alto. La zona Coslada está perfectamente conectada con Madrid centro y la zona empresarial Norte.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Trampas a evitar',
        texto: 'Si te ofrecen un puesto "FM" cuyo día a día es solo abrir avisos y vigilar al portero, no es FM real: es coordinación operativa con sueldo 28-32K. Aplicar el test: tiene presupuesto propio, reporta a CFO o COO, gestiona contratos de verdad. Si la respuesta es no en todos, es un puesto subestimado.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'Elevator pitch para la primera entrevista',
        texto: 'Soy Arquitecto Técnico y graduado en ADE por la UPM. He gestionado equipos en obra (152 viviendas) y soy CTO de una empresa con infraestructura cloud propia y 5 sistemas en producción 24/7. Hablo el lenguaje técnico y el de dirección porque tengo ambas formaciones. Y soy uno de los pocos profesionales del sector con stack de IA propio en producción, lo que me permite acelerar auditorías y reporting en horas, no días.',
      },
    ],
    flashcards: [
      {
        frente: '¿Cuál es el rango salarial objetivo para el primer puesto FM (Facility Officer / Junior FM)?',
        reverso: '38-45K bruto/año. Por debajo de 38K el mercado te subestima. Además de sueldo, pedir formación pagada (FMP, RICS APC) y flexibilidad horaria como condiciones irrenunciables.',
      },
      {
        frente: '¿Cuáles son las 3 preguntas que debes hacer al final de cualquier entrevista FM?',
        reverso: '"¿Cómo medís el éxito del FM en esta empresa?", "¿Qué CAFM / IWMS usáis?", "¿Cuál es la mayor frustración del FM actual aquí?" Te posicionan como profesional pensante, no candidato pasivo.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es el sueldo bruto anual que debes pedir como objetivo en el primer puesto FM (Facility Officer/Junior)?',
        opciones: [
          'Entre 25.000 y 32.000 euros',
          'Entre 32.000 y 37.000 euros',
          'Entre 38.000 y 45.000 euros',
          'Entre 50.000 y 60.000 euros',
        ],
        correcta: 2,
        explicacion: 'El rango objetivo para el primer puesto FM es 38-45K según el Hays Salary Guide 2026 y las ofertas reales en LinkedIn España. Por debajo de 38K el mercado te subestima. Además del sueldo, negociar formación pagada y flexibilidad horaria.',
      },
      {
        pregunta: '¿Qué sector ofrece el multiplicador salarial más alto sobre el rango base FM en España?',
        opciones: [
          'Sector retail (Inditex, El Corte Inglés)',
          'Administración pública',
          'Tecnología (Google, Microsoft, Amazon España) con multiplicador x1,3-1,5',
          'Sector hospitalario privado',
        ],
        correcta: 2,
        explicacion: 'Tecnología (Google, Microsoft, Amazon España) aplica un multiplicador de x1,3-1,5 sobre el rango base FM. Banca y seguros está justo detrás con x1,2-1,4. Retail es el sector menos pagado en FM.',
      },
      {
        pregunta: '¿Cuál es la señal de alerta que indica que un puesto anunciado como "FM" es en realidad coordinación operativa mal remunerada?',
        opciones: [
          'Que el contrato sea temporal en lugar de indefinido',
          'Que la empresa tenga menos de 200 empleados',
          'Que el puesto no tenga presupuesto propio, no reporte a CFO o COO y no gestione contratos reales de proveedor',
          'Que el puesto requiera presencia en el edificio más de 3 días a la semana',
        ],
        correcta: 2,
        explicacion: 'Un FM real tiene presupuesto propio, reporta a CFO o COO y gestiona contratos de verdad. Si el día a día es solo abrir avisos y vigilar al portero, el sueldo ronda 28-32K y el rol es coordinación operativa, no FM.',
      },
    ],
  },

  'fm-tu-mejor-puesto': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Con el perfil AT + ADE + experiencia de obra + stack de IA, el Facility Manager es el puesto que más dinero ofrece por unidad de estrés. Y crece +5% anual hasta 2031. No es opinión, son datos.',
      },
      {
        tipo: 'titulo',
        texto: '🏆 Las 5 razones por las que FM gana',
      },
      {
        tipo: 'lista',
        items: [
          '1. Encaje del 95%: ningún otro puesto del sector (PM, CM, Jefe de Obra) aprovecha el doble grado AT + ADE al mismo nivel. FM usa el AT para lo técnico, el ADE para el presupuesto y los KPIs.',
          '2. Estrés 3-4 sobre 10: edificio ya construido, mantenimientos preventivos planificados, incidencias correctivas son la excepción. Sin llamadas a las 6 AM. Jefe de Obra = estrés 9/10.',
          '3. Horario sostenible: 40-45 horas semanales estables. La terapia de 2 días a la semana de 17 a 19 horas encaja perfectamente. Imposible en Jefe de Obra (60-70 horas + sábados).',
          '4. Curva salarial superior: entrada 38-45K, director FM 100-150K. A los 10 años, la diferencia acumulada frente al Jefe de Obra es de décadas de bienestar.',
          '5. Demanda +5% anual hasta 2031: motores estructurales, no cíclicos. El mercado FM en España pasa de 40.080 a 51.110 millones USD en 2031.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'dato',
        titulo: 'Matriz comparativa de puestos (puntuación /40)',
        texto: 'FM = 36/40 (líder claro). Construction Manager = 27/40. Project Manager promotor = 26/40. Jefe de Obra = 17/40. La puntuación combina sueldo, estabilidad, estrés bajo y encaje con el perfil AT+ADE.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'truco',
        titulo: 'La paradoja de FM: no parece sexy pero es el mejor',
        texto: 'Muchos AT recién salidos creen que Jefe de Obra es el camino noble. Es una trampa. A los 10 años, FM gana 80-110K frente a 55-75K del JO. FM tiene horario de 9 a 18 L-V frente a 7 a 21 más sábados del JO. FM reporta directamente al CEO, el JO está lejos del centro de decisión.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'La decisión final en una frase',
        texto: 'Soy FM porque mi formación, mi tecnología y mi estilo de vida lo piden: AT para lo técnico, ADE para los números, IA en producción para automatizar, y un puesto que crece +5% anual con horario que respeta mi vida.',
      },
    ],
    flashcards: [
      {
        frente: '¿Qué puntuación obtiene el FM en la matriz comparativa de puestos del sector y qué incluye esa evaluación?',
        reverso: '36 sobre 40. La matriz evalúa 4 dimensiones: sueldo (8/10), estabilidad (9/10), estrés bajo (9/10) y encaje con el perfil AT+ADE (10/10). Es el único puesto que saca 10 en encaje.',
      },
      {
        frente: '¿Cuál es el nivel de estrés del FM frente al Jefe de Obra en una escala del 1 al 10?',
        reverso: 'FM: 3-4 sobre 10 (edificio en uso, todo planificado, protocolo para emergencias). Jefe de Obra: 9 sobre 10 (plazo diario, lluvia, accidentes, llamadas a las 6 AM, 60-70 horas semanales).',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Qué porcentaje de las competencias del perfil AT + ADE aprovecha el FM según el análisis del módulo?',
        opciones: ['El 40%', 'El 60%', 'El 75%', 'El 95%'],
        correcta: 3,
        explicacion: 'El FM aprovecha el 95% de las competencias del perfil AT + ADE: titulación técnica, visión financiera, tecnología, liderazgo y sostenibilidad. El Jefe de Obra aprovecha el 40%, el PM el 60% y el CM el 65%.',
      },
      {
        pregunta: '¿Qué crecimiento anual se estima para el mercado FM en España hasta 2031?',
        opciones: [
          'Crecimiento del +1,5% anual',
          'Crecimiento del +2,5% anual',
          'Crecimiento del +4,98% anual',
          'Crecimiento del +10% anual',
        ],
        correcta: 2,
        explicacion: 'El mercado FM en España crece al +4,98% anual (Mordor Intelligence), pasando de 40.080 millones USD en 2026 a 51.110 millones en 2031. Los motores son estructurales: sostenibilidad, externalización, IoT y fondos inmobiliarios.',
      },
      {
        pregunta: '¿Cuál es la principal razón por la que el FM tiene menos estrés que el Jefe de Obra?',
        opciones: [
          'El FM trabaja menos horas a la semana',
          'El FM tiene un equipo más grande para delegar',
          'El FM trabaja con el edificio ya construido y en uso, con mantenimiento preventivo planificado y protocolo para emergencias',
          'El FM no tiene responsabilidad legal directa sobre el edificio',
        ],
        correcta: 2,
        explicacion: 'El FM trabaja con el edificio en uso: los mantenimientos están planificados meses antes, las incidencias correctivas son la excepción y las emergencias se resuelven con protocolo. El JO vive en el plazo diario con obra a destajo, clima adverso y presión constante.',
      },
    ],
  },

  'conclusiones': {
    bloques: [
      {
        tipo: 'parrafo',
        texto: 'Este curso responde a una pregunta concreta: qué es realmente un Facility Manager y por qué es el mejor puesto para el perfil AT + ADE. La respuesta no es opinión, son datos. El FM integra personas, lugares y procesos para que un edificio funcione bien todos los días.',
      },
      {
        tipo: 'titulo',
        texto: '🎓 7 conclusiones clave del curso',
      },
      {
        tipo: 'lista',
        items: [
          '1. FM no es el técnico de mantenimiento: es un puesto directivo con presupuesto propio, KPIs estratégicos y reporte directo al CFO o COO. Confundirlo con coordinación operativa (28-32K) es el error más caro al buscar trabajo.',
          '2. Encaje AT + ADE del 95%: ningún otro puesto del sector aprovecha el doble grado al mismo nivel. FM usa el AT para lo técnico, el ADE para el presupuesto y la experiencia de obra para hablar con proveedores de igual a igual.',
          '3. Estrés 3-4 sobre 10 frente al 9 del Jefe de Obra: edificio ya construido, trabajo planificado y preventivo, urgencias como excepción. Vacaciones reales.',
          '4. Horario FM 9-18 horas L-V: la terapia de 17 a 19 horas dos días a la semana encaja perfectamente. Imposible en Jefe de Obra (7-21 horas más sábados).',
          '5. Curva salarial: entrada 38-45K, director 100-150K. La diferencia acumulada frente al JO es de décadas de bienestar a partir de los 5 años.',
          '6. Mercado de 40.080 millones USD en España en 2026 y crecimiento +5% anual hasta 2031. Motores estructurales, no cíclicos.',
          '7. Stack de IA propio: el FM digital que automatiza reporting con IA y gestiona CAFM es el perfil que buscan banca, tech y SOCIMIs. Vale 5-15K de plus desde el primer puesto.',
        ],
      },
      {
        tipo: 'caja',
        tipoCaja: 'aviso',
        titulo: 'Cuándo FM NO es para ti',
        texto: 'Si quieres construir cosas nuevas desde cero todos los días, el PM de obra o el CM encajan mejor. Si la empresa no tiene CAFM ni stack IT, te tocará crearlo de cero con más trabajo y menos apoyo. Si no aceptas la entrada humilde (Facility Officer 35-40K el primer año), la curva FM requiere paciencia.',
      },
      {
        tipo: 'caja',
        tipoCaja: 'cliente',
        titulo: 'La acción más importante de esta semana',
        texto: 'Actualiza el headline de LinkedIn a "Facility Manager Junior - Arquitecto Técnico + ADE - Madrid - IA aplicada" y empieza a aplicar a 5 ofertas cada semana. El primer puesto FM es el paso más importante: a partir de ahí, la curva salarial y la calidad de vida trabajan a tu favor durante 40 años.',
      },
      {
        tipo: 'titulo',
        texto: '📚 Siguientes cursos recomendados',
      },
      {
        tipo: 'lista',
        items: [
          'IFMA FMP: primera certificación FM. 60-80 horas online en inglés. Amortizable con el primer aumento de sueldo.',
          'BIM 7D FM: modelo BIM con parámetros de mantenimiento (LOD 500) como base del digital twin operativo.',
          'MS Project para FM: programar planes de mantenimiento preventivo y controlar proveedores con herramientas de PM.',
        ],
      },
    ],
    flashcards: [
      {
        frente: '¿Cuál es la puntuación del FM en la matriz de puestos del sector (sueldo + estabilidad + estrés bajo + encaje) y qué significa?',
        reverso: '36 sobre 40. Es el líder claro frente a Construction Manager (27), PM promotor (26) y Jefe de Obra (17). El único puesto donde sueldo, estabilidad, estrés bajo y encaje con AT+ADE máximos coinciden.',
      },
      {
        frente: '¿Cuáles son las 3 líneas de aprendizaje futuro recomendadas tras terminar este curso introductorio?',
        reverso: 'IFMA FMP (certificación FM básica), Revit BIM 7D FM (digital twin operativo) y MS Project para planificación de mantenimiento preventivo.',
      },
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es el error más costoso que comete un candidato AT + ADE al buscar trabajo en FM?',
        opciones: [
          'No tener la certificación IFMA FMP antes de aplicar',
          'Confundir un puesto de coordinación operativa (28-32K) con un FM real y aceptarlo como si fueran equivalentes',
          'Aplicar sin experiencia previa en gestión de proveedores',
          'No conocer los sistemas CAFM más populares del mercado',
        ],
        correcta: 1,
        explicacion: 'Confundir coordinación operativa con FM real es el error más caro. Un coordinador operativo solo abre avisos y vigila al portero (28-32K). Un FM real tiene presupuesto propio, gestiona contratos y reporta al CFO o COO (38-60K). El test: tiene presupuesto propio, reporta a dirección y gestiona contratos.',
      },
      {
        pregunta: '¿Cuáles son los tres motores estructurales del crecimiento del sector FM en España que lo convierten en una tendencia de décadas y no en un ciclo?',
        opciones: [
          'Aumento del precio inmobiliario, reducción de tipos de interés y crecimiento del turismo',
          'Sostenibilidad obligatoria, externalización de servicios y crecimiento de fondos e IoT en edificios',
          'Aumento de la población, construcción de nuevos edificios y digitalización de la administración pública',
          'Reducción del coste energético, masiva inversión pública en infraestructuras y expansión del sector retail',
        ],
        correcta: 1,
        explicacion: 'Los tres motores estructurales son: sostenibilidad obligatoria (UE Fit for 55), externalización masiva de servicios por empresas y crecimiento de fondos e IoT en edificios. Son tendencias de décadas, no ciclos económicos.',
      },
      {
        pregunta: '¿Cuál es la valoración del ROI de tiempo invertido en este curso introductorio de FM?',
        opciones: [
          'Bajo, porque el contenido es conceptual y no técnico práctico',
          'Medio, equivalente a un curso técnico de instalaciones',
          'Muy alto: 20-30 horas de estudio que orientan una carrera de 40 años y evitan el riesgo de acabar como JO quemado',
          'Depende del número de años de experiencia previa del candidato',
        ],
        correcta: 2,
        explicacion: 'El ROI es muy alto: 20-30 horas de estudio que orientan una carrera de 40 años. Sin este mapa del puesto objetivo, el riesgo de acabar como Jefe de Obra quemado es real para el perfil AT recién titulado.',
      },
    ],
  },
};
