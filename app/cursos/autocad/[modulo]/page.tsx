import { CursoModulo } from '@/components/CursoModulo';
import { AUTOCAD_META, AUTOCAD_MODULOS } from '@/content/autocad/meta';
import { AUTOCAD_DATA } from '@/content/autocad/modulos-data';

export function generateStaticParams() {
  return AUTOCAD_MODULOS.map((m) => ({ modulo: m.slug }));
}

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  return <CursoModulo meta={AUTOCAD_META} modulos={AUTOCAD_MODULOS} data={AUTOCAD_DATA} moduloSlug={modulo} />;
}
