import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function BarraSuperior() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b-4 border-marca-rojo shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <Logo size={44} />
          <div className="leading-tight">
            <div className="font-bold text-marca-carbon text-sm sm:text-base group-hover:text-marca-rojo transition">
              Documentación del Profesor
            </div>
            <div className="text-marca-rojo font-bold text-base sm:text-lg">
              Rubén Jiménez González
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm font-semibold">
          <Link href="/" className="px-3 py-2 rounded-lg hover:bg-marca-amarillo/30 transition">
            Inicio
          </Link>
          <Link href="/cursos" className="px-3 py-2 rounded-lg hover:bg-marca-amarillo/30 transition">
            Cursos
          </Link>
          <Link href="/ia-en-obra" className="px-3 py-2 rounded-lg hover:bg-marca-amarillo/30 transition">
            🚀 IA en obra
          </Link>
          <Link href="/futuro" className="px-3 py-2 rounded-lg hover:bg-marca-amarillo/30 transition">
            🔮 Próx 50 años
          </Link>
          <Link href="/jugar" className="px-3 py-2 rounded-lg bg-marca-rojo text-white hover:bg-marca-rojo/90 transition">
            🎮 Jugar
          </Link>
        </nav>
      </div>
    </header>
  );
}
