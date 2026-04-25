# SZCZ Softwares Website

Static portfolio website for SZCZ Softwares. The site presents selected projects, services, technical stack, contact information, and legal documents for the studio and product apps.

The app is intentionally lightweight: React 18 UMD, Babel in the browser, plain JSX files, and a single CSS file. Firebase Hosting serves the static files and rewrites clean routes to `index.html`.

## Main Features

- Terminal-inspired portfolio UI with dark/light theme.
- FR / EN / JA interface copy for the main website.
- Project detail pages for Susumou, Soccer Link, Seditio, SakiDori, and Billiard Tracker.
- Per-project legal pages for Susumou and Soccer Link:
  - privacy policy
  - terms of use
  - terms of sale
  - legal notice
  - account deletion
- Project legal documents are available in FR and EN only.
- Global website legal pages keep FR / EN / JA copy.
- Clean client-side routes such as `/susumou`, `/soccer-link/privacy`, `/privacy`, and `/legal`.

## Local Run

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

For clean routes locally, open the root first and navigate from the UI, or use a static server with SPA fallback. Firebase Hosting already handles this through `firebase.json`.

## Structure

```text
.
|-- index.html
|-- 404.html
|-- app.jsx
|-- styles.css
|-- components/
|   |-- shared.jsx
|   |-- home.jsx
|   |-- project.jsx
|   `-- legal.jsx
|-- assets/
|   |-- LogoSZCZ.png
|   `-- og-image.png
|-- soccerlink_legal/
|   |-- CGU.md
|   |-- CGV.md
|   |-- MENTIONS_LEGALES.md
|   `-- POLITIQUE_CONFIDENTIALITE.md
|-- susumou_legal/
|   |-- CGU.md
|   |-- CGV.md
|   |-- MENTIONS_LEGALES.md
|   `-- POLITIQUE_CONFIDENTIALITE.md
|-- firebase.json
|-- robots.txt
`-- sitemap.xml
```

## Content Map

- `components/shared.jsx`: shared primitives, i18n copy, project data, services, stack, and per-project legal data.
- `components/home.jsx`: home page sections and contact form UI.
- `components/project.jsx`: project detail view and legal document cards.
- `components/legal.jsx`: global legal pages and project legal page renderer.
- `app.jsx`: routing, language/theme state, URL synchronization, sidebar and topbar.
- `styles.css`: full visual system and responsive layout.

## Routes

```text
/                         home
/#work                    selected projects section
/{project-slug}           project page
/{project-slug}/privacy   project privacy policy
/{project-slug}/cgu       project terms of use
/{project-slug}/cgv       project terms of sale
/{project-slug}/mentions-legales
/{project-slug}/account-deletion
/privacy                  global privacy policy
/legal                    global legal notice
```

Known project slugs include `susumou`, `soccer-link`, `seditio`, `sakidori`, and `billiard-tracker`.

## Deployment

The project is configured for Firebase Hosting:

```bash
firebase deploy
```

`firebase.json` serves the repository root as the public directory and rewrites all routes to `/index.html`.
