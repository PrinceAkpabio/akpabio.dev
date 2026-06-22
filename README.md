# akpabio.dev

My personal portfolio. A dark, terminal-flavoured single page site with an animated
loader, an interactive flashlight hero, a works grid and individual project pages.

Live at [akpabio.dev](https://akpabio.dev).

## Stack

- **Next.js** (App Router) and **React**, written in **TypeScript**
- **SCSS modules** for styling, with shared responsive mixins in `styles/_layout.scss`
- **GSAP** (+ `@gsap/react`) for the hero scroll timeline and animated scroll cue
- **Framer Motion** for the flashlight/cursor mask effect
- **Lenis** for smooth scrolling
- Custom `Fixedsys62` bitmap font

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Structure

```
app/          Routes, root layout, global styles, project/[slug] page
components/    Header, hero, works grid, contact, navigation, loader
styles/        SCSS modules + responsive mixins
utils/         Project data, animation variants, mouse/grid hooks
public/        Project images, CV, SVGs
```

Project content lives in `utils/projects.ts`.
