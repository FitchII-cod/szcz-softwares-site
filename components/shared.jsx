// Shared primitives + data for SZCZ Softwares terminal portfolio

// i18n helper: pick `${base}_${lang}` with fallback to en/fr.
const tx = (obj, base, lang) =>
  (obj && (obj[`${base}_${lang}`] ?? obj[`${base}_en`] ?? obj[`${base}_fr`])) || "";

const PROJECTS = [
  {
    slug: "susumou",
    title: "Susumou",
    tagline_fr: "Apprendre le japonais — Flutter + SRS + Gemini, JLPT N5→N1",
    tagline_en: "Learn Japanese — Flutter + SRS + Gemini, JLPT N5→N1",
    tagline_ja: "日本語学習アプリ — Flutter + SRS + Gemini、JLPT N5〜N1対応",
    summary_fr: "App mobile d'apprentissage du japonais : SRS (répétition espacée), dictionnaire offline, explications générées par Gemini AI, parcours adaptés aux niveaux JLPT N5 à N1.",
    summary_en: "Mobile Japanese-learning app: SRS (spaced repetition), offline dictionary, Gemini-AI-generated explanations, paths tailored to JLPT N5 through N1.",
    summary_ja: "日本語学習モバイルアプリ：SRS（間隔反復）、オフライン辞書、Gemini AIによる文脈解説、JLPT N5からN1までのレベル別カリキュラム。",
    tags: ["Flutter", "Firebase", "Gemini AI", "SRS"],
    status: "Beta",
    year: "2025",
    category: "mobile",
    stores: { ios: "soon", android: "soon" },
    highlights_fr: ["Dictionnaire offline 10k entrées", "SRS adaptatif à l'utilisateur", "Explications IA contextuelles"],
    highlights_en: ["Offline dictionary, 10k entries", "User-adaptive SRS", "Contextual AI explanations"],
    highlights_ja: ["1万語のオフライン辞書", "ユーザーに適応するSRS", "文脈に応じたAI解説"],
    legal: [
      { id: "privacy", fr: "Politique de confidentialité", en: "Privacy policy" },
      { id: "cgu", fr: "CGU", en: "Terms of use" },
      { id: "cgv", fr: "CGV", en: "Terms of sale" },
      { id: "mentions-legales", fr: "Mentions légales", en: "Legal notice" },
      { id: "account-deletion", fr: "Suppression de compte", en: "Account deletion" },
    ],
  },
  {
    slug: "soccer-link",
    title: "Soccer Link",
    tagline_fr: "Football amateur — réseau Flutter pour clubs, joueurs & coachs",
    tagline_en: "Amateur football — Flutter network for clubs, players & coaches",
    tagline_ja: "アマチュアサッカー — クラブ・選手・コーチをつなぐFlutterネットワーク",
    summary_fr: "Réseau social pour le football amateur : profils joueur/coach/club, matchs, stats perso, recherche Algolia, état global Riverpod, notifications Firebase.",
    summary_en: "Social network for amateur football: player/coach/club profiles, matches, personal stats, Algolia search, Riverpod state, Firebase notifications.",
    summary_ja: "アマチュアサッカー向けSNS：選手/コーチ/クラブのプロフィール、試合、個人スタッツ、Algolia検索、Riverpodによる状態管理、Firebase通知。",
    tags: ["Flutter", "Firebase", "Algolia", "Riverpod"],
    status: "Beta",
    year: "2025",
    category: "mobile",
    stores: { ios: "soon", android: "soon" },
    highlights_fr: ["Recherche Algolia < 50ms", "Profils multi-rôles", "Stats perso agrégées"],
    highlights_en: ["Algolia search < 50ms", "Multi-role profiles", "Aggregated personal stats"],
    highlights_ja: ["Algolia検索50ms未満", "複数ロール対応プロフィール", "個人スタッツ集計"],
    legal: [
      { id: "privacy", fr: "Politique de confidentialité", en: "Privacy policy" },
      { id: "cgu", fr: "CGU", en: "Terms of use" },
      { id: "cgv", fr: "CGV", en: "Terms of sale" },
      { id: "mentions-legales", fr: "Mentions légales", en: "Legal notice" },
      { id: "account-deletion", fr: "Suppression de compte", en: "Account deletion" },
    ],
  },
  {
    slug: "seditio",
    title: "Seditio",
    tagline_fr: "Roguelite tactique — Godot, IA ennemie, boucle économique",
    tagline_en: "Tactical roguelite — Godot, enemy AI, economy loop",
    tagline_ja: "タクティカル・ローグライト — Godot、敵AI、経済ループ",
    summary_fr: "Jeu indé solo : exploration tactique au tour-par-tour dans un monde post-effondrement, avec une IA ennemie scriptée en GDScript et une boucle économique qui récompense la prise de risque.",
    summary_en: "Solo indie game: turn-based tactical exploration in a post-collapse world, with GDScript-driven enemy AI and an economy loop that rewards risk-taking.",
    summary_ja: "ソロ制作のインディーゲーム：崩壊後の世界を舞台にしたターン制タクティカル探索。GDScriptで動く敵AIと、リスクを取るほど報われる経済ループを特徴とする。",
    tags: ["Godot", "GDScript", "Game Design", "AI"],
    status: "WIP",
    year: "2025",
    category: "games",
    stores: { desktop: "soon" },
    highlights_fr: ["Prototype jouable 3 niveaux", "IA ennemie à utilité + mémoire", "Système de craft et scoring"],
    highlights_en: ["Playable 3-level prototype", "Utility + memory enemy AI", "Craft and scoring system"],
    highlights_ja: ["3レベル分のプレイ可能なプロトタイプ", "効用＋記憶ベースの敵AI", "クラフト＆スコアリングシステム"],
    legal: [],
  },
  {
    slug: "sakidori",
    title: "SakiDori",
    tagline_fr: "Tracker marchés — Flutter + API Finance, notifs, charts",
    tagline_en: "Market tracker — Flutter + Finance API, notifications, charts",
    tagline_ja: "市場トラッカー — Flutter + 金融API、通知、チャート",
    summary_fr: "Application mobile pour suivre des paniers d'actions, crypto et indices avec des alertes personnalisées sur variations et seuils. UI dense, charts fluides, mode hors-ligne.",
    summary_en: "Mobile app to track stock, crypto and index baskets with custom alerts on variations and thresholds. Dense UI, smooth charts, offline mode.",
    summary_ja: "株式・暗号資産・指数のバスケットを追跡するモバイルアプリ。変動率や閾値に応じたカスタムアラート、密度の高いUI、なめらかなチャート、オフラインモード対応。",
    tags: ["Flutter", "Mobile", "Charts", "Notifications"],
    status: "WIP",
    year: "2025",
    category: "mobile",
    stores: { ios: "soon", android: "soon" },
    highlights_fr: ["Alertes push sur conditions custom", "Mode offline avec cache intelligent", "Charts 60fps sur 5000 points"],
    highlights_en: ["Push alerts on custom conditions", "Offline mode with smart cache", "60fps charts over 5000 points"],
    highlights_ja: ["カスタム条件のプッシュ通知", "スマートキャッシュ付きオフラインモード", "5000点で60fpsのチャート"],
    legal: [],
  },
  {
    slug: "billiard-tracker",
    title: "Billiard Tracker",
    tagline_fr: "ELO & stats — app web locale pour billard, classement live",
    tagline_en: "ELO & stats — local web app for billiards, live ranking",
    tagline_ja: "ELOとスタッツ — ビリヤード用ローカルWebアプリ、ライブランキング",
    summary_fr: "Système de suivi et classement ELO pour billard. App web servie en réseau local, interface tactile pour la table, score en direct, historique et rematchs.",
    summary_en: "ELO tracking and ranking system for billiards. Web app served on local network, table-side touch UI, live score, history and rematches.",
    summary_ja: "ビリヤード向けのELO追跡・ランキングシステム。ローカルネットワーク上で動作するWebアプリ、テーブル横で使えるタッチUI、ライブスコア、履歴、再戦機能。",
    tags: ["PWA", "WebSocket", "React", "Node.js"],
    status: "Live",
    year: "2024",
    category: "web",
    stores: {},
    highlights_fr: ["App web tactile en réseau local", "Synchro temps réel via WebSocket", "Historique 500+ parties"],
    highlights_en: ["Touch web app on local network", "Real-time sync via WebSocket", "History of 500+ matches"],
    highlights_ja: ["ローカルネットワーク向けタッチWebアプリ", "WebSocketによるリアルタイム同期", "500試合以上の履歴"],
    legal: [],
  },
];

const SERVICES = [
  { id: "web", cmd: "web --build", fr: "Sites & apps web", en: "Web sites & apps", ja: "Webサイト・アプリ", desc_fr: "Next.js / React, PWA, SEO, intégrations API, auth & paiements.", desc_en: "Next.js / React, PWA, SEO, API integrations, auth & payments.", desc_ja: "Next.js / React、PWA、SEO、API連携、認証・決済。" },
  { id: "mobile", cmd: "mobile --ship", fr: "Apps mobiles", en: "Mobile apps", ja: "モバイルアプリ", desc_fr: "Flutter iOS/Android, notifs, stockage local/cloud, charts.", desc_en: "Flutter iOS/Android, notifications, local/cloud storage, charts.", desc_ja: "Flutter iOS/Android、通知、ローカル/クラウドストレージ、チャート。" },
  { id: "ai", cmd: "ai --augment", fr: "IA & automatisation", en: "AI & automation", ja: "AI・自動化", desc_fr: "RAG/embeddings, copilotes, pipelines, FastAPI, scripts.", desc_en: "RAG/embeddings, copilots, pipelines, FastAPI, scripts.", desc_ja: "RAG/エンベディング、コパイロット、パイプライン、FastAPI、スクリプト。" },
  { id: "chain", cmd: "chain --deploy", fr: "Blockchain & NFT", en: "Blockchain & NFT", ja: "ブロックチェーン・NFT", desc_fr: "Contrats simples, proof-of-ownership, mint portals.", desc_en: "Simple contracts, proof-of-ownership, mint portals.", desc_ja: "シンプルなコントラクト、所有権証明、ミントポータル。" },
  { id: "games", cmd: "games --prototype", fr: "Jeux vidéo", en: "Video games", ja: "ビデオゲーム", desc_fr: "Prototypes Godot, gameplay, UX/UI, builds desktop/mobile.", desc_en: "Godot prototypes, gameplay, UX/UI, desktop/mobile builds.", desc_ja: "Godotプロトタイプ、ゲームプレイ、UX/UI、デスクトップ/モバイル向けビルド。" },
  { id: "tools", cmd: "tools --dashboard", fr: "Outils & dashboards", en: "Tools & dashboards", ja: "ツール・ダッシュボード", desc_fr: "Electron/PWA, dashboards temps réel, WebSockets, IoT.", desc_en: "Electron/PWA, real-time dashboards, WebSockets, IoT.", desc_ja: "Electron/PWA、リアルタイムダッシュボード、WebSocket、IoT。" },
];

const STACK = [
  { g: "Frontend", items: ["TypeScript", "Next.js", "React", "Flutter / Dart", "Riverpod"] },
  { g: "Backend", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Firebase"] },
  { g: "AI / Data", items: ["LLM / RAG", "pgvector", "Embeddings", "Gemini", "OpenAI"] },
  { g: "Other", items: ["Godot", "Solidity", "Docker", "GitHub Actions", "Raspberry Pi"] },
];

const STATS = [
  { value: "10", label_fr: "projets produits", label_en: "products built", label_ja: "完成プロダクト" },
  { value: "3", label_fr: "apps en cours", label_en: "apps in progress", label_ja: "進行中のアプリ" },
  { value: "2", label_fr: "jeux en projet", label_en: "games planned", label_ja: "計画中のゲーム" },
  { value: "10+", label_fr: "années à coder", label_en: "years coding", label_ja: "コーディング歴" },
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
    legal_documents: "Documents légaux",
    contact_open: "Ouvert aux missions",
    contact_sub: "Basé en France. Remote, déplacements en Europe & Japon.",
    contact_placeholder_name: "Votre nom",
    contact_placeholder_email: "Votre e-mail",
    contact_placeholder_msg: "Parlez-moi de votre projet…",
    contact_send: "envoyer",
    contact_ok: "Message envoyé. Je reviens vers vous sous 48h.",
    contact_new_message: "nouveau message",
    contact_availability: "disponibilité",
    contact_channels: "canaux",
    contact_response: "temps de réponse",
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
    legal_documents: "Legal documents",
    contact_open: "Open for work",
    contact_sub: "Based in France. Remote, travel in Europe & Japan.",
    contact_placeholder_name: "Your name",
    contact_placeholder_email: "Your email",
    contact_placeholder_msg: "Tell me about your project…",
    contact_send: "send",
    contact_ok: "Message sent. I'll get back to you within 48h.",
    contact_new_message: "new message",
    contact_availability: "availability",
    contact_channels: "channels",
    contact_response: "response time",
    checklist: ["Lean, value-first approach", "Clean, accessible design", "Data-driven, clear KPIs", "Tested, documented deliverables"],
    bio: "I'm Bastian. I've been coding for over 10 years and I ship complete products — from pitch to deployment. I enjoy concrete problems, real constraints, and short iteration loops.",
    status_label: "status",
    year_label: "year",
    category_label: "category",
    privacy_title: "Privacy policy",
    legal_title: "Legal notice",
    made_in: "Designed & coded in Nantes",
  },
  ja: {
    nav: { home: "ホーム", work: "実績", services: "サービス", stack: "技術", about: "自己紹介", contact: "お問い合わせ", legal: "法的事項" },
    hero_title: ["ウェブ・モバイル・", "AI・ゲームを作ります。"],
    hero_sub: "アイデアから本番リリースまで届ける独立系開発者です。Web、モバイル、AI（LLM/RAG）、ブロックチェーン、インディーゲームを手がけます。",
    cta_primary: "プロジェクトについて相談する",
    cta_secondary: "実績を見る",
    sections: { work: "セレクトプロジェクト", services: "サービス", stack: "技術スタック", about: "自己紹介", contact: "お問い合わせ" },
    status_open: "現在お仕事受付中",
    location: "ナント・パリ・東京",
    back: "戻る",
    overview: "概要",
    highlights: "ハイライト",
    stack_label: "スタック",
    more_projects: "他のプロジェクト",
    legal_documents: "法的書類",
    contact_open: "お仕事受付中",
    contact_sub: "フランス在住。リモート可、欧州・日本へ出張対応。",
    contact_placeholder_name: "お名前",
    contact_placeholder_email: "メールアドレス",
    contact_placeholder_msg: "プロジェクトについて教えてください…",
    contact_send: "送信",
    contact_ok: "メッセージを送信しました。48時間以内にご返信します。",
    contact_new_message: "新しいメッセージ",
    contact_availability: "対応状況",
    contact_channels: "連絡手段",
    contact_response: "返信時間",
    checklist: ["価値重視のリーン開発", "クリーンでアクセシブルなデザイン", "データドリブン、明確なKPI", "テスト・ドキュメント完備"],
    bio: "バスチャンと申します。10年以上コードを書き続け、ピッチからデプロイまでプロダクトを完成させてきました。具体的な課題、現実の制約、短いイテレーションサイクルが好きです。",
    status_label: "ステータス",
    year_label: "年",
    category_label: "カテゴリ",
    privacy_title: "プライバシーポリシー",
    legal_title: "法的事項",
    made_in: "ナントで設計・開発",
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

// Per-project legal doc content, translated from the product Markdown sources.
const PROJECT_LEGAL = {
  "susumou": {
    "privacy": {
      "en": {
        "title": "Susumou Privacy Policy",
        "updated": "Version 1.2 - Last updated: April 25, 2026",
        "intro": "This privacy policy explains how SZCZ Softwares processes personal data collected and used in connection with the Susumou mobile application.",
        "sections": [
          {
            "h": "1. Data controller",
            "b": "The data controller is SZCZ Softwares, SASU with share capital of EUR 1,000, registered with the Boulogne-sur-Mer Trade and Companies Register under number 100 523 067. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. SIRET: 100 523 067 00013. Intra-community VAT: FR93100523067. NAF/APE code: 6201Z - Computer programming. Website: https://szczsoftwares.fr. Contact: dev@szczsoftwares.fr."
          },
          {
            "h": "2. Data collected",
            "b": "Susumou only collects data necessary to operate, personalize, secure and improve the app: Firebase identifier, email address when signing in by email, Google or Apple, names provided by the authentication provider, account settings, language and notification preferences, learning progress, studied cards, spaced-repetition statistics, goals, tests, level indicators, usage data, AI feature interactions, device type, operating system, app version, session identifiers, diagnostics and advertising data needed to display ads in the free version according to available consent and tracking settings. SZCZ Softwares does not collect banking data; payments are processed by the Apple App Store or Google Play Store."
          },
          {
            "h": "3. Purposes and legal bases",
            "b": "Data is processed to provide the app and its features, manage accounts, authentication, synchronization and progress backups, perform the contract with the user, provide free or paid features, manage the Supporter subscription, personalize learning, generate or adapt AI content, improve the service through usage statistics and anonymized or aggregated analytics, fix bugs, develop new features, secure the service, prevent abuse, protect against unauthorized access, verify app integrity, display ads in the free version where applicable, comply with legal obligations and respond to rights requests. Legal bases include contract performance, consent where required, SZCZ Softwares' legitimate interest in securing and improving the service, and legal obligations."
          },
          {
            "h": "4. Use of artificial intelligence",
            "b": "Susumou uses generative AI technologies through the Google Gemini API, including for the AI coach, question generation, adaptive reading texts and study recommendations. The model may change for technical and quality improvements, and the active version may be configured remotely through Firebase Remote Config. Data sent to AI services is limited to what is necessary: user prompts, questions and requests, useful learning data such as level, progress or study statistics, and strictly necessary learning context. Directly identifying data is avoided where possible. AI features may produce inaccurate or incomplete responses; users remain responsible for checking important information."
          },
          {
            "h": "5. Processors and third-party services",
            "b": "SZCZ Softwares uses Firebase / Google Cloud for authentication, Firestore database, storage, analytics, remote configuration and App Check security; Google Gemini for educational content generation and AI request processing; Google AdMob for advertising in the free version; and the Apple App Store and Google Play Store for app distribution, in-app purchases, subscriptions and payments. These providers may process personal data as processors or independent controllers depending on their role and their own terms."
          },
          {
            "h": "6. Retention periods",
            "b": "Data is kept for periods proportionate to the purposes pursued. Account, progress and statistics data are kept while the account is active. When an account is deleted, personal data is deleted or anonymized within a reasonable period, in principle within 30 days, subject to technical constraints, legal requirements and backups. Backups may be retained for up to 90 days before final deletion. Anonymized or aggregated data may be kept without time limit when it no longer identifies the user. After a long period of inactivity, an account may be archived and then deleted after informing the user where possible. Users may request deletion from the app or by email to dev@szczsoftwares.fr."
          },
          {
            "h": "7. User rights",
            "b": "Under the GDPR and the French Data Protection Act, users have rights of access, rectification, erasure within legal limits, objection where processing is based on legitimate interest, restriction of processing, portability of provided data, and withdrawal of consent where processing is based on consent. Requests may be sent to dev@szczsoftwares.fr and should specify the account identifier or associated email address and the right being exercised. A response will be provided within one month, extendable by two months for complex or multiple requests. Users may also lodge a complaint with the CNIL: https://www.cnil.fr."
          },
          {
            "h": "8. Security",
            "b": "SZCZ Softwares implements technical and organizational measures to protect personal data, including HTTPS/TLS encryption in transit, secure authentication through Firebase Authentication, Firebase security rules, limited access to personal data, and incident management and vulnerability correction procedures. No electronic transmission or storage method is completely secure, so SZCZ Softwares cannot guarantee absolute security but undertakes to maintain protection appropriate to the risks."
          },
          {
            "h": "9. Transfers outside the European Union",
            "b": "Some providers, including Google, Apple or their subprocessors, may process data outside the European Union. Where such transfers occur, they are covered by appropriate safeguards such as European Commission standard contractual clauses, applicable adequacy decisions or any other mechanism recognized by the regulations."
          },
          {
            "h": "10. Cookies, trackers and advertising",
            "b": "The Susumou mobile app may use technologies similar to cookies, including Firebase Analytics and Google AdMob. These tools may be used to measure audience, improve the app, detect anomalies and display ads in the free version. Users can limit advertising tracking in their device settings and, where the app provides it, in the integrated privacy settings."
          },
          {
            "h": "11. Minors",
            "b": "Susumou may be used by minors with authorization from their legal representative. The legal representative may contact SZCZ Softwares at dev@szczsoftwares.fr for any request concerning a minor's data."
          },
          {
            "h": "12. Changes to this policy",
            "b": "SZCZ Softwares may modify this privacy policy to reflect legal, technical or functional changes to the app. The new version will be published in the app or on https://szczsoftwares.fr. In the event of a substantial change, users may be informed by any appropriate means."
          }
        ]
      },
      "fr": {
        "title": "Politique de confidentialité de Susumou",
        "updated": "Version 1.2 - Dernière mise à jour : 25 avril 2026",
        "intro": "La présente politique de confidentialité explique comment SZCZ Softwares traite les données personnelles collectées et utilisées dans le cadre de l'application mobile Susumou.",
        "sections": [
          {
            "h": "1. Responsable du traitement",
            "b": "Le responsable du traitement est : SZCZ Softwares, SASU au capital social de 1 000 euros, immatriculée au RCS de Boulogne-sur-Mer sous le numéro 100 523 067. Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France SIRET : 100 523 067 00013 TVA intracommunautaire : FR93100523067 Code NAF/APE : 6201Z - Programmation informatique Site web : https://szczsoftwares.fr Contact : dev@szczsoftwares.fr"
          },
          {
            "h": "2. Données collectées",
            "b": "Susumou collecte uniquement les données nécessaires au fonctionnement, à la personnalisation, à la sécurité et à l'amélioration de l'application. Les catégories de données susceptibles d'être collectées sont les suivantes : - Données d'identification : identifiant Firebase, adresse email en cas de connexion par email, Google ou Apple, nom et prénom lorsqu'ils sont fournis par le fournisseur d'authentification. - Données de compte : mode d'authentification, paramètres du compte, préférences de langue et de notification. - Données pédagogiques : progression dans l'application, cartes étudiées, statistiques de répétition espacée, objectifs d'apprentissage, résultats aux tests et indicateurs de niveau. - Données d'usage : fonctionnalités utilisées, fréquence et durée des sessions, interactions avec les fonctionnalités d'intelligence artificielle. - Données techniques : type d'appareil, système d'exploitation, version de l'application, identifiants de session, informations de diagnostic nécessaires à la sécurité et au bon fonctionnement. - Données publicitaires : données nécessaires à l'affichage de publicités dans la version gratuite, selon les réglages de consentement et de suivi disponibles sur l'appareil. SZCZ Softwares ne collecte pas de données bancaires. Les paiements sont traités par l'Apple App Store ou Google Play Store."
          },
          {
            "h": "3. Finalités et bases légales",
            "b": "Les données sont traitées pour les finalités suivantes : - Fournir l'application et ses fonctionnalités : gestion du compte, authentification, synchronisation et sauvegarde de la progression. - Exécuter le contrat conclu avec l'utilisateur : accès aux fonctionnalités gratuites ou payantes, gestion de l'abonnement Supporter. - Personnaliser l'expérience d'apprentissage : recommandations, adaptation du niveau de difficulté, contenus générés ou adaptés par l'IA. - Améliorer le service : statistiques d'usage, analyse anonymisée ou agrégée, correction de bugs, développement de nouvelles fonctionnalités. - Assurer la sécurité : prévention des abus, protection contre les accès non autorisés, vérification de l'intégrité de l'application. - Afficher des publicités dans la version gratuite, lorsque cela est applicable et selon les choix de l'utilisateur. - Répondre aux obligations légales et aux demandes d'exercice de droits. Les bases légales utilisées sont l'exécution du contrat, le consentement lorsque requis, l'intérêt légitime de SZCZ Softwares à sécuriser et améliorer son service, et le respect d'obligations légales."
          },
          {
            "h": "4. Utilisation de l'intelligence artificielle",
            "b": "Susumou utilise des technologies d'intelligence artificielle générative via l'API Google Gemini, notamment pour le coach IA, la génération de questions, les textes de lecture adaptés et les recommandations d'étude. Le modèle utilisé peut évoluer afin de tenir compte des améliorations techniques et de qualité. La version active peut être configurée à distance via Firebase Remote Config. Les données susceptibles d'être transmises aux services d'IA sont limitées à ce qui est nécessaire : - prompts, questions et demandes de l'utilisateur ; - données pédagogiques utiles à la personnalisation, telles que le niveau, la progression ou les statistiques d'apprentissage ; - contexte d'apprentissage strictement nécessaire à la génération de la réponse. Dans la mesure du possible, les données directement identifiantes ne sont pas transmises aux services d'IA. Les fonctionnalités IA peuvent produire des réponses inexactes ou incomplètes ; l'utilisateur reste responsable de vérifier les informations importantes."
          },
          {
            "h": "5. Sous-traitants et services tiers",
            "b": "SZCZ Softwares utilise notamment les services suivants : - Firebase / Google Cloud : authentification, base de données Firestore, stockage, analytics, configuration à distance, sécurité App Check. - Google Gemini : génération de contenus pédagogiques et traitement des requêtes IA. - Google AdMob : affichage publicitaire dans la version gratuite. - Apple App Store et Google Play Store : distribution de l'application, achats intégrés, abonnements et paiements. Ces prestataires peuvent traiter des données personnelles en qualité de sous-traitants ou de responsables indépendants selon leurs rôles respectifs et leurs propres conditions."
          },
          {
            "h": "6. Durées de conservation",
            "b": "Les données sont conservées pendant des durées proportionnées aux finalités poursuivies : - Compte actif : les données de compte, de progression et de statistiques sont conservées tant que le compte reste actif. - Suppression du compte : les données personnelles sont supprimées ou anonymisées dans un délai raisonnable, en principe sous 30 jours, hors contraintes techniques, légales ou sauvegardes. - Sauvegardes : les copies de sauvegarde peuvent être conservées jusqu'à 90 jours avant suppression définitive. - Données anonymisées ou agrégées : elles peuvent être conservées sans limitation de durée lorsqu'elles ne permettent plus d'identifier l'utilisateur. - Inactivité : après une longue période d'inactivité, le compte peut être archivé puis supprimé, après information de l'utilisateur lorsque cela est possible. L'utilisateur peut demander la suppression de son compte ou de ses données à tout moment depuis l'application ou par email à dev@szczsoftwares.fr."
          },
          {
            "h": "7. Droits des utilisateurs",
            "b": "Conformément au RGPD et à la loi Informatique et Libertés, l'utilisateur dispose des droits suivants : - droit d'accès à ses données personnelles ; - droit de rectification des données inexactes ou incomplètes ; - droit à l'effacement, dans les limites prévues par la loi ; - droit d'opposition, lorsque le traitement repose sur l'intérêt légitime ; - droit à la limitation du traitement ; - droit à la portabilité des données fournies ; - droit de retirer son consentement lorsque le traitement repose sur celui-ci. Pour exercer ces droits, l'utilisateur peut contacter SZCZ Softwares à l'adresse suivante : dev@szczsoftwares.fr. La demande doit préciser l'identifiant du compte ou l'adresse email associée, ainsi que le droit exercé. Une réponse sera apportée dans un délai d'un mois, prolongeable de deux mois en cas de demande complexe ou multiple. L'utilisateur peut également introduire une réclamation auprès de la CNIL : https://www.cnil.fr."
          },
          {
            "h": "8. Sécurité",
            "b": "SZCZ Softwares met en œuvre des mesures techniques et organisationnelles destinées à protéger les données personnelles : - chiffrement des communications en transit via HTTPS/TLS ; - authentification sécurisée via Firebase Authentication ; - règles de sécurité Firebase ; - accès limité aux données personnelles ; - procédures de gestion des incidents et de correction des vulnérabilités. Aucune méthode de transmission ou de stockage électronique n'est totalement sûre. SZCZ Softwares ne peut donc garantir une sécurité absolue, mais s'engage à maintenir un niveau de protection adapté aux risques."
          },
          {
            "h": "9. Transferts hors Union européenne",
            "b": "Certains prestataires, notamment Google, Apple ou leurs sous-traitants, peuvent traiter des données hors de l'Union européenne. Lorsque de tels transferts ont lieu, ils sont encadrés par des garanties appropriées, telles que les clauses contractuelles types de la Commission européenne, les décisions d'adéquation applicables ou tout autre mécanisme reconnu par la réglementation."
          },
          {
            "h": "10. Cookies, traceurs et publicité",
            "b": "L'application mobile Susumou peut utiliser des technologies similaires à des cookies, notamment via Firebase Analytics et Google AdMob. Ces outils peuvent servir à mesurer l'audience, améliorer l'application, détecter les anomalies et afficher des publicités dans la version gratuite. L'utilisateur peut limiter le suivi publicitaire depuis les paramètres de son appareil et, lorsque l'application le propose, depuis les réglages de confidentialité intégrés."
          },
          {
            "h": "11. Mineurs",
            "b": "Susumou peut être utilisée par des mineurs avec l'autorisation de leur représentant légal. Le représentant légal peut contacter SZCZ Softwares à dev@szczsoftwares.fr pour toute demande relative aux données d'un mineur."
          },
          {
            "h": "12. Modification de la politique",
            "b": "SZCZ Softwares peut modifier la présente politique de confidentialité afin de tenir compte des évolutions légales, techniques ou fonctionnelles de l'application. La nouvelle version sera publiée dans l'application ou sur le site https://szczsoftwares.fr. En cas de modification substantielle, les utilisateurs pourront être informés par tout moyen approprié."
          }
        ]
      }
    },
    "cgu": {
      "en": {
        "title": "Susumou Terms of Use",
        "updated": "Version 1.2 - Last updated: April 25, 2026",
        "intro": "These Terms of Use govern access to and use of the Susumou mobile application.",
        "sections": [
          {
            "h": "1. Publisher",
            "b": "Susumou is published by SZCZ Softwares, SASU with share capital of EUR 1,000, registered with the Boulogne-sur-Mer Trade and Companies Register under number 100 523 067. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. SIRET: 100 523 067 00013. Intra-community VAT: FR93100523067. Website: https://szczsoftwares.fr. Contact: dev@szczsoftwares.fr."
          },
          {
            "h": "2. Purpose",
            "b": "Susumou, meaning 'Let's move forward', is a mobile app designed to help users learn Japanese. It offers flashcards with spaced repetition, dictionary and kanji, vocabulary and grammar content, lessons and educational content for different JLPT levels, AI features to support learning, and statistics and progress-tracking tools. Susumou is a digital educational tool and is not official teaching, a language certification or a guarantee of exam success."
          },
          {
            "h": "3. Acceptance of the Terms",
            "b": "Use of Susumou implies full acceptance of these Terms. Acceptance may occur when creating an account, on first use of the app or when subscribing to a paid feature. The user declares that they have the legal capacity to accept these Terms. Minors must obtain authorization from their legal representative."
          },
          {
            "h": "4. Access to the app",
            "b": "The app is available on compatible distribution platforms, including the Apple App Store and Google Play Store. The user is responsible for device compatibility, internet connection, acquiring and maintaining equipment, and network or store-related costs. SZCZ Softwares uses best efforts to keep the app accessible but does not guarantee permanent or uninterrupted availability."
          },
          {
            "h": "5. Account creation and management",
            "b": "Some features require an account. Authentication may be offered through an automatically created anonymous account, email and password, Google Sign-In, or Apple Sign-In where available. An anonymous account may be converted into a permanent account depending on available options. The user agrees to provide accurate information, keep credentials confidential, not share the account, and report unauthorized use. Only one account per user is allowed unless there is a legitimate need such as an email change, migration or support request."
          },
          {
            "h": "6. Free and paid features",
            "b": "Susumou may offer a free version with basic features and advertising, and a Supporter or premium version by subscription, including ad removal and access to certain advanced or AI features. Available features may change over time. SZCZ Softwares may add, change or remove features to improve the app, ensure security, or address technical, legal or economic constraints."
          },
          {
            "h": "7. Artificial intelligence",
            "b": "Some features use generative AI technologies, including the Google Gemini API, to generate explanations, exercises, questions, reading texts, recommendations or personalized answers. Users acknowledge that AI-generated content may be inaccurate, incomplete or unsuitable, does not constitute professional advice, does not guarantee learning results or exam success, and must be checked for important information. Users must not use AI features to generate unlawful, hateful, violent, discriminatory, misleading or third-party-rights-infringing content."
          },
          {
            "h": "8. User obligations",
            "b": "Users must use Susumou in accordance with these Terms, applicable laws and distribution platform terms. Abuse or fraudulent use, attempts to bypass security, intentional server overload, unauthorized commercial exploitation, copying, mass extraction, resale or redistribution of content, reverse engineering, decompilation, unauthorized modification, unauthorized bots or scripts, and account sharing or resale are prohibited. Breach may lead to suspension or deletion of the account, without prejudice to actions SZCZ Softwares may take."
          },
          {
            "h": "9. Account suspension and deletion",
            "b": "SZCZ Softwares may suspend or delete an account in case of breach of these Terms, abusive behavior, suspected fraud, harm to service security or prolonged inactivity. Users may request account deletion at any time from the app settings or by email to dev@szczsoftwares.fr. Deletion may permanently remove progress, statistics, preferences and content associated with the account."
          },
          {
            "h": "10. Intellectual property",
            "b": "The Susumou app, its name, interface, design, code, original educational content, texts, structure and graphic elements are protected by intellectual property law. Unless otherwise stated, these elements are the exclusive property of SZCZ Softwares or are used under rights granted to SZCZ Softwares. Users receive a personal, non-exclusive, non-transferable, revocable license limited to normal use of the app. Unauthorized reproduction, adaptation, extraction, distribution, modification or exploitation is prohibited."
          },
          {
            "h": "11. Personal data",
            "b": "Personal data processing is described in the Susumou Privacy Policy. For any question about personal data, users may contact SZCZ Softwares at dev@szczsoftwares.fr."
          },
          {
            "h": "12. Liability",
            "b": "SZCZ Softwares provides the app with a quality and reliability objective but cannot guarantee the absence of errors, interruptions, data loss or inaccuracies. SZCZ Softwares is not liable for temporary interruptions, bugs or technical incompatibilities, errors in AI-generated content, failure in an exam or certification, indirect damages related to use of the app, or consequences of misuse by the user. Liability limitations do not apply in case of gross or intentional fault or to rights that cannot be waived under applicable law."
          },
          {
            "h": "13. Changes to the Terms",
            "b": "SZCZ Softwares may change these Terms at any time to reflect changes to the app, regulations or services. Users may be informed by publication in the app, on https://szczsoftwares.fr or by any other appropriate means. Continued use after the new Terms enter into force constitutes acceptance."
          },
          {
            "h": "14. Governing law and disputes",
            "b": "These Terms are governed by French law. In case of dispute, the user is invited to contact SZCZ Softwares at dev@szczsoftwares.fr to seek an amicable solution. Failing amicable resolution, the competent French courts may be seized, subject to mandatory consumer provisions. For consumers residing in the European Union, mandatory provisions of the country of residence remain applicable where they cannot be contractually waived."
          }
        ]
      },
      "fr": {
        "title": "Conditions générales d'utilisation de Susumou",
        "updated": "Version 1.2 - Dernière mise à jour : 25 avril 2026",
        "intro": "Les présentes Conditions Générales d'Utilisation (CGU) encadrent l'accès et l'utilisation de l'application mobile Susumou.",
        "sections": [
          {
            "h": "1. Éditeur",
            "b": "Susumou est éditée par SZCZ Softwares, SASU au capital social de 1 000 euros, immatriculée au RCS de Boulogne-sur-Mer sous le numéro 100 523 067. Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France SIRET : 100 523 067 00013 TVA intracommunautaire : FR93100523067 Site web : https://szczsoftwares.fr Contact : dev@szczsoftwares.fr"
          },
          {
            "h": "2. Objet",
            "b": "Susumou (進もう - \"Avançons !\") est une application mobile d'aide à l'apprentissage du japonais. Elle propose notamment : - des flashcards avec répétition espacée ; - un dictionnaire et des contenus liés aux kanji, au vocabulaire et à la grammaire ; - des leçons et contenus pédagogiques pour différents niveaux JLPT ; - des fonctionnalités d'intelligence artificielle pour accompagner l'apprentissage ; - des statistiques et outils de suivi de progression. Susumou est un outil pédagogique numérique. Elle ne constitue ni un enseignement officiel, ni une certification linguistique, ni une garantie de réussite à un examen."
          },
          {
            "h": "3. Acceptation des CGU",
            "b": "L'utilisation de Susumou implique l'acceptation pleine et entière des présentes CGU. Cette acceptation peut intervenir lors de la création d'un compte, lors de la première utilisation de l'application ou lors de la souscription à une fonctionnalité payante. L'utilisateur déclare disposer de la capacité juridique nécessaire pour accepter les présentes CGU. Les mineurs doivent obtenir l'autorisation de leur représentant légal."
          },
          {
            "h": "4. Accès à l'application",
            "b": "L'application est disponible sur les plateformes de distribution compatibles, notamment l'Apple App Store et le Google Play Store. L'utilisateur est responsable : - de la compatibilité de son appareil ; - de sa connexion internet ; - de l'acquisition et de la maintenance de son équipement ; - des coûts liés à l'accès au réseau ou aux services des stores. SZCZ Softwares fait ses meilleurs efforts pour maintenir l'application accessible, mais ne garantit pas une disponibilité permanente ou sans interruption."
          },
          {
            "h": "5. Création et gestion du compte",
            "b": "Certaines fonctionnalités nécessitent la création d'un compte. L'authentification peut être proposée via : - un compte anonyme créé automatiquement ; - une adresse email et un mot de passe ; - Google Sign-In ; - Apple Sign-In, lorsque disponible. Un compte anonyme peut être converti en compte permanent selon les options disponibles dans l'application. L'utilisateur s'engage à fournir des informations exactes, à garder ses identifiants confidentiels, à ne pas partager son compte et à signaler toute utilisation non autorisée. Un seul compte est autorisé par utilisateur, sauf nécessité légitime telle qu'un changement d'adresse email, une migration ou une demande de support."
          },
          {
            "h": "6. Fonctionnalités gratuites et payantes",
            "b": "Susumou peut proposer : - une version gratuite, avec accès aux fonctionnalités de base et affichage de publicités ; - une version Supporter ou premium, sous forme d'abonnement, permettant notamment la suppression des publicités et l'accès à certaines fonctionnalités avancées ou IA. Les fonctionnalités disponibles peuvent évoluer. SZCZ Softwares peut ajouter, modifier ou supprimer certaines fonctionnalités afin d'améliorer l'application, assurer sa sécurité ou tenir compte de contraintes techniques, légales ou économiques."
          },
          {
            "h": "7. Intelligence artificielle",
            "b": "Certaines fonctionnalités utilisent des technologies d'intelligence artificielle générative, notamment via l'API Google Gemini. Ces fonctionnalités peuvent servir à générer des explications, exercices, questions, textes de lecture, recommandations ou réponses personnalisées. L'utilisateur reconnaît que : - les contenus générés par IA peuvent être inexacts, incomplets ou inadaptés ; - les réponses fournies ne constituent pas des conseils professionnels ; - aucun résultat d'apprentissage ou de réussite à un examen n'est garanti ; - il reste responsable de vérifier les informations importantes. L'utilisateur s'engage à ne pas utiliser les fonctionnalités IA pour générer des contenus illicites, haineux, violents, discriminatoires, trompeurs ou portant atteinte aux droits de tiers."
          },
          {
            "h": "8. Obligations de l'utilisateur",
            "b": "L'utilisateur s'engage à utiliser Susumou conformément aux présentes CGU, aux lois applicables et aux conditions des plateformes de distribution. Sont notamment interdits : - l'utilisation abusive ou frauduleuse de l'application ; - les tentatives de contournement des systèmes de sécurité ; - la surcharge volontaire des serveurs ; - l'exploitation commerciale non autorisée des contenus ; - la copie, extraction massive, revente ou redistribution des contenus ; - le reverse engineering, la décompilation ou la modification non autorisée ; - l'utilisation de bots, scripts ou moyens automatisés non autorisés ; - le partage ou la revente de compte. Tout manquement peut entraîner la suspension ou la suppression du compte, sans préjudice des actions que SZCZ Softwares pourrait engager."
          },
          {
            "h": "9. Suspension et suppression du compte",
            "b": "SZCZ Softwares peut suspendre ou supprimer un compte en cas de violation des présentes CGU, comportement abusif, suspicion de fraude, atteinte à la sécurité du service ou inactivité prolongée. L'utilisateur peut demander la suppression de son compte à tout moment depuis les paramètres de l'application ou par email à dev@szczsoftwares.fr. La suppression du compte peut entraîner la perte définitive de la progression, des statistiques, des préférences et des contenus associés au compte."
          },
          {
            "h": "10. Propriété intellectuelle",
            "b": "L'application Susumou, son nom, son interface, son design, son code, ses contenus pédagogiques originaux, ses textes, sa structure et ses éléments graphiques sont protégés par le droit de la propriété intellectuelle. Sauf mention contraire, ces éléments sont la propriété exclusive de SZCZ Softwares ou font l'objet de droits d'utilisation accordés à SZCZ Softwares. L'utilisateur bénéficie d'une licence personnelle, non exclusive, non transférable, révocable et limitée à l'utilisation normale de l'application. Toute reproduction, adaptation, extraction, diffusion, modification ou exploitation non autorisée est interdite."
          },
          {
            "h": "11. Données personnelles",
            "b": "Le traitement des données personnelles est décrit dans la Politique de confidentialité de Susumou. Pour toute question relative aux données personnelles, l'utilisateur peut contacter SZCZ Softwares à dev@szczsoftwares.fr."
          },
          {
            "h": "12. Responsabilité",
            "b": "SZCZ Softwares fournit l'application avec un objectif de qualité et de fiabilité, mais ne peut garantir l'absence totale d'erreurs, d'interruptions, de pertes de données ou d'inexactitudes. SZCZ Softwares ne peut être tenue responsable : - des interruptions temporaires du service ; - des bugs ou incompatibilités techniques ; - des erreurs dans les contenus générés par IA ; - de l'échec à un examen ou à une certification ; - des dommages indirects liés à l'utilisation de l'application ; - des conséquences d'une mauvaise utilisation par l'utilisateur. Les limitations de responsabilité ne s'appliquent pas en cas de faute lourde ou intentionnelle, ni aux droits dont l'utilisateur ne peut être privé en vertu de la loi applicable."
          },
          {
            "h": "13. Modification des CGU",
            "b": "SZCZ Softwares peut modifier les présentes CGU à tout moment afin de tenir compte des évolutions de l'application, de la réglementation ou de ses services. Les utilisateurs pourront être informés des modifications par publication dans l'application, sur le site https://szczsoftwares.fr ou par tout autre moyen approprié. La poursuite de l'utilisation de l'application après l'entrée en vigueur des nouvelles CGU vaut acceptation de celles-ci."
          },
          {
            "h": "14. Droit applicable et règlement des litiges",
            "b": "Les présentes CGU sont régies par le droit français. En cas de litige, l'utilisateur est invité à contacter SZCZ Softwares à dev@szczsoftwares.fr afin de rechercher une solution amiable. À défaut de résolution amiable, les tribunaux français compétents pourront être saisis, sous réserve des dispositions impératives applicables aux consommateurs. Pour les consommateurs résidant dans l'Union européenne, les dispositions impératives du pays de résidence demeurent applicables lorsqu'elles ne peuvent être écartées contractuellement."
          }
        ]
      }
    },
    "cgv": {
      "en": {
        "title": "Susumou Terms of Sale",
        "updated": "Version 1.2 - Last updated: April 25, 2026",
        "intro": "These Terms of Sale define the subscription and use conditions for Susumou paid offers, including the Susumou Supporter subscription.",
        "sections": [
          {
            "h": "1. Seller",
            "b": "Susumou paid offers are provided by SZCZ Softwares, SASU with share capital of EUR 1,000, registered with the Boulogne-sur-Mer Trade and Companies Register under number 100 523 067. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. SIRET: 100 523 067 00013. Intra-community VAT: FR93100523067. Website: https://szczsoftwares.fr. Contact: dev@szczsoftwares.fr."
          },
          {
            "h": "2. Subscription offer",
            "b": "The Susumou Supporter subscription gives access to paid features that may include ad removal, access to the personalized AI coach, generation of AI tests, questions or content, reading texts adapted to the user's level, detailed progress reports, personalized study recommendations, and current or future premium features. The exact list of features, their availability and usage limits are shown in the app and may change."
          },
          {
            "h": "3. Price",
            "b": "The subscription price is displayed in the app before purchase validation, including taxes where applicable, in the currency offered by the distribution platform. Prices may vary by country, applicable taxes, Apple App Store or Google Play Store rules, and promotional offers. SZCZ Softwares may change the subscription price. Any change affecting renewal will be communicated according to the relevant platform rules."
          },
          {
            "h": "4. Order and payment",
            "b": "Subscription is made exclusively through the Apple App Store for iOS devices or Google Play Store for Android devices. These platforms act as payment intermediaries and handle order validation, collection, invoicing, renewal, cancellation and any refund requests under their own terms. SZCZ Softwares does not collect or store banking data."
          },
          {
            "h": "5. Term and renewal",
            "b": "Unless otherwise indicated in the app, the Susumou Supporter subscription is offered monthly. It renews automatically at each term unless cancelled by the user before the renewal date in the Apple or Google account settings. Renewal and collection are managed by the platform used for purchase."
          },
          {
            "h": "6. Cancellation",
            "b": "Users may cancel their subscription at any time from the App Store subscription settings or Google Play subscription settings. Cancellation takes effect at the end of the already paid period, and the user keeps access to paid features until then. SZCZ Softwares does not issue prorated refunds for cancellation during a period."
          },
          {
            "h": "7. Right of withdrawal",
            "b": "Susumou paid offers concern digital services or content accessible immediately after purchase. Under Article L221-28 of the French Consumer Code, the right of withdrawal may not apply to digital content or services whose performance has begun before the end of the withdrawal period with the consumer's prior agreement and, where required, express waiver of this right. Exact withdrawal procedures, where available, are handled by the Apple App Store or Google Play Store depending on the platform used."
          },
          {
            "h": "8. Refunds",
            "b": "Refund requests must be sent directly to the platform used for purchase: Apple through App Store purchase history and refund procedures, or Google through Google Play purchase history and refund procedures. SZCZ Softwares does not make direct refunds when the purchase was made through Apple or Google. Unless the platform decides otherwise or applicable law requires it, no refund is due for non-use of features, dissatisfaction with learning results, cancellation during a period or inability to use the app due to an incompatible device."
          },
          {
            "h": "9. Changes to the offer",
            "b": "SZCZ Softwares may change features included in the subscription, including by adding new features, improving the service, removing obsolete features, complying with technical or legal constraints, or adapting operating costs. Significant changes may be communicated to subscribers through the app, the store or any other appropriate means."
          },
          {
            "h": "10. Service availability",
            "b": "SZCZ Softwares uses best efforts to ensure availability of paid features. Temporary interruptions may occur due to maintenance, updates, outages, security incidents, third-party provider failures or force majeure. A temporary interruption does not automatically give a right to refund, unless the law or the payment platform decides otherwise."
          },
          {
            "h": "11. Educational and AI limits",
            "b": "Susumou is a learning support tool. The subscription does not guarantee success in an exam such as the JLPT, achievement of a specific language level, permanent content accuracy, or absence of errors in AI-generated content. AI-generated answers and content must be checked by the user."
          },
          {
            "h": "12. Liability",
            "b": "Within the limits permitted by applicable law, SZCZ Softwares' liability is limited to proven direct damages and may not exceed the amount paid by the user for the subscription during the previous twelve months. SZCZ Softwares is not liable for indirect damages, data loss, loss of opportunity, loss of revenue, commercial harm or consequences of misuse of the app. This limitation does not apply in case of gross or intentional fault or to legal guarantees a consumer cannot waive."
          },
          {
            "h": "13. Customer service",
            "b": "For any question about the subscription or paid features, users may contact SZCZ Softwares at dev@szczsoftwares.fr. For payment, billing, cancellation or refund questions, users must also consult the tools and terms of the platform used for purchase."
          },
          {
            "h": "14. Mediation and dispute resolution",
            "b": "In case of dispute, users are invited to contact SZCZ Softwares at dev@szczsoftwares.fr to seek an amicable solution. If the user acts as a consumer, they may use a consumer mediator free of charge under the conditions of the French Consumer Code. The competent mediator's details will be communicated once designated or on request. Users may also consult the European online dispute resolution platform: https://ec.europa.eu/consumers/odr."
          },
          {
            "h": "15. Governing law",
            "b": "These Terms of Sale are governed by French law. Failing amicable resolution, the competent French courts may be seized, subject to mandatory consumer provisions. For disputes concerning payments, refunds and subscription management, Apple App Store or Google Play Store terms may also apply."
          }
        ]
      },
      "fr": {
        "title": "Conditions générales de vente de Susumou",
        "updated": "Version 1.2 - Dernière mise à jour : 25 avril 2026",
        "intro": "Les présentes Conditions Générales de Vente (CGV) définissent les modalités de souscription et d'utilisation des offres payantes de l'application Susumou, notamment l'abonnement Susumou Supporter.",
        "sections": [
          {
            "h": "1. Vendeur",
            "b": "Les offres payantes de Susumou sont proposées par SZCZ Softwares, SASU au capital social de 1 000 euros, immatriculée au RCS de Boulogne-sur-Mer sous le numéro 100 523 067. Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France SIRET : 100 523 067 00013 TVA intracommunautaire : FR93100523067 Site web : https://szczsoftwares.fr Contact : dev@szczsoftwares.fr"
          },
          {
            "h": "2. Offre d'abonnement",
            "b": "L'abonnement Susumou Supporter donne accès à des fonctionnalités payantes pouvant notamment inclure : - la suppression des publicités ; - l'accès au coach IA personnalisé ; - la génération de tests, questions ou contenus via IA ; - des textes de lecture adaptés au niveau de l'utilisateur ; - des rapports de progression détaillés ; - des recommandations d'étude personnalisées ; - certaines fonctionnalités premium actuelles ou futures. La liste exacte des fonctionnalités, leur disponibilité et leurs limites d'utilisation sont indiquées dans l'application et peuvent évoluer."
          },
          {
            "h": "3. Prix",
            "b": "Le prix de l'abonnement est affiché dans l'application avant validation de l'achat, toutes taxes comprises lorsque cela est applicable, dans la devise proposée par la plateforme de distribution. Les prix peuvent varier selon le pays, les taxes applicables, les règles de l'Apple App Store ou du Google Play Store, et les éventuelles offres promotionnelles. SZCZ Softwares peut modifier le prix de l'abonnement. Toute modification applicable au renouvellement sera communiquée selon les règles de la plateforme concernée."
          },
          {
            "h": "4. Commande et paiement",
            "b": "La souscription est effectuée exclusivement via les plateformes de distribution : - Apple App Store pour les appareils iOS ; - Google Play Store pour les appareils Android. Ces plateformes agissent comme intermédiaires de paiement et gèrent la validation de la commande, le prélèvement, la facturation, le renouvellement, la résiliation et les éventuelles demandes de remboursement selon leurs propres conditions. SZCZ Softwares ne collecte et ne stocke aucune donnée bancaire."
          },
          {
            "h": "5. Durée et renouvellement",
            "b": "Sauf indication contraire dans l'application, l'abonnement Susumou Supporter est proposé sur une base mensuelle. L'abonnement se renouvelle automatiquement à chaque échéance, sauf résiliation par l'utilisateur avant la date de renouvellement dans les paramètres de son compte Apple ou Google. Le renouvellement et le prélèvement sont gérés par la plateforme utilisée lors de l'achat."
          },
          {
            "h": "6. Résiliation",
            "b": "L'utilisateur peut résilier son abonnement à tout moment depuis : - les paramètres d'abonnement de l'App Store ; - les paramètres d'abonnement de Google Play. La résiliation prend effet à la fin de la période déjà payée. L'utilisateur conserve l'accès aux fonctionnalités payantes jusqu'à cette échéance. Aucun remboursement au prorata n'est effectué par SZCZ Softwares en cas de résiliation en cours de période."
          },
          {
            "h": "7. Droit de rétractation",
            "b": "Les offres payantes de Susumou portent sur la fourniture de services ou contenus numériques accessibles immédiatement après l'achat. Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation peut ne pas s'appliquer aux contenus ou services numériques dont l'exécution a commencé avant la fin du délai de rétractation avec l'accord préalable du consommateur et, lorsque requis, renoncement exprès à ce droit. Les modalités exactes de rétractation, lorsqu'elles sont disponibles, sont gérées par l'Apple App Store ou Google Play Store selon la plateforme utilisée."
          },
          {
            "h": "8. Remboursements",
            "b": "Les demandes de remboursement doivent être adressées directement à la plateforme utilisée pour l'achat : - Apple : via l'historique d'achat et les procédures de remboursement de l'App Store ; - Google : via l'historique d'achat et les procédures de remboursement de Google Play. SZCZ Softwares ne procède pas à des remboursements directs lorsque l'achat a été effectué via Apple ou Google. Sauf décision contraire de la plateforme ou obligation légale applicable, aucun remboursement n'est dû pour la non-utilisation des fonctionnalités, l'insatisfaction quant aux résultats d'apprentissage, la résiliation en cours de période ou l'impossibilité d'utiliser l'application résultant d'un appareil incompatible."
          },
          {
            "h": "9. Modification de l'offre",
            "b": "SZCZ Softwares peut faire évoluer les fonctionnalités incluses dans l'abonnement, notamment pour ajouter de nouvelles fonctionnalités, améliorer le service, supprimer une fonctionnalité obsolète, respecter une contrainte technique ou légale, ou adapter les coûts d'exploitation. Les modifications significatives pourront être communiquées aux abonnés par l'application, par le store ou par tout autre moyen approprié."
          },
          {
            "h": "10. Disponibilité du service",
            "b": "SZCZ Softwares fait ses meilleurs efforts pour assurer la disponibilité des fonctionnalités payantes. Des interruptions temporaires peuvent toutefois intervenir en raison de maintenance, mises à jour, pannes, incidents de sécurité, défaillances de prestataires tiers ou cas de force majeure. Une interruption temporaire ne donne pas automatiquement droit à remboursement, sauf disposition légale contraire ou décision de la plateforme de paiement."
          },
          {
            "h": "11. Limites pédagogiques et IA",
            "b": "Susumou est un outil d'aide à l'apprentissage. L'abonnement ne garantit pas : - la réussite à un examen, notamment le JLPT ; - l'atteinte d'un niveau linguistique déterminé ; - l'exactitude permanente des contenus ; - l'absence d'erreur dans les contenus générés par intelligence artificielle. Les réponses et contenus générés par IA doivent être vérifiés par l'utilisateur."
          },
          {
            "h": "12. Responsabilité",
            "b": "Dans les limites permises par la loi applicable, la responsabilité de SZCZ Softwares est limitée aux dommages directs prouvés et ne peut excéder le montant payé par l'utilisateur au titre de l'abonnement au cours des douze derniers mois. SZCZ Softwares ne peut être tenue responsable des dommages indirects, pertes de données, pertes de chance, pertes de revenus, préjudices commerciaux ou conséquences d'une mauvaise utilisation de l'application. Cette limitation ne s'applique pas en cas de faute lourde ou intentionnelle, ni aux garanties légales auxquelles un consommateur ne peut renoncer."
          },
          {
            "h": "13. Service client",
            "b": "Pour toute question relative à l'abonnement ou aux fonctionnalités payantes, l'utilisateur peut contacter SZCZ Softwares à dev@szczsoftwares.fr. Pour les questions de paiement, de facturation, de résiliation ou de remboursement, l'utilisateur doit également consulter les outils et conditions de la plateforme utilisée pour l'achat."
          },
          {
            "h": "14. Médiation et règlement des litiges",
            "b": "En cas de litige, l'utilisateur est invité à contacter SZCZ Softwares à dev@szczsoftwares.fr afin de rechercher une solution amiable. Si l'utilisateur agit en qualité de consommateur, il peut recourir gratuitement à un médiateur de la consommation dans les conditions prévues par le Code de la consommation. Les coordonnées du médiateur compétent seront communiquées dès désignation ou sur demande. L'utilisateur peut également consulter la plateforme européenne de règlement en ligne des litiges : https://ec.europa.eu/consumers/odr."
          },
          {
            "h": "15. Droit applicable",
            "b": "Les présentes CGV sont régies par le droit français. À défaut de résolution amiable, les tribunaux français compétents pourront être saisis, sous réserve des dispositions impératives applicables aux consommateurs. Pour les litiges relatifs aux paiements, aux remboursements et à la gestion des abonnements, les conditions de l'Apple App Store ou du Google Play Store peuvent également s'appliquer."
          }
        ]
      }
    },
    "mentions-legales": {
      "en": {
        "title": "Legal Notice - Susumou",
        "updated": "Version 1.2 - Last updated: April 25, 2026",
        "intro": "This legal notice concerns the website https://szczsoftwares.fr and the Susumou mobile application.",
        "sections": [
          {
            "h": "1. Publisher",
            "b": "The website and app are published by SZCZ Softwares, SASU with share capital of EUR 1,000, registered with the Boulogne-sur-Mer Trade and Companies Register under number 100 523 067. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. SIREN: 100 523 067. SIRET: 100 523 067 00013. Intra-community VAT: FR93100523067. NAF/APE code: 6201Z - Computer programming. Incorporation date: January 29, 2026. Registry: RCS Boulogne-sur-Mer. Website: https://szczsoftwares.fr. Email: dev@szczsoftwares.fr."
          },
          {
            "h": "2. Publishing director",
            "b": "The publishing director is Bastian Niszczota, president of SZCZ Softwares."
          },
          {
            "h": "3. Hosting",
            "b": "The Susumou app and part of its technical services are hosted through Firebase and Google Cloud. Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States. If https://szczsoftwares.fr is hosted by a provider separate from the app's technical services, the hosting information applicable to the website may be specified on dedicated pages of the site."
          },
          {
            "h": "4. Contact",
            "b": "For any question about the website, the app or this legal notice, contact SZCZ Softwares at dev@szczsoftwares.fr."
          },
          {
            "h": "5. Intellectual property",
            "b": "All elements composing the website and the Susumou app, including texts, interfaces, logos, graphic elements, features, educational content, databases, architecture, design and code, are protected by intellectual property law. Unless otherwise stated, these elements are the exclusive property of SZCZ Softwares or are used under authorization. The name 'Susumou', the app design and original educational content are operated by SZCZ Softwares. Any unauthorized reproduction, representation, modification, extraction, adaptation, distribution or exploitation, in whole or in part, is prohibited and may constitute infringement."
          },
          {
            "h": "6. Credits",
            "b": "Susumou is a Japanese-learning app inspired by JLPTGO. Icons used in the app may come from Material Design Icons or graphic libraries integrated into the frameworks used. Third-party trademarks, logos and services mentioned, including Apple, Google, Firebase, Google Play, App Store, AdMob and Gemini, belong to their respective owners."
          },
          {
            "h": "7. Personal data",
            "b": "Information concerning personal data processing is detailed in the Susumou Privacy Policy. For any personal data request, contact SZCZ Softwares at dev@szczsoftwares.fr."
          },
          {
            "h": "8. Cookies and trackers",
            "b": "The Susumou app may use audience measurement, diagnostic and advertising tools, including Firebase Analytics and Google AdMob. These technologies help improve the service, ensure security, understand app usage and, in the free version, display advertisements. Users can limit certain advertising tracking from their device settings and, where available, from privacy settings offered in the app."
          },
          {
            "h": "9. Liability",
            "b": "SZCZ Softwares strives to provide accurate and up-to-date information but does not guarantee the accuracy, completeness or permanent availability of the website, the app or their content. The user remains responsible for using the service, checking educational content and decisions made based on provided information. SZCZ Softwares cannot be held liable for indirect damages, temporary interruptions, technical errors, data loss or AI-generated content that may be inaccurate or incomplete."
          }
        ]
      },
      "fr": {
        "title": "Mentions légales",
        "updated": "Version 1.2 - Dernière mise à jour : 25 avril 2026",
        "intro": "Les présentes mentions légales concernent le site https://szczsoftwares.fr et l'application mobile Susumou.",
        "sections": [
          {
            "h": "1. Éditeur",
            "b": "Le site et l'application sont édités par : SZCZ Softwares, SASU au capital social de 1 000 euros, immatriculée au RCS de Boulogne-sur-Mer sous le numéro 100 523 067. Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France SIREN : 100 523 067 SIRET : 100 523 067 00013 TVA intracommunautaire : FR93100523067 Code NAF/APE : 6201Z - Programmation informatique Date d'immatriculation : 29 janvier 2026 Greffe : RCS Boulogne-sur-Mer Site web : https://szczsoftwares.fr Email : dev@szczsoftwares.fr"
          },
          {
            "h": "2. Directeur de la publication",
            "b": "Le directeur de la publication est Bastian Niszczota, président de SZCZ Softwares."
          },
          {
            "h": "3. Hébergement",
            "b": "L'application Susumou et une partie de ses services techniques sont hébergés via Firebase et Google Cloud. Google LLC 1600 Amphitheatre Parkway Mountain View, CA 94043 États-Unis Si le site https://szczsoftwares.fr est hébergé par un prestataire distinct des services techniques de l'application, les informations d'hébergement applicables au site peuvent être précisées sur les pages dédiées du site."
          },
          {
            "h": "4. Contact",
            "b": "Pour toute question concernant le site, l'application ou les présentes mentions légales, vous pouvez contacter SZCZ Softwares à l'adresse suivante : dev@szczsoftwares.fr"
          },
          {
            "h": "5. Propriété intellectuelle",
            "b": "L'ensemble des éléments composant le site et l'application Susumou, notamment les textes, interfaces, logos, éléments graphiques, fonctionnalités, contenus pédagogiques, bases de données, architecture, design et code, est protégé par le droit de la propriété intellectuelle. Sauf mention contraire, ces éléments sont la propriété exclusive de SZCZ Softwares ou font l'objet d'une autorisation d'utilisation. Le nom \"Susumou\" (進もう), le design de l'application et les contenus pédagogiques originaux sont exploités par SZCZ Softwares. Toute reproduction, représentation, modification, extraction, adaptation, diffusion ou exploitation non autorisée, totale ou partielle, est interdite et peut constituer une contrefaçon."
          },
          {
            "h": "6. Crédits",
            "b": "Susumou est une application d'apprentissage du japonais inspirée par JLPTGO. Les icônes utilisées dans l'application peuvent provenir de Material Design Icons ou des bibliothèques graphiques intégrées aux frameworks utilisés. Les marques, logos et services tiers cités, notamment Apple, Google, Firebase, Google Play, App Store, AdMob et Gemini, appartiennent à leurs titulaires respectifs."
          },
          {
            "h": "7. Données personnelles",
            "b": "Les informations relatives au traitement des données personnelles sont détaillées dans la Politique de confidentialité de Susumou. Pour toute demande relative aux données personnelles, vous pouvez contacter SZCZ Softwares à l'adresse suivante : dev@szczsoftwares.fr."
          },
          {
            "h": "8. Cookies et traceurs",
            "b": "L'application Susumou peut utiliser des outils de mesure d'audience, de diagnostic et de publicité, notamment Firebase Analytics et Google AdMob. Ces technologies permettent d'améliorer le service, d'assurer la sécurité, de comprendre l'usage de l'application et, dans la version gratuite, d'afficher des publicités. L'utilisateur peut limiter certains suivis publicitaires depuis les paramètres de son appareil et, lorsque disponible, depuis les réglages de confidentialité proposés dans l'application."
          },
          {
            "h": "9. Responsabilité",
            "b": "SZCZ Softwares s'efforce de fournir des informations exactes et à jour, mais ne garantit pas l'exactitude, l'exhaustivité ou la disponibilité permanente du site, de l'application ou de leurs contenus. L'utilisateur demeure responsable de son utilisation du service, de la vérification des contenus pédagogiques et des décisions prises sur la base des informations fournies. SZCZ Softwares ne saurait être tenue responsable des dommages indirects, interruptions temporaires, erreurs techniques, pertes de données ou contenus générés par intelligence artificielle qui seraient inexacts ou incomplets."
          }
        ]
      }
    },
    "account-deletion": {
      "fr": {
        "title": "Suppression de compte - Susumou",
        "updated": "Derniere mise a jour : 25 avril 2026",
        "intro": "Vous pouvez demander la suppression de votre compte Susumou et des donnees personnelles associees depuis l'application ou par email.",
        "sections": [
          {
            "h": "1. Depuis l'application",
            "b": "Ouvrez les parametres de Susumou, puis Compte > Supprimer mon compte, et confirmez la demande. La suppression est prise en compte et traitee dans un delai raisonnable, en principe sous 30 jours."
          },
          {
            "h": "2. Par email",
            "b": "Envoyez une demande a dev@szczsoftwares.fr avec l'objet 'Suppression de compte Susumou', en precisant l'adresse email associee, le mode de connexion utilise et toute information permettant d'identifier le compte."
          },
          {
            "h": "3. Donnees supprimees",
            "b": "Les donnees d'authentification, de profil, de preferences, de progression pedagogique, de repetition espacee, de tests, de statistiques et les donnees synchronisees associees au compte sont supprimees ou anonymisees."
          },
          {
            "h": "4. Donnees conservees",
            "b": "Certaines donnees peuvent etre conservees lorsque la loi l'exige, lorsqu'elles sont necessaires a la securite du service, aux sauvegardes techniques temporaires ou sous forme anonymisee et agregee."
          },
          {
            "h": "5. Abonnements actifs",
            "b": "La suppression du compte ne resilie pas automatiquement un abonnement gere par Apple ou Google. L'utilisateur doit resilier l'abonnement depuis les reglages de l'App Store ou de Google Play."
          },
          {
            "h": "6. Consequences",
            "b": "La suppression est irreversible. La progression, les statistiques, les preferences et les contenus associes au compte ne pourront pas etre restaures."
          },
          {
            "h": "7. Contact",
            "b": "SZCZ Softwares - dev@szczsoftwares.fr."
          }
        ]
      },
      "en": {
        "title": "Account Deletion - Susumou",
        "updated": "Last updated: April 25, 2026",
        "intro": "You can request deletion of your Susumou account and associated personal data from the app or by email.",
        "sections": [
          {
            "h": "1. From the app",
            "b": "Open Susumou settings, then Account > Delete my account, and confirm the request. Deletion is recorded and processed within a reasonable period, in principle within 30 days."
          },
          {
            "h": "2. By email",
            "b": "Send a request to dev@szczsoftwares.fr with subject \"Susumou account deletion\", providing the associated email address, sign-in method and any information that can identify the account."
          },
          {
            "h": "3. Data deleted",
            "b": "Authentication data, profile data, preferences, learning progress, spaced-repetition data, tests, statistics and synchronized data associated with the account are deleted or anonymized."
          },
          {
            "h": "4. Data retained",
            "b": "Some data may be retained where required by law, where necessary for service security, for temporary technical backups, or in anonymized and aggregated form."
          },
          {
            "h": "5. Active subscriptions",
            "b": "Account deletion does not automatically cancel a subscription managed by Apple or Google. The user must cancel the subscription from the App Store or Google Play settings."
          },
          {
            "h": "6. Consequences",
            "b": "Deletion is irreversible. Progress, statistics, preferences and content associated with the account cannot be restored."
          },
          {
            "h": "7. Contact",
            "b": "SZCZ Softwares - dev@szczsoftwares.fr."
          }
        ]
      }
    }
  },
  "soccer-link": {
    "privacy": {
      "en": {
        "title": "SoccerLink Privacy Policy",
        "updated": "Last updated: April 25, 2026",
        "intro": "This privacy policy explains how SZCZ SOFTWARES collects, uses, retains and protects personal data of SoccerLink app users. It is drafted in accordance with the GDPR and the French Data Protection Act of January 6, 1978 as amended.",
        "sections": [
          {
            "h": "1. Data controller",
            "b": "The data controller is SZCZ SOFTWARES, SAS with share capital of EUR 1,000. SIREN: 100 523 067. SIRET: 100 523 067 00013. RCS Boulogne-sur-Mer: 100 523 067. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. Website: https://szczsoftwares.fr. Email: dev@szczsoftwares.fr. SZCZ SOFTWARES has not appointed a data protection officer; any personal data request may be sent to this address."
          },
          {
            "h": "2. Data collected",
            "b": "Depending on app use, SoccerLink may collect identification data such as first and last name or display name, email address, profile photo, city or geographic area and account technical identifiers; sports profile data such as amateur football role, position, preferred foot, height, club, biography, experience, certifications or equivalent information, and data linked to clubs, teams, offers, applications, publications and interactions; communication and usage data such as in-app messages, connections, requests, relationships, interactions, publications, comments, applications, offers and content shared by the user, notification, privacy and account preferences; and technical data such as device, operating system and app version information, technical logs, Firebase Crashlytics crash and error reports, Firebase Performance Monitoring data, and Firebase Analytics usage events when analytics collection is enabled."
          },
          {
            "h": "3. Processing purposes",
            "b": "Data is used to create, authenticate and manage user accounts; provide SoccerLink features including profiles, clubs, messaging, search, offers, applications, publications and notifications; enable communication between users; manage privacy and notification preferences; ensure security, prevent abuse and protect service integrity; diagnose technical incidents and improve performance; measure app usage when analytics is enabled; respond to support requests; and comply with applicable legal obligations."
          },
          {
            "h": "4. Legal bases",
            "b": "Processing is based, depending on the case, on contract performance where necessary to provide the service, user consent including acceptance of contractual documents and certain optional features, SZCZ SOFTWARES' legitimate interest in securing, maintaining and improving the app, and compliance with legal obligations. Consent may be withdrawn where the processing relies on it, without affecting the lawfulness of processing carried out before withdrawal."
          },
          {
            "h": "5. Data visibility",
            "b": "Some profile information may be visible to other users depending on features used and privacy settings: display name, photo, city, role, club, sports information or published content. Users remain responsible for information they choose to make visible or communicate to other users."
          },
          {
            "h": "6. Processors and providers",
            "b": "SZCZ SOFTWARES uses Google Firebase / Google Cloud for authentication, Firestore database, file storage, hosting, server functions, push notifications, crash reporting, performance monitoring and analytics; Google Sign-In for Google account login if chosen by the user; and Algolia SAS for search engine and indexing of profiles, clubs or content needed for in-app search. These providers process data on behalf of SZCZ SOFTWARES or under their own responsibility where their services require it. They are subject to contractual confidentiality and security obligations. SZCZ SOFTWARES does not sell users' personal data."
          },
          {
            "h": "7. Transfers outside the European Union",
            "b": "Some providers, including Google, may process data outside the European Union. When this occurs, transfers are covered by recognized mechanisms such as the EU-US Data Privacy Framework where applicable, European Commission standard contractual clauses and additional security measures."
          },
          {
            "h": "8. Security",
            "b": "SZCZ SOFTWARES implements technical and organizational measures to protect data, including encrypted HTTPS/TLS connections, secure authentication, Firestore and Storage security rules limiting data access, separation of sensitive server-side operations where necessary, monitoring of errors, incidents and performance, and access control for administration tools and third-party services. No security measure can guarantee absolute protection; in the event of an incident creating a risk for data subjects' rights and freedoms, SZCZ SOFTWARES will take measures required by applicable regulations."
          },
          {
            "h": "9. Retention periods",
            "b": "Data is retained for periods necessary to the stated purposes: account data while the account exists; profile data and published content while the account exists or until user deletion where available; messages while conversation threads exist and according to applicable deletion rules; analytics data for up to 14 months subject to service configuration; crash reports for up to 90 days unless a specific technical or security need applies; and technical logs for up to 12 months unless a legal obligation or security need applies. After account deletion, personal data is deleted or anonymized within a reasonable period, in principle within 30 days, unless legal retention or evidence preservation is required."
          },
          {
            "h": "10. Local storage and similar technologies",
            "b": "The app uses local storage technologies necessary for operation, including maintaining the login session, saving preferences, improving performance through caching, and managing local app settings. Firebase Analytics may collect usage data. Users can disable analytics collection in app settings when this option is available."
          },
          {
            "h": "11. Minors",
            "b": "SoccerLink is intended for people aged at least 13. Minors must use the app with authorization from their parents or legal representatives. In France, where consent is required for processing data of a minor under 15, that consent must be given or authorized by the holder of parental authority. If SZCZ SOFTWARES finds that a child's data was collected without required authorization, it will be deleted as soon as possible."
          },
          {
            "h": "12. Your rights",
            "b": "Users have rights of access, rectification, erasure, restriction of processing, objection, portability, withdrawal of consent where processing is based on consent, and the right to define instructions concerning the fate of their data after death. To exercise these rights, contact dev@szczsoftwares.fr. A response will be provided within one month from receipt of the request, extendable by two months for complex or numerous requests."
          },
          {
            "h": "13. CNIL complaint",
            "b": "If users believe their rights are not respected, they may lodge a complaint with the CNIL: Commission Nationale de l'Informatique et des Libertés, 3 place de Fontenoy - TSA 80715, 75334 Paris Cedex 07, https://www.cnil.fr."
          },
          {
            "h": "14. Changes to this policy",
            "b": "SZCZ SOFTWARES may modify this privacy policy to reflect changes in the app, services used or regulations. In the event of a significant change, users will be informed by any appropriate means, including in the app."
          }
        ]
      },
      "fr": {
        "title": "Politique de confidentialité - SoccerLink",
        "updated": "Dernière mise à jour : 25 avril 2026",
        "intro": "La présente politique de confidentialité explique comment SZCZ SOFTWARES collecte, utilise, conserve et protège les données personnelles des utilisateurs de l'application SoccerLink. Elle est rédigée conformément au Règlement général sur la protection des données (RGPD - règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.",
        "sections": [
          {
            "h": "1. Responsable du traitement",
            "b": "Le responsable du traitement est : SZCZ SOFTWARES SAS au capital de 1 000 euros SIREN : 100 523 067 SIRET : 100 523 067 00013 RCS Boulogne-sur-Mer : 100 523 067 Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France Site web : https://szczsoftwares.fr Email : dev@szczsoftwares.fr SZCZ SOFTWARES n'a pas désigné de délégué à la protection des données. Toute demande relative aux données personnelles peut être envoyée à l'adresse ci-dessus."
          },
          {
            "h": "2. Données collectées",
            "b": "SoccerLink peut collecter les catégories de données suivantes, selon votre utilisation de l'application : Données d'identification - Nom et prénom ou nom affiché ; - Adresse email ; - Photo de profil, si vous en ajoutez une ; - Ville ou zone géographique renseignée ; - Identifiants techniques liés à votre compte. Données de profil sportif - Rôle dans le football amateur : joueur, entraîneur, arbitre, dirigeant, parent ou autre rôle disponible dans l'application ; - Informations sportives : poste, pied préféré, taille, club, biographie, expérience, certifications ou informations équivalentes ; - Informations liées aux clubs, équipes, offres, candidatures, publications et interactions créées dans l'application. Données de communication et d'utilisation - Messages échangés dans l'application ; - Connexions, demandes, relations et interactions avec d'autres utilisateurs ; - Publications, commentaires, candidatures, offres et contenus que vous choisissez de partager ; - Préférences de notification, de confidentialité et de compte. Données techniques - Informations relatives à l'appareil, au système d'exploitation et à la version de l'application ; - Journaux techniques nécessaires au fonctionnement et à la sécurité ; - Rapports de crash et d'erreurs via Firebase Crashlytics ; - Données de performance via Firebase Performance Monitoring ; - Événements d'utilisation via Firebase Analytics, lorsque la collecte analytique est activée."
          },
          {
            "h": "3. Finalités des traitements",
            "b": "Les données sont utilisées pour : - Créer, authentifier et gérer votre compte utilisateur ; - Fournir les fonctionnalités de SoccerLink : profils, clubs, messagerie, recherche, offres, candidatures, publications et notifications ; - Permettre la communication entre utilisateurs ; - Gérer vos préférences de confidentialité et de notification ; - Assurer la sécurité, prévenir les abus et protéger l'intégrité du service ; - Diagnostiquer les incidents techniques et améliorer les performances ; - Mesurer l'utilisation de l'application lorsque l'analytics est activé ; - Répondre aux demandes de support ; - Respecter les obligations légales applicables."
          },
          {
            "h": "4. Bases légales",
            "b": "Les traitements reposent, selon les cas, sur : - L'exécution du contrat, lorsque le traitement est nécessaire à la fourniture du service ; - Votre consentement, notamment pour l'acceptation des documents contractuels et certaines fonctionnalités optionnelles ; - L'intérêt légitime de SZCZ SOFTWARES à sécuriser, maintenir et améliorer l'application ; - Le respect d'obligations légales. Vous pouvez retirer votre consentement lorsque le traitement concerné repose sur celui-ci, sans remettre en cause la licéité du traitement effectué avant le retrait."
          },
          {
            "h": "5. Visibilité des données",
            "b": "Certaines informations de profil peuvent être visibles par d'autres utilisateurs selon les fonctionnalités utilisées et vos paramètres de confidentialité : nom affiché, photo, ville, rôle, club, informations sportives ou contenus publiés. Vous restez responsable des informations que vous choisissez de rendre visibles ou de communiquer à d'autres utilisateurs."
          },
          {
            "h": "6. Sous-traitants et prestataires",
            "b": "SZCZ SOFTWARES utilise notamment les prestataires suivants : - Google Firebase / Google Cloud : authentification, base de données Firestore, stockage de fichiers, hébergement, fonctions serveur, notifications push, crash reporting, performance monitoring et analytics ; - Google Sign-In : connexion via compte Google, si vous choisissez ce mode d'authentification ; - Algolia SAS : moteur de recherche et indexation des profils, clubs ou contenus nécessaires à la recherche dans l'application. Ces prestataires traitent les données pour le compte de SZCZ SOFTWARES ou selon leurs propres responsabilités lorsque leurs services l'imposent. Ils sont soumis à des obligations contractuelles de confidentialité et de sécurité. SZCZ SOFTWARES ne vend pas les données personnelles des utilisateurs."
          },
          {
            "h": "7. Transferts hors Union européenne",
            "b": "Certains prestataires, notamment Google, peuvent traiter des données en dehors de l'Union européenne. Lorsque cela se produit, les transferts sont encadrés par des mécanismes reconnus, tels que le EU-US Data Privacy Framework lorsque applicable, les clauses contractuelles types de la Commission européenne et des mesures complémentaires de sécurité."
          },
          {
            "h": "8. Sécurité",
            "b": "SZCZ SOFTWARES met en oeuvre des mesures techniques et organisationnelles destinées à protéger les données : - Connexions chiffrées via HTTPS/TLS ; - Authentification sécurisée ; - Règles de sécurité Firestore et Storage limitant l'accès aux données ; - Séparation des opérations sensibles côté serveur lorsque nécessaire ; - Surveillance des erreurs, incidents et performances ; - Contrôle des accès aux outils d'administration et aux services tiers. Aucune mesure de sécurité ne peut garantir une protection absolue. En cas d'incident présentant un risque pour les droits et libertés des personnes concernées, SZCZ SOFTWARES prendra les mesures prévues par la réglementation applicable."
          },
          {
            "h": "9. Durées de conservation",
            "b": "Les données sont conservées pendant les durées nécessaires aux finalités décrites ci-dessus : - Données de compte : pendant la durée d'existence du compte ; - Données de profil et contenus publiés : pendant la durée d'existence du compte ou jusqu'à suppression par l'utilisateur lorsque la fonctionnalité le permet ; - Messages : tant que les fils de conversation existent et selon les règles de suppression applicables ; - Données analytiques : 14 mois maximum, sous réserve de la configuration des services utilisés ; - Rapports de crash : 90 jours maximum, sauf nécessité technique ou sécurité particulière ; - Logs techniques : 12 mois maximum, sauf obligation légale ou besoin de sécurité. Après suppression du compte, les données personnelles sont supprimées ou anonymisées dans un délai raisonnable, en principe sous 30 jours, sauf obligation légale de conservation ou nécessité de conservation de preuves."
          },
          {
            "h": "10. Stockage local et technologies similaires",
            "b": "L'application utilise des technologies de stockage local nécessaires à son fonctionnement, notamment pour : - Maintenir votre session de connexion ; - Sauvegarder certaines préférences ; - Améliorer les performances par mise en cache ; - Gérer des paramètres locaux de l'application. Firebase Analytics peut être utilisé pour collecter des données d'utilisation. Vous pouvez désactiver la collecte de données analytiques dans les paramètres de l'application lorsque cette option est disponible."
          },
          {
            "h": "11. Mineurs",
            "b": "SoccerLink est destinée aux personnes âgées d'au moins 13 ans. Les mineurs doivent utiliser l'application avec l'autorisation de leurs parents ou représentants légaux. En France, lorsque le consentement est requis pour le traitement de données d'un mineur de moins de 15 ans, ce consentement doit être donné ou autorisé par le titulaire de l'autorité parentale, conformément aux règles applicables. Si SZCZ SOFTWARES constate que des données d'un enfant ont été collectées sans autorisation nécessaire, elles seront supprimées dans les meilleurs délais."
          },
          {
            "h": "12. Vos droits",
            "b": "Vous disposez des droits suivants sur vos données personnelles : - Droit d'accès ; - Droit de rectification ; - Droit à l'effacement ; - Droit à la limitation du traitement ; - Droit d'opposition ; - Droit à la portabilité ; - Droit de retirer votre consentement lorsque le traitement repose sur celui-ci ; - Droit de définir des directives relatives au sort de vos données après votre décès. Pour exercer vos droits, contactez SZCZ SOFTWARES à l'adresse : dev@szczsoftwares.fr Une réponse sera apportée dans un délai d'un mois à compter de la réception de la demande. Ce délai peut être prolongé de deux mois en cas de demande complexe ou d'un nombre important de demandes."
          },
          {
            "h": "13. Réclamation auprès de la CNIL",
            "b": "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : Commission Nationale de l'Informatique et des Libertés 3 place de Fontenoy - TSA 80715 75334 Paris Cedex 07 https://www.cnil.fr"
          },
          {
            "h": "14. Modification de la politique",
            "b": "SZCZ SOFTWARES peut modifier la présente politique de confidentialité afin de tenir compte de l'évolution de l'application, des services utilisés ou de la réglementation. En cas de modification importante, les utilisateurs seront informés par tout moyen approprié, notamment dans l'application."
          }
        ]
      }
    },
    "cgu": {
      "en": {
        "title": "SoccerLink Terms of Use",
        "updated": "Last updated: April 25, 2026",
        "intro": "These Terms of Use define the rules for accessing and using the SoccerLink application. By creating an account or using SoccerLink, you accept these Terms and the Privacy Policy.",
        "sections": [
          {
            "h": "1. Publisher",
            "b": "SoccerLink is published by SZCZ SOFTWARES, SAS with share capital of EUR 1,000. SIREN: 100 523 067. SIRET: 100 523 067 00013. RCS Boulogne-sur-Mer: 100 523 067. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. Website: https://szczsoftwares.fr. Email: dev@szczsoftwares.fr."
          },
          {
            "h": "2. Service purpose",
            "b": "SoccerLink is a mobile and web app for amateur football stakeholders, including players, coaches, referees, managers, parents, clubs and people involved in sports life. The app allows users to create and manage a profile, search for and connect with other users, create, manage or join clubs and teams, communicate through messaging, publish, view or manage amateur-football offers, and share sports information, publications and football-related content. Available features may change over time."
          },
          {
            "h": "3. Service access",
            "b": "Access to certain features requires creating an account by email and password or through a third-party authentication service such as Google Sign-In. Users agree to provide accurate, complete and up-to-date information and are responsible for keeping credentials confidential and for all actions performed from their account. SoccerLink is intended for people aged at least 13. Minors must have authorization from their parents or legal representatives."
          },
          {
            "h": "4. Conduct rules",
            "b": "Users must use SoccerLink fairly, respectfully and lawfully. It is prohibited to publish or transmit illegal, insulting, discriminatory, hateful, violent, pornographic, defamatory or harmful content; harass, threaten or intimidate another user; impersonate a person, club or organization; distribute false or misleading information or information harming another person's reputation; collect other users' data without authorization; send unsolicited messages, abusive advertising or spam; use the app for unauthorized commercial purposes; attempt to bypass, disrupt or compromise app security; or infringe SZCZ SOFTWARES' or third parties' intellectual property rights. In case of breach, SZCZ SOFTWARES may moderate content, limit access to features, suspend or delete an account, including without prior notice for serious breaches."
          },
          {
            "h": "5. User-published content",
            "b": "Users remain the owners of content they publish or transmit in SoccerLink. By publishing content, they grant SZCZ SOFTWARES a non-exclusive, free, worldwide license, limited to the time necessary to host, reproduce, display, transmit and technically adapt that content for app operation. Users warrant that they hold the necessary rights over their content and will not infringe third-party rights."
          },
          {
            "h": "6. Messaging and interactions",
            "b": "SoccerLink may allow users to exchange messages and interact. SZCZ SOFTWARES is not a party to exchanges between users and does not guarantee the accuracy, reliability or quality of information communicated by users. Users should exercise caution in exchanges, especially when communicating personal, sports, professional or minor-related information."
          },
          {
            "h": "7. Notifications",
            "b": "The app may send service-related notifications, including messages, requests, invitations, events, offers or important information. Users can manage or disable notifications in the app or device settings."
          },
          {
            "h": "8. Intellectual property",
            "b": "The SoccerLink app, its structure, interfaces, features, texts, graphics, logos, software, databases and technical elements are protected by intellectual property law. Unless prior written authorization is granted, any unauthorized reproduction, representation, modification, extraction, reuse or exploitation of all or part of SoccerLink is prohibited."
          },
          {
            "h": "9. Availability and service changes",
            "b": "SZCZ SOFTWARES strives to ensure proper operation of SoccerLink without guaranteeing permanent or error-free availability. Access may be temporarily suspended for maintenance, updates, corrections, security or force majeure. SZCZ SOFTWARES may modify, add or remove features to improve the service or address technical, legal or operational constraints."
          },
          {
            "h": "10. Liability",
            "b": "SZCZ SOFTWARES is not liable for content published by users, interactions, agreements or disputes between users, clubs or third parties, inaccurate or outdated information provided by a user, misuse of the app, temporary service unavailability, or indirect damages resulting from use or inability to use SoccerLink. Users are solely responsible for their use of the service and the information they share."
          },
          {
            "h": "11. Account deletion",
            "b": "Users may request or perform account deletion from the app settings when the feature is available. Deletion leads to erasure or anonymization of personal data within a reasonable period, in principle within 30 days, unless legal retention or evidence preservation is required. Some content or technical traces may remain when necessary for service operation, security, legal compliance or because they were shared with other users."
          },
          {
            "h": "12. Personal data",
            "b": "Personal data is processed in accordance with the SoccerLink Privacy Policy. For any personal data request, contact dev@szczsoftwares.fr."
          },
          {
            "h": "13. Changes to the Terms",
            "b": "SZCZ SOFTWARES may modify these Terms at any time, including to reflect changes in the app or legal framework. Users will be informed of significant changes by any appropriate means. In case of substantial change, new acceptance may be requested."
          },
          {
            "h": "14. Governing law and disputes",
            "b": "These Terms are governed by French law. In case of difficulty, users are invited to contact SZCZ SOFTWARES at dev@szczsoftwares.fr to seek an amicable solution. Failing amicable resolution, the competent French courts may be seized, subject to mandatory consumer rules."
          }
        ]
      },
      "fr": {
        "title": "Conditions générales d'utilisation - SoccerLink",
        "updated": "Dernière mise à jour : 25 avril 2026",
        "intro": "Les présentes Conditions générales d'utilisation (CGU) définissent les règles d'accès et d'utilisation de l'application SoccerLink. En créant un compte ou en utilisant SoccerLink, vous acceptez les présentes CGU ainsi que la Politique de confidentialité.",
        "sections": [
          {
            "h": "1. Éditeur",
            "b": "SoccerLink est éditée par : SZCZ SOFTWARES SAS au capital de 1 000 euros SIREN : 100 523 067 SIRET : 100 523 067 00013 RCS Boulogne-sur-Mer : 100 523 067 Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France Site web : https://szczsoftwares.fr Email : dev@szczsoftwares.fr"
          },
          {
            "h": "2. Objet du service",
            "b": "SoccerLink est une application mobile et web destinée aux acteurs du football amateur, notamment joueurs, entraîneurs, arbitres, dirigeants, parents, clubs et personnes impliquées dans la vie sportive. L'application permet notamment de : - Créer et gérer un profil utilisateur ; - Rechercher et se connecter avec d'autres utilisateurs ; - Créer, gérer ou rejoindre des clubs et équipes ; - Communiquer via une messagerie ; - Publier, consulter ou gérer des offres liées au football amateur ; - Partager des informations sportives, des publications et des contenus liés à l'activité footballistique. Les fonctionnalités disponibles peuvent évoluer dans le temps."
          },
          {
            "h": "3. Accès au service",
            "b": "L'accès à certaines fonctionnalités nécessite la création d'un compte, par email et mot de passe ou via un service d'authentification tiers tel que Google Sign-In. L'utilisateur s'engage à fournir des informations exactes, complètes et à jour. Il est responsable de la confidentialité de ses identifiants et de toutes les actions réalisées depuis son compte. SoccerLink est destinée aux personnes âgées d'au moins 13 ans. Les mineurs doivent disposer de l'autorisation de leurs parents ou représentants légaux."
          },
          {
            "h": "4. Règles de conduite",
            "b": "L'utilisateur s'engage à utiliser SoccerLink de manière loyale, respectueuse et conforme à la loi. Il est notamment interdit de : - Publier ou transmettre un contenu illégal, injurieux, discriminatoire, haineux, violent, pornographique, diffamatoire ou portant atteinte à autrui ; - Harceler, menacer ou intimider un autre utilisateur ; - Usurper l'identité d'une personne, d'un club ou d'une organisation ; - Diffuser des informations fausses, trompeuses ou portant atteinte à la réputation d'autrui ; - Collecter les données d'autres utilisateurs sans autorisation ; - Envoyer des messages non sollicités, publicités abusives ou spams ; - Utiliser l'application à des fins commerciales non autorisées ; - Tenter de contourner, perturber ou compromettre la sécurité de l'application ; - Porter atteinte aux droits de propriété intellectuelle de SZCZ SOFTWARES ou de tiers. En cas de violation des présentes CGU, SZCZ SOFTWARES peut prendre toute mesure appropriée, notamment modérer un contenu, limiter l'accès à certaines fonctionnalités, suspendre ou supprimer un compte. En cas de manquement grave, une mesure peut être prise sans préavis."
          },
          {
            "h": "5. Contenus publiés par les utilisateurs",
            "b": "L'utilisateur reste propriétaire des contenus qu'il publie ou transmet dans SoccerLink. En publiant un contenu, l'utilisateur accorde à SZCZ SOFTWARES une licence non exclusive, gratuite, mondiale et limitée à la durée nécessaire pour héberger, reproduire, afficher, transmettre et adapter techniquement ce contenu dans le cadre du fonctionnement de l'application. L'utilisateur garantit disposer des droits nécessaires sur les contenus qu'il publie et s'engage à ne pas porter atteinte aux droits de tiers."
          },
          {
            "h": "6. Messagerie et interactions",
            "b": "SoccerLink peut permettre aux utilisateurs d'échanger des messages et d'interagir entre eux. SZCZ SOFTWARES n'est pas partie aux échanges entre utilisateurs et ne garantit pas l'exactitude, la fiabilité ou la qualité des informations communiquées par les utilisateurs. L'utilisateur doit faire preuve de prudence dans ses échanges, notamment lorsqu'il communique des informations personnelles, sportives, professionnelles ou relatives à un mineur."
          },
          {
            "h": "7. Notifications",
            "b": "L'application peut envoyer des notifications relatives au fonctionnement du service : messages, demandes, invitations, événements, offres ou informations importantes. L'utilisateur peut gérer ou désactiver les notifications dans les paramètres de l'application ou de son appareil."
          },
          {
            "h": "8. Propriété intellectuelle",
            "b": "L'application SoccerLink, sa structure, ses interfaces, ses fonctionnalités, ses textes, graphismes, logos, logiciels, bases de données et éléments techniques sont protégés par le droit de la propriété intellectuelle. Sauf autorisation écrite préalable, toute reproduction, représentation, modification, extraction, réutilisation ou exploitation non autorisée de tout ou partie de SoccerLink est interdite."
          },
          {
            "h": "9. Disponibilité et évolution du service",
            "b": "SZCZ SOFTWARES s'efforce d'assurer le bon fonctionnement de SoccerLink, sans garantir une disponibilité permanente ou exempte d'erreurs. L'accès à l'application peut être suspendu temporairement pour maintenance, mise à jour, correction, sécurité ou cas de force majeure. SZCZ SOFTWARES peut modifier, ajouter ou supprimer des fonctionnalités afin d'améliorer le service ou de tenir compte de contraintes techniques, juridiques ou opérationnelles."
          },
          {
            "h": "10. Responsabilité",
            "b": "SZCZ SOFTWARES ne peut être tenue responsable : - Des contenus publiés par les utilisateurs ; - Des interactions, accords ou litiges entre utilisateurs, clubs ou tiers ; - Des informations inexactes ou non mises à jour fournies par un utilisateur ; - D'une mauvaise utilisation de l'application ; - D'une indisponibilité temporaire du service ; - Des dommages indirects résultant de l'utilisation ou de l'impossibilité d'utiliser SoccerLink. L'utilisateur est seul responsable de l'utilisation qu'il fait du service et des informations qu'il partage."
          },
          {
            "h": "11. Suppression du compte",
            "b": "L'utilisateur peut demander ou effectuer la suppression de son compte depuis les paramètres de l'application lorsque la fonctionnalité est disponible. La suppression entraîne l'effacement ou l'anonymisation des données personnelles dans un délai raisonnable, en principe sous 30 jours, sauf obligation légale de conservation ou nécessité de conservation de preuves. Certains contenus ou traces techniques peuvent subsister lorsqu'ils sont nécessaires au fonctionnement du service, à la sécurité, au respect d'obligations légales ou lorsqu'ils ont été partagés avec d'autres utilisateurs."
          },
          {
            "h": "12. Données personnelles",
            "b": "Les données personnelles sont traitées conformément à la Politique de confidentialité de SoccerLink. Pour toute demande relative aux données personnelles : dev@szczsoftwares.fr"
          },
          {
            "h": "13. Modification des CGU",
            "b": "SZCZ SOFTWARES peut modifier les présentes CGU à tout moment, notamment pour tenir compte de l'évolution de l'application ou du cadre légal. Les utilisateurs seront informés des modifications importantes par tout moyen approprié. En cas de modification substantielle, une nouvelle acceptation pourra être demandée."
          },
          {
            "h": "14. Droit applicable et litiges",
            "b": "Les présentes CGU sont soumises au droit français. En cas de difficulté, l'utilisateur est invité à contacter SZCZ SOFTWARES afin de rechercher une solution amiable : dev@szczsoftwares.fr À défaut de résolution amiable, les tribunaux français compétents pourront être saisis, sous réserve des règles impératives applicables aux consommateurs."
          }
        ]
      }
    },
    "cgv": {
      "en": {
        "title": "SoccerLink Terms of Sale",
        "updated": "Last updated: April 25, 2026",
        "intro": "These Terms of Sale are intended to govern paid offers that may later be provided in SoccerLink. As of the last update, SoccerLink does not yet offer purchases, subscriptions, paid premium features or sale of goods or services to users.",
        "sections": [
          {
            "h": "1. Seller",
            "b": "Future SoccerLink paid offers will be provided by SZCZ SOFTWARES, SAS with share capital of EUR 1,000. SIREN: 100 523 067. SIRET: 100 523 067 00013. RCS Boulogne-sur-Mer: 100 523 067. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. Website: https://szczsoftwares.fr. Email: dev@szczsoftwares.fr."
          },
          {
            "h": "2. No current paid offer",
            "b": "To date, use of SoccerLink is not billed by SZCZ SOFTWARES. No payment should be sent outside an official flow made available in the app or on a website operated by SZCZ SOFTWARES. If a paid offer is introduced later, mandatory pre-contractual information will be communicated before any order, including offer details, tax-inclusive price, duration and conditions, accepted payment methods, renewal or cancellation terms where applicable, withdrawal-right conditions where applicable, and customer service and dispute-settlement information."
          },
          {
            "h": "3. Update before commercial launch",
            "b": "Before launching any paid offer, SZCZ SOFTWARES will update these Terms of Sale to specify the conditions applicable to purchases, subscriptions, premium features or billed services. Users will have to accept the applicable Terms of Sale before any paid order."
          },
          {
            "h": "4. Prices",
            "b": "As long as no paid offer is provided, no price applies. Prices for future offers will be indicated in euros, including taxes where required by regulations. SZCZ SOFTWARES may change prices at any time without retroactive effect on already validated orders, unless otherwise accepted by the user."
          },
          {
            "h": "5. Payment",
            "b": "Payment methods for future offers will be specified at the time of order. If purchases are offered through a third-party platform such as Apple's App Store or Google Play, that platform's payment, billing, renewal and refund terms may also apply."
          },
          {
            "h": "6. Subscriptions and renewal",
            "b": "If subscriptions are offered later, their characteristics will be specified before subscription: subscription term, price, billing frequency, included features, renewal conditions and cancellation procedures. When a subscription is taken through a third-party platform, cancellation will generally have to be performed from the user's account on that platform."
          },
          {
            "h": "7. Right of withdrawal",
            "b": "Rules concerning the right of withdrawal will be specified before any paid order. For digital content or services provided immediately, users may be asked to expressly waive their right of withdrawal where the law permits it in order to access the service before the end of the legal period."
          },
          {
            "h": "8. Customer service",
            "b": "For any question about a future order or paid offer, contact dev@szczsoftwares.fr."
          },
          {
            "h": "9. Personal data",
            "b": "Personal data processed in connection with a future order will be described in the Privacy Policy. Depending on the payment method used, certain data may be processed by payment providers or third-party platforms under their own terms."
          },
          {
            "h": "10. Consumer mediation",
            "b": "If paid offers intended for consumers are provided, SZCZ SOFTWARES will indicate the competent consumer mediator before commercial launch or no later than in the Terms of Sale applicable at the time of order."
          },
          {
            "h": "11. Governing law",
            "b": "These Terms of Sale are governed by French law. In case of difficulty, users are invited to contact SZCZ SOFTWARES at dev@szczsoftwares.fr to seek an amicable solution."
          }
        ]
      },
      "fr": {
        "title": "Conditions générales de vente - SoccerLink",
        "updated": "Dernière mise à jour : 25 avril 2026",
        "intro": "Les présentes Conditions générales de vente (CGV) ont vocation à encadrer les offres payantes qui pourraient être proposées ultérieurement dans SoccerLink. À la date de dernière mise à jour, SoccerLink ne propose pas encore d'achat, d'abonnement, de fonctionnalité premium payante ou de vente de biens ou services aux utilisateurs.",
        "sections": [
          {
            "h": "1. Vendeur",
            "b": "Les futures offres payantes de SoccerLink seront proposées par : SZCZ SOFTWARES SAS au capital de 1 000 euros SIREN : 100 523 067 SIRET : 100 523 067 00013 RCS Boulogne-sur-Mer : 100 523 067 Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France Site web : https://szczsoftwares.fr Email : dev@szczsoftwares.fr"
          },
          {
            "h": "2. Absence d'offre payante actuelle",
            "b": "À ce jour, l'utilisation de SoccerLink ne donne lieu à aucune facturation par SZCZ SOFTWARES. Aucun paiement ne doit être transmis en dehors d'un parcours officiel mis à disposition dans l'application ou sur un site exploité par SZCZ SOFTWARES. Si une offre payante est mise en place ultérieurement, les informations précontractuelles obligatoires seront communiquées avant toute commande, notamment : - Le détail de l'offre ; - Le prix toutes taxes comprises ; - La durée et les conditions de l'offre ; - Les moyens de paiement acceptés ; - Les modalités de renouvellement ou de résiliation, le cas échéant ; - Les conditions relatives au droit de rétractation, lorsque celui-ci est applicable ; - Les informations relatives au service client et au règlement des litiges."
          },
          {
            "h": "3. Mise à jour avant lancement commercial",
            "b": "Avant tout lancement d'une offre payante, SZCZ SOFTWARES mettra à jour les présentes CGV afin de préciser les conditions applicables aux achats, abonnements, fonctionnalités premium ou services facturés. L'utilisateur devra accepter les CGV applicables avant toute commande payante."
          },
          {
            "h": "4. Prix",
            "b": "Tant qu'aucune offre payante n'est proposée, aucun prix n'est applicable. Les prix des futures offres seront indiqués en euros, toutes taxes comprises lorsque la réglementation l'exige. SZCZ SOFTWARES pourra modifier ses prix à tout moment, sans effet rétroactif sur les commandes déjà validées, sauf disposition contraire acceptée par l'utilisateur."
          },
          {
            "h": "5. Paiement",
            "b": "Les moyens de paiement des futures offres seront précisés au moment de la commande. Si les achats sont proposés via une plateforme tierce, telle que l'App Store d'Apple ou Google Play, les conditions de paiement, de facturation, de renouvellement et de remboursement de cette plateforme pourront également s'appliquer."
          },
          {
            "h": "6. Abonnements et renouvellement",
            "b": "Si des abonnements sont proposés ultérieurement, leurs caractéristiques seront précisées avant souscription : - Durée de l'abonnement ; - Prix ; - Périodicité de facturation ; - Fonctionnalités incluses ; - Conditions de renouvellement ; - Modalités de résiliation. Lorsque l'abonnement est souscrit via une plateforme tierce, la résiliation devra généralement être effectuée depuis le compte de l'utilisateur sur cette plateforme."
          },
          {
            "h": "7. Droit de rétractation",
            "b": "Les règles relatives au droit de rétractation seront précisées avant toute commande payante. Pour les contenus ou services numériques fournis immédiatement, l'utilisateur pourra être amené à renoncer expressément à son droit de rétractation lorsque la loi le permet, afin d'accéder au service avant la fin du délai légal."
          },
          {
            "h": "8. Service client",
            "b": "Pour toute question relative à une future commande ou offre payante : Email : dev@szczsoftwares.fr"
          },
          {
            "h": "9. Données personnelles",
            "b": "Les données personnelles traitées dans le cadre d'une future commande seront décrites dans la Politique de confidentialité. Selon le moyen de paiement utilisé, certaines données pourront être traitées par des prestataires de paiement ou plateformes tierces selon leurs propres conditions."
          },
          {
            "h": "10. Médiation de la consommation",
            "b": "Si des offres payantes destinées à des consommateurs sont proposées, SZCZ SOFTWARES indiquera le médiateur de la consommation compétent avant le lancement commercial ou au plus tard dans les CGV applicables au moment de la commande."
          },
          {
            "h": "11. Droit applicable",
            "b": "Les présentes CGV sont soumises au droit français. En cas de difficulté, l'utilisateur est invité à contacter SZCZ SOFTWARES afin de rechercher une solution amiable : dev@szczsoftwares.fr"
          }
        ]
      }
    },
    "mentions-legales": {
      "en": {
        "title": "Legal Notice - SoccerLink",
        "updated": "Last updated: April 25, 2026",
        "intro": "In accordance with the French law on confidence in the digital economy, this legal notice identifies the publisher of the SoccerLink app and the main technical providers used.",
        "sections": [
          {
            "h": "1. App publisher",
            "b": "SoccerLink is published by SZCZ SOFTWARES, SAS with share capital of EUR 1,000. SIREN: 100 523 067. SIRET: 100 523 067 00013. RCS Boulogne-sur-Mer: 100 523 067. APE/NAF code: 6201Z - Computer programming. Intra-community VAT number: FR93 100 523 067. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. Website: https://szczsoftwares.fr. Email: dev@szczsoftwares.fr. Publishing director: Bastian Niszczota, president of SZCZ SOFTWARES."
          },
          {
            "h": "2. Hosting and technical providers",
            "b": "The app and its data are hosted or processed through Google Cloud / Firebase and Algolia. Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, is used notably for authentication, database, file storage, server functions, push notifications, usage analytics, crash reports and performance monitoring. Algolia SAS, 55 rue d'Amsterdam, 75008 Paris, France, is used for search and indexing features."
          },
          {
            "h": "3. Intellectual property",
            "b": "The SoccerLink app, its structure, interfaces, texts, graphics, logos, features, databases, software and technical elements are protected by intellectual property law. Without prior written authorization from SZCZ SOFTWARES, any reproduction, representation, modification, adaptation, extraction, reuse or distribution of all or part of the app is prohibited. Third-party trademarks, logos or content remain the property of their respective owners."
          },
          {
            "h": "4. User content",
            "b": "Users remain responsible for content they publish, transmit or share in SoccerLink. SZCZ SOFTWARES may moderate, remove or restrict access to any content that is manifestly unlawful, contrary to the Terms of Use or infringing third-party rights, under the conditions provided in the Terms of Use."
          },
          {
            "h": "5. Personal data",
            "b": "Personal data processing carried out in SoccerLink is described in the Privacy Policy. For personal data requests, contact dev@szczsoftwares.fr. Users have rights of access, rectification, erasure, objection, restriction and portability under applicable regulations. In case of complaint, users may contact the CNIL: Commission Nationale de l'Informatique et des Libertés, 3 place de Fontenoy - TSA 80715, 75334 Paris Cedex 07, https://www.cnil.fr."
          },
          {
            "h": "6. Local storage, cookies and analytics",
            "b": "SoccerLink uses local storage technologies necessary for app operation, including maintaining the session, saving preferences and improving performance. The app may also use Firebase Analytics to measure service use and improve user experience. Where available, users may disable analytics data collection in the app settings."
          },
          {
            "h": "7. Liability",
            "b": "SZCZ SOFTWARES strives to provide a reliable, secure and accessible app, without being able to guarantee permanent availability or total absence of errors. SZCZ SOFTWARES cannot be held liable for content published by users, exchanges between users or misuse of the app."
          },
          {
            "h": "8. Contact",
            "b": "For any question about the app or this legal notice, contact dev@szczsoftwares.fr or visit https://szczsoftwares.fr."
          },
          {
            "h": "9. Governing law",
            "b": "This legal notice is governed by French law. In case of dispute, the parties will first seek an amicable solution. Failing that, the competent French courts may be seized, subject to mandatory applicable rules."
          }
        ]
      },
      "fr": {
        "title": "Mentions légales - SoccerLink",
        "updated": "Dernière mise à jour : 25 avril 2026",
        "intro": "Conformément à la loi pour la confiance dans l'économie numérique (LCEN), les présentes mentions légales identifient l'éditeur de l'application SoccerLink et les principaux prestataires techniques utilisés.",
        "sections": [
          {
            "h": "1. Éditeur de l'application",
            "b": "L'application SoccerLink est éditée par : SZCZ SOFTWARES SAS au capital de 1 000 euros SIREN : 100 523 067 SIRET : 100 523 067 00013 RCS Boulogne-sur-Mer : 100 523 067 Code APE / NAF : 6201Z - Programmation informatique Numéro de TVA intracommunautaire : FR93 100 523 067 Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France Site web : https://szczsoftwares.fr Email : dev@szczsoftwares.fr Directeur de la publication : Bastian Niszczota, président de SZCZ SOFTWARES."
          },
          {
            "h": "2. Hébergement et prestataires techniques",
            "b": "L'application et ses données sont hébergées ou traitées via les services suivants : Google Cloud / Firebase Google Ireland Limited Gordon House, Barrow Street Dublin 4, Irlande Firebase est utilisé notamment pour l'authentification, la base de données, le stockage de fichiers, les fonctions serveur, les notifications push, l'analyse d'utilisation, les rapports de crash et la surveillance des performances. Algolia Algolia SAS 55 rue d'Amsterdam 75008 Paris, France Algolia est utilisé pour les fonctionnalités de recherche et d'indexation."
          },
          {
            "h": "3. Propriété intellectuelle",
            "b": "L'application SoccerLink, sa structure, ses interfaces, ses textes, graphismes, logos, fonctionnalités, bases de données, logiciels et éléments techniques sont protégés par le droit de la propriété intellectuelle. Sauf autorisation écrite préalable de SZCZ SOFTWARES, toute reproduction, représentation, modification, adaptation, extraction, réutilisation ou diffusion de tout ou partie de l'application est interdite. Les marques, logos ou contenus appartenant à des tiers restent la propriété de leurs titulaires respectifs."
          },
          {
            "h": "4. Contenus des utilisateurs",
            "b": "Les utilisateurs restent responsables des contenus qu'ils publient, transmettent ou partagent dans SoccerLink. SZCZ SOFTWARES peut modérer, retirer ou limiter l'accès à tout contenu manifestement illicite, contraire aux CGU ou portant atteinte aux droits de tiers, dans les conditions prévues par les Conditions générales d'utilisation."
          },
          {
            "h": "5. Données personnelles",
            "b": "Les traitements de données personnelles réalisés dans le cadre de SoccerLink sont décrits dans la Politique de confidentialité. Pour toute demande relative aux données personnelles : Email : dev@szczsoftwares.fr Les utilisateurs disposent notamment de droits d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité dans les conditions prévues par la réglementation applicable. En cas de réclamation, l'utilisateur peut contacter la CNIL : Commission Nationale de l'Informatique et des Libertés 3 place de Fontenoy - TSA 80715 75334 Paris Cedex 07 https://www.cnil.fr"
          },
          {
            "h": "6. Stockage local, cookies et analytics",
            "b": "SoccerLink utilise des technologies de stockage local nécessaires au fonctionnement de l'application, notamment pour maintenir la session, sauvegarder des préférences et améliorer les performances. L'application peut également utiliser Firebase Analytics pour mesurer l'utilisation du service et améliorer l'expérience utilisateur. Lorsque l'option est disponible, l'utilisateur peut désactiver la collecte de données analytiques dans les paramètres de l'application."
          },
          {
            "h": "7. Responsabilité",
            "b": "SZCZ SOFTWARES s'efforce de fournir une application fiable, sécurisée et accessible, sans pouvoir garantir une disponibilité permanente ni l'absence totale d'erreurs. SZCZ SOFTWARES ne peut être tenue responsable des contenus publiés par les utilisateurs, des échanges entre utilisateurs ou d'une mauvaise utilisation de l'application."
          },
          {
            "h": "8. Contact",
            "b": "Pour toute question relative à l'application ou aux présentes mentions légales : Email : dev@szczsoftwares.fr Site web : https://szczsoftwares.fr"
          },
          {
            "h": "9. Droit applicable",
            "b": "Les présentes mentions légales sont soumises au droit français. En cas de litige, les parties chercheront d'abord une solution amiable. À défaut, les juridictions françaises compétentes pourront être saisies, sous réserve des règles impératives applicables."
          }
        ]
      }
    },
    "account-deletion": {
      "fr": {
        "title": "Suppression de compte - SoccerLink",
        "updated": "Derniere mise a jour : 25 avril 2026",
        "intro": "Vous pouvez demander la suppression de votre compte SoccerLink et des donnees personnelles associees depuis l'application ou par email.",
        "sections": [
          {
            "h": "1. Depuis l'application",
            "b": "Ouvrez les parametres de SoccerLink, puis Compte > Supprimer mon compte, et confirmez la demande lorsque la fonctionnalite est disponible."
          },
          {
            "h": "2. Par email",
            "b": "Envoyez une demande a dev@szczsoftwares.fr avec l'objet 'Suppression de compte SoccerLink', en precisant l'adresse email associee et votre nom d'utilisateur si vous le connaissez."
          },
          {
            "h": "3. Donnees supprimees",
            "b": "Les donnees de profil, donnees sportives, relations, demandes, messages, publications, candidatures, appartenance aux clubs, fichiers stockes, donnees d'authentification et index de recherche associes au compte sont supprimes ou anonymises."
          },
          {
            "h": "4. Donnees conservees",
            "b": "Certaines donnees peuvent etre conservees lorsque la loi l'exige, lorsqu'elles sont necessaires a la securite du service, a la conservation de preuves, aux sauvegardes temporaires ou sous forme anonymisee et agregee."
          },
          {
            "h": "5. Delai",
            "b": "La demande est traitee dans un delai raisonnable, en principe sous 30 jours, sauf obligation legale de conservation ou contrainte technique particuliere."
          },
          {
            "h": "6. Consequences",
            "b": "La suppression est irreversible. Le profil n'est plus visible et les contenus deja partages avec d'autres utilisateurs peuvent etre supprimes ou anonymises selon les contraintes du service."
          },
          {
            "h": "7. Contact",
            "b": "SZCZ Softwares - dev@szczsoftwares.fr."
          }
        ]
      },
      "en": {
        "title": "Account Deletion - SoccerLink",
        "updated": "Last updated: April 25, 2026",
        "intro": "You can request deletion of your SoccerLink account and associated personal data from the app or by email.",
        "sections": [
          {
            "h": "1. From the app",
            "b": "Open SoccerLink settings, then Account > Delete my account, and confirm the request when the feature is available."
          },
          {
            "h": "2. By email",
            "b": "Send a request to dev@szczsoftwares.fr with subject \"SoccerLink account deletion\", providing the associated email address and your username if known."
          },
          {
            "h": "3. Data deleted",
            "b": "Profile data, sports data, relationships, requests, messages, publications, applications, club memberships, stored files, authentication data and search indexes associated with the account are deleted or anonymized."
          },
          {
            "h": "4. Data retained",
            "b": "Some data may be retained where required by law, where necessary for service security, evidence preservation, temporary backups, or in anonymized and aggregated form."
          },
          {
            "h": "5. Timing",
            "b": "The request is processed within a reasonable period, in principle within 30 days, unless a legal retention obligation or specific technical constraint applies."
          },
          {
            "h": "6. Consequences",
            "b": "Deletion is irreversible. The profile is no longer visible and content already shared with other users may be deleted or anonymized depending on service constraints."
          },
          {
            "h": "7. Contact",
            "b": "SZCZ Softwares - dev@szczsoftwares.fr."
          }
        ]
      }
    }
  }
};

Object.assign(window, {
  PROJECTS, SERVICES, STACK, STATS, COPY, CATEGORY_META,
  PROJECT_LEGAL,
  Cursor, Prompt, Tag, StatusDot, AsciiRule, Placeholder, tx,
});

