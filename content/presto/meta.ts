import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const PRESTO_MODULOS: ModuloMeta[] = [
  {
    slug: 'conceptos-at-pem-pec',
    numero: 1,
    titulo: 'Conceptos AT: PEM, PEC y certificaciones',
    resumen: 'Las 4 siglas que maneja todo AT. Formula PEM a PEC con GG, BI e IVA. Tipos de medición y pliego de condiciones.',
    duracion: '20 min',
    icono: '📐'
  },
  {
    slug: 'acceso-software',
    numero: 2,
    titulo: 'Presto vs Arquímedes: elige tu herramienta',
    resumen: 'Comparativa real de los dos programas líderes. Cómo instalar Arquímedes gratis para autoformación.',
    duracion: '15 min',
    icono: '💻'
  },
  {
    slug: 'bases-datos-bc3',
    numero: 3,
    titulo: 'Bases de datos y formato BC3',
    resumen: 'FIEBDC-3, Generador CYPE, BDC ITeC. Estructura interna del archivo .bc3 y cómo adaptar precios a tu zona.',
    duracion: '20 min',
    icono: '🗄️'
  },
  {
    slug: 'mediciones-arquimedes',
    numero: 4,
    titulo: 'Mediciones en Arquímedes paso a paso',
    resumen: 'Crear obra, capítulos y partidas. Líneas de medición con deducciones. Importar desde Excel y BIM 5D.',
    duracion: '25 min',
    icono: '📏'
  },
  {
    slug: 'presupuesto-completo',
    numero: 5,
    titulo: 'Presupuesto: precios, GG y análisis',
    resumen: 'Descompuesto de precio unitario. Aplicar gastos generales y beneficio industrial. Sanidad check por euro/m2.',
    duracion: '22 min',
    icono: '💶'
  },
  {
    slug: 'documentacion-final',
    titulo: 'Documentación final entregable',
    numero: 6,
    resumen: 'Generar PDF, pliego automático, Excel y Word. Checklist antes de entregar. Plantilla con logo propio.',
    duracion: '18 min',
    icono: '📦'
  },
  {
    slug: 'certificaciones',
    numero: 7,
    titulo: 'Certificaciones mensuales de obra',
    resumen: 'Workflow mensual del AT. Retención, revisión de precios en obras largas y modificados con acta firmada.',
    duracion: '20 min',
    icono: '✅'
  },
  {
    slug: 'caso-practico-unifamiliar',
    numero: 8,
    titulo: 'Caso práctico: vivienda unifamiliar',
    resumen: 'Presupuesto completo end-to-end. 17 capítulos, PEM 265.000 euros, PEC 381.574 euros. Workflow en 7 pasos.',
    duracion: '35 min',
    icono: '🏠'
  },
  {
    slug: 'conclusiones',
    numero: 9,
    titulo: 'Conclusiones (TFG)',
    resumen: 'Síntesis, aplicación a tu perfil y valoración final.',
    duracion: '12 min',
    icono: '🎓'
  }
];

export const PRESTO_META: CursoMeta = {
  slug: 'presto-arquimedes',
  titulo: 'Presto y Arquímedes · Mediciones y Presupuestos',
  color: '#2E7D32',
  colorClaro: '#E8F5E9'
};
