# Fraol Ashebir Demisse — Portfolio

Static personal site for software-engineering applications.

Stack: Next.js, TypeScript, Tailwind CSS, shadcn/ui.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Update content

| What | File |
| --- | --- |
| Name, headline, about, contact, socials, SEO | `data/site.ts` |
| Projects | `data/projects.ts` |
| Experience | `data/experience.ts` |
| Education | `data/education.ts` |
| Skills | `data/skills.ts` |

## Add a project

1. Put a screenshot in `public/projects/` (PNG, JPG, WEBP, or SVG).
2. Add one object to `data/projects.ts`.
3. Set `featured: true` for Active missions, `false` for Other work.
4. Set `rank` (lower number = higher on the page). Rank `1` among featured projects gets the large primary layout.
5. Deploy.

A copy-paste template lives at the top of `data/projects.ts`.

## Sound

Subtle interface sounds are on by default. The first click initializes the browser audio context; later clicks play a short generated beep. No audio files. The site works fully if the browser blocks audio. Sounds are skipped when `prefers-reduced-motion` is set.
