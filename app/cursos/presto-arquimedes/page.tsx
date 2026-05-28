import { CursoLanding } from '@/components/CursoLanding';
import { PRESTO_META, PRESTO_MODULOS } from '@/content/presto/meta';

export default function Page() {
  return <CursoLanding meta={PRESTO_META} modulos={PRESTO_MODULOS} />;
}
