import { CursoLanding } from '@/components/CursoLanding';
import { MSPROJECT_META, MSPROJECT_MODULOS } from '@/content/msproject/meta';

export default function Page() {
  return <CursoLanding meta={MSPROJECT_META} modulos={MSPROJECT_MODULOS} />;
}
