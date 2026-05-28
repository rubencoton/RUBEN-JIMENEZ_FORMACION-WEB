import { CursoLanding } from '@/components/CursoLanding';
import { URBICAD_META, URBICAD_MODULOS } from '@/content/urbicad/meta';

export default function Page() {
  return <CursoLanding meta={URBICAD_META} modulos={URBICAD_MODULOS} />;
}
