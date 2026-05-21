export type ModuloMeta = {
  slug: string;
  numero: number;
  titulo: string;
  resumen: string;
  duracion: string;
  icono: string;
};

export const REVIT_MODULOS: ModuloMeta[] = [
  {
    slug: 'que-es-revit',
    numero: 1,
    titulo: '¿Qué es Revit y por qué lo piden todos?',
    resumen: 'BIM, paramétrico, LOD, ciclo del modelo y diferencia con CAD.',
    duracion: '15 min',
    icono: '🎯'
  },
  {
    slug: 'interfaz',
    numero: 2,
    titulo: 'Interfaz: Ribbon, Navegador y Propiedades',
    resumen: 'Tour visual al programa real. Dónde está cada cosa.',
    duracion: '18 min',
    icono: '🖥️'
  },
  {
    slug: 'plantillas',
    numero: 3,
    titulo: 'Plantillas y niveles',
    resumen: 'Iniciar bien un proyecto. Niveles, rejillas, vistas base.',
    duracion: '20 min',
    icono: '📐'
  },
  {
    slug: 'muros-suelos-cubiertas',
    numero: 4,
    titulo: 'Muros, suelos y cubiertas',
    resumen: 'Familias de sistema. Capas. Tipos. Editar perfiles.',
    duracion: '25 min',
    icono: '🧱'
  },
  {
    slug: 'puertas-ventanas',
    numero: 5,
    titulo: 'Puertas, ventanas y huecos',
    resumen: 'Familias cargables. Insertar, modificar y crear desde cero.',
    duracion: '20 min',
    icono: '🚪'
  },
  {
    slug: 'familias',
    numero: 6,
    titulo: 'Familias paramétricas',
    resumen: 'Editor de familias. Parámetros. Tipos vs ejemplares.',
    duracion: '30 min',
    icono: '🧩'
  },
  {
    slug: 'vistas-y-cotas',
    numero: 7,
    titulo: 'Vistas, secciones y cotas',
    resumen: 'Documentar el modelo. Planos, secciones, alzados, detalles.',
    duracion: '20 min',
    icono: '📏'
  },
  {
    slug: 'mediciones-tablas',
    numero: 8,
    titulo: 'Tablas de planificación (cantidades)',
    resumen: 'Mediciones reales. Filtros, fórmulas, exportar a Presto.',
    duracion: '25 min',
    icono: '📊'
  },
  {
    slug: 'mep-instalaciones',
    numero: 9,
    titulo: 'MEP: instalaciones básicas',
    resumen: 'Saneamiento, fontanería, electricidad. Sistemas y filtros.',
    duracion: '22 min',
    icono: '⚡'
  },
  {
    slug: 'fases-y-grupos',
    numero: 10,
    titulo: 'Fases, opciones de diseño y grupos',
    resumen: 'Reforma vs obra nueva. Comparar alternativas. Trabajo en equipo.',
    duracion: '20 min',
    icono: '🔄'
  },
  {
    slug: 'colaboracion-bim-360',
    numero: 11,
    titulo: 'Colaboración en BIM 360',
    resumen: 'Worksharing, modelo en la nube, RFI, coordinación. Puente a ACC.',
    duracion: '25 min',
    icono: '☁️'
  },
  {
    slug: 'exportar-y-entregar',
    numero: 12,
    titulo: 'Exportar y entregar el proyecto',
    resumen: 'IFC, PDF, DWG, planos para visado, BIMcollab. Cierre profesional.',
    duracion: '18 min',
    icono: '📦'
  }
];

export const REVIT_META = {
  slug: 'revit',
  titulo: 'Revit + BIM para Arquitecto Técnico',
  color: '#1565C0',
  colorClaro: '#E3F2FD'
};
