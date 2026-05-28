import { CursoModulo } from '@/components/CursoModulo';
import { MSPROJECT_META, MSPROJECT_MODULOS } from '@/content/msproject/meta';
import { MSPROJECT_DATA } from '@/content/msproject/modulos-data';

export function generateStaticParams() {
  return MSPROJECT_MODULOS.map((m) => ({ modulo: m.slug }));
}

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  return <CursoModulo meta={MSPROJECT_META} modulos={MSPROJECT_MODULOS} data={MSPROJECT_DATA} moduloSlug={modulo} />;
}
