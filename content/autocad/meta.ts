import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const AUTOCAD_MODULOS: ModuloMeta[] = [
  {
    slug: 'que-cambio-desde-2012',
    numero: 1,
    titulo: 'Qué cambió desde 2012 · visión global',
    resumen: 'Hitos 2013-2027, lo que sigue igual y los 5 cambios clave que debes saber.',
    duracion: '15 min',
    icono: '🧭'
  },
  {
    slug: 'interfaz-ribbon-vs-clasica',
    numero: 2,
    titulo: 'Interfaz Ribbon vs clásica',
    resumen: 'Anatomía de la pantalla moderna, recuperar el espacio clásico y workspaces.',
    duracion: '20 min',
    icono: '🖥️'
  },
  {
    slug: 'comandos-esenciales',
    numero: 3,
    titulo: 'Comandos esenciales · lo que sigue + variaciones',
    resumen: 'Los 50 atajos que ya dominas y las variaciones nuevas: TRIM Quick, DIM auto, QUICKMEASURE.',
    duracion: '20 min',
    icono: '⌨️'
  },
  {
    slug: 'novedades-2014-2027',
    numero: 4,
    titulo: 'Novedades 2014-2027 · Sheet Set, Smart Blocks, Trace',
    resumen: 'Sheet Set Manager, Architecture Toolset, Smart Blocks, PDFIMPORT, Trace y Markup Import.',
    duracion: '25 min',
    icono: '🆕'
  },
  {
    slug: 'ia-assistant-2027',
    numero: 5,
    titulo: 'Autodesk AI Assistant 2027 · IA contextual',
    resumen: 'Qué puede hacer el asistente de IA integrado, cómo usarlo y cómo combinarlo con Claude.',
    duracion: '20 min',
    icono: '🤖'
  },
  {
    slug: 'caso-practico-planos-obra',
    numero: 6,
    titulo: 'Caso práctico · planos de obra de una vivienda',
    resumen: 'Workflow real: setup, bloques, cotación, Sheet Set Manager y PUBLISH a PDF visado.',
    duracion: '30 min',
    icono: '🏗️'
  },
  {
    slug: 'conclusiones',
    numero: 7,
    titulo: 'Conclusiones (TFG)',
    resumen: 'Síntesis, aplicación a tu perfil y valoración final.',
    duracion: '12 min',
    icono: '🎓'
  }
];

export const AUTOCAD_META: CursoMeta = {
  slug: 'autocad',
  titulo: 'AutoCAD 2027 · Refresco',
  color: '#6A1B9A',
  colorClaro: '#F3E5F5'
};
