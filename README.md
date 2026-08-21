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
3. Set `featured: true` for interview-priority work, `false` for everything else.
4. Deploy.

Ordering is automatic: featured first, then newest `date` within each group.

A copy-paste template lives at the top of `data/projects.ts`.

Replace the SVG placeholders with real screenshots when you have them. Add `githubUrl` and `liveUrl` when those links exist; omit or set `null` to hide a button.
