import { CursoLanding } from '@/components/CursoLanding';
import { FACILITY_META, FACILITY_MODULOS } from '@/content/facility/meta';

export default function Page() {
  return <CursoLanding meta={FACILITY_META} modulos={FACILITY_MODULOS} />;
}
