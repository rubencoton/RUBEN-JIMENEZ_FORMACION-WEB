import { CursoModulo } from '@/components/CursoModulo';
import { URBICAD_META, URBICAD_MODULOS } from '@/content/urbicad/meta';
import { URBICAD_DATA } from '@/content/urbicad/modulos-data';

export function generateStaticParams() {
  return URBICAD_MODULOS.map((m) => ({ modulo: m.slug }));
}

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  return <CursoModulo meta={URBICAD_META} modulos={URBICAD_MODULOS} data={URBICAD_DATA} moduloSlug={modulo} />;
}
