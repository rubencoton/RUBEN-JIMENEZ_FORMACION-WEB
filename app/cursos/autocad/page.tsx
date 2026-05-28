import { CursoLanding } from '@/components/CursoLanding';
import { AUTOCAD_META, AUTOCAD_MODULOS } from '@/content/autocad/meta';

export default function Page() {
  return <CursoLanding meta={AUTOCAD_META} modulos={AUTOCAD_MODULOS} />;
}
