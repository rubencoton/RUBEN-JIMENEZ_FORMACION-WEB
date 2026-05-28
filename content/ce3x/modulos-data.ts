import type { ModuloData } from '@/content/revit/modulos-data';

export const CE3X_DATA: Record<string, ModuloData> = {
  'conceptos-clave': {
    bloques: [
      { tipo: 'parrafo', texto: 'La certificación energética se basa en una cadena sencilla: la transmitancia U del cerramiento determina la demanda del edificio; la demanda más el rendimiento de los equipos da el consumo de energía primaria; el consumo multiplicado por los factores de emisión da las emisiones de CO2; y todo eso se traduce en una letra de la A a la G.' },
      { tipo: 'titulo', texto: '🎯 La cadena que lo explica todo' },
      { tipo: 'lista', items: [
        'U (W/m²K): calor que pasa por cada metro cuadrado de cerramiento. U baja = mejor aislamiento.',
        'Demanda (kWh/m² año): energía teórica que necesita el edificio. Depende del edificio y el clima, NO de los equipos.',
        'Consumo primaria (kWh/m² año): demanda dividida por el rendimiento del equipo y multiplicada por el factor de energía primaria.',
        'Emisiones (kg CO2/m² año): consumo por el factor de emisión de cada fuente.',
        'Letra A-G: resumen final del edificio según consumo y emisiones.'
      ]},
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Valores U de referencia', texto: 'Muro sin aislar: 1.5-2.5 W/m²K (malo). Muro con SATE 6 cm: 0.30-0.45 (bueno). Ventana doble PVC con rotura de puente térmico: 1.8 (aceptable). Ventana triple con argón: 1.0 (muy bueno).' },
      { tipo: 'titulo', texto: '🔢 Siglas imprescindibles' },
      { tipo: 'lista', items: [
        'COP (Coefficient of Performance): rendimiento de bombas de calor. Aerotermia: 3.0-4.0. Por cada kWh eléctrico entrega COP kWh térmicos.',
        'EER (Energy Efficiency Ratio): rendimiento de equipos de refrigeración. Split estándar: 3.0.',
        'ZCT (Zona Climática): letra A a E según severidad del invierno, número 1 a 4 según el verano. Madrid = D3.',
        'Eta (rendimiento calderas): caldera de gas estándar 0.85, condensación 0.95.'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: '¿Por qué importa al cliente?', texto: 'Una vivienda con letra G se vende y alquila mucho más barata que una A en el mismo barrio. Las rehabilitaciones energéticas son financiables con fondos NextGen al 40-80% del coste.' },
      { tipo: 'caja', tipoCaja: 'info', titulo: 'CE3X vs HULC', texto: 'CE3X es para edificios existentes ya construidos. HULC es para proyectos de obra nueva. Ambos son gratuitos del IDAE y cubren prácticamente cualquier encargo.' }
    ],
    flashcards: [
      { frente: '¿Qué mide la transmitancia U y en qué unidades?', reverso: 'El calor que atraviesa un cerramiento por unidad de superficie y diferencia de temperatura. Unidades: W/m²K. U baja = mejor aislamiento.' },
      { frente: '¿Cuál es la diferencia entre demanda y consumo de energía?', reverso: 'Demanda: energía teórica del edificio según su envolvente y clima (no depende de equipos). Consumo: demanda dividida por el rendimiento del equipo más el factor de energía primaria.' },
      { frente: '¿Qué significa COP 3.5 en una aerotermia?', reverso: 'Por cada kWh eléctrico consumido, la bomba entrega 3.5 kWh térmicos al edificio. Es mucho más eficiente que una caldera de gas con rendimiento 0.85.' }
    ],
    preguntas: [
      { pregunta: 'Un muro tiene U = 0.30 W/m²K y otro tiene U = 1.80 W/m²K. ¿Cuál aísla mejor?', opciones: ['El de U = 1.80 porque tiene más resistencia', 'El de U = 0.30 porque deja pasar menos calor', 'Los dos aíslan igual, U no mide aislamiento', 'Depende del clima de la zona'], correcta: 1, explicacion: 'U mide el calor que pasa por el cerramiento. A menor U, menor pérdida de calor, mejor aislamiento. U = 0.30 es un muro muy bien aislado.' },
      { pregunta: 'La demanda energética de un edificio depende principalmente de...', opciones: ['El rendimiento de la caldera instalada', 'El precio de la electricidad ese año', 'La envolvente del edificio y la zona climática', 'El número de personas que viven en él'], correcta: 2, explicacion: 'La demanda es la energía teórica que necesita el edificio para mantener el confort. Solo depende del edificio (cerramientos, ventanas) y del clima. Los equipos afectan al consumo, no a la demanda.' },
      { pregunta: '¿Qué programa gratuito del IDAE se usa para certificar un edificio existente?', opciones: ['HULC', 'CYPETHERM HE Plus', 'CE3X', 'SG SAVE'], correcta: 2, explicacion: 'CE3X es el programa oficial gratuito del IDAE para certificar edificios existentes. HULC se usa para obra nueva. CYPETHERM y SG SAVE son de pago.' }
    ]
  },

  'marco-normativo': {
    bloques: [
      { tipo: 'parrafo', texto: 'Dos normas mandan en la certificación energética. El CTE DB-HE fija qué exige el edificio en materia de ahorro energético. El RD 390/2021 regula cuándo es obligatorio certificar, cómo registrarlo y quién puede emitirlo.' },
      { tipo: 'titulo', texto: '📜 CTE DB-HE: las secciones que importan' },
      { tipo: 'lista', items: [
        'HE0: limitación del consumo energético total.',
        'HE1: limitación de la demanda energética según zona climática.',
        'HE2: rendimiento de instalaciones térmicas (remite al RITE).',
        'HE4: contribución solar mínima para ACS.',
        'HE5: contribución fotovoltaica.',
        'HE6: dotación de instalaciones de generación renovable.'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'CTE 2026 vivienda nueva', texto: 'Para vivienda nueva hay que cumplir HE0 + HE1 + HE4 + HE6. Por eso casi todas las viviendas nuevas de 2020 en adelante son clase A o B.' },
      { tipo: 'titulo', texto: '📋 RD 390/2021: cuándo es obligatorio' },
      { tipo: 'lista', items: [
        'Vender una vivienda: obligatorio.',
        'Alquilar una vivienda más de 4 meses al año: obligatorio.',
        'Edificio público de más de 500 m²: obligatorio con etiqueta visible.',
        'Vivienda propia que no se alquila: no es obligatorio.',
        'Garaje o trastero no calefactado: no es obligatorio.'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Responsabilidad del técnico', texto: 'Un certificado erróneo o con datos inventados puede conllevar sanción de hasta 6.000 euros y responsabilidad civil del técnico. Hay que visitar in situ y verificar los datos. No fiarse al 100% del catastro.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Validez y registro', texto: 'Un certificado energético es válido 10 años. Si hay reforma significativa hay que renovarlo. Cada CCAA tiene su registro propio. La tasa es de 10 a 30 euros según la comunidad.' }
    ],
    flashcards: [
      { frente: '¿Qué diferencia hay entre CTE DB-HE y RD 390/2021?', reverso: 'CTE DB-HE fija los requisitos técnicos del edificio (cuánta demanda, qué U máxima). RD 390/2021 regula la obligatoriedad de certificar, el procedimiento y el registro.' },
      { frente: '¿Cuánto tiempo es válido un certificado energético?', reverso: '10 años desde su emisión. Si hay reforma significativa hay que renovarlo antes.' }
    ],
    preguntas: [
      { pregunta: 'Según el RD 390/2021, ¿cuándo es obligatorio tener certificado energético?', opciones: ['Solo para viviendas nuevas', 'Para cualquier inmueble que se venda o alquile', 'Solo para edificios de más de 200 m²', 'Solo si el edificio tiene más de 20 años'], correcta: 1, explicacion: 'El RD 390/2021 obliga a tener certificado energético para cualquier inmueble que se venda o se alquile (más de 4 meses al año). También es obligatorio para edificios públicos mayores de 500 m².' },
      { pregunta: '¿Qué sección del CTE DB-HE limita la demanda energética de un edificio?', opciones: ['HE0', 'HE1', 'HE2', 'HE4'], correcta: 1, explicacion: 'HE1 limita la demanda energética según la zona climática. HE0 limita el consumo total. HE2 regula las instalaciones térmicas. HE4 la contribución solar de ACS.' },
      { pregunta: '¿Cuál es la sanción máxima por alquilar una vivienda sin certificado energético válido?', opciones: ['300 euros', '1.500 euros', '6.000 euros', '12.000 euros'], correcta: 2, explicacion: 'El RD 390/2021 fija sanciones de hasta 6.000 euros por alquilar o vender sin certificado. Además, el certificado erróneo o falso añade responsabilidad civil al técnico emisor.' }
    ]
  },

  'descarga-instalacion': {
    bloques: [
      { tipo: 'parrafo', texto: 'CE3X y HULC son gratuitos y se descargan solo desde las webs oficiales del IDAE o el Ministerio. Cualquier otra fuente es sospechosa: hay versiones con malware y el registro de la CCAA puede rechazar el XML generado.' },
      { tipo: 'titulo', texto: '💾 Dónde descargar' },
      { tipo: 'lista', items: [
        'CE3X: idae.es — sección Certificación Energética de Edificios Existentes. Versión actual CE3Xv2.3.',
        'HULC: idae.es o miteco.gob.es — sección Edificios Nuevos. Actualizar cada trimestre.',
        'Descarga también el Manual de Usuario y los Documentos Reconocidos (anexos técnicos).'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Obligatorio: versión actualizada', texto: 'Si certificas con una versión obsoleta, el registro de la CCAA puede rechazar el archivo XML. Verifica siempre que tienes la última versión antes de iniciar un proyecto.' },
      { tipo: 'titulo', texto: '⚙️ Instalación paso a paso' },
      { tipo: 'lista', items: [
        'Cerrar todas las aplicaciones antes de instalar.',
        'Ejecutar el instalador como administrador (clic derecho → Ejecutar como administrador).',
        'HULC requiere además Microsoft Visual C++ Redistributable 2019 y Java JRE 8.',
        'Instalar todos los componentes: en HULC incluye LIDER y CALENER VYP.',
        'Configurar datos del técnico (nombre, NIF, colegio, número de colegiado) una sola vez tras instalar.'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Configura los datos una sola vez', texto: 'En CE3X ve a Opciones → Configuración y rellena tus datos de técnico. En HULC ve a Configuración → Datos administrativos. Luego cada informe los lleva automáticamente. Ahorras 5 minutos por certificado.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Archivos que genera cada programa', texto: 'CE3X: .cex (proyecto), .xml (para subir al registro CCAA), .pdf (informe). HULC: .hcyp (proyecto), .xml (registro y complemento CE3X), PDFs de informes.' }
    ],
    flashcards: [
      { frente: '¿Qué extensión tiene el archivo de trabajo de CE3X y cuál se sube al registro?', reverso: '.cex es el archivo de trabajo. .xml es el que se sube al registro de la CCAA.' },
      { frente: '¿Qué componentes adicionales necesita HULC para funcionar?', reverso: 'Microsoft Visual C++ Redistributable 2019 y Java JRE 8. Sin ellos HULC no arranca tras instalar.' }
    ],
    preguntas: [
      { pregunta: '¿Desde dónde se deben descargar CE3X y HULC?', opciones: ['Cualquier página web que los ofrezca gratis', 'Solo desde idae.es o miteco.gob.es', 'Desde la web del colegio de Arquitectos Técnicos', 'Desde la tienda de aplicaciones de Windows'], correcta: 1, explicacion: 'Solo hay dos fuentes oficiales válidas: idae.es y miteco.gob.es. Versiones de otras fuentes pueden tener malware o no ser válidas para el registro de la CCAA.' },
      { pregunta: '¿Qué archivo de CE3X se sube al registro de la CCAA?', opciones: ['.cex', '.pdf', '.xml', '.hcyp'], correcta: 2, explicacion: 'El archivo .xml es el que se exporta desde CE3X o HULC y se sube al registro de la CCAA. El .cex es el archivo de trabajo interno de CE3X.' },
      { pregunta: 'El antivirus bloquea la instalación de HULC. ¿Cuál es la solución correcta?', opciones: ['Desinstalar el antivirus permanentemente', 'Desactivar el antivirus temporalmente, instalar y añadir una excepción', 'Descargar HULC de otra web alternativa', 'Instalar en modo de compatibilidad con Windows XP'], correcta: 1, explicacion: 'Algunos antivirus como Avast o Norton marcan HULC como sospechoso. La solución correcta es desactivarlos temporalmente durante la instalación y luego añadir una excepción para la carpeta de instalación.' }
    ]
  },

  'ce3x-paso-a-paso': {
    bloques: [
      { tipo: 'parrafo', texto: 'CE3X sigue siempre el mismo flujo para edificios existentes. La calidad del certificado depende de la calidad de los datos que introduces. Cuanto mejor mides in situ, mejor el resultado.' },
      { tipo: 'titulo', texto: '🪟 Flujo CE3X de inicio a fin' },
      { tipo: 'lista', items: [
        '1. Datos administrativos: técnico certificador más datos del edificio (tipo, ubicación, año construcción, superficie útil habitable).',
        '2. Datos geométricos: superficie útil (no construida), compacidad V/A, demanda ACS por número de personas.',
        '3. Cerramientos opacos: muros, cubiertas y suelos con su superficie, orientación y transmitancia U.',
        '4. Huecos: ventanas y puertas exteriores con U, factor solar g y permeabilidad al aire.',
        '5. Sombras: edificios cercanos, vegetación, aleros (solo los relevantes).',
        '6. Instalaciones: calefacción (caldera o bomba de calor), ACS, refrigeración y ventilación con sus rendimientos.',
        '7. Calcular: CE3X devuelve demanda, consumo, emisiones y letra A-G.',
        '8. Exportar: XML para el registro de la CCAA y PDF con el informe técnico.'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Superficie útil vs construida', texto: 'En CE3X introduces la superficie útil habitable (zonas calefactadas y refrigeradas), no la construida. En residencial, la útil suele ser el 80-90% de la construida. Confundirlas da calificaciones erróneas.' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Vivienda de los 70-80 sin reforma', texto: 'Para una vivienda antigua sin datos, usa los valores por defecto según el año de construcción. CE3X asigna U típicas (muro 1.5-2.0, ventanas 5.0). El resultado habitual es letra F o G, lo que abre la conversación sobre rehabilitación.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'COP estacional, no nominal', texto: 'Para aerotermia, introduce el COP estacional (SCOP), no el nominal de la placa del equipo. El SCOP real de una aerotermia bien instalada está entre 2.5 y 3.5.' }
    ],
    flashcards: [
      { frente: '¿Qué tres vías tiene CE3X para introducir la transmitancia U de un cerramiento?', reverso: '1. Valor conocido (calculado o del proyecto). 2. Por defecto según el año de construcción. 3. Por capas (introduces cada material con espesor y conductividad).' },
      { frente: '¿Cómo afecta el factor solar g al certificado?', reverso: 'El factor solar g indica cuánta radiación solar entra por el vidrio. Un g alto (vidrio simple, g=0.85) dispara la demanda de refrigeración en verano. Un g bajo (doble bajo emisivo, g=0.50) la reduce.' }
    ],
    preguntas: [
      { pregunta: '¿En qué orden se introducen los datos en CE3X?', opciones: ['Instalaciones, cerramientos, geometría, datos admin', 'Datos admin, geometría, cerramientos, huecos, instalaciones, calcular', 'Calcular primero y luego ajustar datos', 'El orden no importa, CE3X lo reorganiza'], correcta: 1, explicacion: 'CE3X sigue un flujo lógico de lo general a lo específico: datos administrativos del edificio y técnico, geometría, cerramientos opacos, huecos, sombras, instalaciones y finalmente cálculo.' },
      { pregunta: 'Una vivienda de 1980 sin reforma da calificación A en CE3X. ¿Qué está pasando?', opciones: ['Es normal para edificios bien orientados al sur', 'Probablemente hay un error en los datos introducidos', 'CE3X tiene un fallo conocido con ese año de construcción', 'Es correcto si tiene caldera de condensación'], correcta: 1, explicacion: 'Una vivienda de 1980 sin ninguna reforma energética debe dar letra E, F o G. Si da A, hay un error en los datos: probablemente U de cerramientos demasiado baja o instalaciones sobredimensionadas.' },
      { pregunta: '¿Qué archivo de CE3X se entrega al cliente y cuál se sube al registro de la CCAA?', opciones: ['.cex al cliente y .pdf al registro', '.xml al cliente y .pdf al registro', '.pdf al cliente y .xml al registro', '.cex al registro y .xml al cliente'], correcta: 2, explicacion: 'Al cliente se le entrega el informe en PDF (con la etiqueta energética y el detalle técnico). El archivo .xml es el que se sube al registro oficial de la CCAA para obtener el número de registro oficial.' }
    ]
  },

  'hulc-paso-a-paso': {
    bloques: [
      { tipo: 'parrafo', texto: 'HULC es el programa obligatorio para demostrar que un proyecto de obra nueva cumple el CTE DB-HE. Sin HULC (o equivalente), no hay licencia de obra nueva. Es más complejo que CE3X porque incluye modelado 3D y calcula toda la justificación normativa.' },
      { tipo: 'titulo', texto: '🏛️ Estructura de HULC' },
      { tipo: 'lista', items: [
        'LIDER: calcula la demanda energética y verifica HE0 y HE1.',
        'CALENER VYP: calcula el consumo de energía primaria y la calificación A-G.',
        'Integrador: une los dos subsistemas y exporta el XML oficial.'
      ]},
      { tipo: 'titulo', texto: '⚙️ Flujo HULC paso a paso' },
      { tipo: 'lista', items: [
        '1. Proyecto nuevo + datos administrativos (tipo, ubicación, zona climática automática por código postal).',
        '2. Geometría 3D: polígono de planta, alturas de niveles y cubierta. Se puede importar desde DXF o IFC desde Revit.',
        '3. Cerramientos: definir composición por capas con la base de materiales de HULC.',
        '4. Huecos: ventanas y puertas con vidrio, marco, permeabilidad y protecciones solares.',
        '5. Espacios: definir cada habitación como espacio (habitable, climatizado, ventilación).',
        '6. Instalaciones en CALENER VYP: tipo de equipo, potencia y rendimiento.',
        '7. Calcular: HULC corre LIDER más CALENER. Tarda de 30 segundos a 5 minutos.',
        '8. Verificar HE0, HE1 y HE4. Si no cumplen, mejorar cerramientos o instalaciones.',
        '9. Exportar XML y los informes de justificación CTE.'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Importa desde Revit vía IFC', texto: 'Si tienes el modelo BIM en Revit, exporta a IFC y luego importa en HULC. Revit ya reconoce muros, suelos, cubiertas y huecos. Ahorras 4 a 6 horas de modelado manual.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Los puentes térmicos son la trampa más común', texto: 'Los puentes térmicos (encuentros muro-forjado, jambas de ventana, cajón de persiana) son la causa principal de incumplimiento del HE1. HULC los modela. No los ignores.' },
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Sin HULC no hay licencia', texto: 'Si el proyecto no cumple HE0, HE1 o HE4, HULC lo indica con un NO en la verificación. Hay que mejorar la envolvente o las instalaciones hasta conseguir el cumplimiento.' }
    ],
    flashcards: [
      { frente: '¿Qué diferencia hay entre CE3X y HULC en cuanto a precisión y tiempo?', reverso: 'CE3X: modelado simplificado por superficies, 1-2 horas por vivienda, precisión media. HULC: modelado 3D detallado, 4-8 horas por vivienda, precisión alta y verifica el cumplimiento del CTE.' },
      { frente: '¿Qué tres secciones del CTE verifica HULC en un proyecto nuevo?', reverso: 'HE0 (consumo total), HE1 (demanda energética) y HE4 (contribución solar mínima para ACS).' }
    ],
    preguntas: [
      { pregunta: '¿Por qué es obligatorio usar HULC (o equivalente) en un proyecto de obra nueva?', opciones: ['Porque CE3X no funciona con edificios nuevos', 'Porque HULC demuestra el cumplimiento del CTE DB-HE, requisito para obtener la licencia', 'Porque HULC es más barato que CE3X', 'Porque lo exige el registro de la CCAA para edificios mayores de 500 m²'], correcta: 1, explicacion: 'HULC verifica que el proyecto cumple HE0, HE1 y HE4 del CTE DB-HE. Esta justificación de cumplimiento normativo es un documento obligatorio para tramitar la licencia de obra nueva.' },
      { pregunta: '¿Qué subsistema de HULC calcula la demanda energética?', opciones: ['CALENER VYP', 'LIDER', 'Integrador', 'CE3X complemento'], correcta: 1, explicacion: 'LIDER calcula la demanda energética y verifica HE0 y HE1. CALENER VYP calcula el consumo de energía primaria y la calificación A-G. El Integrador une los dos.' },
      { pregunta: '¿Cuál es la forma más rápida de introducir la geometría de un edificio en HULC si tienes el proyecto en Revit?', opciones: ['Modelar a mano en HULC todo desde cero', 'Importar DXF de AutoCAD', 'Importar IFC exportado desde Revit', 'Usar el complemento CE3X para edificios nuevos'], correcta: 2, explicacion: 'Importar IFC desde Revit es la opción más rápida y precisa. HULC reconoce automáticamente muros, suelos, cubiertas y huecos del modelo BIM, ahorrando 4-6 horas de modelado manual.' }
    ]
  },

  'medidas-mejora': {
    bloques: [
      { tipo: 'parrafo', texto: 'El valor del Arquitecto Técnico certificador no está en emitir el papel. Está en asesorar la inversión. Con las medidas de mejora adecuadas y las subvenciones disponibles, el ticket por cliente pasa de 120 euros a 500 o 1.500 euros.' },
      { tipo: 'titulo', texto: '🛠️ Las 5 medidas más rentables' },
      { tipo: 'lista', items: [
        'SATE (Sistema de Aislamiento Térmico Exterior): reduce la demanda de calefacción un 25-40% sola. Coste 70-100 euros por m². Sube 2-3 letras de calificación. Es la medida estrella.',
        'Aerotermia (sustituir caldera de gas): reduce el consumo de energía primaria un 40-60%. Coste 8.000-15.000 euros. Además aporta refrigeración.',
        'Fotovoltaica de autoconsumo (4-6 kWp): reduce el consumo eléctrico un 30-70%. Coste 4.000-8.000 euros.',
        'Cambio de ventanas a PVC bajo emisivo: reduce la demanda un 10-20%. Coste 400-700 euros por ventana.',
        'Aislamiento de cubierta plana invertida: reduce la demanda un 10-20%. Coste 30-50 euros por m².'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Orden óptimo de actuación', texto: 'Primero LED y sellado de infiltraciones (rápido y barato). Segundo, aislamiento de cubierta. Tercero, SATE. Cuarto, ventanas. Quinto, aerotermia. Sexto, fotovoltaica. Cada paso mejora el siguiente.' },
      { tipo: 'titulo', texto: '💶 Subvenciones disponibles (2026)' },
      { tipo: 'lista', items: [
        'RD 853/2021 Programa 3 y 4 (NextGen): del 40 al 80% del coste de rehabilitación.',
        'Plan Vive Madrid: hasta 12.000 euros por vivienda.',
        'Subvenciones aerotermia: hasta 6.000 euros por instalación.',
        'Deducción IRPF: hasta el 60% con límite de 5.000 euros anuales.'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'El argumento para el cliente', texto: 'Invertir 14.000 euros netos (tras subvención del 60%) en SATE más aerotermia puede subir el valor de venta de la vivienda en 40.000 euros y reducir la factura energética un 70%. La amortización es de 4 a 6 años.' }
    ],
    flashcards: [
      { frente: '¿Cuánto mejora la calificación energética el SATE en una vivienda típica?', reverso: 'El SATE puede subir 2 a 3 letras de calificación (por ejemplo de E a C, o de F a D). Reduce la demanda de calefacción entre un 25 y un 40%.' },
      { frente: '¿Qué subvención cubre hasta el 80% del coste de una rehabilitación energética?', reverso: 'El RD 853/2021 (fondos NextGenerationEU), Programas 3 y 4, cubre del 40 al 80% del coste de rehabilitación energética de viviendas.' }
    ],
    preguntas: [
      { pregunta: '¿Cuál es la medida de mejora que más letras sube en la calificación energética?', opciones: ['Cambio de ventanas a PVC', 'Fotovoltaica de autoconsumo', 'SATE en fachada', 'Aerotermia'], correcta: 2, explicacion: 'El SATE es la medida que más impacto tiene en la calificación: reduce la demanda de calefacción un 25-40% y puede subir 2-3 letras. La aerotermia mejora el consumo pero no la demanda.' },
      { pregunta: '¿Cuánto puede cubrir el RD 853/2021 (NextGen) del coste de una rehabilitación energética?', opciones: ['Hasta el 20%', 'Hasta el 40%', 'Del 40 al 80%', 'El 100% siempre'], correcta: 2, explicacion: 'Los Programas 3 y 4 del RD 853/2021 cubren entre el 40 y el 80% del coste según el nivel de mejora energética conseguida y los ingresos del solicitante.' },
      { pregunta: '¿En qué orden es más eficiente aplicar las medidas de mejora energética?', opciones: ['Aerotermia primero porque es la más cara', 'Fotovoltaica primero para reducir el gasto eléctrico', 'Primero LED y sellado, luego cubierta, luego SATE, ventanas, aerotermia y fotovoltaica', 'El orden no importa, cualquier medida tiene el mismo impacto'], correcta: 2, explicacion: 'El orden correcto maximiza el retorno: primero las medidas baratas y rápidas (LED, sellado), luego las que más reducen la demanda (cubierta, SATE, ventanas) y por último los cambios de instalaciones (aerotermia) y generación (fotovoltaica).' }
    ]
  },

  'registro-honorarios': {
    bloques: [
      { tipo: 'parrafo', texto: 'El certificado solo paga poco. El asesoramiento y la tramitación de subvenciones multiplican el ticket por 5 o 10. Un AT especializado puede facturar 6.000 a 12.000 euros al mes con 1 a 2 semanas de trabajo dedicado.' },
      { tipo: 'titulo', texto: '💶 Honorarios de mercado (2026)' },
      { tipo: 'lista', items: [
        'Certificado vivienda piso: 120-200 euros.',
        'Certificado unifamiliar: 180-300 euros.',
        'Certificado edificio terciario: 400-1.500 euros.',
        'Certificado edificio plurifamiliar completo: 800-3.000 euros.',
        'Certificado obra nueva con HULC y memoria CTE: 800-2.500 euros.',
        'Asesoramiento de mejora adicional: +150-300 euros.',
        'Tramitación de subvenciones: +300-600 euros o el 5-10% del importe.'
      ]},
      { tipo: 'titulo', texto: '📋 Proceso de registro en la CCAA (Madrid como ejemplo)' },
      { tipo: 'lista', items: [
        '1. Generar el XML desde CE3X o HULC.',
        '2. Acceder a gestiona.madrid.org y buscar Certificación Energética.',
        '3. Subir el XML y pagar la tasa (unos 15 euros en Madrid).',
        '4. Esperar la validación (de 1 a 7 días según CCAA).',
        '5. Descargar la etiqueta energética oficial en PDF.',
        '6. Entregar al cliente: etiqueta, informe PDF y número de registro.'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Seguro RC profesional obligatorio', texto: 'El seguro de responsabilidad civil profesional es obligatorio para emitir certificados en la mayoría de CCAA y colegios. Coste orientativo: 250-400 euros al año con cobertura de 600.000 euros.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Alianza con instaladores', texto: 'Colabora con 2 o 3 instaladores de aerotermia y fotovoltaica. Tú les pasas clientes que quieren reformar; ellos te recomiendan para certificar. Comisión cruzada habitual del 5 al 10%.' }
    ],
    flashcards: [
      { frente: '¿Cuál es el rango de honorarios para un paquete certificado más tramitación de subvenciones NextGen?', reverso: 'De 800 a 1.200 euros por cliente, frente a los 120-200 del certificado solo. El asesoramiento multiplica el ticket por 5 a 10.' },
      { frente: '¿Cuánto es la tasa de registro del certificado energético en Madrid?', reverso: 'Aproximadamente 15 euros. Oscila entre 10 y 30 euros según la CCAA. Es tasa administrativa, no del técnico.' }
    ],
    preguntas: [
      { pregunta: '¿Qué documento del registro de la CCAA se entrega al cliente para demostrar que el certificado es oficial?', opciones: ['El archivo .xml del registro', 'La etiqueta energética oficial en PDF con número de registro', 'El justificante de pago de la tasa', 'El informe interno de CE3X'], correcta: 1, explicacion: 'La etiqueta energética oficial en PDF incluye el número de registro de la CCAA. Es el documento que valida el certificado ante notario, arrendador o comprador. El XML es solo para el proceso de registro.' },
      { pregunta: '¿Cuánto puede facturar mensualmente un AT especializado en certificación más rehabilitación energética?', opciones: ['300-800 euros al mes', '800-2.000 euros al mes', '6.000-12.000 euros al mes con 1-2 semanas de trabajo', 'Solo si trabaja a tiempo completo, más de 30.000 euros al mes'], correcta: 2, explicacion: 'Un AT que combina certificación con asesoramiento de mejoras y tramitación de subvenciones puede facturar 6.000-12.000 euros al mes. El certificado solo da poco margen, pero el paquete integral multiplica por 5-10 el ticket.' },
      { pregunta: '¿El seguro de responsabilidad civil profesional es obligatorio para emitir certificados energéticos?', opciones: ['No, es opcional y solo recomendable', 'Sí, en la mayoría de CCAA y colegios profesionales', 'Solo si el edificio tiene más de 10 viviendas', 'Solo para obra nueva, no para existente'], correcta: 1, explicacion: 'El seguro de RC profesional es obligatorio en la mayoría de CCAA y colegios para emitir certificados oficiales. Sin él, si hay un error en el certificado que perjudica al cliente, el técnico responde con su patrimonio.' }
    ]
  },

  'caso-practico': {
    bloques: [
      { tipo: 'parrafo', texto: 'María llama para certificar una vivienda unifamiliar en Móstoles: 180 m² construidos, 160 m² útiles, 2 plantas más cubierta plana, construida en 1985 sin ninguna reforma energética. Caldera de gas del 2010. Sin refrigeración. Quiere alquilarla.' },
      { tipo: 'titulo', texto: '🏠 Fases del encargo real' },
      { tipo: 'lista', items: [
        'Fase 1: Presupuestar. Ofreces 3 opciones: solo certificado (150 euros), certificado más asesoramiento (350 euros), servicio premium con tramitación subvenciones (1.200 euros). María elige la opción 2.',
        'Fase 2: Visita (60 min). Metro láser, cámara, plantilla de toma de datos, identificación del colegio.',
        'Fase 3: Oficina (90 min). CE3X con los datos reales: muros U=1.69, cubierta U=1.5, ventanas aluminio simple U=5.0. Instalación caldera gas eta=0.85.',
        'Fase 4: Calcular. Resultado esperado: calificación E (demanda calefacción ~175 kWh/m² año).',
        'Fase 5: Medidas de mejora. CE3X propone paquetes. SATE más aerotermia sube la vivienda a clase B.',
        'Fase 6: Registro CCAA y entrega. XML a gestiona.madrid.org, tasa 15 euros, esperar 2-3 días.',
        'Fase 7: Factura. 350 euros más 21% de IVA = 423.50 euros.'
      ]},
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Resultado del certificado', texto: 'Demanda calefacción: ~175 kWh/m² año. Consumo primaria: ~195 kWh/m² año. Emisiones CO2: ~49 kg CO2/m² año. Calificación global: E. Típico para vivienda de 1985 sin reforma en zona D3.' },
      { tipo: 'caja', tipoCaja: 'ejemplo', titulo: 'Propuesta de mejora óptima', texto: 'Paquete SATE más aerotermia: coste bruto 27.000 euros. Subvención NextGen Programa 4 (60%): 16.200 euros. Plan Vive Madrid: 3.000 euros. Coste neto para María: 7.800 euros. Calificación final: B. Ahorro anual: ~1.800 euros. Amortización: 4.3 años.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Si María decide reformar', texto: 'Servicios adicionales: tramitación subvenciones (600 euros) más coordinación instaladores (800 euros) más recertificación (200 euros) = 1.600 euros extra. Ingreso total por este cliente: 1.950 euros frente a los 150 euros del certificado solo.' }
    ],
    flashcards: [
      { frente: '¿Qué calificación se espera para una vivienda de 1985 sin reforma en Madrid zona D3?', reverso: 'Letra E o F. Demanda de calefacción de 150 a 200 kWh/m² año, consumo primaria de 190 a 220 kWh/m² año.' },
      { frente: '¿Cuántos euros genera este cliente si decide reformar tras el certificado?', reverso: '350 euros de certificado más asesoramiento, más 1.600 euros de tramitación de subvenciones, coordinación y recertificación = 1.950 euros totales por cliente.' }
    ],
    preguntas: [
      { pregunta: 'En el caso de María (vivienda 1985 sin reforma), ¿qué calificación se espera antes de proponer mejoras?', opciones: ['Letra A o B', 'Letra C o D', 'Letra E o F', 'Letra G siempre'], correcta: 2, explicacion: 'Una vivienda de 1985 en zona D3 sin ninguna reforma energética típicamente da letra E o F. Los muros tienen U de 1.5-2.0, las ventanas 5.0 y la caldera de gas un rendimiento del 85%.' },
      { pregunta: 'Con el paquete SATE más aerotermia y la subvención NextGen, ¿cuánto paga realmente María de su bolsillo?', opciones: ['27.000 euros (el coste completo)', '14.000 euros (50% del coste)', '7.800 euros (coste neto tras subvención del 60% y Plan Vive Madrid)', '0 euros porque la subvención lo cubre todo'], correcta: 2, explicacion: 'El coste bruto del paquete es 27.000 euros. La subvención NextGen Programa 4 cubre el 60% (16.200 euros) y el Plan Vive Madrid aporta 3.000 euros más. El coste neto para María es de 7.800 euros.' },
      { pregunta: '¿Cuál es el ingreso total que puede generar este cliente si decide reformar tras recibir el certificado?', opciones: ['150 euros (solo certificado)', '350 euros (certificado más asesoramiento)', '1.950 euros (certificado más servicios de reforma)', '5.000 euros mínimo'], correcta: 2, explicacion: 'Si María decide reformar, se suman los 350 euros del primer encargo más tramitación de subvenciones (600), coordinación de instaladores (800) y recertificación (200). Total: 1.950 euros por este cliente.' }
    ]
  },

  'conclusiones': {
    bloques: [
      { tipo: 'parrafo', texto: 'La certificación energética combina conocimiento técnico, herramientas gratuitas del IDAE y un mercado con demanda obligatoria por ley. Para un Arquitecto Técnico con perfil FM/PM/CM es una línea de ingresos recurrente, compatible con la dirección de obra y con alto ROI de tiempo invertido.' },
      { tipo: 'titulo', texto: '🎓 Las 7 conclusiones del curso' },
      { tipo: 'lista', items: [
        'La cadena U-demanda-consumo-emisiones-letra A-G es el núcleo. Si la dominas, dominas la certificación.',
        'Demanda y consumo son distintos: la demanda depende del edificio y el clima; el consumo, de los equipos y su rendimiento.',
        'CE3X para existente y HULC para obra nueva. Ambos gratuitos del IDAE. Sin pagar software cubres cualquier encargo.',
        'El AT está habilitado sin formación específica obligatoria, pero certificar sin conocimiento expone a sanciones de hasta 6.000 euros y responsabilidad civil.',
        'El valor no está en emitir el papel, sino en asesorar la inversión. El ticket sube de 120 euros a 500-1.500 euros analizando medidas y subvenciones.',
        'El SATE es la medida estrella: reduce la demanda un 40% y sube 2-3 letras. Con subvención NextGen amortiza en 3-5 años.',
        'Los fondos NextGen y los planes CCAA financian el 40-80% de la rehabilitación. Tramitarlos multiplica el valor del servicio.'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Para tu perfil AT más ADE', texto: 'Este curso te da una competencia que factura desde el primer cliente y se apoya en herramientas gratuitas. FM: diagnóstico energético de carteras de edificios. PM/CM: cumplimiento CTE en proyectos nuevos. La presión normativa y los fondos europeos garantizan demanda durante años.' },
      { tipo: 'titulo', texto: '📈 Valoración final del curso' },
      { tipo: 'lista', items: [
        'Dificultad: media (conceptos físicos más dos programas).',
        'Utilidad para FM/PM/CM: alta.',
        'ROI de tiempo invertido: muy alto (software gratis, mercado obligatorio).',
        'Demanda en ofertas 2026: muy alta (rehabilitación más NextGen en pleno auge).'
      ]},
      { tipo: 'caja', tipoCaja: 'info', titulo: 'Próximos pasos recomendados', texto: 'Primer cliente real (familiar o amigo). Inscripción en directorios de certificadores. Alianza con 2 o 3 instaladores de aerotermia y fotovoltaica. Web simple con calculadora de ahorro. Si quieres especializarte: CYPETHERM HE Plus, Passivhaus/nZEB, o auditoría energética avanzada (UNE-EN 16247) para edificios terciarios.' }
    ],
    flashcards: [
      { frente: '¿Por qué se dice que el SATE es la medida estrella de la rehabilitación energética?', reverso: 'Porque reduce la demanda de calefacción un 40% sola, sube 2-3 letras de calificación, tiene una vida útil de 30 años y con la subvención NextGen amortiza en 3-5 años.' },
      { frente: '¿Cuál es el ROI del tiempo invertido en aprender certificación energética?', reverso: 'Muy alto: software gratis (CE3X y HULC del IDAE), mercado de demanda obligatoria por ley (RD 390/2021) y tickets de 120 a 1.950 euros por cliente según los servicios añadidos.' },
      { frente: '¿Cómo conecta la certificación energética con el rol de Facility Manager?', reverso: 'El FM gestiona carteras de edificios y necesita diagnóstico energético para planificar mantenimiento y reducir costes operativos. CE3X y HULC son herramientas directas para esa función.' }
    ],
    preguntas: [
      { pregunta: '¿Cuál de estas afirmaciones resume mejor el valor del AT certificador?', opciones: ['El valor está en rellenar CE3X lo más rápido posible para bajar el precio', 'El valor está en asesorar la inversión energética del cliente, no solo en emitir el papel', 'El valor está en tener HULC porque pocos AT lo saben usar', 'El valor está en cobrar lo menos posible para ganar volumen'], correcta: 1, explicacion: 'La conclusión central del curso es que el valor diferencial no es el certificado (que es un commodity a 120-200 euros), sino el asesoramiento integral: análisis de medidas, subvenciones, ROI y coordinación. Eso multiplica el ticket por 5 a 10.' },
      { pregunta: '¿Para qué perfil profesional es más útil la certificación energética según el curso?', opciones: ['Solo para AT que quieran dedicarse exclusivamente a ello', 'Para FM (diagnóstico de cartera), PM/CM (cumplimiento CTE) y AT en general como ingreso adicional', 'Solo para proyectos de obra nueva con HULC', 'Solo si se tiene el máster en eficiencia energética'], correcta: 1, explicacion: 'El curso concluye que la certificación encaja en múltiples perfiles: FM para diagnóstico energético de carteras, PM/CM para justificar cumplimiento CTE en proyectos, y cualquier AT como ingreso complementario recurrente.' },
      { pregunta: '¿Cuál es la causa más común de incumplimiento del HE1 en un proyecto nuevo certificado con HULC?', opciones: ['Superficie útil mal calculada', 'Año de construcción incorrecto', 'Puentes térmicos no modelados', 'Factor solar g mal introducido'], correcta: 2, explicacion: 'Los puentes térmicos (encuentros muro-forjado, jambas, cajones de persiana) son la causa número uno de incumplimiento del HE1 en HULC. A pesar de tener U buenos en los cerramientos, los puentes térmicos elevan la demanda real del edificio.' }
    ]
  }
};
