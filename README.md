# mondracode.com

Personal CV and portfolio site for Santiago Mondragon Gomez, built with [Astro](https://astro.build/) and deployed to GitHub Pages at [mondracode.com](https://mondracode.com).

The site supports Spanish and English. It selects the visitor's browser language by default and stores a manual language selection in `localStorage`.

## Requirements

- Node.js 20 or later
- npm

## Getting started

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

The site is available at `http://localhost:4321`.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run astro -- --help` | Show Astro CLI help. |

## Content

Resume content is stored as JSON under `src/content/`:

```text
src/content/
├── en/
│   ├── academy.json
│   ├── skills.json
│   ├── summary.json
│   └── work.json
└── es/
    ├── academy.json
    ├── skills.json
    ├── summary.json
    └── work.json
```

Keep the English and Spanish files in sync when adding or changing experience, education, skills, or the profile summary.

## Project structure

```text
src/
├── components/  # Reusable resume sections
├── content/     # Localized resume data
├── layouts/     # Shared page shell
├── pages/       # Astro routes
├── styles/      # Global and layout styles
└── types/       # TypeScript data types
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.
