# SESSION-HANDOFF — RUBEN-JIMENEZ_FORMACION-WEB

Actualizado: 2026-05-21

## Estado vivo

**HECHO**
- Scaffold Next.js 15 + TypeScript + Tailwind + Framer Motion.
- 19 páginas estáticas generadas (`npm run build` OK).
- 8 tarjetas de cursos en home.
- Curso Revit completo: 12 módulos (2 dedicados + 10 dinámicos data-driven).
- 12 componentes interactivos: Quiz, Flashcard, Acordeon, Caja(9 tipos), ZonaImagen, OrdenarPasos, BarraProgreso, Hero, TarjetaCurso, BarraSuperior, PieDePagina, CajaModulo.
- Página `/jugar` con concurso general (8 preguntas mezcladas).
- Imágenes esquemáticas Revit generadas con PIL (`scripts/generate_placeholders.py`).
- Repo GitHub privado `rubencoton/RUBEN-JIMENEZ_FORMACION-WEB` creado y push inicial.
- Proyecto Coolify creado: UUID `ce3rq1cfn7nd4kf1hm0itua2`.
- App Coolify creada: UUID `gk7o1gn3pooz1dse3ttxmpgl` con dominio `cursos.rubenjimenezgonzalez.com`.
- Memoria persistente actualizada (`project_ruben_jimenez_formacion_web.md` enlazado en MEMORY.md).

**PENDIENTE**
- **Bloqueador 1**: Coolify usa endpoint público y el repo es privado → el clone fallará. Opciones:
  - Hacer repo público (requiere confirmación del usuario, regla `feedback_repos_privados`).
  - Crear deploy key SSH manual desde Coolify UI y enlazarla a GitHub.
  - Usar la GitHub App de Coolify si está conectada.
- **Bloqueador 2**: DNS Squarespace falta el registro A:
  - Tipo `A` · Host `cursos` · Valor `187.77.166.84`.
  - Lo añade Rubén manualmente en panel Squarespace.
- Sustituir placeholders PIL por capturas REALES de Revit (Rubén lo abrirá).
- Crear contenido para los otros 6 cursos (AutoCAD, MS Project, Presto, UrbiCAD, CE3X, Tasación).
- Crear curso BIM 360 (carpeta nueva que prepara el usuario).
- Auditoría TDAH/dislexia transversal cuando todos los cursos estén.

**SIGUIENTE PASO**
1. Resolver bloqueador deploy (confirmar repo público vs deploy key).
2. Pedir al usuario que añada registro DNS A en Squarespace.
3. Comprobar deploy en Coolify.
4. Validar `https://cursos.rubenjimenezgonzalez.com` con LetsEncrypt.

## URLs vivas

- Local dev: `http://localhost:21907` (Claude Preview)
- GitHub: `https://github.com/rubencoton/RUBEN-JIMENEZ_FORMACION-WEB`
- Coolify panel: `http://187.77.166.84:8000`
- Dominio público (cuando DNS + deploy listos): `https://cursos.rubenjimenezgonzalez.com`

## IDs Coolify

- Project UUID: `ce3rq1cfn7nd4kf1hm0itua2`
- Environment UUID: `ml0v7qglwwmwmy0wxuk7s208`
- Application UUID: `gk7o1gn3pooz1dse3ttxmpgl`
- Server UUID: `k23yfvymnopn68fcjfaehvqy`

## Recuperación

Si hilo se rompe, abrir nuevo Claude Code, decir *"Abre RUBEN-JIMENEZ_FORMACION-WEB"*.
Claude leerá `CLAUDE.md` + `SESSION-HANDOFF.md` + `README.md` y reanudará en el bloqueador 1 o 2.
