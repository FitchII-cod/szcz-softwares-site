// Shared primitives + data for SZCZ Softwares terminal portfolio

const PROJECTS = [
  {
    slug: "susumou",
    title: "Susumou",
    tagline_fr: "Apprendre le japonais — Flutter + SRS + Gemini, JLPT N5→N1",
    tagline_en: "Learn Japanese — Flutter + SRS + Gemini, JLPT N5→N1",
    summary_fr: "App mobile d'apprentissage du japonais : SRS (répétition espacée), dictionnaire offline, explications générées par Gemini AI, parcours adaptés aux niveaux JLPT N5 à N1.",
    summary_en: "Mobile Japanese-learning app: SRS (spaced repetition), offline dictionary, Gemini-AI-generated explanations, paths tailored to JLPT N5 through N1.",
    tags: ["Flutter", "Firebase", "Gemini AI", "SRS"],
    status: "Beta",
    year: "2025",
    category: "mobile",
    stores: { ios: "soon", android: "soon" },
    highlights_fr: ["Dictionnaire offline 170k entrées", "SRS adaptatif à l'utilisateur", "Explications IA contextuelles"],
    highlights_en: ["Offline dictionary, 170k entries", "User-adaptive SRS", "Contextual AI explanations"],
    legal: [
      { id: "privacy", fr: "Politique de confidentialité", en: "Privacy policy" },
      { id: "cgu", fr: "CGU", en: "Terms of use" },
      { id: "cgv", fr: "CGV", en: "Terms of sale" },
      { id: "account-deletion", fr: "Suppression de compte", en: "Account deletion" },
    ],
  },
  {
    slug: "soccer-link",
    title: "Soccer Link",
    tagline_fr: "Football amateur — réseau Flutter pour clubs, joueurs & coachs",
    tagline_en: "Amateur football — Flutter network for clubs, players & coaches",
    summary_fr: "Réseau social pour le football amateur : profils joueur/coach/club, matchs, stats perso, recherche Algolia, état global Riverpod, notifications Firebase.",
    summary_en: "Social network for amateur football: player/coach/club profiles, matches, personal stats, Algolia search, Riverpod state, Firebase notifications.",
    tags: ["Flutter", "Firebase", "Algolia", "Riverpod"],
    status: "Beta",
    year: "2025",
    category: "mobile",
    stores: { ios: "soon", android: "soon" },
    highlights_fr: ["Recherche Algolia < 50ms", "Profils multi-rôles", "Stats perso agrégées"],
    highlights_en: ["Algolia search < 50ms", "Multi-role profiles", "Aggregated personal stats"],
    legal: [
      { id: "privacy", fr: "Politique de confidentialité", en: "Privacy policy" },
      { id: "cgu", fr: "CGU", en: "Terms of use" },
      { id: "cgv", fr: "CGV", en: "Terms of sale" },
      { id: "account-deletion", fr: "Suppression de compte", en: "Account deletion" },
    ],
  },
  {
    slug: "seditio",
    title: "Seditio",
    tagline_fr: "Roguelite tactique — Godot, IA ennemie, boucle économique",
    tagline_en: "Tactical roguelite — Godot, enemy AI, economy loop",
    summary_fr: "Jeu indé solo : exploration tactique au tour-par-tour dans un monde post-effondrement, avec une IA ennemie scriptée en GDScript et une boucle économique qui récompense la prise de risque.",
    summary_en: "Solo indie game: turn-based tactical exploration in a post-collapse world, with GDScript-driven enemy AI and an economy loop that rewards risk-taking.",
    tags: ["Godot", "GDScript", "Game Design", "AI"],
    status: "WIP",
    year: "2025",
    category: "games",
    stores: { desktop: "soon" },
    highlights_fr: ["Prototype jouable 3 niveaux", "IA ennemie à utilité + mémoire", "Système de craft et scoring"],
    highlights_en: ["Playable 3-level prototype", "Utility + memory enemy AI", "Craft and scoring system"],
    legal: [],
  },
  {
    slug: "sakidori",
    title: "SakiDori",
    tagline_fr: "Tracker marchés — Flutter + API Finance, notifs, charts",
    tagline_en: "Market tracker — Flutter + Finance API, notifications, charts",
    summary_fr: "Application mobile pour suivre des paniers d'actions, crypto et indices avec des alertes personnalisées sur variations et seuils. UI dense, charts fluides, mode hors-ligne.",
    summary_en: "Mobile app to track stock, crypto and index baskets with custom alerts on variations and thresholds. Dense UI, smooth charts, offline mode.",
    tags: ["Flutter", "Mobile", "Charts", "Notifications"],
    status: "WIP",
    year: "2025",
    category: "mobile",
    stores: { ios: "soon", android: "soon" },
    highlights_fr: ["Alertes push sur conditions custom", "Mode offline avec cache intelligent", "Charts 60fps sur 5000 points"],
    highlights_en: ["Push alerts on custom conditions", "Offline mode with smart cache", "60fps charts over 5000 points"],
    legal: [],
  },
  {
    slug: "billiard-tracker",
    title: "Billiard Tracker",
    tagline_fr: "ELO & stats — app web locale pour billard, classement live",
    tagline_en: "ELO & stats — local web app for billiards, live ranking",
    summary_fr: "Système de suivi et classement ELO pour billard. App web servie en réseau local, interface tactile pour la table, score en direct, historique et rematchs.",
    summary_en: "ELO tracking and ranking system for billiards. Web app served on local network, table-side touch UI, live score, history and rematches.",
    tags: ["PWA", "WebSocket", "React", "Node.js"],
    status: "Live",
    year: "2024",
    category: "web",
    stores: {},
    highlights_fr: ["App web tactile en réseau local", "Synchro temps réel via WebSocket", "Historique 500+ parties"],
    highlights_en: ["Touch web app on local network", "Real-time sync via WebSocket", "History of 500+ matches"],
    legal: [],
  },
];

const SERVICES = [
  { id: "web", cmd: "web --build", fr: "Sites & apps web", en: "Web sites & apps", desc_fr: "Next.js / React, PWA, SEO, intégrations API, auth & paiements.", desc_en: "Next.js / React, PWA, SEO, API integrations, auth & payments." },
  { id: "mobile", cmd: "mobile --ship", fr: "Apps mobiles", en: "Mobile apps", desc_fr: "Flutter iOS/Android, notifs, stockage local/cloud, charts.", desc_en: "Flutter iOS/Android, notifications, local/cloud storage, charts." },
  { id: "ai", cmd: "ai --augment", fr: "IA & automatisation", en: "AI & automation", desc_fr: "RAG/embeddings, copilotes, pipelines, FastAPI, scripts.", desc_en: "RAG/embeddings, copilots, pipelines, FastAPI, scripts." },
  { id: "chain", cmd: "chain --deploy", fr: "Blockchain & NFT", en: "Blockchain & NFT", desc_fr: "Contrats simples, proof-of-ownership, mint portals.", desc_en: "Simple contracts, proof-of-ownership, mint portals." },
  { id: "games", cmd: "games --prototype", fr: "Jeux vidéo", en: "Video games", desc_fr: "Prototypes Godot, gameplay, UX/UI, builds desktop/mobile.", desc_en: "Godot prototypes, gameplay, UX/UI, desktop/mobile builds." },
  { id: "tools", cmd: "tools --dashboard", fr: "Outils & dashboards", en: "Tools & dashboards", desc_fr: "Electron/PWA, dashboards temps réel, WebSockets, IoT.", desc_en: "Electron/PWA, real-time dashboards, WebSockets, IoT." },
];

const STACK = [
  { g: "Frontend", items: ["TypeScript", "Next.js", "React", "Flutter / Dart", "Riverpod"] },
  { g: "Backend", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Firebase"] },
  { g: "AI / Data", items: ["LLM / RAG", "pgvector", "Embeddings", "Gemini", "OpenAI"] },
  { g: "Other", items: ["Godot", "Solidity", "Docker", "GitHub Actions", "Raspberry Pi"] },
];

const STATS = [
  { value: "10", label_fr: "projets produits", label_en: "products built" },
  { value: "3", label_fr: "apps en cours", label_en: "apps in progress" },
  { value: "2", label_fr: "jeux en projet", label_en: "games planned" },
  { value: "10+", label_fr: "années à coder", label_en: "years coding" },
];

// i18n copy
const COPY = {
  fr: {
    nav: { home: "accueil", work: "projets", services: "services", stack: "stack", about: "à propos", contact: "contact", legal: "mentions" },
    hero_title: ["Je construis des produits", "web, mobile, IA et jeux."],
    hero_sub: "Un dev indépendant qui livre — de l'idée au déploiement. Web, mobile, IA (LLM/RAG), blockchain et jeux indés.",
    cta_primary: "Discutons de votre projet",
    cta_secondary: "Voir les projets",
    sections: { work: "Projets sélectionnés", services: "Services", stack: "Stack & expertise", about: "À propos", contact: "Contact" },
    status_open: "disponible pour missions",
    location: "Nantes · Paris · Tokyo",
    back: "retour",
    overview: "Vue d'ensemble",
    highlights: "Points forts",
    stack_label: "Stack",
    more_projects: "Autres projets",
    contact_open: "Ouvert aux missions",
    contact_sub: "Basé en France. Remote, déplacements en Europe & Japon.",
    contact_placeholder_name: "Votre nom",
    contact_placeholder_email: "Votre e-mail",
    contact_placeholder_msg: "Parlez-moi de votre projet…",
    contact_send: "envoyer",
    contact_ok: "Message envoyé. Je reviens vers vous sous 48h.",
    checklist: ["Approche lean orientée valeur", "Design clean & accessible", "Data-driven, KPI clairs", "Livrables testés & documentés"],
    bio: "Je m'appelle Bastian. Je code depuis plus de 10 ans et je livre des produits complets — du pitch au déploiement. J'aime les problèmes concrets, les contraintes réelles et les boucles d'itération courtes.",
    status_label: "statut",
    year_label: "année",
    category_label: "catégorie",
    privacy_title: "Politique de confidentialité",
    legal_title: "Mentions légales",
    made_in: "Conçu & codé à Nantes",
  },
  en: {
    nav: { home: "home", work: "work", services: "services", stack: "stack", about: "about", contact: "contact", legal: "legal" },
    hero_title: ["I ship web, mobile,", "AI and game products."],
    hero_sub: "An independent dev who delivers — from idea to deployment. Web, mobile, AI (LLM/RAG), blockchain, and indie games.",
    cta_primary: "Let's talk about your project",
    cta_secondary: "See the work",
    sections: { work: "Selected work", services: "Services", stack: "Stack & expertise", about: "About", contact: "Contact" },
    status_open: "open for work",
    location: "Nantes · Paris · Tokyo",
    back: "back",
    overview: "Overview",
    highlights: "Highlights",
    stack_label: "Stack",
    more_projects: "Other projects",
    contact_open: "Open for work",
    contact_sub: "Based in France. Remote, travel in Europe & Japan.",
    contact_placeholder_name: "Your name",
    contact_placeholder_email: "Your email",
    contact_placeholder_msg: "Tell me about your project…",
    contact_send: "send",
    contact_ok: "Message sent. I'll get back to you within 48h.",
    checklist: ["Lean, value-first approach", "Clean, accessible design", "Data-driven, clear KPIs", "Tested, documented deliverables"],
    bio: "I'm Bastian. I've been coding for over 10 years and I ship complete products — from pitch to deployment. I enjoy concrete problems, real constraints, and short iteration loops.",
    status_label: "status",
    year_label: "year",
    category_label: "category",
    privacy_title: "Privacy policy",
    legal_title: "Legal notice",
    made_in: "Designed & coded in Nantes",
  },
};

// ============ Primitives ============

const Cursor = () => <span className="blink">▍</span>;

const Prompt = ({ children, user = "bastian", host = "szcz" }) => (
  <span className="prompt">
    <span className="prompt-user">{user}</span>
    <span className="prompt-at">@</span>
    <span className="prompt-host">{host}</span>
    <span className="prompt-colon">:</span>
    <span className="prompt-path">~</span>
    <span className="prompt-dollar">$</span>
    <span className="prompt-cmd"> {children}</span>
  </span>
);

const Tag = ({ children, kind = "default" }) => (
  <span className={`tag tag-${kind}`}>{children}</span>
);

const StatusDot = ({ status }) => {
  const map = {
    Live: "status-live",
    Beta: "status-beta",
    WIP: "status-wip",
    Client: "status-client",
    Delivered: "status-delivered",
  };
  return <span className={`status-dot ${map[status] || ""}`} aria-label={status}>●</span>;
};

const AsciiRule = ({ char = "─", label }) => (
  <div className="ascii-rule" aria-hidden={!label}>
    <span className="ascii-rule-line">{char.repeat(120)}</span>
    {label && <span className="ascii-rule-label">[{label}]</span>}
    <span className="ascii-rule-line">{char.repeat(120)}</span>
  </div>
);

const Placeholder = ({ label, aspect = "16 / 10" }) => (
  <div className="placeholder" style={{ aspectRatio: aspect }}>
    <span className="placeholder-label">{label}</span>
  </div>
);

// Category → icon label (text, not SVG)
const CATEGORY_META = {
  games: { label: "GAME", hue: 145 },
  mobile: { label: "MOB", hue: 200 },
  web: { label: "WEB", hue: 260 },
  ai: { label: "AI", hue: 75 },
  blockchain: { label: "CHN", hue: 25 },
};

// Per-project legal doc content (FR + EN). keyed by project slug + doc id.
const PROJECT_LEGAL = {
  "susumou": {
    "privacy": {
      fr: {
        title: "Politique de confidentialité — Susumou (進もう)",
        updated: "Version 1.1 — Dernière mise à jour : 21 mars 2026",
        intro: "La présente politique décrit comment SZCZ Softwares (« Éditeur ») collecte, utilise, stocke et protège les données personnelles des utilisateurs de l'application mobile Susumou, disponible sur iOS et Android. En utilisant l'Application, vous acceptez les pratiques décrites ci-dessous.",
        sections: [
          { h: "1. Éditeur et responsable du traitement", b: "SZCZ Softwares (SASU). Siège social : France. E-mail : contact@szcz-softwares.com." },
          { h: "2. Données collectées", b: "Données de compte (authentification anonyme Firebase, e-mail + mot de passe haché, Google ou Apple Sign-In). Données d'apprentissage (progression, cartes étudiées, statistiques SRS, objectifs, préférences). Données techniques (Firebase Analytics, Crashlytics, Remote Config, App Check — modèle, OS, version). Données d'IA (prompts, niveau, progression transmis à l'API Google Gemini, sans donnée directement identifiante). Stockage local pour performances et mode hors-ligne." },
          { h: "3. Finalités du traitement", b: "Gérer votre compte, synchroniser votre progression, personnaliser les contenus, améliorer l'algorithme SRS, analyser l'utilisation de façon statistique, assurer la sécurité, respecter nos obligations légales." },
          { h: "4. Base légale", b: "Exécution du contrat (fourniture du service), intérêt légitime (amélioration, analyse, sécurité), consentement pour les traitements qui le nécessitent." },
          { h: "5. Partage des données", b: "Vos données ne sont jamais vendues. Partages possibles avec Google / Firebase, Google Gemini, Google AdMob (version gratuite), Apple / Google pour les achats in-app, autorités compétentes en cas d'obligation légale." },
          { h: "6. Transferts internationaux", b: "Certaines données peuvent être hébergées hors UE via les services Google. Des garanties appropriées (clauses contractuelles types, cadres de transfert applicables) sont mises en place conformément au RGPD." },
          { h: "7. Durée de conservation", b: "Compte actif : tant que le compte est actif. Suppression : données supprimées sous 30 jours, sauvegardes sous 90 jours. Inactivité : rappel après 24 mois, archivage possible au-delà de 36 mois." },
          { h: "8. Sécurité", b: "Chiffrement en transit (HTTPS/TLS), authentification Firebase, règles Firestore par utilisateur, App Check, mots de passe hachés." },
          { h: "9. Vos droits (RGPD)", b: "Accès, rectification, suppression, portabilité, opposition, limitation. Contact : contact@szcz-softwares.com. Droit de réclamation auprès de la CNIL (www.cnil.fr)." },
          { h: "10. Données des mineurs", b: "L'Application n'est pas destinée aux moins de 16 ans. Pour signaler des données d'un mineur : contact@szcz-softwares.com." },
          { h: "11. Achats in-app", b: "Transactions gérées par Apple ou Google. Nous ne recevons pas vos données bancaires." },
          { h: "12. Modifications", b: "Nous pouvons mettre à jour cette politique à tout moment. En cas de modification substantielle, une notification est envoyée dans l'Application ou par e-mail." },
          { h: "13. Contact", b: "SZCZ Softwares (SASU), France. E-mail : contact@szcz-softwares.com." },
        ],
      },
      en: {
        title: "Privacy Policy — Susumou (進もう)",
        updated: "Version 1.1 — Last updated: March 21, 2026",
        intro: "This policy describes how SZCZ Softwares (the \"Publisher\") collects, uses, stores and protects personal data of users of the Susumou mobile application, available on iOS and Android. By using the App, you accept the practices described below.",
        sections: [
          { h: "1. Publisher & data controller", b: "SZCZ Softwares (SASU). Registered office: France. Email: contact@szcz-softwares.com." },
          { h: "2. Data collected", b: "Account data (Firebase anonymous auth, email + hashed password, Google or Apple Sign-In). Learning data (progress, studied cards, SRS statistics, goals, preferences). Technical data (Firebase Analytics, Crashlytics, Remote Config, App Check — model, OS, version). AI data (prompts, level, progress sent to the Google Gemini API, with no directly identifying data). Local storage for performance and offline mode." },
          { h: "3. Purposes", b: "Manage your account, sync progress, personalize content, improve the SRS algorithm, analyze usage statistically, ensure security, meet legal obligations." },
          { h: "4. Legal basis", b: "Contract performance (service delivery), legitimate interest (improvement, analysis, security), consent where required." },
          { h: "5. Data sharing", b: "Your data is never sold. Possible sharing with Google / Firebase, Google Gemini, Google AdMob (free version), Apple / Google for in-app purchases, competent authorities in case of legal obligation." },
          { h: "6. International transfers", b: "Some data may be hosted outside the EU via Google services. Appropriate safeguards (standard contractual clauses, applicable transfer frameworks) are in place under the GDPR." },
          { h: "7. Retention", b: "Active account: while the account is active. Deletion: data deleted within 30 days, backups within 90 days. Inactivity: reminder after 24 months, possible archiving after 36 months." },
          { h: "8. Security", b: "In-transit encryption (HTTPS/TLS), Firebase auth, per-user Firestore rules, App Check, hashed passwords." },
          { h: "9. Your rights (GDPR)", b: "Access, rectification, erasure, portability, objection, restriction. Contact: contact@szcz-softwares.com. Right to lodge a complaint with the CNIL (www.cnil.fr)." },
          { h: "10. Minors", b: "The App is not intended for children under 16. To report minor data: contact@szcz-softwares.com." },
          { h: "11. In-app purchases", b: "Transactions handled by Apple or Google. We do not receive your payment details." },
          { h: "12. Updates", b: "We may update this policy at any time. Material changes are notified via the App or by email." },
          { h: "13. Contact", b: "SZCZ Softwares (SASU), France. Email: contact@szcz-softwares.com." },
        ],
      },
    },
    "cgu": {
      fr: {
        title: "Conditions Générales d'Utilisation — Susumou (進もう)",
        updated: "Version 1.1 — Dernière mise à jour : 21 mars 2026",
        intro: "Les présentes CGU régissent l'utilisation de l'application mobile Susumou, éditée par SZCZ Softwares (SASU). En téléchargeant, installant ou utilisant l'Application, vous acceptez sans réserve les présentes CGU.",
        sections: [
          { h: "1. Objet", b: "Susumou (進もう, « Avançons ! ») est une application mobile d'aide à l'apprentissage du japonais combinant flashcards SRS, dictionnaire, leçons JLPT et coach IA." },
          { h: "2. Acceptation", b: "L'utilisation de l'Application implique l'acceptation pleine et entière des CGU. L'utilisateur doit disposer de la capacité juridique nécessaire ; les mineurs doivent obtenir l'autorisation de leur représentant légal." },
          { h: "3. Accès au service", b: "Disponible sur l'App Store et Google Play. L'utilisateur est responsable de la compatibilité de son terminal, de sa connexion et des frais réseau." },
          { h: "4. Compte utilisateur", b: "Authentification possible en mode anonyme, e-mail/mot de passe, Google ou Apple Sign-In. L'utilisateur s'engage à fournir des informations exactes, à protéger ses identifiants et à ne pas partager son compte." },
          { h: "5. Fonctionnalités", b: "Version gratuite avec publicités et version Supporter par abonnement mensuel (suppression des pubs, fonctionnalités IA, avantages premium)." },
          { h: "6. Utilisation de l'IA", b: "Susumou utilise l'API Google Gemini pour le coach IA, la génération de tests, les lectures adaptées et les recommandations. Les prompts et données pédagogiques anonymisées peuvent être transmis. L'utilisateur reconnaît que l'IA peut produire des contenus inexacts." },
          { h: "7. Limites pédagogiques", b: "Susumou est un outil d'aide. Il ne constitue ni un enseignement officiel, ni une certification, ni un substitut à un enseignement professionnel." },
          { h: "8. Comportements interdits", b: "Usage abusif, contournement de sécurité, surcharge serveur, reverse engineering, bots/scripts, partage de compte, exploitation commerciale non autorisée." },
          { h: "9. Suspension / suppression", b: "SZCZ Softwares peut suspendre ou supprimer un compte en cas de violation des CGU. L'utilisateur peut supprimer son compte via les paramètres ou par e-mail." },
          { h: "10. Propriété intellectuelle", b: "L'Application, son design, son code et ses contenus sont la propriété exclusive de SZCZ Softwares. L'utilisateur bénéficie d'une licence d'usage personnelle, non exclusive et révocable." },
          { h: "11. Responsabilité", b: "Service fourni « en l'état ». SZCZ Softwares ne saurait être tenu responsable des interruptions, bugs, erreurs IA ou échecs à un examen." },
          { h: "12. Modification des CGU", b: "Modifications possibles à tout moment. La poursuite de l'utilisation vaut acceptation." },
          { h: "13. Droit applicable", b: "Droit français. Juridictions françaises compétentes, sans préjudice des dispositions impératives consommateur UE." },
          { h: "14. Contact", b: "SZCZ Softwares (SASU), France. E-mail : contact@szcz-softwares.com." },
        ],
      },
      en: {
        title: "Terms of Use — Susumou (進もう)",
        updated: "Version 1.1 — Last updated: March 21, 2026",
        intro: "These Terms of Use govern the use of the Susumou mobile application, published by SZCZ Softwares (SASU). By downloading, installing or using the App, you fully accept these Terms.",
        sections: [
          { h: "1. Purpose", b: "Susumou (進もう, \"Let's move forward!\") is a Japanese-learning mobile app combining SRS flashcards, a dictionary, JLPT lessons and an AI coach." },
          { h: "2. Acceptance", b: "Using the App means full acceptance of the Terms. Users must have the required legal capacity; minors need authorization from their legal representative." },
          { h: "3. Access", b: "Available on the App Store and Google Play. Users are responsible for device compatibility, connection, and network fees." },
          { h: "4. User account", b: "Sign-in available as anonymous, email/password, Google or Apple. Users must provide accurate information, protect their credentials and not share accounts." },
          { h: "5. Features", b: "Free version with ads and a Supporter version via monthly subscription (ads removed, AI features, premium perks)." },
          { h: "6. AI use", b: "Susumou uses the Google Gemini API for the AI coach, test generation, adapted reading and recommendations. Prompts and anonymized learning data may be transmitted. Users acknowledge AI may produce inaccurate content." },
          { h: "7. Educational limits", b: "Susumou is a learning aid. It is not official teaching, a certification, or a substitute for professional instruction." },
          { h: "8. Prohibited behavior", b: "Misuse, security bypass, server overload, reverse engineering, bots/scripts, account sharing, unauthorized commercial use." },
          { h: "9. Suspension / deletion", b: "SZCZ Softwares may suspend or delete accounts for Terms violations. Users may delete their account via settings or email." },
          { h: "10. Intellectual property", b: "The App, design, code and content are the exclusive property of SZCZ Softwares. Users receive a personal, non-exclusive, revocable license." },
          { h: "11. Liability", b: "Service provided \"as is.\" SZCZ Softwares is not liable for interruptions, bugs, AI errors or exam failures." },
          { h: "12. Updates", b: "Terms may change at any time. Continued use means acceptance." },
          { h: "13. Governing law", b: "French law. French courts have jurisdiction, without prejudice to mandatory EU consumer rights." },
          { h: "14. Contact", b: "SZCZ Softwares (SASU), France. Email: contact@szcz-softwares.com." },
        ],
      },
    },
    "cgv": {
      fr: {
        title: "Conditions Générales de Vente — Susumou (進もう)",
        updated: "Version 1.1 — Dernière mise à jour : 21 mars 2026",
        intro: "Les présentes CGV définissent les modalités de souscription et d'utilisation de l'abonnement payant Susumou Supporter, édité par SZCZ Softwares (SASU).",
        sections: [
          { h: "1. Objet", b: "L'abonnement Susumou Supporter donne accès à des fonctionnalités premium dans l'Application." },
          { h: "2. Offre d'abonnement", b: "Suppression des publicités, coach IA personnalisé, génération de tests IA, lectures adaptées, rapports de progression, recommandations d'étude, accès aux futures fonctionnalités premium. Abonnement mensuel." },
          { h: "3. Prix", b: "Prix affiché dans l'Application TTC, en devise locale. Modifiable à tout moment avec notification avant renouvellement." },
          { h: "4. Modalités d'achat", b: "Achats effectués via l'App Store (iOS) ou Google Play (Android). Paiement géré par Apple ou Google. SZCZ Softwares n'a pas accès aux informations bancaires." },
          { h: "5. Durée et renouvellement", b: "Durée mensuelle avec renouvellement automatique, sauf résiliation avant échéance." },
          { h: "6. Résiliation", b: "iOS : Réglages > Abonnements > Susumou > Résilier. Android : Google Play > Abonnements > Susumou > Résilier. Effet à la fin de la période en cours, pas de remboursement au prorata sauf disposition contraire." },
          { h: "7. Droit de rétractation", b: "Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contenus numériques fournis sur support immatériel dont l'exécution a commencé avec l'accord du consommateur." },
          { h: "8. Remboursements", b: "Demandes à adresser directement à la plateforme (Apple : support.apple.com / Google Play : support.google.com). Réclamations : contact@szcz-softwares.com." },
          { h: "9. Accès premium", b: "Accessible via le compte utilisateur associé à l'achat. Les achats restent liés au compte Apple ou Google." },
          { h: "10. Responsabilité", b: "Les fonctionnalités décrites sont fournies sous réserve de la disponibilité du service. SZCZ Softwares ne saurait être tenu responsable d'interruptions ou de dysfonctionnements imputables aux plateformes tierces." },
          { h: "11. Modification", b: "CGV modifiables. Les conditions applicables sont celles en vigueur lors de la souscription ou du renouvellement." },
          { h: "12. Droit applicable", b: "Droit français. Juridictions françaises compétentes." },
          { h: "13. Contact", b: "SZCZ Softwares (SASU), France. E-mail : contact@szcz-softwares.com." },
        ],
      },
      en: {
        title: "Terms of Sale — Susumou (進もう)",
        updated: "Version 1.1 — Last updated: March 21, 2026",
        intro: "These Terms of Sale define the subscription and use of the paid Susumou Supporter subscription, published by SZCZ Softwares (SASU).",
        sections: [
          { h: "1. Purpose", b: "The Susumou Supporter subscription grants access to premium features in the App." },
          { h: "2. Subscription offering", b: "Ad removal, personalized AI coach, AI-generated tests, adapted reading, progress reports, study recommendations, access to future premium features. Monthly subscription." },
          { h: "3. Pricing", b: "Price shown in the App, tax included, in local currency. May change at any time with notice before renewal." },
          { h: "4. Purchase", b: "Purchases are made via the App Store (iOS) or Google Play (Android). Payment handled by Apple or Google. SZCZ Softwares does not access your payment details." },
          { h: "5. Term & renewal", b: "Monthly term with automatic renewal unless canceled before the renewal date." },
          { h: "6. Cancellation", b: "iOS: Settings > Subscriptions > Susumou > Cancel. Android: Google Play > Subscriptions > Susumou > Cancel. Effective at period end, no pro-rata refund unless otherwise required." },
          { h: "7. Right of withdrawal", b: "Under French Consumer Code L.221-28, the right of withdrawal does not apply to digital content whose execution began with consumer consent." },
          { h: "8. Refunds", b: "Requests must be addressed directly to the platform (Apple: support.apple.com / Google Play: support.google.com). Complaints: contact@szcz-softwares.com." },
          { h: "9. Premium access", b: "Accessible via the user account associated with the purchase. Purchases remain linked to your Apple or Google account." },
          { h: "10. Liability", b: "Features are provided subject to service availability. SZCZ Softwares is not liable for interruptions or malfunctions caused by third-party platforms." },
          { h: "11. Updates", b: "Terms may be updated. The applicable terms are those in force at subscription or renewal." },
          { h: "12. Governing law", b: "French law. French courts have jurisdiction." },
          { h: "13. Contact", b: "SZCZ Softwares (SASU), France. Email: contact@szcz-softwares.com." },
        ],
      },
    },
    "account-deletion": {
      fr: {
        title: "Suppression de compte — Susumou (進もう)",
        updated: "Version 1.1 — Dernière mise à jour : 21 mars 2026",
        intro: "Conformément au RGPD et aux exigences de l'App Store et de Google Play, vous pouvez à tout moment demander la suppression de votre compte Susumou et de l'ensemble des données personnelles associées.",
        sections: [
          { h: "1. Depuis l'application", b: "Paramètres > Compte > « Supprimer mon compte » > confirmer. Suppression immédiatement prise en compte, traitement complet sous 30 jours." },
          { h: "2. Par e-mail", b: "Envoyer un e-mail à contact@szcz-softwares.com avec l'objet « Suppression de compte Susumou », en précisant l'adresse associée, le type de connexion (e-mail, Google, Apple, anonyme) et toute information permettant d'identifier votre compte. Traitement sous 30 jours." },
          { h: "3. Données supprimées", b: "Authentification (Firebase Auth, e-mail, identifiants Google/Apple), profil et préférences (pseudo, niveau, objectifs), données pédagogiques (progression, SRS, tests), gamification (XP, séries, achievements), documents synchronisés." },
          { h: "4. Données conservées", b: "Données analytiques anonymisées (statistiques agrégées), sauvegardes techniques (jusqu'à 90 jours), historique d'achats in-app (géré par Apple/Google), obligations légales." },
          { h: "5. Délai", b: "Depuis l'application : prise en compte immédiate, suppression complète sous 30 jours. Par e-mail : accusé de réception puis suppression sous 30 jours." },
          { h: "6. Conséquences", b: "La suppression est irréversible. Plus d'accès à la progression, aux achievements ou aux statistiques. Un nouveau compte peut être créé sans restauration." },
          { h: "7. Abonnements actifs", b: "La suppression ne résilie pas automatiquement un abonnement. iOS : Réglages > Abonnements > Susumou > Résilier. Android : Google Play > Abonnements > Susumou > Résilier." },
          { h: "8. Contact", b: "SZCZ Softwares (SASU), France. E-mail : contact@szcz-softwares.com." },
        ],
      },
      en: {
        title: "Account Deletion — Susumou (進もう)",
        updated: "Version 1.1 — Last updated: March 21, 2026",
        intro: "In accordance with the GDPR and App Store / Google Play requirements, you may at any time request the deletion of your Susumou account and associated personal data.",
        sections: [
          { h: "1. From the app", b: "Settings > Account > \"Delete my account\" > confirm. Deletion recorded immediately, full processing within 30 days." },
          { h: "2. By email", b: "Email contact@szcz-softwares.com with subject \"Susumou account deletion,\" including the associated email, sign-in method (email, Google, Apple, anonymous) and any info identifying your account. Processed within 30 days." },
          { h: "3. Data deleted", b: "Authentication (Firebase Auth, email, Google/Apple IDs), profile and preferences (nickname, level, goals), learning data (progress, SRS, tests), gamification (XP, streaks, achievements), synced documents." },
          { h: "4. Data retained", b: "Anonymized analytics (aggregated statistics), technical backups (up to 90 days), in-app purchase history (managed by Apple/Google), legal obligations." },
          { h: "5. Timing", b: "From the app: immediate, full deletion within 30 days. By email: acknowledgment then deletion within 30 days." },
          { h: "6. Consequences", b: "Deletion is irreversible. No more access to progress, achievements or statistics. A new account can be created without restoration." },
          { h: "7. Active subscriptions", b: "Deletion does not automatically cancel a subscription. iOS: Settings > Subscriptions > Susumou > Cancel. Android: Google Play > Subscriptions > Susumou > Cancel." },
          { h: "8. Contact", b: "SZCZ Softwares (SASU), France. Email: contact@szcz-softwares.com." },
        ],
      },
    },
  },
  "soccer-link": {
    "privacy": {
      fr: {
        title: "Politique de confidentialité — Soccer Link",
        updated: "Dernière mise à jour : mars 2026",
        intro: "Soccer Link s'engage à protéger la vie privée de ses utilisateurs. Cette politique explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez l'Application.",
        sections: [
          { h: "1. Responsable du traitement", b: "Soccer Link. E-mail : privacy@soccerlink.app. Conforme au RGPD et à la loi Informatique et Libertés modifiée." },
          { h: "2. Données collectées", b: "Identification (nom, prénom, e-mail, photo optionnelle, ville). Profil (rôle : joueur, entraîneur, arbitre, dirigeant, parent ; poste, pied, taille ; club actuel ; bio). Utilisation (messages, connexions, activité). Techniques (Firebase Crashlytics, Performance, Analytics anonymisé, modèle d'appareil, OS, version)." },
          { h: "3. Utilisation", b: "Créer et gérer votre compte, permettre la communication, améliorer nos services, envoyer des notifications pertinentes, assurer la sécurité, diagnostiquer les bugs, analyser les performances, respecter nos obligations légales." },
          { h: "4. Base légale", b: "Consentement explicite à l'inscription, exécution du contrat, intérêt légitime (amélioration, sécurité), respect d'obligations légales." },
          { h: "5. Partage et sous-traitants", b: "Certaines infos de profil peuvent être visibles selon vos paramètres. Aucune vente. Sous-traitants : Google Firebase (hébergement, auth, stockage, Analytics, Crashlytics, Performance, Cloud Messaging), Google Sign-In, Algolia SAS (moteur de recherche)." },
          { h: "6. Transferts hors UE", b: "Google peut traiter des données aux États-Unis, encadré par le Data Privacy Framework, les clauses contractuelles types et des mesures complémentaires conformes aux recommandations du CEPD. Algolia traite en UE." },
          { h: "7. Conservation", b: "Compte : tant qu'il est actif. Messages : tant que la conversation existe. Analytics : 14 mois max. Crashs : 90 jours. Logs techniques : 12 mois max. Après suppression : effacement sous 30 jours sauf obligation légale." },
          { h: "8. Vos droits", b: "Accès, rectification, effacement, portabilité, opposition, limitation, retrait du consentement. Contact : privacy@soccerlink.app. Réponse sous 1 mois, prolongeable de 2 mois." },
          { h: "9. Cookies et stockage local", b: "Stockage local pour session, préférences et cache. Firebase Analytics pour données d'utilisation anonymisées, désactivable dans les paramètres." },
          { h: "10. Mineurs", b: "Destinée aux 13 ans et plus. Moins de 18 ans : autorisation parentale. Consentement parental requis en France en dessous de 16 ans. Pas de collecte sciemment en dessous de 13 ans." },
          { h: "11. Modifications", b: "Politique modifiable. Modifications importantes notifiées dans l'Application ; un nouveau consentement peut être demandé." },
          { h: "12. Contact et réclamation", b: "Soccer Link — privacy@soccerlink.app. CNIL : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, www.cnil.fr." },
        ],
      },
      en: {
        title: "Privacy Policy — Soccer Link",
        updated: "Last updated: March 2026",
        intro: "Soccer Link is committed to protecting its users' privacy. This policy explains how we collect, use, store and protect your personal data when you use the App.",
        sections: [
          { h: "1. Data controller", b: "Soccer Link. Email: privacy@soccerlink.app. Compliant with the GDPR and the French Data Protection Act." },
          { h: "2. Data collected", b: "Identification (name, email, optional photo, city). Profile (role: player, coach, referee, manager, parent; position, preferred foot, height; current club; bio). Usage (messages, connections, activity). Technical (Firebase Crashlytics, Performance, anonymized Analytics, device model, OS, version)." },
          { h: "3. Use", b: "Create and manage your account, enable communication, improve services, send relevant notifications, ensure security, diagnose bugs, analyze performance, meet legal obligations." },
          { h: "4. Legal basis", b: "Explicit consent at sign-up, contract performance, legitimate interest (improvement, security), legal obligations." },
          { h: "5. Sharing & processors", b: "Some profile info may be visible per your settings. Never sold. Processors: Google Firebase (hosting, auth, storage, Analytics, Crashlytics, Performance, Cloud Messaging), Google Sign-In, Algolia SAS (search)." },
          { h: "6. Transfers outside EU", b: "Google may process data in the US, under the Data Privacy Framework, standard contractual clauses and additional measures per EDPB recommendations. Algolia processes in the EU." },
          { h: "7. Retention", b: "Account: while active. Messages: while the thread exists. Analytics: up to 14 months. Crashes: 90 days. Technical logs: up to 12 months. After deletion: erased within 30 days unless legally required." },
          { h: "8. Your rights", b: "Access, rectification, erasure, portability, objection, restriction, consent withdrawal. Contact: privacy@soccerlink.app. Reply within 1 month, extendable 2 months." },
          { h: "9. Cookies & local storage", b: "Local storage for session, preferences and cache. Firebase Analytics for anonymized usage data, can be disabled in settings." },
          { h: "10. Minors", b: "For ages 13+. Under 18: parental authorization. Parental consent required in France under 16. We do not knowingly collect data under 13." },
          { h: "11. Updates", b: "Policy may be updated. Material changes notified in the App; renewed consent may be requested." },
          { h: "12. Contact & complaints", b: "Soccer Link — privacy@soccerlink.app. CNIL: 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, www.cnil.fr." },
        ],
      },
    },
    "cgu": {
      fr: {
        title: "Conditions Générales d'Utilisation — Soccer Link",
        updated: "Dernière mise à jour : mars 2026",
        intro: "Les présentes CGU définissent les modalités et conditions d'utilisation de l'application Soccer Link, ainsi que les droits et obligations des parties.",
        sections: [
          { h: "1. Objet", b: "Soccer Link est une application mobile et web permettant aux acteurs du football amateur (joueurs, entraîneurs, arbitres, dirigeants, parents) de se connecter et d'échanger." },
          { h: "2. Description du service", b: "Créer un profil, rechercher et se connecter avec d'autres utilisateurs, rejoindre ou créer des clubs, communiquer via messagerie, consulter et publier des offres, partager des infos sportives. Disponible iOS, Android et web." },
          { h: "3. Inscription et compte", b: "Création par e-mail/mot de passe ou Google Sign-In. Acceptation explicite des CGU et de la politique de confidentialité. Informations exactes, confidentialité des identifiants. Accessible à partir de 13 ans ; moins de 16/18 ans : autorisation du représentant légal." },
          { h: "4. Règles de conduite", b: "Respect des autres utilisateurs, pas de contenu illégal, offensant ou discriminatoire, pas d'usurpation d'identité, pas d'usage commercial non autorisé, pas de compromission de sécurité, pas de collecte des données d'autres utilisateurs, pas de spam, signalement des contenus inappropriés." },
          { h: "5. Notifications push", b: "Notifications pour messages reçus, demandes d'amis et autres événements pertinents. Désactivables à tout moment dans les paramètres." },
          { h: "6. Propriété intellectuelle", b: "L'Application et ses éléments sont la propriété exclusive de Soccer Link. Vos contenus restent votre propriété ; licence non exclusive, gratuite et mondiale accordée à Soccer Link pour le fonctionnement de l'Application, prenant fin à la suppression du contenu ou du compte." },
          { h: "7. Responsabilité", b: "Soccer Link s'efforce d'assurer la disponibilité, sans garantie absolue. Non responsable des contenus publiés par les utilisateurs ni des dommages directs ou indirects liés à l'utilisation." },
          { h: "8. Modification et résiliation", b: "CGU modifiables avec information des utilisateurs ; un nouveau consentement peut être requis. Suppression du compte via paramètres, effacement des données sous 30 jours. Soccer Link peut suspendre un compte en cas de violation." },
          { h: "9. Droit applicable et médiation", b: "Droit français. Recherche amiable avant toute action judiciaire. Médiation de la consommation disponible conformément aux articles L.611-1 et suivants du Code de la consommation." },
          { h: "10. Contact", b: "Soccer Link — contact@soccerlink.app." },
        ],
      },
      en: {
        title: "Terms of Use — Soccer Link",
        updated: "Last updated: March 2026",
        intro: "These Terms of Use define the terms and conditions for using the Soccer Link application, as well as the rights and obligations of the parties.",
        sections: [
          { h: "1. Purpose", b: "Soccer Link is a mobile and web application allowing amateur football stakeholders (players, coaches, referees, managers, parents) to connect and exchange." },
          { h: "2. Service description", b: "Create a profile, search and connect with other users, join or create clubs, message, browse and post opportunities, share sports info. Available on iOS, Android and web." },
          { h: "3. Sign-up & account", b: "Sign up with email/password or Google Sign-In. Explicit acceptance of Terms and Privacy Policy. Accurate information, credential confidentiality. Ages 13+; under 16/18: legal representative's authorization required." },
          { h: "4. Conduct rules", b: "Respect other users, no illegal/offensive/discriminatory content, no impersonation, no unauthorized commercial use, no security compromise, no data scraping, no spam, report inappropriate content." },
          { h: "5. Push notifications", b: "Notifications for received messages, friend requests and other relevant events. Can be disabled at any time in settings." },
          { h: "6. Intellectual property", b: "The App and its elements are the exclusive property of Soccer Link. Your content remains yours; non-exclusive, free, worldwide license to Soccer Link for App operation, ending upon content or account deletion." },
          { h: "7. Liability", b: "Soccer Link strives for availability, no absolute guarantee. Not liable for user-published content or for direct/indirect damages related to use." },
          { h: "8. Changes & termination", b: "Terms may change with user notice; renewed consent may be required. Account deletion via settings, data erased within 30 days. Soccer Link may suspend accounts for violations." },
          { h: "9. Governing law & mediation", b: "French law. Amicable resolution before any legal action. Consumer mediation available under articles L.611-1 et seq. of the French Consumer Code." },
          { h: "10. Contact", b: "Soccer Link — contact@soccerlink.app." },
        ],
      },
    },
    "cgv": {
      fr: {
        title: "Conditions Générales de Vente — Soccer Link",
        updated: "Dernière mise à jour : mars 2026",
        intro: "Les présentes CGV s'appliquent à tout achat effectué au sein de l'application Soccer Link.",
        sections: [
          { h: "1. Vendeur", b: "Soccer Link — contact@soccerlink.app." },
          { h: "2. Objet", b: "Vente de produits et services numériques dans l'Application : achats in-app liés à des fonctionnalités premium ou à une visibilité accrue ; abonnements périodiques selon les offres disponibles." },
          { h: "3. Prix", b: "Affichés en EUR ou devise locale, TTC. Prix applicables : ceux en vigueur à la validation. Modifiables à tout moment." },
          { h: "4. Processus d'achat", b: "Via l'App Store (iOS) ou Google Play (Android). Paiement géré par ces plateformes tierces ; Soccer Link n'accède pas aux informations bancaires." },
          { h: "5. Abonnements", b: "Durée déterminée indiquée dans l'Application, renouvellement automatique sauf résiliation avant échéance. Résiliation : iOS via Réglages > Identifiant Apple > Abonnements ; Android via Google Play > Abonnements. Effet en fin de période, pas de remboursement au prorata sauf disposition légale." },
          { h: "6. Droit de rétractation", b: "Non applicable aux contenus numériques fournis sur support immatériel dont l'exécution a commencé avec l'accord du consommateur (article L221-28 du Code de la consommation)." },
          { h: "7. Remboursements", b: "Apple : reportaproblem.apple.com. Google Play : via l'historique des commandes. Réclamations : contact@soccerlink.app." },
          { h: "8. Droit applicable", b: "Droit français. Recherche amiable avant toute procédure judiciaire." },
          { h: "9. Contact", b: "Soccer Link — contact@soccerlink.app." },
        ],
      },
      en: {
        title: "Terms of Sale — Soccer Link",
        updated: "Last updated: March 2026",
        intro: "These Terms of Sale apply to any purchase made within the Soccer Link application.",
        sections: [
          { h: "1. Seller", b: "Soccer Link — contact@soccerlink.app." },
          { h: "2. Purpose", b: "Sale of digital products and services within the App: in-app purchases for premium features or enhanced visibility; periodic subscriptions per the available offers." },
          { h: "3. Pricing", b: "Shown in EUR or local currency, tax included. Applicable prices: those in force at validation. May change at any time." },
          { h: "4. Purchase process", b: "Via the App Store (iOS) or Google Play (Android). Payment handled by those third-party platforms; Soccer Link does not access payment details." },
          { h: "5. Subscriptions", b: "Fixed duration shown in the App, automatic renewal unless canceled before the date. Cancellation: iOS via Settings > Apple ID > Subscriptions; Android via Google Play > Subscriptions. Effective at period end, no pro-rata refund unless legally required." },
          { h: "6. Right of withdrawal", b: "Not applicable to digital content provided on an intangible medium whose execution has begun with the consumer's agreement (French Consumer Code L221-28)." },
          { h: "7. Refunds", b: "Apple: reportaproblem.apple.com. Google Play: via your order history. Complaints: contact@soccerlink.app." },
          { h: "8. Governing law", b: "French law. Amicable resolution before any legal proceedings." },
          { h: "9. Contact", b: "Soccer Link — contact@soccerlink.app." },
        ],
      },
    },
    "account-deletion": {
      fr: {
        title: "Suppression de compte — Soccer Link",
        updated: "Dernière mise à jour : mars 2026",
        intro: "Conformément au RGPD et aux exigences de l'App Store et de Google Play, vous pouvez à tout moment demander la suppression de votre compte Soccer Link et de l'ensemble des données personnelles associées.",
        sections: [
          { h: "1. Depuis l'application", b: "Paramètres > Compte > « Supprimer mon compte » > confirmer. Votre compte et vos données sont supprimés." },
          { h: "2. Par e-mail", b: "Envoyer un e-mail à privacy@soccerlink.app avec l'objet « Suppression de compte Soccer Link », en précisant l'adresse associée et votre nom d'utilisateur si connu. Traitement sous 30 jours max, avec confirmation." },
          { h: "3. Données supprimées", b: "Profil (nom, photo, bio, localisation, rôle, données spécifiques), données sociales (amis, demandes, connexions), messages et conversations, appartenance aux clubs, index de recherche Algolia, données d'authentification Firebase Auth, fichiers Firebase Storage." },
          { h: "4. Données conservées", b: "Analytics anonymisés (politique Firebase Analytics), données de facturation (obligations légales), rapports de crash anonymisés (amélioration du service)." },
          { h: "5. Conséquences", b: "Suppression irréversible. Votre profil n'est plus visible. Les messages dans des conversations existantes peuvent être supprimés ou anonymisés. Si abonnement actif, résilier manuellement au préalable." },
          { h: "6. Contact", b: "Soccer Link — privacy@soccerlink.app." },
        ],
      },
      en: {
        title: "Account Deletion — Soccer Link",
        updated: "Last updated: March 2026",
        intro: "In accordance with the GDPR and App Store / Google Play requirements, you may at any time request the deletion of your Soccer Link account and associated personal data.",
        sections: [
          { h: "1. From the app", b: "Settings > Account > \"Delete my account\" > confirm. Your account and data are deleted." },
          { h: "2. By email", b: "Email privacy@soccerlink.app with subject \"Soccer Link account deletion,\" providing the associated email and your username if known. Processed within 30 days max, with confirmation." },
          { h: "3. Data deleted", b: "Profile (name, photo, bio, location, role, specific data), social data (friends, requests, connections), messages and conversations, club memberships, Algolia search index, Firebase Auth data, Firebase Storage files." },
          { h: "4. Data retained", b: "Anonymized analytics (Firebase Analytics policy), billing data (legal obligations), anonymized crash reports (service improvement)." },
          { h: "5. Consequences", b: "Deletion is irreversible. Your profile is no longer visible. Messages in existing conversations may be deleted or anonymized. If you have an active subscription, cancel it manually first." },
          { h: "6. Contact", b: "Soccer Link — privacy@soccerlink.app." },
        ],
      },
    },
  },
};

Object.assign(window, {
  PROJECTS, SERVICES, STACK, STATS, COPY, CATEGORY_META, PROJECT_LEGAL,
  Cursor, Prompt, Tag, StatusDot, AsciiRule, Placeholder,
});
