# CLAUDE.md — RUBEN-JIMENEZ_FORMACION-WEB

Última actualización: 2026-05-21

## Qué es este proyecto

**Plataforma web interactiva** de formaciones para Arquitecto Técnico. Hermana del repositorio
`RUBEN-JIMENEZ_FORMACION` (que aloja PDFs y dashboard estático).

- Dominio: `cursos.rubenjimenezgonzalez.com`
- Stack: Next.js 15 + TypeScript + Tailwind + Framer Motion
- Despliegue: VPS Hostinger via Coolify (Dockerfile standalone)
- Audiencia: una persona (Rubén) con TDAH + dislexia → cero párrafos largos, mucho color, juegos

## Trigger de recuperación

> *"Abre RUBEN-JIMENEZ_FORMACION-WEB"*

Claude lee en este orden:
1. `CLAUDE.md` (este archivo) — 30 seg.
2. `README.md` — visión completa.
3. `app/` — estructura de páginas.
4. `lib/cursos.ts` + `content/revit/meta.ts` — catálogo y módulos.

## Reglas

1. **Cero menciones técnicas en UI**: jamás se ve "kebab-case", "slug", "FORMACION-WEB", "TDAH-friendly".
   El header es **Documentación del Profesor Rubén Jiménez González**, sin más.
2. **Cero enlaces a Drive/GitHub** en la UI pública. Es material docente para alumnos, no para devs.
3. **Trazabilidad**: cada cambio gordo → commit descriptivo + actualizar `README.md`.
4. **Idioma**: TODO en español. Componentes en español (Quiz, Flashcard, Caja, Acordeon, etc.).
5. **Colores**: paleta `marca-*` definida en `tailwind.config.ts`. Rojo principal, amarillo de acento.
6. **Push directo a main**: este proyecto no exige PR. Push directo OK.

## Proyectos hermanos

| Proyecto | Rol |
|----------|-----|
| `RUBEN-JIMENEZ_FORMACION` | Repositorio de PDFs/temarios (markdown). Misma carpeta padre. Puede importarse contenido de allí. |
| `RUBEN-COTON_VPS` | Hub central VPS. De ahí saca `.env` con tokens Coolify/Hostinger. |
| `RUBEN-JIMENEZ_EDIFICACION` | Define qué cursos urgen según ofertas activas. |

## Despliegue (Coolify)

App en Coolify: por crear con nombre `rjg-cursos`.
Dominio asignado: `https://cursos.rubenjimenezgonzalez.com`.
Dockerfile detectado automáticamente.

## DNS pendiente (manual del usuario)

En Squarespace DNS de `rubenjimenezgonzalez.com`, añadir:

| Tipo | Host | Valor |
|------|------|-------|
| A | `cursos` | `187.77.166.84` |

## Quick build local

```bash
cd RUBEN-JIMENEZ_FORMACION-WEB
npm install
npm run dev
# http://localhost:3000
```

## Memorias relevantes

- `project_ruben_jimenez_formacion.md` — proyecto hermano
- `project_ruben_coton_vps.md` — VPS hub
- `feedback_quick_connect_pattern.md` — patrón de arranque
- `feedback_trazabilidad_jimenez_edificacion.md` — commits + push tras cada bloque
