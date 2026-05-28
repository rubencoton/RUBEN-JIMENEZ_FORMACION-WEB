import { CursoLanding } from '@/components/CursoLanding';
import { TASACION_META, TASACION_MODULOS } from '@/content/tasacion/meta';

export default function Page() {
  return <CursoLanding meta={TASACION_META} modulos={TASACION_MODULOS} />;
}
