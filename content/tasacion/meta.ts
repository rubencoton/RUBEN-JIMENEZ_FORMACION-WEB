import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const TASACION_MODULOS: ModuloMeta[] = [
  {
    slug: 'que-es-tasacion',
    numero: 1,
    titulo: '¿Qué es una tasación? Marco legal ECO 805/2003',
    resumen: 'Definición, tipos de valor, quién puede tasar y estructura del informe oficial.',
    duracion: '15 min',
    icono: '⚖️'
  },
  {
    slug: 'metodos-valoracion',
    numero: 2,
    titulo: 'Los 4 métodos de valoración',
    resumen: 'Comparación, coste, capitalización y residual: cuándo y cómo se aplica cada uno.',
    duracion: '20 min',
    icono: '🔢'
  },
  {
    slug: 'eco-vs-rics',
    numero: 3,
    titulo: 'ECO 805/2003 vs RICS Red Book',
    resumen: 'España vs estándar internacional. Cuándo necesitas cada norma y cómo obtener RICS.',
    duracion: '12 min',
    icono: '🌍'
  },
  {
    slug: 'programas-tasacion',
    numero: 4,
    titulo: 'Software de tasación: TasaWeb, ValorBI y más',
    resumen: 'Herramientas profesionales, bases de datos de comparables e IA aplicada.',
    duracion: '15 min',
    icono: '💻'
  },
  {
    slug: 'visita-tecnica',
    numero: 5,
    titulo: 'La visita técnica: medir, fotografiar, comprobar',
    resumen: 'Equipamiento, checklist completa y errores que cuestan honorarios.',
    duracion: '15 min',
    icono: '📋'
  },
  {
    slug: 'sostenibilidad-energetica',
    numero: 6,
    titulo: 'Sostenibilidad y riesgo climático (Reforma 2025)',
    resumen: 'Calificación energética como factor de valor, riesgo físico y riesgo de transición.',
    duracion: '15 min',
    icono: '🌱'
  },
  {
    slug: 'caso-practico-mostoles',
    numero: 7,
    titulo: 'Caso práctico: tasar vivienda en Móstoles',
    resumen: 'Workflow completo de 12 pasos: encargo, visita, análisis, IA y entrega.',
    duracion: '25 min',
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

export const TASACION_META: CursoMeta = {
  slug: 'tasacion',
  titulo: 'Tasación Inmobiliaria',
  color: '#C2185B',
  colorClaro: '#FCE4EC'
};
