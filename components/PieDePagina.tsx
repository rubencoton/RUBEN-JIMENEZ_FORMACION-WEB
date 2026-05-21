export function PieDePagina() {
  const anio = new Date().getFullYear();
  return (
    <footer className="bg-marca-carbon text-white py-10 mt-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-marca-amarillo font-extrabold text-lg mb-1">
          Profesor Rubén Jiménez González
        </div>
        <div className="text-white/80 text-sm mb-3">
          Arquitecto Técnico · Edificación · Project Management
        </div>
        <div className="text-white/50 text-xs">
          Material docente · {anio}
        </div>
      </div>
    </footer>
  );
}
