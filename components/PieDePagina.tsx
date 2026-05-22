import { Logo } from '@/components/Logo';

export function PieDePagina() {
  const anio = new Date().getFullYear();
  return (
    <footer className="bg-marca-negro text-white py-10 mt-16">
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-3">
        <Logo size={56} fondo />
        <div className="text-marca-naranja font-extrabold text-lg">
          Profesor Rubén Jiménez González
        </div>
        <div className="text-white/80 text-sm">
          Arquitecto Técnico · Edificación · Project Management
        </div>
        <div className="text-white/50 text-xs">
          Material docente · {anio}
        </div>
      </div>
    </footer>
  );
}
