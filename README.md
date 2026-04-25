# SZCZ Softwares

Site vitrine statique pour SZCZ Softwares, construit en React UMD + Babel directement depuis `index.html`.

## Lancement local

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Structure

```text
.
├── index.html
├── 404.html
├── app.jsx
├── styles.css
├── components/
│   ├── shared.jsx
│   ├── home.jsx
│   ├── project.jsx
│   └── legal.jsx
├── assets/
│   ├── LogoSZCZ.png
│   └── og-image.png
├── firebase.json
├── robots.txt
└── sitemap.xml
```

## Notes

- Le contenu principal, les projets, les traductions et les textes legaux vivent dans `components/shared.jsx` et `components/legal.jsx`.
- `index.html` charge les composants dans l'ordre attendu, puis `app.jsx` monte l'application.
- `firebase.json` sert le site en statique et redirige les routes propres vers `index.html`.
- Le formulaire de contact est actuellement valide cote client uniquement.
