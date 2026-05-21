export type Curso = {
  slug: string;
  titulo: string;
  resumen: string;
  color: string;
  fondo: string;
  icono: string;
  modulos: number;
  duracion: string;
  nivel: string;
  destacado?: boolean;
};

export const CURSOS: Curso[] = [
  {
    slug: 'revit',
    titulo: 'Revit + BIM',
    resumen: 'Modelado paramétrico, familias, fases, documentación y BIM 360. Lo más demandado en ofertas 2026.',
    color: '#1565C0',
    fondo: '#E3F2FD',
    icono: '🏛️',
    modulos: 12,
    duracion: '~18 h',
    nivel: 'Básico → Avanzado',
    destacado: true
  },
  {
    slug: 'autocad',
    titulo: 'AutoCAD 2027',
    resumen: 'Refresco completo desde versión clásica. Comandos rápidos, atajos, layouts, MLEADER, IA Assistant.',
    color: '#6A1B9A',
    fondo: '#F3E5F5',
    icono: '✏️',
    modulos: 8,
    duracion: '~10 h',
    nivel: 'Refresco'
  },
  {
    slug: 'ms-project',
    titulo: 'Microsoft Project',
    resumen: 'Planificación de obra, EVM, ruta crítica, recursos y BIM 4D. Para gestionar plazos de verdad.',
    color: '#C8102E',
    fondo: '#FFEBEE',
    icono: '📊',
    modulos: 14,
    duracion: '~12 h',
    nivel: 'Básico → Avanzado'
  },
  {
    slug: 'presto-arquimedes',
    titulo: 'Presto · Arquímedes',
    resumen: 'Mediciones y presupuestos. BC3, base CYPE, certificaciones, comparativas y exportación al cliente.',
    color: '#2E7D32',
    fondo: '#E8F5E9',
    icono: '📐',
    modulos: 8,
    duracion: '~10 h',
    nivel: 'Básico → Avanzado'
  },
  {
    slug: 'urbicad',
    titulo: 'UrbiCAD · Seguridad y Salud',
    resumen: 'Estudios y planes de SyS, ESS, PSS, coordinación, libro de incidencias y RD 1627/1997.',
    color: '#EF6C00',
    fondo: '#FFF3E0',
    icono: '⚠️',
    modulos: 7,
    duracion: '~8 h',
    nivel: 'Básico → Avanzado'
  },
  {
    slug: 'ce3x-hulc',
    titulo: 'CE3X · HULC',
    resumen: 'Certificación energética A–G, ahorro, mejoras, sellado oficial y registro autonómico.',
    color: '#00838F',
    fondo: '#E0F7FA',
    icono: '♻️',
    modulos: 8,
    duracion: '~10 h',
    nivel: 'Básico → Avanzado'
  },
  {
    slug: 'tasacion',
    titulo: 'Tasación Inmobiliaria',
    resumen: 'Workflow ECO 805/2003, 4 métodos, reforma 2025 y prevención de errores comunes.',
    color: '#C2185B',
    fondo: '#FCE4EC',
    icono: '💼',
    modulos: 7,
    duracion: '~8 h',
    nivel: 'Medio → Avanzado'
  },
  {
    slug: 'bim-360',
    titulo: 'BIM 360 · Autodesk Construction Cloud',
    resumen: 'Coordinación, modelos federados, RFI, planos, control de obra en la nube. Próximamente.',
    color: '#37474F',
    fondo: '#ECEFF1',
    icono: '☁️',
    modulos: 0,
    duracion: 'En preparación',
    nivel: 'Próximamente'
  }
];

export function getCurso(slug: string): Curso | undefined {
  return CURSOS.find((c) => c.slug === slug);
}
