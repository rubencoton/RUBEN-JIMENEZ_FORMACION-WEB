# Plans — RUBEN-JIMENEZ_FORMACION-WEB

## Hoja de ruta corta

### 🎯 Sprint 1 — Curso Revit en vivo

- [x] Scaffold Next.js + Tailwind + Framer Motion
- [x] 12 componentes interactivos
- [x] Home + Catálogo + ficha Curso Revit + módulos 1, 2 dedicados
- [x] 10 módulos dinámicos Revit
- [x] Página `/jugar` concurso general
- [x] Imágenes esquemáticas placeholder (PIL)
- [x] Build OK + dev server OK
- [x] Repo GitHub privado + push
- [x] App Coolify creada con dominio
- [ ] Resolver bloqueador deploy (repo privado vs Coolify público)
- [ ] DNS Squarespace A `cursos` → `187.77.166.84`
- [ ] LetsEncrypt OK
- [ ] Capturas REALES de Revit (sustituir placeholders)

### 🎯 Sprint 2 — Cursos restantes

- [ ] AutoCAD 2027 (8 módulos)
- [ ] Microsoft Project (14 módulos · reusar contenido FORMACION)
- [ ] Presto · Arquímedes (8 módulos)
- [ ] UrbiCAD · SyS (7 módulos)
- [ ] CE3X · HULC (8 módulos)
- [ ] Tasación Inmobiliaria (7 módulos)

### 🎯 Sprint 3 — BIM 360 (proyecto nuevo del usuario)

- [ ] Curso BIM 360 / ACC completo
- [ ] Casos prácticos en obra
- [ ] Workflows con Revit

### 🎯 Sprint 4 — Calidad

- [ ] Auditoría TDAH/dislexia transversal
- [ ] Test interactivo de todos los componentes
- [ ] Performance Lighthouse > 90
- [ ] Accesibilidad WCAG AA
- [ ] PWA installable opcional

## Decisiones

| Decisión | Por qué |
|----------|---------|
| Next.js 15 App Router | RSC, build estático rápido, ecosistema React 19 |
| Tailwind v3 (no v4) | Estable, ecosistema completo |
| Framer Motion | Animaciones de calidad sin esfuerzo |
| Standalone Docker | Coolify autodetect, imagen ligera |
| Subdominio `cursos` | Más corto que `formacion`, más claro |
| Repo privado | Regla `feedback_repos_privados` |
| Imágenes PIL placeholder primero | Hasta que Rubén abra Revit y capturemos real |

## Bloqueos abiertos

1. **Coolify + repo privado**: necesita deploy key SSH (manual UI) o GitHub App configurada.
2. **DNS Squarespace**: Rubén añade el registro A manualmente.

## Hermanos del proyecto

| Proyecto | Rol |
|----------|-----|
| `RUBEN-JIMENEZ_FORMACION` | PDFs + dashboard estático |
| `RUBEN-COTON_VPS` | Hub Coolify/Hostinger |
| `RUBEN-JIMENEZ_EDIFICACION` | Necesidades formativas de ofertas |
