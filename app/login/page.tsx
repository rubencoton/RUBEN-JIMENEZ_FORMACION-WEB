'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get('next') || '/';

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const r = await fetch('/api/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ password })
      });
      if (r.ok) {
        router.push(next);
        router.refresh();
      } else {
        const j = await r.json().catch(() => ({}));
        setError(j.error || 'Error al iniciar sesión');
        setPassword('');
      }
    } catch {
      setError('Error de red');
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 max-w-md w-full"
    >
      <div className="flex flex-col items-center mb-6">
        <Logo size={88} fondo />
        <h1 className="font-extrabold text-marca-carbon text-2xl mt-4 text-center">
          Documentación del Profesor
        </h1>
        <h2 className="font-extrabold text-marca-rojo text-2xl text-center">
          Rubén Jiménez González
        </h2>
        <p className="text-sm text-marca-carbon/70 text-center mt-3">
          Material docente protegido. Introduce la contraseña.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="pw" className="block text-xs font-extrabold uppercase tracking-wider text-marca-carbon/70 mb-2">
            🔒 Contraseña
          </label>
          <input
            id="pw"
            type="password"
            autoComplete="current-password"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-4 rounded-xl border-2 border-marca-carbon/15 focus:border-marca-rojo focus:outline-none text-lg font-mono tracking-wider transition"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-marca-rojo/10 border-l-4 border-marca-rojo text-marca-rojo px-4 py-3 rounded-r-lg font-semibold text-sm"
          >
            ❌ {error}
          </motion.div>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="w-full bg-marca-rojo text-white font-extrabold py-4 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '⏳ Verificando…' : '🚪 Entrar'}
        </button>
      </form>

      <div className="text-center text-xs text-marca-carbon/40 mt-6">
        Acceso privado · cookie 30 días
      </div>
    </motion.div>
  );
}

export default function LoginPage() {
  return (
    <main
      className="min-h-screen w-full grid place-items-center p-5"
      style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1565C0 50%, #2E7D32 100%)' }}
    >
      <Suspense fallback={<div className="text-white">Cargando…</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
