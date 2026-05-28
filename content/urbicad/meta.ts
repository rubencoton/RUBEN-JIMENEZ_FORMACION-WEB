import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const URBICAD_MODULOS: ModuloMeta[] = [
  {
    slug: 'marco-normativo',
    numero: 1,
    titulo: 'Marco normativo: LPRL y RD 1627/1997',
    resumen: 'Pirámide normativa, umbrales ESS vs EBSS, obligaciones de cada figura y sanciones LISOS.',
    duracion: '15 min',
    icono: '📜'
  },
  {
    slug: 'figuras-de-obra',
    numero: 2,
    titulo: 'Figuras de obra: CSS, Recurso Preventivo y DF',
    resumen: 'Quién es quién en una obra, diferencias clave entre CSS y Recurso Preventivo, y cómo acreditarse.',
    duracion: '15 min',
    icono: '👷'
  },
  {
    slug: 'documentos-ss',
    numero: 3,
    titulo: 'ESS, EBSS y PSS: diferencias y contenido',
    resumen: 'Cuándo redactar cada documento, quién lo firma, estructura mínima y relación entre los tres.',
    duracion: '18 min',
    icono: '📋'
  },
  {
    slug: 'urbicad-acceso',
    numero: 4,
    titulo: 'UrbiCAD: acceso, módulos y alternativas',
    resumen: 'Familia de productos, cómo pedir la demo, diferencias con CYPE PSS y cuándo compensa la licencia.',
    duracion: '12 min',
    icono: '💻'
  },
  {
    slug: 'urbicad-workflow',
    numero: 5,
    titulo: 'Workflow en UrbiCAD: ESS y PSS paso a paso',
    resumen: 'Crear ESS desde cero, identificar riesgos con el asistente, generar PSS y exportar el entregable.',
    duracion: '25 min',
    icono: '⚙️'
  },
  {
    slug: 'libro-incidencias',
    numero: 6,
    titulo: 'Libro de Incidencias: uso y casos reales',
    resumen: 'Quién anota, cómo redactar cada hoja, casos típicos y custodia legal tras la obra.',
    duracion: '12 min',
    icono: '📒'
  },
  {
    slug: 'caso-practico',
    numero: 7,
    titulo: 'Caso práctico: CSS en vivienda unifamiliar',
    resumen: 'Workflow completo del CSS desde la designación hasta la recepción de obra con ejercicio integrador.',
    duracion: '20 min',
    icono: '🏠'
  },
  {
    slug: 'conclusiones',
    numero: 8,
    titulo: 'Conclusiones (TFG)',
    resumen: 'Síntesis, aplicación a tu perfil y valoración final.',
    duracion: '12 min',
    icono: '🎓'
  }
];

export const URBICAD_META: CursoMeta = {
  slug: 'urbicad',
  titulo: 'UrbiCAD · Seguridad y Salud',
  color: '#EF6C00',
  colorClaro: '#FFF3E0'
};
