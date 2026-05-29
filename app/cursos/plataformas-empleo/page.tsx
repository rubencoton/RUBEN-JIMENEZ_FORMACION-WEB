import { CursoLanding } from '@/components/CursoLanding';
import { EMPLEO_META, EMPLEO_MODULOS } from '@/content/empleo/meta';

export default function Page() {
  return <CursoLanding meta={EMPLEO_META} modulos={EMPLEO_MODULOS} />;
}
