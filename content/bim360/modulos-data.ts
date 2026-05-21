import type { ModuloData } from '@/content/revit/modulos-data';

export const BIM360_DATA: Record<string, ModuloData> = {
  'que-es-acc-bim360': {
    bloques: [
      { tipo: 'parrafo', texto: 'BIM 360 era el nombre antiguo. Desde 2022 la plataforma se llama oficialmente Autodesk Construction Cloud (ACC). Se sigue diciendo "BIM 360" en obra por costumbre, pero ya es ACC. Misma idea, más potente.' },
      { tipo: 'titulo', texto: '🧱 4 módulos principales' },
      { tipo: 'lista', items: [
        '📁 Docs: planos, modelos y documentos centralizados (sustituye Dropbox del jefe)',
        '🏗️ Build: gestión de obra (issues, RFIs, formularios, daily logs, fotos)',
        '🔄 Coordinate: clash detection entre Revit + Estructura + MEP antes de pisar obra',
        '💰 Cost: presupuesto, contratos, pedidos, certificaciones'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Por qué cambia la obra de verdad', texto: 'Antes: planos en papel, hojas de incidencias en Excel, fotos en WhatsApp, certificaciones a final de mes a ojo. Después: TODO conectado. La incidencia que abres en tablet a las 10:00 ya está en el presupuesto y la subcontrata recibe el aviso en 30 min.' },
      { tipo: 'titulo', texto: '🎯 Para Arquitecto Técnico, qué resuelve' },
      { tipo: 'lista', items: [
        'Trazabilidad: cada incidencia tiene autor, foto, plano, fecha, responsable, estado',
        'Volumen: gestionar 150+ repasos por vivienda sin colapsar',
        'Comunicación: cero llamadas "¿pero arreglaste lo del baño?"',
        'Económico: si la incidencia está abierta, la subcontrata no proforma'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Cómo lo vendes en una entrevista', texto: '"He gestionado obra con ACC: control de incidencias por planta, integración con presupuesto y workflow de no-proforma si las incidencias no se cierran. Reduce errores y desbloquea tesorería sólo cuando todo está en orden."' }
    ],
    flashcards: [
      { frente: '¿BIM 360 sigue existiendo?', reverso: 'El nombre cambió a ACC (Autodesk Construction Cloud). Misma plataforma, ampliada. Mucha gente sigue diciendo BIM 360 por costumbre.' },
      { frente: '¿Cuántos módulos tiene ACC?', reverso: '4 principales: Docs, Build, Coordinate, Cost. Más Insights y Takeoff (mediciones).' }
    ],
    preguntas: [
      { pregunta: '¿Qué módulo de ACC gestiona issues y RFIs en obra?', opciones: ['Docs', 'Build', 'Coordinate', 'Cost'], correcta: 1, explicacion: 'Build es el módulo de gestión de obra: issues, RFIs, formularios, daily logs, fotos.' },
      { pregunta: 'BIM 360 ya no existe oficialmente desde…', opciones: ['2018', '2020', '2022', '2024'], correcta: 2, explicacion: 'En 2022 Autodesk unificó todo bajo Autodesk Construction Cloud (ACC).' },
      { pregunta: '¿Cuál NO es un módulo de ACC?', opciones: ['Build', 'Docs', 'Coordinate', 'Adobe'], correcta: 3, explicacion: 'Adobe no tiene nada que ver. ACC tiene Docs, Build, Coordinate, Cost, Insights, Takeoff.' }
    ]
  },
  'docs-planos-tablet': {
    bloques: [
      { tipo: 'parrafo', texto: 'El módulo Docs centraliza TODA la documentación del proyecto: planos PDF, modelos Revit, contratos, fotos, especificaciones. Cada archivo tiene control de versiones automático.' },
      { tipo: 'titulo', texto: '📤 Cómo se sube un plano' },
      { tipo: 'lista', items: [
        '1. Entras en Docs → carpeta Planos',
        '2. Drag & drop del PDF o vinculas el .rvt para que Revit publique',
        '3. ACC detecta la versión automática (V1, V2, V3…)',
        '4. Los usuarios siempre ven la última versión sin pelearse con WhatsApps'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Hyperlinks entre planos', texto: 'En el plano puedes pinchar un detalle y te lleva directamente al detalle ampliado. Adiós a buscar el plano de detalle en otra hoja. Configurar Hyperlinks: Docs → Plano → Tools → Hyperlinks.' },
      { tipo: 'titulo', texto: '📲 Visor en tablet · obra real' },
      { tipo: 'parrafo', texto: 'Descargas el plano para offline. Estás en la planta 4, sin cobertura, puedes seguir trabajando. Cuando recuperas red, sincroniza solo.' },
      { tipo: 'lista', items: [
        'Apple iPad / iPad Pro: óptimo, app nativa ACC',
        'Android tablet: app oficial Autodesk Build',
        'Móvil: funciona pero pantalla pequeña para planos',
        'Lápiz óptico (Apple Pencil, S-Pen): marca como en papel'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Versiones obsoletas', texto: 'Cuando subes V3 del plano, las V1 y V2 quedan archivadas pero NO desaparecen. Útil para revisar el histórico. Pero en obra el operario debe ver SIEMPRE la última. Configura un permiso "Última versión visible" en el rol del operario.' }
    ],
    preguntas: [
      { pregunta: '¿Puedo trabajar en obra sin cobertura?', opciones: ['No', 'Sí, descargando offline', 'Solo en iPad', 'Solo si hay WiFi del cliente'], correcta: 1, explicacion: 'Descargas planos para offline. Trabajas sin red. Sincroniza al recuperar conexión.' },
      { pregunta: '¿Qué pasa con la V1 cuando subo V2?', opciones: ['Se borra', 'Se archiva pero queda accesible', 'Se renombra automáticamente', 'Pide confirmación'], correcta: 1, explicacion: 'Las versiones antiguas quedan archivadas. El histórico es trazabilidad.' }
    ]
  },
  'issues-incidencias': {
    bloques: [
      { tipo: 'parrafo', texto: 'AQUÍ está la salsa de ACC para un AT. Las Issues (incidencias) son el corazón del control de obra. Cada una vive ANCLADA al plano, con foto, descripción y responsable.' },
      { tipo: 'titulo', texto: '🚨 Crear una incidencia en 30 segundos' },
      { tipo: 'lista', items: [
        '1. Abres el plano en la tablet',
        '2. Pinchas el punto exacto del problema (un pin azul aparece)',
        '3. Haces foto del enchufe roto / pintura mal / suelo desnivelado',
        '4. Tipo: REPASO · Categoría: ELECTRICIDAD · Asignar: Empresa X',
        '5. Comentario corto: "Falta enchufe junto al rodapié, cota 0+15 cm"',
        '6. Fecha límite: 3 días',
        '7. Guardar. La empresa X recibe email + notificación push'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Plantillas de incidencia', texto: 'Crea plantillas reutilizables: REPASO PINTURA, REPASO FONTANERÍA, REVISIÓN CALIDAD. Así no escribes lo mismo 200 veces. Configurar en: Build → Issues → Settings → Templates.' },
      { tipo: 'titulo', texto: '🎯 Estados típicos de una Issue' },
      { tipo: 'lista', items: [
        '🔴 OPEN: recién creada, esperando ejecución',
        '🟡 IN PROGRESS: la subcontrata ha empezado',
        '🟢 READY FOR REVIEW: la subcontrata dice que está hecho',
        '🟦 CLOSED: AT verifica y cierra (foto del antes/después)',
        '⚫ REJECTED: AT no acepta, vuelve a IN PROGRESS'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Solo AT puede cerrar', texto: 'Configura los permisos: la subcontrata marca "Ready for Review" pero NO puede cerrar. El AT verifica en obra (con la tablet, comparando antes/después) y SOLO ÉL pulsa "Closed". Esto evita el "ya está hecho, te lo juro" del subcontratista.' }
    ],
    preguntas: [
      { pregunta: 'En qué estado está una incidencia cuando la subcontrata dice que terminó?', opciones: ['Closed', 'Ready for Review', 'In Progress', 'Open'], correcta: 1, explicacion: 'La subcontrata mueve a "Ready for Review". Solo el AT puede pasar a "Closed" tras verificar.' },
      { pregunta: '¿Quién cierra una incidencia?', opciones: ['La subcontrata', 'El Arquitecto Técnico', 'El cliente', 'Cualquier usuario'], correcta: 1, explicacion: 'Configura permisos para que solo el AT pueda cerrar. Evita autocomplacencia de subcontratas.' }
    ]
  },
  'asociar-partidas-presupuesto': {
    bloques: [
      { tipo: 'parrafo', texto: 'Aquí está el bombazo: cada incidencia puede asociarse a una PARTIDA del presupuesto (capítulo, partida, código BC3). Esto conecta el problema físico con el dinero.' },
      { tipo: 'titulo', texto: '💰 Por qué asociar a partida' },
      { tipo: 'lista', items: [
        'Si la incidencia es "enchufe roto" → partida "08.03 Mecanismos eléctricos"',
        'Esa partida está en la certificación de septiembre',
        'Hasta que NO se cierra la incidencia, esa partida NO certifica',
        'La empresa eléctrica NO cobra ese capítulo entero hasta cerrar TODAS las incidencias asociadas'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'El cambio de juego', texto: 'Sin esta vinculación: el subcontrata cobra cada mes su 100% y luego te pelea por arreglar los repasos. Con esta vinculación: el subcontrata SABE que su dinero está atascado hasta que arregle. Súbitamente, los repasos se resuelven solos.' },
      { tipo: 'titulo', texto: '🔗 Cómo se hace la asociación' },
      { tipo: 'lista', items: [
        '1. Importas el presupuesto BC3 desde Presto a ACC Cost',
        '2. En cada Issue añades el campo personalizado "Partida"',
        '3. Eliges del desplegable la partida correcta',
        '4. Guardar. ACC ya sabe que esta incidencia bloquea esa partida'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'LOE y libro de obra', texto: 'La LOE exige libro de obra con incidencias. ACC sirve como libro digital con sello de fecha, autor y geolocalización. Acepable para visado y juicio.' }
    ],
    preguntas: [
      { pregunta: '¿Por qué se asocia una incidencia a una partida?', opciones: ['Para hacer estadísticas', 'Para bloquear la certificación de esa partida hasta resolverla', 'Para imprimir el plano', 'Por requisito de Hacienda'], correcta: 1, explicacion: 'La asociación bloquea la certificación. Es el mecanismo de presión sobre la subcontrata.' }
    ]
  },
  'asignar-empresas': {
    bloques: [
      { tipo: 'parrafo', texto: 'Cada empresa que entra en obra tiene su rol en ACC. Subcontrata eléctrica, fontanería, pintura, carpintería… Cada una con sus permisos.' },
      { tipo: 'titulo', texto: '👥 Roles típicos' },
      { tipo: 'lista', items: [
        '🛠️ Project Admin: Tú (AT). Ve todo, configura todo, cierra issues',
        '🏗️ Project Manager: Jefe de obra de la constructora. Ve casi todo',
        '🔧 Subcontract (eléctrica, fontanería…): Solo ve sus issues, no ve presupuesto general',
        '📐 BIM Manager: Modelos y coordinación. Sin presupuesto',
        '👤 Cliente: Solo lectura de planos y entregables finales'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Permisos críticos', texto: 'La subcontrata NUNCA debe ver el presupuesto general (sabría tu margen). Crea un rol "Subcontrata" que solo ve sus propias issues y los planos donde trabaja.' },
      { tipo: 'titulo', texto: '📨 Invitar empresa' },
      { tipo: 'lista', items: [
        '1. Build → Members → Add Member',
        '2. Email del responsable de la subcontrata',
        '3. Rol: Subcontract',
        '4. Permisos: solo sus issues + planos asignados',
        '5. La subcontrata recibe email para crearse cuenta gratis'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Subcontrata sin licencia', texto: 'La subcontrata NO paga ACC. Las licencias las paga la constructora/dirección facultativa. La subcontrata se crea cuenta gratis y solo accede a su parte. Perfecto para que NO pongan excusas.' }
    ],
    preguntas: [
      { pregunta: '¿Qué rol da acceso al presupuesto general?', opciones: ['Subcontract', 'Project Admin', 'Cliente', 'BIM Manager'], correcta: 1, explicacion: 'Project Admin (tu rol como AT). Las subcontratas nunca deben ver el global.' },
      { pregunta: '¿La subcontrata paga licencia ACC?', opciones: ['Sí, mensual', 'Sí, anual', 'No, es gratis con invitación', 'Solo si entra a Cost'], correcta: 2, explicacion: 'Se crea cuenta gratis con invitación. La licencia la paga quien gestiona el proyecto.' }
    ]
  },
  'informes-automaticos': {
    bloques: [
      { tipo: 'parrafo', texto: 'ACC envía emails automáticos con resumen de obra a la hora y frecuencia que configures. Sin abrir la app, cada parte interesada recibe su informe.' },
      { tipo: 'titulo', texto: '📊 Informes típicos' },
      { tipo: 'lista', items: [
        'Diario 09:00: incidencias abiertas por subcontrata → email a cada subcontrata con SUS issues pendientes',
        'Diario 18:00: resumen de cierres del día al jefe de obra',
        'Semanal lunes 08:00: dashboard ejecutivo al cliente (KPIs)',
        'Mensual día 1: certificación con issues bloqueantes pendientes a administración'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'La hora mágica: 09:00', texto: 'Programa los emails a las 09:00. Los responsables empiezan la jornada sabiendo exactamente qué hacer. Cero "voy a llamar para enterarme". Multiplica productividad x3.' },
      { tipo: 'titulo', texto: '🔧 Cómo se configura' },
      { tipo: 'lista', items: [
        '1. Build → Insights → Reports',
        '2. Create new report',
        '3. Tipo: Issues by Assignee',
        '4. Filtros: solo "Open" o "In Progress"',
        '5. Schedule: Daily 09:00',
        '6. Recipients: lista de subcontratas',
        '7. Save'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Lo que mostrás al cliente', texto: '"Cliente, todos los lunes a las 8 recibirás un PDF con: avance semanal, incidencias resueltas, pendientes, fotos antes/después. Sin reunión, sin llamada. Si quieres detalle, abres ACC y filtras."' }
    ],
    preguntas: [
      { pregunta: '¿A qué hora suele programarse el informe diario?', opciones: ['00:00 de madrugada', '09:00 al empezar jornada', '14:00 hora de comer', '23:59'], correcta: 1, explicacion: 'A las 09:00 los responsables empiezan el día sabiendo qué hacer.' }
    ]
  },
  'no-proforma-workflow': {
    bloques: [
      { tipo: 'parrafo', texto: 'Este es EL workflow estrella. El que cambia el juego: si la subcontrata no resuelve sus incidencias, no emite la proforma → no cobra. Y como pagan a 60-90 días, esto duele.' },
      { tipo: 'titulo', texto: '🔄 El bucle completo' },
      { tipo: 'lista', items: [
        '1. AT abre incidencia en plano · ASIGNA a subcontrata X',
        '2. Incidencia se vincula a PARTIDA presupuestaria',
        '3. Llega fin de mes. Subcontrata X intenta proformar',
        '4. ACC detecta: hay 12 incidencias OPEN de X en partidas de esta certificación',
        '5. ACC bloquea la proforma. Notifica al jefe de obra y al admin',
        '6. Subcontrata recibe email: "Para certificar, cierra estas 12 incidencias"',
        '7. Subcontrata resuelve. AT cierra. ACC libera la certificación.',
        '8. Subcontrata proforma. AT firma. Cliente paga.'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'El antes vs después', texto: 'ANTES: la subcontrata facturaba el 95%, prometía arreglar los repasos "el próximo mes". El próximo mes ya estaba en otra obra. Tú quedabas con repasos abiertos meses. DESPUÉS: la subcontrata no proforma hasta cerrar. No le interesa retrasar.' },
      { tipo: 'titulo', texto: '⚙️ Configurar el bloqueo' },
      { tipo: 'lista', items: [
        '1. Cost → Settings → Approval Workflow',
        '2. Step: "Block proforma if open issues > 0 in linked items"',
        '3. Notification: copy al admin financiero',
        '4. Override: solo Project Admin puede saltarse (con motivo)'
      ]},
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Cuidado con el contrato', texto: 'Esto debe estar en el contrato de subcontrata firmado al principio. "El pago queda sujeto al cierre de incidencias en ACC". Sin clausula, la subcontrata puede legalmente reclamar.' }
    ],
    flashcards: [
      { frente: '¿Qué bloquea ACC en el workflow no-proforma?', reverso: 'La emisión de proforma de la subcontrata, hasta que cierren TODAS las issues asociadas a las partidas de esa certificación.' }
    ],
    preguntas: [
      { pregunta: 'Para que el workflow no-proforma sea legalmente vinculante hay que…', opciones: ['Avisar por email', 'Incluir cláusula en el contrato de subcontrata', 'Pedir permiso al ayuntamiento', 'Subir el plano a Drive'], correcta: 1, explicacion: 'Sin cláusula contractual, la subcontrata puede impugnar el bloqueo. SIEMPRE va en contrato firmado al inicio.' }
    ]
  },
  'repasos-masivos-vivienda': {
    bloques: [
      { tipo: 'parrafo', texto: 'En una promoción de vivienda nueva, cada vivienda tiene entre 100 y 200 repasos al entregar. Multiplica por 50 viviendas: 7.500 incidencias. Sin ACC es ingestionable. Con ACC se hace.' },
      { tipo: 'titulo', texto: '🏘️ Estrategia maestra' },
      { tipo: 'lista', items: [
        '📋 Crear plantilla "Checklist entrega vivienda" con 30 puntos clave',
        '🏢 Aplicar la plantilla a CADA vivienda (genera 30 issues × N viviendas)',
        '📲 El AT visita vivienda × vivienda con tablet, marcando cada punto',
        '✅ Lo que está OK se cierra automáticamente al marcar',
        '❌ Lo que falla se queda como incidencia abierta, asignada a la subcontrata correspondiente'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Plantillas en serie', texto: 'Las plantillas de issues se replican con un click. Aplicas la plantilla "Repaso fontanería entrega" a las 50 viviendas en 2 minutos. Cada vivienda hereda las mismas 12 checks.' },
      { tipo: 'titulo', texto: '📊 Dashboard de control' },
      { tipo: 'lista', items: [
        'Vista por vivienda: cuántos repasos abiertos en V101, V102, V103…',
        'Vista por subcontrata: cuántos repasos pendientes tiene Fontanería S.L.',
        'Vista por estado: % de issues OPEN vs CLOSED',
        'Vista temporal: ¿Cuántas se cierran por día? ¿Se acelera o se ralentiza?'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Comunicación al promotor', texto: '"Promotor, hoy 18 de mayo: 234 incidencias abiertas, 1.812 cerradas en últimos 7 días. Si ritmo se mantiene, entrega completa el 27 de mayo. Te lo mando cada semana en automático."' }
    ],
    preguntas: [
      { pregunta: '¿Cómo aplicas 30 repasos × 50 viviendas?', opciones: ['Uno a uno manualmente', 'Con plantilla replicable', 'Con macro en Excel', 'No se puede'], correcta: 1, explicacion: 'Plantillas de issues × replicación. Se aplica con un click a todas las viviendas.' }
    ]
  },
  'coordinate-modelos-federados': {
    bloques: [
      { tipo: 'parrafo', texto: 'Coordinate es el módulo de coordinación BIM. Federar modelos (juntar Arquitectura + Estructura + MEP en uno solo) y detectar choques antes de pisar la obra.' },
      { tipo: 'titulo', texto: '🔗 Modelo federado' },
      { tipo: 'parrafo', texto: 'Cada disciplina sube su .rvt a Docs. Coordinate detecta automáticamente y los junta en una vista 3D unificada. Puedes mover, ocultar y filtrar por disciplina.' },
      { tipo: 'titulo', texto: '💥 Clash detection' },
      { tipo: 'lista', items: [
        'ACC pasa el modelo federado por un motor de detección de colisiones',
        'Te lista TODAS las interferencias: tubería que cruza viga, conducto encima de luminaria…',
        'Cada clash es revisable: pinchas, ves los 2 elementos en 3D, decides',
        'Asignas el clash al BIM Manager de la disciplina responsable',
        'Se convierte en una Issue normal, con responsable y fecha'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Coste de no detectar', texto: 'Un clash no detectado en proyecto = chapuza en obra. Romper falso techo, recolocar tubería, retrasar entrega de planta. Una sola interferencia importante puede costar 5.000-50.000 €. Detectarla con Coordinate: 2 minutos.' },
      { tipo: 'titulo', texto: '🔁 Workflow RFI digital' },
      { tipo: 'lista', items: [
        '1. AT detecta duda en obra: "Esta viga aparece pero no aparece en estructura"',
        '2. Abre RFI desde el modelo, pincha la viga',
        '3. Asigna a Ingeniero estructural',
        '4. Ingeniero responde con cálculo o aclaración',
        '5. Conversación queda grabada en el modelo + audit trail completo',
        '6. Cuando se resuelve, se cierra como cualquier issue'
      ]}
    ],
    preguntas: [
      { pregunta: '¿Qué hace Coordinate?', opciones: ['Imprime planos', 'Federación modelos + clash detection', 'Gestiona presupuesto', 'Envía emails'], correcta: 1, explicacion: 'Coordinate junta modelos de varias disciplinas y detecta choques entre ellos.' }
    ]
  },
  'cost-control-economico': {
    bloques: [
      { tipo: 'parrafo', texto: 'Cost es el módulo financiero. Importas el presupuesto desde Presto, gestionas pedidos, contratos, certificaciones y ves el real vs planificado en tiempo real.' },
      { tipo: 'titulo', texto: '💵 Lo que puedes hacer' },
      { tipo: 'lista', items: [
        '📥 Importar presupuesto BC3 desde Presto/Arquímedes',
        '📜 Crear contratos por subcontrata con sus partidas asignadas',
        '🛒 Pedidos de compra a proveedores',
        '📊 Certificaciones mensuales con cálculo automático',
        '🔄 Comparativa Real vs Planificado al céntimo'
      ]},
      { tipo: 'titulo', texto: '🔗 Integración Presto · Cost' },
      { tipo: 'lista', items: [
        'Cost-It (plugin de Soft) exporta de Presto a ACC',
        'Sincronización bidireccional: cambias presupuesto en Presto, se actualiza en ACC',
        'Mediciones de Revit (tablas de planificación) entran como capítulos',
        'Certificaciones en ACC vuelven a Presto para facturación'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'KPIs clave para AT', texto: '% ejecución vs % facturación · CPI (Cost Performance Index) · Coste real / Coste planificado · Top 5 partidas con desviación · Cash flow proyectado.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Dashboard al promotor', texto: 'Crea un dashboard de Cost compartido con el promotor: ve presupuesto inicial, ejecutado, certificado, desviaciones. Sin reunión. Si pregunta algo, abre el detalle.' }
    ],
    preguntas: [
      { pregunta: '¿Qué módulo gestiona presupuestos y certificaciones?', opciones: ['Docs', 'Build', 'Coordinate', 'Cost'], correcta: 3, explicacion: 'Cost es el módulo financiero.' },
      { pregunta: '¿Cómo se conecta Presto con ACC Cost?', opciones: ['No se puede', 'Con plugin Cost-It', 'Manualmente con Excel', 'Solo lectura'], correcta: 1, explicacion: 'Plugin Cost-It de Soft Construcción permite sincronización bidireccional.' }
    ]
  }
};
