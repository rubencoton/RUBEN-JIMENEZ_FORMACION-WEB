import type { ModuloMeta } from '@/content/revit/meta';

export const BIM360_MODULOS: ModuloMeta[] = [
  {
    slug: 'que-es-acc-bim360',
    numero: 1,
    titulo: '¿Qué es BIM 360 / ACC y por qué cambia la obra?',
    resumen: 'De BIM 360 a Autodesk Construction Cloud. Módulos clave: Docs, Build, Cost, Coordinate.',
    duracion: '15 min',
    icono: '☁️'
  },
  {
    slug: 'docs-planos-tablet',
    numero: 2,
    titulo: 'Docs · Planos en tablet en obra',
    resumen: 'Subir planos, control de versiones, navegación en obra, anotaciones desde tablet.',
    duracion: '20 min',
    icono: '📲'
  },
  {
    slug: 'issues-incidencias',
    numero: 3,
    titulo: 'Issues · Crear incidencias en el plano',
    resumen: 'Pinchas un punto en el plano, sacas foto, describes, asignas. Trazabilidad total.',
    duracion: '25 min',
    icono: '🚨'
  },
  {
    slug: 'asociar-partidas-presupuesto',
    numero: 4,
    titulo: 'Asociar incidencia a partida presupuestaria',
    resumen: 'Cada Issue → partida del presupuesto. Vínculo con Presto/Arquímedes. Trazabilidad económica.',
    duracion: '25 min',
    icono: '💰'
  },
  {
    slug: 'asignar-empresas',
    numero: 5,
    titulo: 'Asignar empresas y subcontratas',
    resumen: 'Cada partida tiene una empresa ejecutora. Roles, permisos, qué ve cada uno.',
    duracion: '20 min',
    icono: '🏗️'
  },
  {
    slug: 'informes-automaticos',
    numero: 6,
    titulo: 'Informes automáticos diarios y semanales',
    resumen: 'Configurar reports automáticos. Quién recibe qué. Frecuencia. Adjuntos.',
    duracion: '20 min',
    icono: '📊'
  },
  {
    slug: 'no-proforma-workflow',
    numero: 7,
    titulo: 'Workflow no-proforma · si no cierras, no cobras',
    resumen: 'El motor económico: incidencia abierta → certificación bloqueada → empresa no proforma.',
    duracion: '25 min',
    icono: '🛑'
  },
  {
    slug: 'repasos-masivos-vivienda',
    numero: 8,
    titulo: 'Repasos masivos · 150 por vivienda sin perder tu vida',
    resumen: 'Cómo gestionar el volumen real: filtros, plantillas, asignación masiva, dashboards.',
    duracion: '30 min',
    icono: '✅'
  },
  {
    slug: 'coordinate-modelos-federados',
    numero: 9,
    titulo: 'Coordinate · Modelos federados y clash detection',
    resumen: 'Federar Revit/Estructura/MEP. Detectar conflictos antes de obra. RFI digital.',
    duracion: '25 min',
    icono: '🔄'
  },
  {
    slug: 'cost-control-economico',
    numero: 10,
    titulo: 'Cost · Control económico en tiempo real',
    resumen: 'Presupuesto vs ejecutado. Pedidos, contratos, certificaciones. Integración Presto.',
    duracion: '25 min',
    icono: '💵'
  }
];

export const BIM360_META = {
  slug: 'bim-360',
  titulo: 'BIM 360 / Autodesk Construction Cloud',
  color: '#37474F',
  colorClaro: '#ECEFF1'
};
