# CHANGELOG — RUBEN-JIMENEZ_FORMACION-WEB

## [0.4.0] · 2026-05-29

### Añadido
- **Curso/informe "Plataformas de Empleo"** (`/cursos/plataformas-empleo`): dónde buscar trabajo de CM/FM/PM/Jefe de Producción en Madrid.
- 9 módulos interactivos con **fuentes y semáforo de fiabilidad** (🟢🟡🔴), datos descartados marcados con honestidad, y módulo de Conclusiones (TFG).
- Basado en investigación deep-research (21 datos confirmados / 4 descartados).
- Nueva tarjeta en el catálogo (`lib/cursos.ts`). Build OK (114 páginas). Desplegado y verificado en vivo.

## [0.3.0] · 2026-05-28

### Añadido
- **7 cursos nuevos interactivos** (antes solo tenían PDF): Facility Manager, Microsoft Project, AutoCAD 2027, Presto y Arquímedes, UrbiCAD Seguridad y Salud, CE3X y HULC, Tasación Inmobiliaria.
- Cada curso: landing + módulos data-driven con bloques visuales, flashcards, quiz y un **módulo final de Conclusiones (TFG)**.
- Componentes genéricos reutilizables `CursoLanding` y `CursoModulo` (una sola implementación para todos los cursos data-driven).
- **Facility Manager** añadido al catálogo (`lib/cursos.ts`) como curso destacado nº 1.

### Resultado
- Las formaciones del catálogo son ahora **100% interactivas**: cada una tiene su propia app (Revit y BIM 360 ya la tenían; ahora también las 7 nuevas).

## [0.2.0] · 2026-05-21

### Desplegado en producción ✅

- App live en VPS Hostinger (187.77.166.84) via Coolify
- Deploy key SSH configurada (repo sigue privado)
- Container running, HTML servido correctamente
- Pendiente solo DNS Squarespace: A record `cursos -> 187.77.166.84`

### Añadido

- Curso BIM 360 / ACC completo: 10 módulos con workflow REAL de obra (issues, partidas, no-proforma, 150 repasos/vivienda, Coordinate, Cost)
- Sección IA + Cloud en obra (transversal): 5 casos aplicables HOY
- Nuevo enlace "🚀 IA en obra" en BarraSuperior
- Carpeta Drive BIM 360 verificada y registrada en connections.json del proyecto hermano FORMACION

### Datos Coolify finales

- Project UUID: `ce3rq1cfn7nd4kf1hm0itua2`
- App UUID: `uihfrun3v6d5v6zsf25tv1dp`
- Private key UUID: `cvnphbn3a4kns065yrld310g`
- Deploy completado: `r272u4m5nz4f3q94oulffeds`

## [0.1.0] · 2026-05-21

### Añadido (versión inicial)

- Scaffold Next.js 15 + TypeScript + Tailwind + Framer Motion + Dockerfile standalone
- 12 componentes reutilizables
- Curso Revit + BIM completo: 12 módulos
- Página `/jugar` concurso general
- Build standalone validado
