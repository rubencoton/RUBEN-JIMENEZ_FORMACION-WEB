import { CursoModulo } from '@/components/CursoModulo';
import { EMPLEO_META, EMPLEO_MODULOS } from '@/content/empleo/meta';
import { EMPLEO_DATA } from '@/content/empleo/modulos-data';

export function generateStaticParams() {
  return EMPLEO_MODULOS.map((m) => ({ modulo: m.slug }));
}

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  return <CursoModulo meta={EMPLEO_META} modulos={EMPLEO_MODULOS} data={EMPLEO_DATA} moduloSlug={modulo} />;
}
