import { CursoModulo } from '@/components/CursoModulo';
import { PRESTO_META, PRESTO_MODULOS } from '@/content/presto/meta';
import { PRESTO_DATA } from '@/content/presto/modulos-data';

export function generateStaticParams() {
  return PRESTO_MODULOS.map((m) => ({ modulo: m.slug }));
}

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  return <CursoModulo meta={PRESTO_META} modulos={PRESTO_MODULOS} data={PRESTO_DATA} moduloSlug={modulo} />;
}
