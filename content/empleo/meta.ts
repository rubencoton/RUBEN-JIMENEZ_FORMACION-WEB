import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const EMPLEO_MODULOS: ModuloMeta[] = [
  {
    slug: 'como-leer',
    numero: 1,
    titulo: 'Cómo leer este informe',
    resumen: 'Metodología, semáforo de fiabilidad 🟢🟡🔴 y resumen ejecutivo. Empieza aquí.',
    duracion: '8 min',
    icono: '🧭'
  },
  {
    slug: 'portales-generalistas',
    numero: 2,
    titulo: 'Portales generalistas',
    resumen: 'InfoJobs 🟢, Indeed 🟢 y LinkedIn 🔴 (pendiente). Alto volumen, gratis para ti.',
    duracion: '10 min',
    icono: '🌐'
  },
  {
    slug: 'cazatalentos',
    numero: 3,
    titulo: 'Cazatalentos especializados',
    resumen: 'Michael Page 🟢, Hays 🟢, Randstad 🟢 y Robert Walters 🔴. Gratis para el candidato.',
    duracion: '12 min',
    icono: '🤝'
  },
  {
    slug: 'portal-sectorial',
    numero: 4,
    titulo: 'Portal sectorial: Construyendoempleo',
    resumen: 'La FLC opera el portal público del sector construcción. Respaldado por el SEPE. 100% gratis.',
    duracion: '8 min',
    icono: '🏗️'
  },
  {
    slug: 'colegios-y-descartar',
    numero: 5,
    titulo: 'Colegios profesionales y qué descartar',
    resumen: 'COAATM (tu colegio) 🟢, COAM (poco útil) y los tres que NO son bolsas: IFMA, MUSAAT, CGATE.',
    duracion: '10 min',
    icono: '🏛️'
  },
  {
    slug: 'por-puesto',
    numero: 6,
    titulo: 'Qué plataforma para cada puesto',
    resumen: 'Tabla maestra: CM, FM, PM y JP. Qué canal usas según el puesto que persigues.',
    duracion: '8 min',
    icono: '📊'
  },
  {
    slug: 'plan-de-accion',
    numero: 7,
    titulo: 'Tu plan de acción (Madrid + terapia)',
    resumen: 'Alta inicial, rutina semanal de 30 min/día y filtros por Madrid. Listo para hoy.',
    duracion: '10 min',
    icono: '🗓️'
  },
  {
    slug: 'fuentes-y-fiabilidad',
    numero: 8,
    titulo: 'Fuentes y fiabilidad (transparencia total)',
    resumen: '23 fuentes, 25 datos verificados: 21 confirmados, 4 descartados. Todo con trazabilidad.',
    duracion: '8 min',
    icono: '🔍'
  },
  {
    slug: 'conclusiones',
    numero: 9,
    titulo: 'Conclusiones (TFG)',
    resumen: 'Síntesis al estilo TFG. Las 7 conclusiones, el plan accionable y las líneas futuras.',
    duracion: '8 min',
    icono: '🎓'
  }
];

export const EMPLEO_META: CursoMeta = {
  slug: 'plataformas-empleo',
  titulo: 'Plataformas de Empleo',
  color: '#0277BD',
  colorClaro: '#E1F5FE'
};
