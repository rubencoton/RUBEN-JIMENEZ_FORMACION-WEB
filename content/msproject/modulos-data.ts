import type { ModuloData } from '@/content/revit/modulos-data';

export const MSPROJECT_DATA: Record<string, ModuloData> = {
  'introduccion-y-configuracion': {
    bloques: [
      { tipo: 'parrafo', texto: 'MS Project planifica, programa, controla y reporta proyectos. No es un ERP: convive con Presto para presupuestos, Revit para 3D y Navisworks para 4D.' },
      { tipo: 'titulo', texto: '🎯 Lo que hace bien y lo que no hace' },
      { tipo: 'lista', items: [
        'Gantt automático con camino crítico (CPM)',
        'Asignación de recursos y detección de conflictos',
        'Línea base + seguimiento real vs planificado',
        'Earned Value (avance, coste, plazo)',
        'NO hace mediciones: eso es Presto o Arquímedes',
        'NO gestiona documentos de obra: eso es ProCore o Dalux',
        'NO vale para mantenimiento en uso: eso es un CMMS (Planon, Maximo)'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Convenio Construcción España 2026', texto: '1.736 horas anuales efectivas. 8 h/día estándar. 22 días laborables de vacaciones. 12 festivos nacionales más autonómicos y 2 locales.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Plantilla .mpt de calendario', texto: 'Configura el calendario CONSTRUCCION_2026 una sola vez con festivos de tu provincia y guárdalo como .mpt. Te ahorras 25 minutos en cada obra nueva.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Calendarios por provincia', texto: 'El calendario laboral es el de la provincia de la obra, no el de la oficina. Si trabajas en Madrid pero la obra es en Sevilla, carga los festivos de Sevilla.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Con el cliente', texto: 'Nunca prometas gestionar todo desde MS Project. En mes 3 el cliente pedirá trazabilidad de albaranes y Project no la tiene.' }
    ],
    flashcards: [
      { frente: '¿Qué formato de archivo genera MS Project?', reverso: '.mpp para proyectos y .mpt para plantillas reutilizables.' },
      { frente: '¿Por qué se configura primero el calendario antes de crear tareas?', reverso: 'Sin calendario correcto todas las fechas del proyecto están mal desde el principio.' }
    ],
    preguntas: [
      { pregunta: 'Para gestionar mediciones y presupuestos detallados en obra, la herramienta correcta es:', opciones: ['MS Project', 'Navisworks', 'Presto o Arquímedes', 'Power BI'], correcta: 2, explicacion: 'MS Project es un planificador. Las mediciones y presupuestos son competencia de Presto, Arquímedes o CYPE.' },
      { pregunta: 'En España, el calendario laboral de una obra lo define:', opciones: ['La oficina central de la empresa', 'El convenio de la provincia donde está la obra', 'El jefe de obra libremente', 'El cliente en el contrato'], correcta: 1, explicacion: 'Según el Convenio General de Construcción, el calendario aplicable es el de la provincia donde se ejecuta la obra.' },
      { pregunta: '¿Qué es la planificación inversa en MS Project?', opciones: ['Planificar de noche', 'Calcular hacia atrás desde una fecha de fin impuesta', 'Borrar la línea base y empezar de nuevo', 'Copiar el cronograma al revés'], correcta: 1, explicacion: 'La planificación inversa parte de la fecha de entrega impuesta y calcula hacia atrás para fijar fechas de inicio de cada fase.' }
    ]
  },

  'interfaz-y-vistas': {
    bloques: [
      { tipo: 'parrafo', texto: 'La pantalla tiene cuatro zonas: cinta de opciones, tabla de datos, área gráfica (Gantt) y barra de estado. La línea divisoria central se arrastra para ampliar tabla o gráfico.' },
      { tipo: 'titulo', texto: '🖥️ Las 6 vistas que usas el 95% del tiempo' },
      { tipo: 'lista', items: [
        'Diagrama de Gantt: la vista por defecto para el cronograma',
        'Gantt de seguimiento: plan vs real con barras dobles',
        'Uso de recursos: detectar sobreasignaciones por semana',
        'Uso de tareas: carga semanal por tarea',
        'Diagrama de red: ver dependencias como diagrama lógico',
        'Calendario: compartir con cliente o con la Dirección Facultativa'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Reunión semanal', texto: 'Para la reunión con la Dirección Facultativa imprime el Gantt de seguimiento filtrado por tareas en curso o atrasadas. Es la foto que más vale en ese momento.' },
      { tipo: 'caja', tipoCaja: 'atajo', titulo: 'Atajos top 5', texto: 'Alt+F1 vuelve al Gantt. Ctrl+F2 vincula tareas. Alt+Mayús+flecha derecha aumenta sangría (WBS). F5 va a una tarea. F9 recalcula en modo manual.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Modo de cálculo manual', texto: 'Si cambias a modo manual y olvidas pulsar F9, el camino crítico y las fechas que ves están desactualizadas. Puedes entregar un cronograma erróneo sin darte cuenta.' }
    ],
    flashcards: [
      { frente: '¿Para qué sirve el Diagrama de red?', reverso: 'Para revisar la lógica de dependencias entre tareas. Muestra la cadena de predecesoras y sucesoras visualmente.' },
      { frente: '¿Qué hace el atajo Alt+F1?', reverso: 'Vuelve a la vista Diagrama de Gantt desde cualquier otra vista.' }
    ],
    preguntas: [
      { pregunta: 'En la reunión semanal con Dirección Facultativa, la vista más útil es:', opciones: ['Diagrama de red', 'Gantt de seguimiento', 'Hoja de recursos', 'Calendario'], correcta: 1, explicacion: 'El Gantt de seguimiento muestra dos barras por tarea: plan original y estado real. Permite ver de un vistazo qué está atrasado.' },
      { pregunta: 'El atajo Ctrl+F2 en MS Project sirve para:', opciones: ['Guardar el proyecto', 'Vincular tareas seleccionadas', 'Calcular el proyecto', 'Ir a una tarea por ID'], correcta: 1, explicacion: 'Ctrl+F2 crea una dependencia FC entre las tareas seleccionadas por orden de ID.' },
      { pregunta: 'Si ves el nombre de un recurso en rojo en la Hoja de recursos, significa:', opciones: ['Que está de vacaciones', 'Que tiene sobreasignación de horas', 'Que su tasa es demasiado alta', 'Que no tiene tareas asignadas'], correcta: 1, explicacion: 'El rojo en Hoja de recursos indica sobreasignación: el recurso tiene más trabajo asignado del que puede hacer con su capacidad disponible.' }
    ]
  },

  'tareas-y-wbs': {
    bloques: [
      { tipo: 'parrafo', texto: 'La EDT (Estructura de Desglose del Trabajo) es la columna vertebral del proyecto. Se organiza en niveles jerárquicos: proyecto, capítulos macro, subcapítulos, plantas y tareas detalle.' },
      { tipo: 'titulo', texto: '🗂️ Tipos de tarea y niveles' },
      { tipo: 'lista', items: [
        'Tarea detalle: el trabajo real. Barra azul en Gantt.',
        'Tarea resumen: agrupa hijos. Barra negra con corchetes. No se ejecuta.',
        'Hito: punto de control sin duración. Rombo negro.',
        'Máximo 5 niveles: más profundidad hace el proyecto inmanejable.',
        'Regla 100/0: la suma de los hijos equivale al padre sin excepción.'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Hitos contractuales', texto: 'Los hitos con penalización por retraso llevan restricción No finalizar después de. Son: fin estructura, edificio cerrado y recepción de obra.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Alinear códigos EDT con Presto', texto: 'Si el presupuesto Presto usa códigos 04.02.01 para Forjado P1, usa los mismos códigos en la EDT de Project. Así trazas cualquier cambio de medición al instante.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Importar BC3', texto: 'MS Project no abre BC3 directamente. El camino es: exportar desde Presto a Excel, añadir columna de duración estimada y luego importar a Project con el asistente.' }
    ],
    flashcards: [
      { frente: '¿Qué es un hito en MS Project?', reverso: 'Una tarea con duración cero que representa un punto de control o entrega. En Gantt aparece como rombo negro.' },
      { frente: '¿Cuántos niveles máximo recomienda la buena práctica en la EDT?', reverso: '5 niveles. Más profundidad ralentiza Project y hace el cronograma inmanejable.' }
    ],
    preguntas: [
      { pregunta: '¿Qué tipo de tarea se usa en MS Project para los capítulos que agrupan fases sin ejecutarse directamente?', opciones: ['Tarea detalle', 'Tarea resumen', 'Hito', 'Tarea manual'], correcta: 1, explicacion: 'La tarea resumen agrupa hijos y muestra su duración y coste total acumulado. No se trabaja en ella directamente.' },
      { pregunta: 'El atajo de teclado para aumentar sangría (convertir una tarea en hija) es:', opciones: ['Alt+Mayús+flecha izquierda', 'Alt+Mayús+flecha derecha', 'Ctrl+Tab', 'F2'], correcta: 1, explicacion: 'Alt+Mayús+flecha derecha baja el nivel de la tarea (la hace hija). Alt+Mayús+flecha izquierda la sube (la hace hermana o padre).' },
      { pregunta: 'Para un hito contractual con penalización, la restricción más adecuada es:', opciones: ['Lo antes posible', 'Debe comenzar el', 'No finalizar después de', 'Debe finalizar el'], correcta: 2, explicacion: 'No finalizar después de es menos rígida que Debe finalizar el: permite adelantar pero no retrasar. Las restricciones rígidas pueden corromper el camino crítico.' }
    ]
  },

  'duraciones-y-dependencias': {
    bloques: [
      { tipo: 'parrafo', texto: 'La duración de una tarea se estima con la fórmula: DURACIÓN = MEDICIÓN dividida entre (RENDIMIENTO multiplicado por NÚMERO DE CUADRILLAS) y el resultado multiplicado por (1 más el coeficiente de seguridad de 10 a 15 por ciento).' },
      { tipo: 'titulo', texto: '🔗 Los 4 tipos de dependencia' },
      { tipo: 'lista', items: [
        'FC (Fin a Comienzo): hasta que A no termina, B no empieza. El 90% de las dependencias en obra.',
        'CC (Comienzo a Comienzo): A y B empiezan a la vez o con desfase mínimo.',
        'FF (Fin a Fin): A y B deben terminar a la vez.',
        'CF (Comienzo a Fin): no usar nunca en edificación residencial.'
      ]},
      { tipo: 'caja', tipoCaja: 'norma', titulo: 'Fraguado mínimo EHE-08', texto: 'El fraguado mínimo para descimbrar forjados HA-25 es 14 días según EHE-08. No bajes de ese plazo salvo aditivos acelerantes con justificación técnica y ensayo de resistencia.' },
      { tipo: 'caja', tipoCaja: 'ejemplo', titulo: 'Ejemplo cálculo duración', texto: 'Solado 1.200 m2, rendimiento 25 m2/día, 2 cuadrillas, 12% seguridad: 1200 / (25 x 2) x 1,12 = 27 días.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Restricciones rígidas', texto: 'Evita Debe comenzar el y Debe finalizar el en tareas normales. Estas restricciones hacen que MS Project ignore la lógica de dependencias y confunden el camino crítico.' }
    ],
    flashcards: [
      { frente: '¿Qué significa la notación 15FC+14d en la columna Predecesoras?', reverso: 'La tarea depende de la número 15 con tipo Fin a Comienzo y una demora de 14 días (por ejemplo, curado del hormigón).' },
      { frente: '¿Qué tipo de dependencia representa el 90% de los vínculos en edificación?', reverso: 'FC (Fin a Comienzo): la sucesora no puede empezar hasta que la predecesora haya terminado.' }
    ],
    preguntas: [
      { pregunta: 'Para modelar el fraguado obligatorio de 14 días entre hormigonado y carga de tabiques, se usa:', opciones: ['Restricción Debe comenzar el', 'Dependencia FC con demora +14d', 'Dependencia CC', 'Hito de fraguado sin duración'], correcta: 1, explicacion: 'La dependencia FC con demora positiva de 14 días bloquea el inicio de la tarea sucesora durante el tiempo de curado sin necesidad de restricciones rígidas.' },
      { pregunta: 'Un lag negativo en una dependencia FC sirve para:', opciones: ['Retrasar la sucesora', 'Adelantar el inicio de la sucesora (solapar tareas)', 'Bloquear el inicio de la predecesora', 'Eliminar la dependencia'], correcta: 1, explicacion: 'Una demora negativa (lead) adelanta el inicio de la sucesora antes de que la predecesora termine. Se usa para solapar tareas cuando hay superposición lógica posible.' },
      { pregunta: 'Si en una tarea cambias el modo a Duración fija y añades recursos extra, ¿qué ocurre?', opciones: ['La duración se acorta proporcionalmente', 'El trabajo total disminuye', 'La duración no cambia; aumenta el trabajo total', 'Project genera un error'], correcta: 2, explicacion: 'En modo Duración fija, la duración es constante. Añadir más recursos no acorta la tarea sino que aumenta el total de horas-persona registradas.' }
    ]
  },

  'recursos': {
    bloques: [
      { tipo: 'parrafo', texto: 'MS Project maneja tres tipos de recurso: Trabajo (personas y equipos pagados por hora), Material (consumibles como hormigón o ladrillo pagados por unidad) y Coste (importes fijos como una subcontrata a tanto alzado).' },
      { tipo: 'titulo', texto: '👷 Plantilla de recursos típicos en residencial' },
      { tipo: 'lista', items: [
        'Oficial 1a albañil: Trabajo, 400% capacidad (4 personas equivalentes), 22 euros/h',
        'Hormigón HA-25: Material, 90 euros/m3',
        'Subcontrata fontanería: Coste, 45.000 euros fijo por obra',
        'Grúa torre 30m: Coste, 8.500 euros fijo/mes'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Subcontratas siempre como Coste', texto: 'Las subcontratas a tanto alzado se cargan como tipo Coste, no como Trabajo. Pagas un importe fijo independiente de las horas reales que dediquen.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Capacidad al 80-85%', texto: 'Programa los recursos al 80-85% de su capacidad máxima. Deja margen para imprevistos sin que la primera incidencia desborde el plan.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Cambiar modo de tarea antes de asignar', texto: 'Cambia el modo (Unidades fijas / Duración fija / Trabajo fijo) ANTES de asignar recursos. Si lo cambias después, Project recalcula y descuadra los datos.' }
    ],
    flashcards: [
      { frente: '¿Qué significa 400% de capacidad máxima en un recurso de Trabajo?', reverso: 'Que hay 4 personas equivalentes disponibles para ese recurso. 100% = 1 persona.' },
      { frente: 'La fórmula del triángulo de recursos en MS Project es:', reverso: 'TRABAJO = DURACIÓN multiplicado por UNIDADES. Si fijas dos de los tres términos, el tercero se calcula automáticamente.' }
    ],
    preguntas: [
      { pregunta: 'Una subcontrata de climatización contratada a tanto alzado por 52.000 euros se carga en MS Project como:', opciones: ['Recurso de Trabajo', 'Recurso de Material', 'Recurso de Coste', 'Costo fijo de la tarea'], correcta: 2, explicacion: 'Las subcontratas a precio cerrado son recursos de Coste: un importe fijo independiente del tiempo o las unidades consumidas.' },
      { pregunta: 'Si quieres modelar que una tarea de 10 días dura exactamente 10 días aunque añadas más recursos, el modo de tarea es:', opciones: ['Unidades fijas', 'Duración fija', 'Trabajo fijo', 'Modo manual'], correcta: 1, explicacion: 'Duración fija mantiene constante el número de días. Es el modo adecuado para tareas como el fraguado o plazos contractuales que no dependen de cuántos recursos haya.' },
      { pregunta: '¿Cómo se detecta una sobreasignación de un recurso en la Hoja de recursos?', opciones: ['El recurso aparece en color amarillo', 'El recurso aparece en rojo', 'Aparece un icono de advertencia en el Gantt solamente', 'MS Project no avisa: hay que comprobarlo manualmente'], correcta: 1, explicacion: 'En la Hoja de recursos el nombre del recurso sobreasignado aparece en rojo. También hay indicador visual en las barras del Gantt.' }
    ]
  },

  'costes-y-curva-s': {
    bloques: [
      { tipo: 'parrafo', texto: 'El coste de una tarea suma todo: horas de trabajo por tasa, unidades de material por precio unitario, importes fijos de subcontratas y costos fijos adicionales de la tarea.' },
      { tipo: 'titulo', texto: '💶 Curva S: coste acumulado en el tiempo' },
      { tipo: 'parrafo', texto: 'La curva S muestra el coste acumulado a lo largo de la obra. Sube lento al inicio (preparación), se dispara en la fase de estructura y MEP y se aplana al final (acabados). Comparar la curva real con la de la línea base es la forma más rápida de detectar desviaciones.' },
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Insertar la curva S', texto: 'Pestaña Informe, Informes visuales, Informe de flujo de efectivo. Se abre Excel con tabla dinámica. Puedes hacer el gráfico combinado real vs línea base directamente.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'CPI y SPI: dos números que hablan solos', texto: 'Si CPI y SPI son mayores que 1, el proyecto va bien. Si ambos bajan de 1 al mismo tiempo, es alerta roja: atrasado y caro.' },
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Certificaciones mensuales', texto: 'En certificaciones a la propiedad lleva la curva S en una página: plan vs real. Es lo que más entiende el cliente sin necesitar explicaciones técnicas.' }
    ],
    flashcards: [
      { frente: '¿Qué acumulación de costo fijo usas para el alquiler mensual de una grúa?', reverso: 'Prorrateo: reparte el importe a lo largo de toda la duración de la tarea.' },
      { frente: '¿Para qué sirven las 5 tablas de tasas (A-E) de un recurso?', reverso: 'Para aplicar tasas distintas según la tarea (horario nocturno, obra diferente) o para programar subidas salariales futuras con fecha efectiva.' }
    ],
    preguntas: [
      { pregunta: 'En una obra, el CPI al mes 3 es 0,85. ¿Qué significa?', opciones: ['El proyecto está adelantado un 15%', 'Por cada euro ganado se gasta 1,18 euros: hay sobrecoste del 18%', 'El proyecto está atrasado un 15%', 'Los recursos están sobreasignados'], correcta: 1, explicacion: 'CPI = EV/AC. Un CPI de 0,85 significa que por cada euro de valor ganado se están gastando 1/0,85 = 1,18 euros. Sobrecoste real del 17-18%.' },
      { pregunta: '¿Qué tipo de acumulación de costo fijo es correcto para una tasa municipal pagada al inicio de la obra?', opciones: ['Prorrateo', 'Final', 'Comienzo', 'No se puede modelar con costo fijo'], correcta: 2, explicacion: 'Los pagos puntuales realizados al inicio de la tarea se acumulan como Comienzo: todo el coste se imputa al primer día.' },
      { pregunta: 'La curva S de coste en una obra residencial tiene forma de S porque:', opciones: ['Los retrasos la deforman', 'Al inicio crece lento, se acelera en estructura y MEP y se aplana en acabados', 'Los pagos de subcontratas son irregulares', 'El calendario tiene festivos que crean discontinuidades'], correcta: 1, explicacion: 'La forma de S responde a la dinámica real de la obra: pocos costes en preparación, máximo en estructura e instalaciones y ralentización en acabados.' }
    ]
  },

  'linea-base-y-seguimiento': {
    bloques: [
      { tipo: 'parrafo', texto: 'La línea base es la foto del plan en el momento en que se firma el cronograma. Sin ella no hay seguimiento posible: cualquier desviación es solo una opinión, no un dato.' },
      { tipo: 'titulo', texto: '📈 Workflow semanal de seguimiento (6 pasos)' },
      { tipo: 'lista', items: [
        'Recibir parte del aparejador con medición física real',
        'Abrir el .mpp vivo del proyecto',
        'Fijar Proyecto > Información del proyecto > Fecha estado = lunes',
        'Actualizar el porcentaje completado de cada tarea con avance',
        'Reprogramar el trabajo restante: Actualizar proyecto > Reprogramar trabajo',
        'Guardar nueva versión: obra_S05_2026-XX-XX.mpp'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Versionar el .mpp cada semana', texto: 'Guarda una copia del .mpp cada lunes con fecha en el nombre. Si algo se descuadra la semana siguiente puedes volver al estado anterior sin perder el trabajo.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Los 4 indicadores EVM clave', texto: 'CV (EV - AC): variación de coste. SV (EV - PV): variación de plazo. CPI (EV/AC): eficiencia coste, mayor que 1 es bueno. SPI (EV/PV): eficiencia plazo, mayor que 1 es bueno.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Avance reportado optimista', texto: 'Si el jefe de obra infla el porcentaje completado, el EVM miente. El aparejador y el jefe de obra deben cruzar mediciones antes de actualizar el .mpp.' }
    ],
    flashcards: [
      { frente: '¿Cuándo se establece la línea base del proyecto?', reverso: 'Justo antes del acta de replanteo, cuando el cronograma está revisado y firmado. Nunca en fase de borrador.' },
      { frente: '¿Qué diferencia hay entre porcentaje completado y porcentaje físico completado?', reverso: 'Porcentaje completado es el tiempo transcurrido respecto a la duración planificada. Porcentaje físico es el avance real medido en obra (m2 ejecutados, m3 hormigonados). El físico es más preciso para EVM.' }
    ],
    preguntas: [
      { pregunta: 'Un CPI de 0,90 y un SPI de 0,85 al mismo tiempo indican:', opciones: ['Proyecto adelantado y barato', 'Proyecto atrasado pero barato', 'Proyecto atrasado y con sobrecoste: alerta roja', 'Solo sobrecoste, el plazo va bien'], correcta: 2, explicacion: 'CPI menor que 1 = sobrecoste. SPI menor que 1 = retraso. Ambos menores que 1 al mismo tiempo es la combinación de mayor riesgo para el proyecto.' },
      { pregunta: '¿Cuántas líneas base permite guardar MS Project simultáneamente?', opciones: ['1', '3', '5', '11'], correcta: 3, explicacion: 'MS Project permite hasta 11 líneas base: Base (la original contractual) más Base1 hasta Base10 para versiones internas o modificados de obra.' },
      { pregunta: 'La fórmula del Valor Ganado (EV) es:', opciones: ['Coste real del trabajo realizado', 'Porcentaje completado multiplicado por el coste de la línea base', 'Coste planificado hasta la fecha estado', 'Coste total al terminar el proyecto'], correcta: 1, explicacion: 'EV = porcentaje físico completado multiplicado por el coste de línea base de esa tarea. Representa el valor del trabajo realizado según el plan original.' }
    ]
  },

  'camino-critico': {
    bloques: [
      { tipo: 'parrafo', texto: 'El camino crítico es la secuencia de tareas con holgura total igual a cero. Define la duración mínima del proyecto: si una tarea crítica se retrasa un día, el proyecto entero se retrasa un día.' },
      { tipo: 'titulo', texto: '🚨 Crashing vs fast-tracking' },
      { tipo: 'lista', items: [
        'Crashing: añadir más recursos a tareas críticas. Acorta plazo pero aumenta coste.',
        'Fast-tracking: cambiar dependencias FC a CC para solapar tareas. Barato pero aumenta el riesgo de rework.',
        'En la práctica se combinan ambas estrategias.',
        'Antes de optimizar: guardar Base1 por si la optimización descuadra el plan.'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Ver el camino crítico de golpe', texto: 'En la pestaña Formato del Gantt, marca Tareas críticas. Las tareas con holgura cero se ponen en rojo automáticamente. Filtra solo críticas en Vista > Filtro > Críticas.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Holgura negativa: plan inviable', texto: 'Si una tarea tiene holgura total negativa, el plan no es viable con las restricciones actuales. Comunica al cliente con datos desde el principio, no esperes al mes 12.' },
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Límite físico al crashing', texto: 'Crashing no funciona si no hay espacio físico para más cuadrillas. Dos cuadrillas en un núcleo de escalera estorbándose no reducen el plazo. Validar siempre con el jefe de obra.' }
    ],
    flashcards: [
      { frente: '¿Qué diferencia hay entre holgura libre y holgura total?', reverso: 'Holgura libre: días que puedes retrasar la tarea sin afectar a la siguiente. Holgura total: días que puedes retrasar sin afectar al fin del proyecto. Crítica = holgura total 0.' },
      { frente: '¿Qué es el fast-tracking y cuál es su riesgo principal?', reverso: 'Solapar tareas que en el plan original iban en serie cambiando FC a CC. Es barato pero aumenta el riesgo de rework: si la predecesora tiene cambios afectan a la sucesora ya iniciada.' }
    ],
    preguntas: [
      { pregunta: 'Para acelerar el plazo con el mínimo coste adicional, la estrategia preferida es:', opciones: ['Crashing con más cuadrillas', 'Fast-tracking de tareas que pueden solaparse', 'Eliminar hitos contractuales', 'Reducir el alcance'], correcta: 1, explicacion: 'El fast-tracking no añade recursos (no sube el coste directo) sino que reorganiza la lógica para solapar actividades. El riesgo es mayor pero el coste inmediato es bajo.' },
      { pregunta: 'Después de aplicar crashing a una tarea crítica, lo primero que debes hacer es:', opciones: ['Guardar el proyecto y enviarlo al cliente', 'Volver a calcular el camino crítico porque puede haber cambiado', 'Establecer la línea base definitiva', 'Reducir la duración de todas las tareas'], correcta: 1, explicacion: 'Tras cualquier optimización el camino crítico puede saltar a otra cadena que antes no era crítica. Hay que recalcular y volver a marcar Tareas críticas en el Formato del Gantt.' },
      { pregunta: 'Una tarea con holgura total negativa significa:', opciones: ['Que la tarea está completada', 'Que el plan no es viable: hay que renegociar plazo, alcance o recursos', 'Que la tarea tiene exceso de recursos asignados', 'Que la dependencia está mal configurada'], correcta: 1, explicacion: 'Holgura negativa indica que la tarea debería haber empezado antes del inicio del proyecto. El plan no es matemáticamente factible y hay que actuar: renegociar o rediseñar la lógica.' }
    ]
  },

  'informes-y-reporting': {
    bloques: [
      { tipo: 'parrafo', texto: 'La pestaña Informe de la cinta da acceso a tableros, informes de costes, progreso y recursos. Los informes visuales exportan directamente a Excel con tablas dinámicas para análisis más avanzado.' },
      { tipo: 'titulo', texto: '📊 Los 5 informes imprescindibles en obra' },
      { tipo: 'lista', items: [
        'Información general (Tablero): resumen ejecutivo para la reunión con DF',
        'Tareas críticas: donde poner el foco semanal',
        'Sobrecostos: alertar a la propiedad antes de que sea irreversible',
        'Flujo de efectivo: certificaciones mensuales y previsión de tesorería',
        'Valor ganado: EV, PV, AC, CPI, SPI por capítulo para reuniones de dirección'
      ]},
      { tipo: 'caja', tipoCaja: 'truco', titulo: 'Informe de 1 página', texto: 'Para alta dirección: 1 página con 4 KPIs (porcentaje avance, CPI, SPI, hito próximo) y la curva S. Si necesitas 5 hojas para explicar el estado, algo falla en la comunicación.' },
      { tipo: 'caja', tipoCaja: 'dato', titulo: 'Semáforo de KPIs', texto: 'Verde: CPI y SPI mayores de 0,95. Amarillo: entre 0,85 y 0,95. Rojo: menor de 0,85. Si los dos bajan de 0,85 al mismo tiempo, convocatoria de reunión urgente.' },
      { tipo: 'caja', tipoCaja: 'info', titulo: 'Power BI en versión 2024', texto: 'MS Project 2024 tiene botón nativo Power BI en la cinta. En versiones 2020 y 2021 hay que exportar a Excel manualmente y cargar en Power BI Desktop.' }
    ],
    flashcards: [
      { frente: 'Para la reunión semanal con la Dirección Facultativa, ¿qué dos informes usas?', reverso: 'Información general (tablero de resumen) y Tareas críticas. El resto va al anexo.' },
      { frente: '¿Qué ventaja tienen los Informes visuales de MS Project frente a los informes nativos?', reverso: 'Los informes visuales exportan a Excel con tablas dinámicas, lo que permite gráficos avanzados, filtros y dashboards que MS Project no puede hacer de forma nativa.' }
    ],
    preguntas: [
      { pregunta: 'El informe de Flujo de efectivo de MS Project se usa principalmente para:', opciones: ['Ver las sobreasignaciones de recursos', 'Preparar las certificaciones mensuales y la previsión de tesorería', 'Comparar el plan con la línea base', 'Ver las tareas críticas por capítulo'], correcta: 1, explicacion: 'El informe de Flujo de efectivo muestra el coste acumulado y previsto en el tiempo, lo que permite preparar las certificaciones y anticipar las necesidades de liquidez.' },
      { pregunta: 'La frecuencia ideal para el reporte de seguimiento en obra es:', opciones: ['Mensual, coincidiendo con la certificación', 'Semanal, cada lunes con datos del viernes anterior', 'Diario durante las fases críticas', 'Solo cuando hay incidencias'], correcta: 1, explicacion: 'El ciclo semanal (datos viernes, reporte lunes) permite detectar desviaciones a tiempo y actuar antes de que se acumulen. El mensual llega demasiado tarde.' },
      { pregunta: 'Un dashboard de reporting profesional para alta dirección debe tener:', opciones: ['Todas las tareas del Gantt en una sola página', 'Máximo 4 KPIs clave más 1 gráfico de curva S en 1 página', 'Los 9 indicadores EVM con fórmulas explicadas', 'Las hojas de recursos y las sobreasignaciones detalladas'], correcta: 1, explicacion: 'La alta dirección necesita decidir, no analizar. 1 página con 4 KPIs y la curva S es lo que permite una lectura de 30 segundos y una decisión rápida.' }
    ]
  },

  'caso-real-retrasos-oficios': {
    bloques: [
      { tipo: 'parrafo', texto: 'Edificio plurifamiliar de 50 viviendas en Madrid. PB + 4 plantas + cubierta + sótano garaje. PEC 6.500.000 euros. Plazo 14 meses. Inicio 15-feb-2026, entrega 10-abr-2027.' },
      { tipo: 'titulo', texto: '🌧️ Caso retraso: lluvia antes del hormigonado' },
      { tipo: 'parrafo', texto: 'Lunes 15 de junio. Tienes programado hormigonar el forjado de planta baja el martes 16. La previsión AEMET anuncia lluvia intensa martes y miércoles. La decisión correcta: posponer el hormigonado al lunes 22 de junio, primer día seco. En MS Project: doble clic en la tarea, cambiar fecha de inicio a 22-jun y todas las sucesoras se desplazan automáticamente por las dependencias.' },
      { tipo: 'caja', tipoCaja: 'aviso', titulo: 'Impacto real del retraso', texto: 'Hormigonado +6 días. Curado hasta 6-jul. Ladrillaría de PB: +6 días. Entrega global: pendiente de análisis del camino crítico. Si la tarea estaba en la ruta crítica, la entrega se mueve 6 días.' },
      { tipo: 'titulo', texto: '⚒️ Caso coordinación: cuadrilla de ladrilleros' },
      { tipo: 'lista', items: [
        'Confirmar fecha de inicio al ladrillero: 15 días antes como mínimo',
        'Acopio de ladrillo cara vista: 3 semanas antes (fabricación más transporte)',
        'Montaje de andamios: 5 días antes',
        'Replanteo de jambas y dinteles: 2 días antes con el topógrafo',
        'Documentación CAE del subcontratista: 48 horas antes'
      ]},
      { tipo: 'caja', tipoCaja: 'obra', titulo: 'Regla del 80-20 en obra', texto: 'El jefe de producción que no se quema trabaja el 80% en planificación y el 20% en urgencias. Si vives al revés, la planificación está mal hecha.' }
    ],
    flashcards: [
      { frente: '¿Cuál es el plazo mínimo de aviso a los ladrilleros antes de que comiencen?', reverso: '15 días como mínimo; 1 mes como plazo ideal para garantizar disponibilidad de la cuadrilla y acopio de material.' },
      { frente: 'Cuando no se puede hormigonar un forjado por lluvia, ¿qué condiciones deben cumplirse para retomarlo?', reverso: 'Temperatura mayor de 5 grados Celsius, sin lluvia en las próximas 24 horas y viento menor de 50 km/h.' }
    ],
    preguntas: [
      { pregunta: 'Al mover la fecha de inicio del hormigonado en MS Project, las tareas sucesoras vinculadas con dependencia FC:', opciones: ['Permanecen en sus fechas originales', 'Se desplazan automáticamente por la lógica de dependencias', 'Hay que moverlas una a una manualmente', 'MS Project pide confirmación para cada una'], correcta: 1, explicacion: 'La potencia de las dependencias FC es que el recálculo es automático. Al mover la predecesora, todas las sucesoras encadenadas se desplazan sin intervención manual.' },
      { pregunta: 'Un retraso de 6 días en el hormigonado del forjado PB NO afecta a la entrega final si:', opciones: ['La cuadrilla trabaja el sábado siguiente', 'La tarea tiene holgura total mayor de 6 días', 'Se aplica crashing en la siguiente tarea', 'Se elimina el período de curado'], correcta: 1, explicacion: 'La holgura total es exactamente el margen de retraso que puede absorber una tarea sin afectar al fin del proyecto. Si la holgura supera los 6 días del retraso, la entrega no se mueve.' },
      { pregunta: 'Para modelar en MS Project los plazos de aviso y preparación previos al inicio de la ladrillaría, se usan:', opciones: ['Restricciones rígidas en la tarea de ladrillaría', 'Tareas predecesoras con dependencias FC que representen cada preparación', 'Un solo campo de notas en la tarea principal', 'La columna de costos fijos'], correcta: 1, explicacion: 'Cada preparación (acopio, andamios, replanteo, documentación) se modela como una tarea predecesora con su propia duración y dependencia FC hacia la tarea principal. Así el plan refleja la realidad.' }
    ]
  },

  'conclusiones': {
    bloques: [
      { tipo: 'parrafo', texto: 'Este curso cubre el ciclo completo: triángulo alcance-plazo-coste, EDT y WBS, duraciones y dependencias, recursos y costes, línea base y Earned Value, camino crítico y su optimización, reporting y caso real con retrasos y coordinación de oficios.' },
      { tipo: 'titulo', texto: '🎓 Las 7 ideas que te llevas' },
      { tipo: 'lista', items: [
        'MS Project es un planificador, no un ERP: convive con Presto, Revit y Navisworks.',
        'Primero papel y pizarra. Si la lógica está mal en la pizarra, el software no la arregla.',
        'La línea base es el momento sagrado: sin ella no hay seguimiento real posible.',
        'El camino crítico (holgura total = 0) define el plazo: concentra el esfuerzo ahí.',
        'Crashing añade recursos (caro, bajo riesgo). Fast-tracking paraleliza (barato, alto riesgo).',
        'Holgura negativa = plan inviable. Comunicar al cliente con datos, no esperar al mes 12.',
        'Para megaproyectos o licitación pública grande en España: Primavera P6.'
      ]},
      { tipo: 'caja', tipoCaja: 'cliente', titulo: 'Para tu perfil AT + ADE', texto: 'Dominar plazos, camino crítico y reporting es exactamente lo que buscan las ofertas de Project Manager y Construction Manager. Es la competencia que más directamente te etiqueta como PM/CM. Sumado a tu base ADE, eres el técnico que entiende la obra, el calendario y el coste al mismo tiempo.' },
      { tipo: 'titulo', texto: '📌 Próximos pasos recomendados' },
      { tipo: 'lista', items: [
        'Primavera P6: estándar en obra civil grande y licitación pública.',
        'Navisworks Manage + BIM 4D: simulación de obra y clash detection.',
        'Curso Presto (hermano): vincular cronograma con certificaciones mensuales.',
        'Certificación PMP (PMI): aval formal para puestos de PM/CM.'
      ]}
    ],
    flashcards: [
      { frente: '¿Qué herramienta sustituye a MS Project en megaproyectos o licitaciones públicas grandes en España?', reverso: 'Primavera P6 (Oracle). El .mpp de Project se puede exportar a XML y P6 lo abre sin reescribir el cronograma.' },
      { frente: '¿Por qué MS Project no vale para gestionar el mantenimiento de un edificio en uso?', reverso: 'Porque es un planificador de obras, no un CMMS. La gestión de mantenimiento requiere herramientas como Planon, IBM Maximo o TRIRIGA.' }
    ],
    preguntas: [
      { pregunta: 'El curso de MS Project tiene mayor utilidad directa para el perfil de:', opciones: ['Facility Manager en fase de uso del edificio', 'Project Manager y Construction Manager en fase de ejecución', 'Director de obra en proyectos de infraestructura ferroviaria', 'Tasador inmobiliario en valoraciones residenciales'], correcta: 1, explicacion: 'MS Project es la herramienta central del PM y CM durante la ejecución de obra. Controla plazos, recursos y costes en tiempo real, que es la competencia central de esos puestos.' },
      { pregunta: 'En residencial, el triángulo alcance-plazo-coste se comporta de forma que:', opciones: ['Los tres son flexibles y negociables', 'El plazo y el alcance son rígidos, por lo que el coste es la variable que se mueve', 'El coste es fijo y el plazo es la variable de ajuste', 'Solo el alcance es negociable con el cliente'], correcta: 1, explicacion: 'En promoción residencial las entregas están comprometidas (plazo casi fijo) y el proyecto está licenciado (alcance casi fijo). Por tanto el coste es la variable que se descontrola con los sobrecostes y modificados.' },
      { pregunta: 'La diferencia clave entre Crashing y fast-tracking es:', opciones: ['Crashing es gratis y fast-tracking cuesta dinero', 'Crashing añade recursos (más coste, menos riesgo) y fast-tracking paralela tareas (menos coste, más riesgo)', 'Son sinónimos que describen la misma técnica', 'Crashing se aplica en tareas no críticas y fast-tracking en críticas'], correcta: 1, explicacion: 'Crashing compra tiempo con dinero (más recursos). Fast-tracking compra tiempo con riesgo (solapar tareas que antes iban en serie, lo que puede generar rework si la predecesora cambia).' }
    ]
  }
};
