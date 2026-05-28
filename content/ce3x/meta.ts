import type { ModuloMeta } from '@/content/revit/meta';
import type { CursoMeta } from '@/lib/cursos';

export const CE3X_MODULOS: ModuloMeta[] = [
  {
    slug: 'conceptos-clave',
    numero: 1,
    titulo: 'Conceptos clave: U, demanda y consumo',
    resumen: 'La cadena U → demanda → consumo → emisiones → letra A-G. COP, EER, zonas climáticas.',
    duracion: '15 min',
    icono: '♻️'
  },
  {
    slug: 'marco-normativo',
    numero: 2,
    titulo: 'Marco normativo: CTE DB-HE y RD 390/2021',
    resumen: '¿Qué exige el CTE, cuándo es obligatorio certificar y quién puede emitir certificados?',
    duracion: '12 min',
    icono: '📜'
  },
  {
    slug: 'descarga-instalacion',
    numero: 3,
    titulo: 'Descarga e instalación de CE3X y HULC',
    resumen: 'Descargar solo desde IDAE. Instalación paso a paso. Problemas frecuentes y cómo resolverlos.',
    duracion: '10 min',
    icono: '💾'
  },
  {
    slug: 'ce3x-paso-a-paso',
    numero: 4,
    titulo: 'CE3X paso a paso: edificio existente',
    resumen: 'Flujo completo: datos administrativos, geometría, cerramientos, huecos, instalaciones y calificación A-G.',
    duracion: '20 min',
    icono: '🪟'
  },
  {
    slug: 'hulc-paso-a-paso',
    numero: 5,
    titulo: 'HULC paso a paso: obra nueva',
    resumen: 'Geometría 3D, capas de cerramiento, espacios, CALENER VYP y verificación HE0-HE1-HE4.',
    duracion: '20 min',
    icono: '🏛️'
  },
  {
    slug: 'medidas-mejora',
    numero: 6,
    titulo: 'Medidas de mejora y rehabilitación energética',
    resumen: 'Las 5 medidas más rentables, ROI, subvenciones NextGen y cómo multiplicar el ticket por 5.',
    duracion: '15 min',
    icono: '🛠️'
  },
  {
    slug: 'registro-honorarios',
    numero: 7,
    titulo: 'Registro oficial y honorarios',
    resumen: 'Cómo registrar en tu CCAA, honorarios de mercado, captación de clientes y aspectos fiscales.',
    duracion: '12 min',
    icono: '💶'
  },
  {
    slug: 'caso-practico',
    numero: 8,
    titulo: 'Caso práctico: vivienda unifamiliar',
    resumen: 'Flujo real end-to-end: visita, CE3X, calificación E, propuesta SATE más aerotermia y facturación.',
    duracion: '20 min',
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

export const CE3X_META: CursoMeta = {
  slug: 'ce3x-hulc',
  titulo: 'CE3X y HULC · Certificación Energética',
  color: '#00838F',
  colorClaro: '#E0F7FA'
};
