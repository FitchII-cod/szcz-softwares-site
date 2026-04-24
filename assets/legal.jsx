// Legal pages (privacy + legal notice), bilingual

const LEGAL_COPY = {
  privacy: {
    fr: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : avril 2026",
      sections: [
        { h: "1. Responsable du traitement", b: "SZCZ Softwares, exploitée par Bastian Niszczota, est responsable des données collectées via ce site et ses applications. Contact : dev@szczsoftwares.fr." },
        { h: "2. Données collectées", b: "Les formulaires de contact enregistrent votre nom, e-mail et message. Nos applications peuvent collecter un identifiant utilisateur, des préférences et des statistiques d'usage anonymisées pour le bon fonctionnement du service." },
        { h: "3. Finalités", b: "Répondre à vos demandes, fournir et améliorer le service, respecter nos obligations légales. Aucune donnée n'est vendue à des tiers." },
        { h: "4. Durée de conservation", b: "Les messages de contact sont conservés 24 mois. Les données applicatives sont supprimées sur demande ou à la fermeture du compte." },
        { h: "5. Vos droits", b: "Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de portabilité. Exercez-les par e-mail à dev@szczsoftwares.fr." },
        { h: "6. Cookies", b: "Seuls des cookies strictement nécessaires sont utilisés. Aucun cookie publicitaire ou de traçage tiers n'est déposé." },
      ],
    },
    en: {
      title: "Privacy policy",
      updated: "Last updated: April 2026",
      sections: [
        { h: "1. Data controller", b: "SZCZ Softwares, operated by Bastian Niszczota, is the controller of data collected via this site and its applications. Contact: dev@szczsoftwares.fr." },
        { h: "2. Data collected", b: "Contact forms record your name, email and message. Our apps may collect a user identifier, preferences, and anonymized usage statistics to operate the service." },
        { h: "3. Purposes", b: "Reply to your requests, provide and improve the service, meet legal obligations. No data is sold to third parties." },
        { h: "4. Retention", b: "Contact messages are kept for 24 months. Application data is deleted on request or on account closure." },
        { h: "5. Your rights", b: "You have rights of access, rectification, erasure, objection and portability. Exercise them by email to dev@szczsoftwares.fr." },
        { h: "6. Cookies", b: "Only strictly necessary cookies are used. No advertising or third-party tracking cookies are set." },
      ],
    },
  },
  legal: {
    fr: {
      title: "Mentions légales",
      updated: "Dernière mise à jour : avril 2026",
      sections: [
        { h: "Éditeur", b: "SZCZ Softwares — Bastian Niszczota, développeur indépendant. Siège : Nantes, France. E-mail : dev@szczsoftwares.fr." },
        { h: "Hébergement", b: "Ce site est hébergé par Firebase Hosting (Google Ireland Limited), Gordon House, Barrow Street, Dublin 4, Irlande." },
        { h: "Propriété intellectuelle", b: "L'ensemble des contenus, textes, éléments graphiques, logos et code de ce site sont la propriété exclusive de SZCZ Softwares, sauf mention contraire." },
        { h: "Limitation de responsabilité", b: "Les informations présentées le sont à titre indicatif. SZCZ Softwares ne saurait être tenu responsable d'erreurs éventuelles ou d'une interruption du service." },
        { h: "Droit applicable", b: "Les présentes mentions sont soumises au droit français. Tout litige relève de la juridiction compétente de Nantes." },
      ],
    },
    en: {
      title: "Legal notice",
      updated: "Last updated: April 2026",
      sections: [
        { h: "Publisher", b: "SZCZ Softwares — Bastian Niszczota, independent developer. Registered office: Nantes, France. Email: dev@szczsoftwares.fr." },
        { h: "Hosting", b: "This site is hosted by Firebase Hosting (Google Ireland Limited), Gordon House, Barrow Street, Dublin 4, Ireland." },
        { h: "Intellectual property", b: "All content, text, graphics, logos and code on this site are the exclusive property of SZCZ Softwares, unless otherwise stated." },
        { h: "Liability", b: "Information is provided for reference. SZCZ Softwares cannot be held liable for any errors or service interruptions." },
        { h: "Applicable law", b: "This notice is governed by French law. Any dispute falls under the jurisdiction of Nantes." },
      ],
    },
  },
};

function LegalPage({ kind, lang, onBack }) {
  const data = LEGAL_COPY[kind][lang];
  return (
    <article className="legal-page">
      <div className="project-hero-meta">
        <button className="breadcrumb" onClick={onBack}>
          <span className="breadcrumb-back">←</span> cd ..
        </button>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">legal/{kind}.md</span>
      </div>

      <header className="legal-head">
        <div className="section-kicker"><Prompt>cat {kind}.md</Prompt></div>
        <h1 className="legal-title">{data.title}</h1>
        <p className="legal-updated">{data.updated}</p>
      </header>

      <div className="legal-body">
        {data.sections.map((s, i) => (
          <section key={i} className="legal-section">
            <h2 className="legal-h2">
              <span className="legal-hash">##</span> {s.h}
            </h2>
            <p className="legal-p">{s.b}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

function ProjectLegalPage({ slug, docId, lang, onBack, onOpenProject }) {
  const project = PROJECTS.find(x => x.slug === slug);
  const doc = PROJECT_LEGAL[slug]?.[docId]?.[lang];
  if (!project || !doc) return null;
  const siblings = project.legal || [];
  return (
    <article className="legal-page">
      <div className="project-hero-meta">
        <button className="breadcrumb" onClick={onBack}>
          <span className="breadcrumb-back">←</span> cd ..
        </button>
        <span className="breadcrumb-sep">/</span>
        <button className="breadcrumb breadcrumb--link" onClick={() => onOpenProject(slug)}>
          projects/{slug}
        </button>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">legal/{docId}.md</span>
      </div>

      <header className="legal-head">
        <div className="section-kicker"><Prompt>cat {slug}/{docId}.md</Prompt></div>
        <h1 className="legal-title">{doc.title}</h1>
        <p className="legal-updated">{doc.updated}</p>
      </header>

      {siblings.length > 1 && (
        <nav className="legal-sibling-nav">
          {siblings.map(s => (
            <button
              key={s.id}
              className={`legal-sibling ${s.id === docId ? "legal-sibling--active" : ""}`}
              onClick={() => window.dispatchEvent(new CustomEvent("szcz-nav-legal", { detail: { slug, docId: s.id } }))}
            >
              {s[lang]}
            </button>
          ))}
        </nav>
      )}

      <div className="legal-body">
        {doc.intro && <p className="legal-intro">{doc.intro}</p>}
        {doc.sections.map((s, i) => (
          <section key={i} className="legal-section">
            <h2 className="legal-h2">
              <span className="legal-hash">##</span> {s.h}
            </h2>
            <p className="legal-p">{s.b}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

Object.assign(window, { LegalPage, ProjectLegalPage });
