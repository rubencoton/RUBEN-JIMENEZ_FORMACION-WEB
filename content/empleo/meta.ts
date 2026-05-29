import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const EMPLEO_MODULOS: ModuloMeta[] = [
  {
    slug: 'como-leer',
    numero: 1,
    titulo: 'Cómo leer este informe',
    resumen: 'Metodología, semáforo de fiabilidad 🟢🟡🔴 y resumen ejecutivo. 2 investigaciones, 29/05/2026. Empieza aquí.',
    duracion: '8 min',
    icono: '🧭'
  },
  {
    slug: 'portales-generalistas',
    numero: 2,
    titulo: 'Portales generalistas',
    resumen: 'InfoJobs 🟢, Indeed 🟢 y LinkedIn 🟢 VERIFICADO (2ª investigación). Filtro nativo híbrido/remoto confirmado. Gratis para ti.',
    duracion: '10 min',
    icono: '🌐'
  },
  {
    slug: 'cazatalentos',
    numero: 3,
    titulo: 'Cazatalentos especializados',
    resumen: 'Michael Page 🟢 (vertical FM dedicada), Hays 🟢 (guía salarial), Randstad 🟢 y Robert Walters 🔴. Gratis para el candidato.',
    duracion: '12 min',
    icono: '🤝'
  },
  {
    slug: 'portal-sectorial',
    numero: 4,
    titulo: 'Portal sectorial: Construyendoempleo',
    resumen: 'La FLC opera el portal público del sector construcción. Respaldado por el SEPE. 100% gratis. Ideal para JP y CM.',
    duracion: '8 min',
    icono: '🏗️'
  },
  {
    slug: 'colegios-y-descartar',
    numero: 5,
    titulo: 'Colegios profesionales y qué descartar',
    resumen: 'COAATM (tu colegio) 🟢. Tecnoempleo DESCARTADO (solo IT). Empleo público Comunidad de Madrid 🟢 añadido. IFMA, MUSAAT, CGATE no son bolsas.',
    duracion: '10 min',
    icono: '🏛️'
  },
  {
    slug: 'por-puesto',
    numero: 6,
    titulo: 'Qué plataforma para cada puesto',
    resumen: 'Tabla maestra actualizada: FM concentrado en LinkedIn (~75 Madrid) + Michael Page vertical FM. Empresas FM: Centauro, Prosegur, Savills.',
    duracion: '8 min',
    icono: '📊'
  },
  {
    slug: 'plan-de-accion',
    numero: 7,
    titulo: 'Tu plan de acción (Madrid + terapia)',
    resumen: 'Alta inicial, rutina semanal 30 min/día. Filtros de modalidad nativos confirmados en LinkedIn e InfoJobs. Listo para hoy.',
    duracion: '10 min',
    icono: '🗓️'
  },
  {
    slug: 'fuentes-y-fiabilidad',
    numero: 8,
    titulo: 'Fuentes y fiabilidad (transparencia total)',
    resumen: '2 investigaciones, 22 fuentes, 25 datos: 22 confirmados, 3 descartados. Pendientes 🔴: precio Premium, Construible/Idealista, Ayto Madrid.',
    duracion: '8 min',
    icono: '🔍'
  },
  {
    slug: 'conclusiones',
    numero: 9,
    titulo: 'Conclusiones (TFG)',
    resumen: 'Síntesis al estilo TFG. LinkedIn ahora plataforma TOP. FM = LinkedIn + Michael Page. Plan accionable y líneas futuras.',
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
