import { CursoLanding } from '@/components/CursoLanding';
import { CE3X_META, CE3X_MODULOS } from '@/content/ce3x/meta';

export default function Page() {
  return <CursoLanding meta={CE3X_META} modulos={CE3X_MODULOS} />;
}
