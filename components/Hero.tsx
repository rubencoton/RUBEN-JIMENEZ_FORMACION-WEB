'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-animado text-white py-24 px-6">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block bg-marca-amarillo text-marca-negro px-5 py-2 rounded-full font-extrabold mb-6 shadow-lg"
        >
          📚 Aula del Profesor Rubén Jiménez González
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg mb-5"
        >
          Formaciones <span className="subraya text-marca-negro">interactivas</span>
          <br />
          para Arquitecto Técnico
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-9 text-white/95"
        >
          Aprende jugando. Quizzes, retos, animaciones y material real del programa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/cursos"
            className="bg-white text-marca-naranja font-extrabold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition"
          >
            🎓 Empezar a aprender
          </Link>
          <Link
            href="/jugar"
            className="bg-marca-amarillo text-marca-negro font-extrabold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition"
          >
            🎮 Jugar a quizzes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
