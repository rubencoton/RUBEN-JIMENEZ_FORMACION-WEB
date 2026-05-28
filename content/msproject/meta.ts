import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const MSPROJECT_MODULOS: ModuloMeta[] = [
  {
    slug: 'introduccion-y-configuracion',
    numero: 1,
    titulo: 'Introducción, instalación y configuración',
    resumen: 'Para qué sirve MS Project, cuándo usarlo y cómo configurar el calendario de obra en España.',
    duracion: '25 min',
    icono: '⚙️'
  },
  {
    slug: 'interfaz-y-vistas',
    numero: 2,
    titulo: 'Interfaz, vistas y atajos clave',
    resumen: 'Anatomía de pantalla, las 6 vistas imprescindibles y atajos de teclado para trabajar rápido.',
    duracion: '20 min',
    icono: '🖥️'
  },
  {
    slug: 'tareas-y-wbs',
    numero: 3,
    titulo: 'Estructura de tareas y WBS',
    resumen: 'EDT por capítulos, hitos contractuales y cómo importar el presupuesto Presto a Project.',
    duracion: '30 min',
    icono: '🗂️'
  },
  {
    slug: 'duraciones-y-dependencias',
    numero: 4,
    titulo: 'Duraciones, dependencias y restricciones',
    resumen: 'Rendimientos reales por oficio, los 4 tipos de dependencia y cuáles restricciones evitar.',
    duracion: '30 min',
    icono: '🔗'
  },
  {
    slug: 'recursos',
    numero: 5,
    titulo: 'Recursos: mano de obra, materiales y subcontratas',
    resumen: 'Tipos de recurso, hoja de recursos, triángulo trabajo-unidades-duración y sobreasignaciones.',
    duracion: '25 min',
    icono: '👷'
  },
  {
    slug: 'costes-y-curva-s',
    numero: 6,
    titulo: 'Costes, presupuesto y curva S',
    resumen: 'Cómo calcula Project el coste total, tasas variables, costos fijos y la curva S acumulada.',
    duracion: '25 min',
    icono: '💶'
  },
  {
    slug: 'linea-base-y-seguimiento',
    numero: 7,
    titulo: 'Línea base, seguimiento y Earned Value',
    resumen: 'La foto sagrada del plan, actualización semanal y los 6 indicadores EVM que mira la propiedad.',
    duracion: '35 min',
    icono: '📈'
  },
  {
    slug: 'camino-critico',
    numero: 8,
    titulo: 'Camino crítico y optimización',
    resumen: 'Holgura cero, crashing vs fast-tracking y cómo acortar el plazo sin romper el plan.',
    duracion: '25 min',
    icono: '🚨'
  },
  {
    slug: 'informes-y-reporting',
    numero: 9,
    titulo: 'Informes, dashboards y reporting semanal',
    resumen: 'Los 5 informes nativos imprescindibles, informes visuales a Excel y Power BI en versión 2024.',
    duracion: '20 min',
    icono: '📊'
  },
  {
    slug: 'caso-real-retrasos-oficios',
    numero: 10,
    titulo: 'Caso real: retrasos por lluvia y coordinación de oficios',
    resumen: 'Edificio 50 viviendas en Madrid. Cómo gestionar un retraso de 6 días por lluvia y coordinar la llegada de la cuadrilla de ladrilleros.',
    duracion: '40 min',
    icono: '🏗️'
  },
  {
    slug: 'conclusiones',
    numero: 11,
    titulo: 'Conclusiones (TFG)',
    resumen: 'Síntesis, aplicación a tu perfil PM/CM/FM y valoración final del curso.',
    duracion: '12 min',
    icono: '🎓'
  }
];

export const MSPROJECT_META: CursoMeta = {
  slug: 'ms-project',
  titulo: 'Microsoft Project para Edificación',
  color: '#C8102E',
  colorClaro: '#FFEBEE'
};
