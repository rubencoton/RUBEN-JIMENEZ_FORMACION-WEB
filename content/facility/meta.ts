import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const FACILITY_MODULOS: ModuloMeta[] = [
  {
    slug: 'que-es-un-fm',
    numero: 1,
    titulo: '¿Qué es un Facility Manager?',
    resumen: 'Definición ISO, 3 niveles del puesto, motores de crecimiento y quién contrata FM en España.',
    duracion: '15 min',
    icono: '🏢',
  },
  {
    slug: 'dia-a-dia',
    numero: 2,
    titulo: '¿Qué hace un FM cada día?',
    resumen: 'Jornada típica hora a hora, las 9 áreas de gestión y diferencia con Jefe de Obra.',
    duracion: '15 min',
    icono: '📋',
  },
  {
    slug: 'competencias-clave',
    numero: 3,
    titulo: 'Las 10 competencias clave',
    resumen: 'Gestión técnica, económica, negociación, liderazgo, normativa, ESG, KPIs, IoT y orientación al cliente.',
    duracion: '18 min',
    icono: '🎯',
  },
  {
    slug: 'conocimientos-tecnicos',
    numero: 4,
    titulo: 'Conocimientos técnicos imprescindibles',
    resumen: 'Instalaciones, climatización, PCI, ascensores, BMS, CAFM y BIM aplicado a FM.',
    duracion: '20 min',
    icono: '🔧',
  },
  {
    slug: 'conocimientos-gestion',
    numero: 5,
    titulo: 'Conocimientos de gestión',
    resumen: 'Presupuesto FM, OPEX vs CAPEX, contratos con SLA, KPIs ejecutivos y reporting a dirección.',
    duracion: '18 min',
    icono: '📊',
  },
  {
    slug: 'soft-skills',
    numero: 6,
    titulo: 'Soft skills que diferencian',
    resumen: 'Templanza en crisis, negociación BATNA, comunicación por stakeholder, priorización y mentalidad de servicio.',
    duracion: '15 min',
    icono: '🤝',
  },
  {
    slug: 'certificaciones',
    numero: 7,
    titulo: 'Certificaciones que aceleran tu carrera',
    resumen: 'IFMA FMP vs RICS APC vs IWFM, másteres en España y plan formativo recomendado por año.',
    duracion: '15 min',
    icono: '🏅',
  },
  {
    slug: 'mercado-sueldos',
    numero: 8,
    titulo: 'Mercado laboral y sueldos',
    resumen: 'Rangos salariales reales 2026, quién contrata, plan de 90 días y cómo negociar la primera oferta.',
    duracion: '18 min',
    icono: '💼',
  },
  {
    slug: 'fm-tu-mejor-puesto',
    numero: 9,
    titulo: '¿Por qué FM es tu mejor puesto?',
    resumen: '5 razones con datos: encaje del perfil AT+ADE, estrés 3/10, curva salarial y demanda +5% anual.',
    duracion: '15 min',
    icono: '🏆',
  },
  {
    slug: 'conclusiones',
    numero: 10,
    titulo: 'Conclusiones (TFG)',
    resumen: 'Síntesis, aplicación a tu perfil y valoración final.',
    duracion: '12 min',
    icono: '🎓',
  },
];

export const FACILITY_META: CursoMeta = {
  slug: 'facility-manager',
  titulo: 'Facility Manager · tu mejor puesto',
  color: '#283593',
  colorClaro: '#E8EAF6',
};
