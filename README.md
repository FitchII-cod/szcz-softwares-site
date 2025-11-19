# SZCZ Softwares — Site Vitrine

> Site portfolio moderne et performant pour développeur full-stack • Web • Mobile • IA • Blockchain • Games

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg?logo=javascript&logoColor=white)](#)

---

## 📋 Table des Matières

- [À Propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Déploiement](#-déploiement)
- [Structure du Projet](#-structure-du-projet)
- [Personnalisation](#-personnalisation)
- [Performance](#-performance)
- [SEO](#-seo)
- [Accessibilité](#-accessibilité)
- [Support Navigateurs](#-support-navigateurs)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 À Propos

**SZCZ Softwares** est un site vitrine statique conçu pour présenter un portfolio de développeur full-stack avec expertise en:

- 🌐 **Web & Apps**: Next.js, React, PWA
- 📱 **Mobile**: Flutter (iOS/Android)
- 🤖 **IA**: LLM, RAG, embeddings, FastAPI
- ⛓️ **Blockchain**: Solidity, Solana, NFT
- 🎮 **Game Dev**: Godot, GDScript
- 🛠️ **DevOps**: Docker, GitHub Actions, CI/CD

### Caractéristiques Techniques

- ✅ **100% statique** - Aucun backend requis
- ✅ **Zéro build** - Aucune compilation nécessaire
- ✅ **Ultra-léger** - ~23 KB total (hors assets)
- ✅ **Responsive** - Mobile-first design
- ✅ **Accessible** - WCAG AA compliant
- ✅ **SEO-optimisé** - Meta tags, sitemap, robots.txt
- ✅ **Dark/Light mode** - Thème adaptatif avec persistance
- ✅ **Performance** - Animations CSS, lazy loading

---

## ✨ Fonctionnalités

### Design & UX
- 🎨 **Thème dual**: Mode sombre (par défaut) et mode clair
- 🎭 **Animations fluides**: Transitions CSS, Intersection Observer
- 📐 **Grids responsives**: Auto-fit, mobile-first
- 🖼️ **Gradient orbs**: Effets visuels modernes

### Sections
- 🏠 **Hero** avec CTA et badges technologiques
- 🛠️ **Services** (6 cartes de services)
- 💼 **Projets** (5 projets sélectionnés)
- 📊 **Stack & Stats** (12 technologies, 4 KPIs)
- 👤 **À propos** avec checklist et KPIs
- 📧 **Contact** avec formulaire validé

### Fonctionnalités Avancées
- ⚙️ **Configuration centralisée** via `config.json`
- 🔍 **SEO optimisé** (Open Graph, Twitter Cards)
- 📱 **Menu mobile** responsive avec toggle
- ✉️ **Formulaire de contact** avec validation accessible
- 🎯 **Animations au scroll** (IntersectionObserver)
- 🔢 **Compteurs animés** pour les statistiques
- 📋 **Copy email to clipboard** au clic

---

## 🚀 Installation

### Prérequis

Aucun ! Ce projet est un site statique sans dépendances.

### Clone & Lancement

```bash
# Cloner le repository
git clone https://github.com/FitchII-cod/szcz-softwares-site.git
cd szcz-softwares-site

# Option 1: Serveur Python
python3 -m http.server 8000

# Option 2: Serveur Node.js (npx)
npx serve .

# Option 3: VS Code Live Server
# Clic droit sur index.html → "Open with Live Server"

# Ouvrir dans le navigateur
open http://localhost:8000
```

---

## ⚙️ Configuration

### Fichier `config.json`

Toute la configuration du site est centralisée dans un seul fichier JSON:

```json
{
  "seo": {
    "title": "Votre titre SEO",
    "description": "Votre description meta"
  },
  "hero": {
    "title": "Votre titre principal",
    "subtitle": "Votre sous-titre",
    "badges": ["Tech1", "Tech2", "Tech3"]
  },
  "services": [
    {
      "title": "Service 1",
      "text": "Description du service"
    }
  ],
  "projects": [
    {
      "title": "Projet A",
      "tagline": "Description courte",
      "tags": ["Tag1", "Tag2"],
      "link": "https://..."
    }
  ],
  "stack": ["Tech1", "Tech2", "Tech3"],
  "stats": [
    { "value": "20+", "label": "projets" }
  ],
  "kpis": [
    { "value": "x2.3", "label": "productivité" }
  ],
  "contact": {
    "channels": ["email", "LinkedIn", "GitHub", "Localisation"]
  }
}
```

### Variables CSS (Design System)

Personnalisez les couleurs dans `styles.css`:

```css
:root {
  --bg: #0D0B1A;        /* Fond */
  --fg: #F5F5FA;        /* Texte */
  --brand: #6C46FF;     /* Couleur principale */
  --brand-2: #A03AFF;   /* Couleur secondaire */
  --highlight: #E14CFF; /* Accentuation */
}

:root.light {
  --bg: #FAF9FF;
  --fg: #201A3D;
  /* ... */
}
```

---

## 🌐 Déploiement

### Option 1: Netlify (Recommandé)

```bash
# Installation Netlify CLI
npm install -g netlify-cli

# Déploiement
netlify deploy --prod --dir=.
```

**Configuration Netlify Forms** (pour le formulaire de contact):
```html
<!-- Remplacer dans index.html -->
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- ... champs existants -->
</form>
```

### Option 2: Vercel

```bash
# Installation Vercel CLI
npm install -g vercel

# Déploiement
vercel --prod
```

### Option 3: GitHub Pages

```bash
# Dans les settings du repo GitHub
# Pages → Source → Branch: main / Root

# URL: https://username.github.io/szcz-softwares-site
```

### Option 4: VPS (Nginx)

```bash
# 1. Upload des fichiers
rsync -avz --exclude '.git' . user@server:/var/www/szcz-softwares/

# 2. Configuration Nginx
# /etc/nginx/sites-available/szcz-softwares
server {
    listen 80;
    server_name szcz-softwares.com;
    root /var/www/szcz-softwares;
    index index.html;

    # Cache statique
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1000;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
}

# 3. Activer le site
sudo ln -s /etc/nginx/sites-available/szcz-softwares /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 4. SSL avec Let's Encrypt (optionnel)
sudo certbot --nginx -d szcz-softwares.com
```

---

## 📁 Structure du Projet

```
szcz-softwares-site/
│
├── index.html              # Page principale
├── privacy.html            # Politique de confidentialité
├── styles.css              # Styles responsive (8.2 KB)
├── script.js               # Logique client (8.5 KB)
├── config.json             # Configuration centralisée
├── robots.txt              # Directives robots d'indexation
├── sitemap.xml             # Plan du site pour SEO
│
├── assets/
│   ├── logo.jpg            # Logo (40x40px)
│   ├── favicon.svg         # Icône navigateur
│   └── og-image.png        # Preview réseaux sociaux
│
├── README.md               # Documentation (ce fichier)
├── RAPPORT_ANALYSE.md      # Rapport d'analyse technique
└── .gitignore              # Fichiers exclus du versioning
```

---

## 🎨 Personnalisation

### 1. Modifier le Contenu

Éditez `config.json` pour changer tous les textes, projets, services, etc.

### 2. Changer les Couleurs

Dans `styles.css`, modifiez les variables CSS:
```css
:root {
  --brand: #YOUR_COLOR;
}
```

### 3. Remplacer le Logo

- Remplacez `assets/logo.jpg` (recommandé: 40x40px)
- Remplacez `assets/favicon.svg`
- Remplacez `assets/og-image.png` (recommandé: 1200x630px)

### 4. Ajouter une Section

```javascript
// Dans script.js, après loadConfig()
const newSection = document.createElement('section');
newSection.className = 'section';
newSection.innerHTML = `<h2>Ma Nouvelle Section</h2>`;
document.querySelector('main').appendChild(newSection);
```

### 5. Formulaire de Contact Avancé

**Option A: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms** (voir section Déploiement)

**Option C: Backend Serverless** (Vercel Functions, Supabase Edge Functions)

---

## ⚡ Performance

### Optimisations Appliquées

- ✅ **Preload** des ressources critiques (CSS, JS, config.json)
- ✅ **Lazy loading** des images non critiques
- ✅ **Minimaliste** - Aucune dépendance externe
- ✅ **CSS Animations** - Plus performant que JS
- ✅ **IntersectionObserver** - Détection scroll optimisée

### Optimisations Recommandées

```bash
# 1. Minification (pour production)
npm install -g html-minifier clean-css-cli uglify-js

html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
cleancss -o styles.min.css styles.css
uglifyjs script.js -c -m -o script.min.js

# 2. Compression images
# Utiliser ImageOptim, TinyPNG ou Squoosh
```

### Objectifs Web Vitals

| Métrique | Cible | Actuel (estimé) |
|----------|-------|-----------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ~1.2s |
| **FID** (First Input Delay) | < 100ms | ~50ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ~0.05 |

---

## 🔍 SEO

### Fonctionnalités SEO Intégrées

- ✅ **Meta tags** optimisés (title, description)
- ✅ **Open Graph** pour réseaux sociaux
- ✅ **Twitter Cards** pour partages Twitter
- ✅ **robots.txt** pour diriger l'indexation
- ✅ **sitemap.xml** pour faciliter le crawl
- ✅ **URLs sémantiques** (# anchors)
- ✅ **HTML sémantique** (section, article, nav, etc.)

### Checklist SEO

```bash
# 1. Vérifier les meta tags
curl -s https://szcz-softwares.com | grep -i "meta"

# 2. Tester les URLs Open Graph
# https://www.opengraph.xyz/
# https://cards-dev.twitter.com/validator

# 3. Vérifier robots.txt
curl https://szcz-softwares.com/robots.txt

# 4. Vérifier sitemap.xml
curl https://szcz-softwares.com/sitemap.xml

# 5. Audit Lighthouse
lighthouse https://szcz-softwares.com --view
```

---

## ♿ Accessibilité

### Standards WCAG AA

- ✅ **Contraste** suffisant (texte/fond)
- ✅ **Navigation clavier** complète
- ✅ **ARIA labels** sur éléments interactifs
- ✅ **Skip link** pour navigation rapide
- ✅ **Focus management** dans formulaires
- ✅ **Messages d'erreur** accessibles (role="alert")
- ✅ **HTML sémantique** (header, nav, main, footer)

### Tests Accessibilité

```bash
# Avec axe-core (browser extension)
# ou WAVE (Web Accessibility Evaluation Tool)
# https://wave.webaim.org/

# Audit Lighthouse (section Accessibility)
lighthouse https://szcz-softwares.com --only-categories=accessibility
```

---

## 🌍 Support Navigateurs

| Navigateur | Version Min | Support |
|------------|-------------|---------|
| Chrome | 90+ | ✅ Complet |
| Firefox | 88+ | ✅ Complet |
| Safari | 14+ | ✅ Complet |
| Edge | 90+ | ✅ Complet |
| Mobile Safari (iOS) | 14+ | ✅ Complet |
| Chrome Mobile | 90+ | ✅ Complet |

### Polyfills (si support IE11 requis)

```html
<!-- Ajouter avant </body> -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver,fetch"></script>
```

---

## 🗺️ Roadmap

### ✅ Phase 1: MVP (Complétée)
- [x] Design responsive
- [x] Configuration centralisée
- [x] Thème dark/light
- [x] Formulaire de contact
- [x] SEO de base

### 🚧 Phase 2: Optimisations (En cours)
- [x] Corrections des erreurs
- [x] Amélioration privacy.html
- [x] robots.txt & sitemap.xml
- [ ] Optimisation images (WebP)
- [ ] PWA (manifest.json, service worker)
- [ ] Analytics RGPD-compliant

### 🔮 Phase 3: Évolutions (À venir)
- [ ] Version anglaise (i18n)
- [ ] Blog / Actualités
- [ ] CMS headless (optionnel)
- [ ] Tests automatisés
- [ ] Mode offline (PWA)

---

## 🤝 Contributing

Les contributions sont les bienvenues !

### Process

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Guidelines

- Respecter le code style existant
- Tester sur plusieurs navigateurs
- Mettre à jour la documentation si nécessaire
- Ajouter des commentaires pour le code complexe

---

## 📄 License

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📞 Contact

**Bastian Niszczota**
- Email: [bastianniszczota@gmail.com](mailto:bastianniszczota@gmail.com)
- LinkedIn: [linkedin.com/in/bastian-niszczota](https://linkedin.com/in/bastian-niszczota)
- GitHub: [@FitchII-cod](https://github.com/FitchII-cod)

---

## 🙏 Remerciements

- [Inter Font](https://rsms.me/inter/) by Rasmus Andersson
- [Google Fonts](https://fonts.google.com/) pour l'hébergement des polices
- [Netlify](https://www.netlify.com/) pour l'hébergement gratuit

---

## 📊 Stats du Projet

![GitHub repo size](https://img.shields.io/github/repo-size/FitchII-cod/szcz-softwares-site)
![GitHub last commit](https://img.shields.io/github/last-commit/FitchII-cod/szcz-softwares-site)
![GitHub issues](https://img.shields.io/github/issues/FitchII-cod/szcz-softwares-site)

---

**Made with ❤️ by Bastian Niszczota**

*Site moderne, performant et accessible pour un portfolio de développeur full-stack.*
