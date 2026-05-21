# Aula del Profesor Rubén Jiménez González

Plataforma web **interactiva** de formaciones para Arquitecto Técnico de Edificación.

Dominio público: **https://cursos.rubenjimenezgonzalez.com**

Está pensada para mentes con **TDAH y dislexia**: módulos cortos, juegos, quizzes, colores fuertes, sin párrafos eternos.

## Cursos disponibles

1. **Revit + BIM** (12 módulos · ~18 h) ⭐ más demandado
2. **AutoCAD 2027** (8 módulos · ~10 h)
3. **Microsoft Project** (14 módulos · ~12 h)
4. **Presto · Arquímedes** (8 módulos · ~10 h)
5. **UrbiCAD · Seguridad y Salud** (7 módulos · ~8 h)
6. **CE3X · HULC** (8 módulos · ~10 h)
7. **Tasación Inmobiliaria** (7 módulos · ~8 h)
8. **BIM 360 / ACC** (próximamente)

## Stack

- **Next.js 15** (App Router · React 19)
- **TypeScript** strict
- **Tailwind CSS**
- **Framer Motion** (animaciones, quizzes, drag&drop)
- **Standalone output** para despliegue Docker en Coolify

## Componentes interactivos

- `Quiz` — preguntas con explicación y barra de progreso
- `Flashcard` — tarjetas que giran (pregunta / respuesta)
- `OrdenarPasos` — drag & drop con comprobación
- `Acordeon` — secciones desplegables
- `ZonaImagen` — capturas con zoom modal
- `Caja` — 9 tipos semánticos (truco, aviso, obra, ejemplo, norma, atajo, cliente, dato, info)
- `BarraProgreso` — progreso de módulo

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build y producción

```bash
npm run build
npm start
```

## Despliegue (Coolify · VPS)

1. Push a GitHub
2. En Coolify: Nueva app → Public Repository → URL del repo
3. Dockerfile: detectado automáticamente
4. Variables de entorno: ninguna (no las necesita)
5. Dominio: `cursos.rubenjimenezgonzalez.com`
6. Pre-requisito DNS: registro A `cursos.rubenjimenezgonzalez.com → 187.77.166.84` en Squarespace

## Estructura

```
app/
  page.tsx                     · home con tarjetas
  cursos/page.tsx              · catálogo
  cursos/revit/page.tsx        · ficha del curso Revit
  cursos/revit/[modulo]/       · módulos dinámicos
  cursos/revit/que-es-revit/   · módulo 1 dedicado
  cursos/revit/interfaz/       · módulo 2 dedicado
  jugar/page.tsx               · concurso general
  layout.tsx
  globals.css
components/
  BarraSuperior.tsx
  Hero.tsx
  TarjetaCurso.tsx
  Quiz.tsx
  Flashcard.tsx
  Acordeon.tsx
  Caja.tsx
  ZonaImagen.tsx
  Drag.tsx
  BarraProgreso.tsx
  CajaModulo.tsx
  PieDePagina.tsx
content/
  revit/
    meta.ts
    modulos-data.ts
lib/
  cursos.ts
public/
  imagenes/
    revit/
```

## Autor

**Profesor Rubén Jiménez González** — Arquitecto Técnico · Edificación · Project Management.
