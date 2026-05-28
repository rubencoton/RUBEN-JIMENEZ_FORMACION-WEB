import { CursoModulo } from '@/components/CursoModulo';
import { CE3X_META, CE3X_MODULOS } from '@/content/ce3x/meta';
import { CE3X_DATA } from '@/content/ce3x/modulos-data';

export function generateStaticParams() {
  return CE3X_MODULOS.map((m) => ({ modulo: m.slug }));
}

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  return <CursoModulo meta={CE3X_META} modulos={CE3X_MODULOS} data={CE3X_DATA} moduloSlug={modulo} />;
}
