// Legal pages (privacy + legal notice), multilingual

const LEGAL_COPY = {
  privacy: {
    fr: {
      title: "Politique de confidentialit?",
      updated: "Derni?re mise ? jour : avril 2026",
      sections: [
        { h: "1. Responsable du traitement", b: "SZCZ Softwares, exploit?e par Bastian Niszczota, est responsable des donn?es collect?es via ce site et ses applications. Contact : dev@szczsoftwares.fr." },
        { h: "2. Donn?es collect?es", b: "Les formulaires de contact enregistrent votre nom, e-mail et message. Nos applications peuvent collecter un identifiant utilisateur, des pr?f?rences et des statistiques d'usage anonymis?es pour le bon fonctionnement du service." },
        { h: "3. Finalit?s", b: "R?pondre ? vos demandes, fournir et am?liorer le service, respecter nos obligations l?gales. Aucune donn?e n'est vendue ? des tiers." },
        { h: "4. Dur?e de conservation", b: "Les messages de contact sont conserv?s 24 mois. Les donn?es applicatives sont supprim?es sur demande ou ? la fermeture du compte." },
        { h: "5. Vos droits", b: "Vous disposez d'un droit d'acc?s, de rectification, d'effacement, d'opposition et de portabilit?. Exercez-les par e-mail ? dev@szczsoftwares.fr." },
        { h: "6. Cookies", b: "Seuls des cookies strictement n?cessaires sont utilis?s. Aucun cookie publicitaire ou de tra?age tiers n'est d?pos?." },
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
    ja: {
      title: "??????????",
      updated: "?????: 2026?4?",
      sections: [
        { h: "1. ???", b: "???????????????????????????Bastian Niszczota?????SZCZ Softwares??????: dev@szczsoftwares.fr?" },
        { h: "2. ???????", b: "??????????????????????????????????????????????????????????????????????????????????????" },
        { h: "3. ????", b: "????????????????????????????????????????????????????????????" },
        { h: "4. ????", b: "????????????24???????????????????????????????????????????????" },
        { h: "5. ??????", b: "?????????????????????????????????????????????? dev@szczsoftwares.fr ??????????????" },
        { h: "6. Cookie", b: "??????Cookie???????????Cookie??????????Cookie????????" },
      ],
    },
  },
  legal: {
    fr: {
      title: "Mentions l?gales",
      updated: "Derni?re mise ? jour : avril 2026",
      sections: [
        { h: "?diteur", b: "SZCZ Softwares ? Bastian Niszczota, d?veloppeur ind?pendant. Si?ge : Nantes, France. E-mail : dev@szczsoftwares.fr." },
        { h: "H?bergement", b: "Ce site est h?berg? par Firebase Hosting (Google Ireland Limited), Gordon House, Barrow Street, Dublin 4, Irlande." },
        { h: "Propri?t? intellectuelle", b: "L'ensemble des contenus, textes, ?l?ments graphiques, logos et code de ce site sont la propri?t? exclusive de SZCZ Softwares, sauf mention contraire." },
        { h: "Limitation de responsabilit?", b: "Les informations pr?sent?es le sont ? titre indicatif. SZCZ Softwares ne saurait ?tre tenu responsable d'erreurs ?ventuelles ou d'une interruption du service." },
        { h: "Droit applicable", b: "Les pr?sentes mentions sont soumises au droit fran?ais. Tout litige rel?ve de la juridiction comp?tente." },
      ],
    },
    en: {
      title: "Legal notice",
      updated: "Last updated: April 2026",
      sections: [
        { h: "Publisher", b: "SZCZ Softwares ? Bastian Niszczota, independent developer. Registered office: Nantes, France. Email: dev@szczsoftwares.fr." },
        { h: "Hosting", b: "This site is hosted by Firebase Hosting (Google Ireland Limited), Gordon House, Barrow Street, Dublin 4, Ireland." },
        { h: "Intellectual property", b: "All content, text, graphics, logos and code on this site are the exclusive property of SZCZ Softwares, unless otherwise stated." },
        { h: "Liability", b: "Information is provided for reference. SZCZ Softwares cannot be held liable for any errors or service interruptions." },
        { h: "Applicable law", b: "This notice is governed by French law. Any dispute falls under the competent jurisdiction." },
      ],
    },
    ja: {
      title: "????",
      updated: "?????: 2026?4?",
      sections: [
        { h: "???", b: "SZCZ Softwares ? Bastian Niszczota??????????: ????????????: dev@szczsoftwares.fr?" },
        { h: "??????", b: "????? Firebase Hosting (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) ????????????????" },
        { h: "?????", b: "?????????????????????????????????????????SZCZ Softwares?????????" },
        { h: "????", b: "?????????????????SZCZ Softwares????????????????????????" },
        { h: "???", b: "?????????????????????????????????" },
      ],
    },
  },
};

function LegalPage({ kind, lang, onBack }) {
  const data = LEGAL_COPY[kind][lang] || LEGAL_COPY[kind].en || LEGAL_COPY[kind].fr;
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
  const projectLegal = window.PROJECT_LEGAL || {};
  const docLang = lang === "ja" ? "en" : lang;
  const doc = projectLegal[slug]?.[docId]?.[docLang] || projectLegal[slug]?.[docId]?.en || projectLegal[slug]?.[docId]?.fr;
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
              {s[lang] || s.en || s.fr}
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
            {Array.isArray(s.b)
              ? s.b.map((line, j) => <p key={j} className="legal-p">{line}</p>)
              : <p className="legal-p">{s.b}</p>}
          </section>
        ))}
      </div>
    </article>
  );
}

Object.assign(window, { LegalPage, ProjectLegalPage });
