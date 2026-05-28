# SESSION-HANDOFF — RUBEN-JIMENEZ_FORMACION-WEB

> Arranque en frío. Trigger: **"Abre RUBEN-JIMENEZ_FORMACION-WEB"**.
> Lee: `CLAUDE.md` → este archivo → `README.md` → `app/` + `lib/cursos.ts`.

Última actualización: **2026-05-28**

---

## TL;DR

- **Qué es:** plataforma web interactiva de formaciones para Arquitecto Técnico (Rubén). Hermana de `RUBEN-JIMENEZ_FORMACION` (PDFs/temarios).
- **Estado:** **EN PRODUCCIÓN y VIVA.** Deploy OK, DNS OK, SSL OK, login OK.
- **URL:** `https://cursos.rubenjimenezgonzalez.com` · **contraseña `+ruben93`**.
- **Repo:** `rubencoton/RUBEN-JIMENEZ_FORMACION-WEB` (**público**, autorizado por el usuario para permitir el deploy).
- **Stack:** Next.js 15 (App Router, React 19) + TypeScript + Tailwind + Framer Motion. Dockerfile standalone.
- **Audiencia:** una persona (Rubén) con TDAH + dislexia → cero párrafos largos, mucho color, juegos.

---

## Estado vivo (2026-05-28)

**HECHO**
- Deploy en producción funcionando (repo público + Coolify directo).
- DNS Squarespace A `cursos` → `187.77.166.84` validado. SSL Let's Encrypt activo.
- Login con contraseña `+ruben93`: `middleware.ts` + `/login` + `/api/login` (cookie `rjg_auth` httpOnly 30 días, comparación constante).
- Logo de construcción (casco naranja `components/Logo.tsx`), paleta Ferrovial (blanco/negro/naranja) en `tailwind.config.ts` (`marca-*`).
- Páginas vivas: `/` (home), `/cursos`, `/cursos/revit`, `/cursos/bim-360`, `/jugar`, `/ia-en-obra`, `/futuro`, `/puesto-ideal`.
- ~15 componentes interactivos: `Quiz`, `Flashcard`, `Acordeon`, `Caja` (9 tipos), `Drag`, `Pictograma`/`GridPictogramas`/`Versus`/`Timeline`, `GraficoBarras`/`GraficoLinea`/`GraficoMultiLinea`, `Hero`, `BarraSuperior`, `PieDePagina`, `CajaModulo`.

**PENDIENTE**
- **App interactiva propia por cada formación** que aún solo tiene PDF: MS Project, Presto, AutoCAD, CE3X, UrbiCAD, Tasación, Facility Manager. (Revit, BIM360, Futuro, Puesto Ideal ya tienen página).
- Añadir sección **Conclusiones (TFG)** interactiva a cada curso, en paralelo a los `97_conclusiones.md` del repo hermano.
- Auditoría transversal de interactividad (que TODO curso tenga quiz/flashcards/gráficos, no solo texto).
- (No bloqueante) Sustituir esquemas PIL por capturas REALES de programas.

**SIGUIENTE PASO**
Construir las 7 páginas de curso que faltan reutilizando los componentes existentes y el contenido markdown del repo hermano (`../RUBEN-JIMENEZ_FORMACION/docs/temarios/<slug>/`).

---

## Infra (Coolify + Hostinger)

| Recurso | Valor |
|---------|-------|
| VPS IP | `187.77.166.84` |
| Panel Coolify | `http://187.77.166.84:8000` |
| **App UUID ACTIVA** | `uihfrun3v6d5v6zsf25tv1dp` |
| App antigua (borrada) | `gk7o1gn3pooz1dse3ttxmpgl` |
| Project UUID | `ce3rq1cfn7nd4kf1hm0itua2` |
| Environment UUID | `ml0v7qglwwmwmy0wxuk7s208` |
| Server UUID | `k23yfvymnopn68fcjfaehvqy` |
| Token Coolify | `7|O5zo8qIFGLZXF3Fh4NZ4BrHk2cP6ikpJBMZz5oQ0283a7dbe` |

**Disparar deploy manual:**
```bash
curl -X POST "http://187.77.166.84:8000/api/v1/deploy?uuid=uihfrun3v6d5v6zsf25tv1dp&force=true" \
  -H "Authorization: Bearer 7|O5zo8qIFGLZXF3Fh4NZ4BrHk2cP6ikpJBMZz5oQ0283a7dbe"
```
> Push a `main` dispara deploy automático (webhook). El comando de arriba es para forzar.

---

## Build local

```bash
cd RUBEN-JIMENEZ_FORMACION-WEB
npm install
npm run dev      # http://localhost:3000  (NO usar npm start: standalone falla en local)
```
Para preview sin navegador local: usar Claude Preview MCP.

---

## Reglas

1. **Cero jerga técnica en la UI** (nada de "slug", "kebab-case", "FORMACION-WEB"). Header: *Documentación del Profesor Rubén Jiménez González*.
2. **Cero enlaces a Drive/GitHub** en la UI pública. Es material docente.
3. **Trazabilidad:** cada cambio gordo → commit descriptivo + actualizar `README.md`.
4. **Idioma:** TODO en español, tildes y ñ. Componentes en español.
5. **Colores:** paleta `marca-*` (naranja `#F57C00`, naranjaOscuro `#E65100`, amarillo `#FFB300`, negro `#0F0F0F`, carbon `#1A1A1A`, blanco). Ferrovial.
6. **Push directo a main OK** (no exige PR).
7. **NUNCA subir `.env.local`** (contraseña). Solo `APP_PASSWORD` en Coolify.

---

## Recuperación total

Si el hilo se rompe: abrir Claude Code, decir *"Abre RUBEN-JIMENEZ_FORMACION-WEB"*. Claude lee `CLAUDE.md` + este archivo + `README.md` y reanuda en el SIGUIENTE PASO. El estado de contenido (qué cursos, qué Drive) está en el handoff del repo hermano `RUBEN-JIMENEZ_FORMACION`.
