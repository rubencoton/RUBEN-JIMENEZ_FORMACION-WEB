import { CursoModulo } from '@/components/CursoModulo';
import { TASACION_META, TASACION_MODULOS } from '@/content/tasacion/meta';
import { TASACION_DATA } from '@/content/tasacion/modulos-data';

export function generateStaticParams() {
  return TASACION_MODULOS.map((m) => ({ modulo: m.slug }));
}

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  return <CursoModulo meta={TASACION_META} modulos={TASACION_MODULOS} data={TASACION_DATA} moduloSlug={modulo} />;
}
