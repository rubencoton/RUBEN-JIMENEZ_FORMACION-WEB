import { CursoModulo } from '@/components/CursoModulo';
import { FACILITY_META, FACILITY_MODULOS } from '@/content/facility/meta';
import { FACILITY_DATA } from '@/content/facility/modulos-data';

export function generateStaticParams() {
  return FACILITY_MODULOS.map((m) => ({ modulo: m.slug }));
}

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  return <CursoModulo meta={FACILITY_META} modulos={FACILITY_MODULOS} data={FACILITY_DATA} moduloSlug={modulo} />;
}
