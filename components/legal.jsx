// Legal pages (privacy + legal notice), multilingual

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
    ja: {
      title: "プライバシーポリシー",
      updated: "最終更新日: 2026年4月",
      sections: [
        { h: "1. 管理者", b: "本サイトおよび関連アプリで収集されるデータの管理者は、Bastian Niszczotaが運営するSZCZ Softwaresです。連絡先: dev@szczsoftwares.fr。" },
        { h: "2. 収集するデータ", b: "お問い合わせフォームでは、お名前、メールアドレス、メッセージを記録します。アプリではサービス運営のため、ユーザー識別子、設定、匿名化された利用統計を収集する場合があります。" },
        { h: "3. 利用目的", b: "お問い合わせへの返信、サービスの提供と改善、法令上の義務の遵守を目的とします。データを第三者に販売することはありません。" },
        { h: "4. 保存期間", b: "お問い合わせメッセージは24か月間保存されます。アプリのデータは、ユーザーからの依頼またはアカウント閉鎖時に削除されます。" },
        { h: "5. 利用者の権利", b: "利用者は、アクセス、訂正、削除、異議申立て、データポータビリティの権利を有します。権利行使は dev@szczsoftwares.fr までメールでご連絡ください。" },
        { h: "6. Cookie", b: "厳密に必要なCookieのみを使用します。広告Cookieや第三者トラッキングCookieは設置しません。" },
      ],
    },
  },
  legal: {
    fr: {
      title: "Mentions légales",
      updated: "Dernière mise à jour : avril 2026",
      sections: [
        { h: "Éditeur", b: "SZCZ Softwares, SASU au capital social de 1 000 euros, immatriculée au RCS de Boulogne-sur-Mer sous le numéro 100 523 067. Président : Bastian Niszczota. Siège social : 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. E-mail : dev@szczsoftwares.fr." },
        { h: "Hébergement", b: "Ce site est hébergé par Firebase Hosting (Google Ireland Limited), Gordon House, Barrow Street, Dublin 4, Irlande." },
        { h: "Propriété intellectuelle", b: "L'ensemble des contenus, textes, éléments graphiques, logos et code de ce site sont la propriété exclusive de SZCZ Softwares, sauf mention contraire." },
        { h: "Limitation de responsabilité", b: "Les informations présentées le sont à titre indicatif. SZCZ Softwares ne saurait être tenu responsable d'erreurs éventuelles ou d'une interruption du service." },
        { h: "Droit applicable", b: "Les présentes mentions sont soumises au droit français. Tout litige relève de la juridiction compétente." },
      ],
    },
    en: {
      title: "Legal notice",
      updated: "Last updated: April 2026",
      sections: [
        { h: "Publisher", b: "SZCZ Softwares, SASU with share capital of EUR 1,000, registered with the Boulogne-sur-Mer Trade and Companies Register under number 100 523 067. President: Bastian Niszczota. Registered office: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France. Email: dev@szczsoftwares.fr." },
        { h: "Hosting", b: "This site is hosted by Firebase Hosting (Google Ireland Limited), Gordon House, Barrow Street, Dublin 4, Ireland." },
        { h: "Intellectual property", b: "All content, text, graphics, logos and code on this site are the exclusive property of SZCZ Softwares, unless otherwise stated." },
        { h: "Liability", b: "Information is provided for reference. SZCZ Softwares cannot be held liable for any errors or service interruptions." },
        { h: "Applicable law", b: "This notice is governed by French law. Any dispute falls under the competent jurisdiction." },
      ],
    },
    ja: {
      title: "法的事項",
      updated: "最終更新日: 2026年4月",
      sections: [
        { h: "発行者", b: "SZCZ Softwares、資本金1,000ユーロのSASU。Boulogne-sur-Mer商業会社登録簿に番号100 523 067で登録されています。代表者: Bastian Niszczota。所在地: 95 avenue de Deauville, 62520 Le Touquet-Paris-Plage, France。メール: dev@szczsoftwares.fr。" },
        { h: "ホスティング", b: "本サイトは Firebase Hosting (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) によりホスティングされています。" },
        { h: "知的財産権", b: "本サイトのコンテンツ、テキスト、グラフィック、ロゴ、コードは、別段の記載がない限りSZCZ Softwaresの独占的財産です。" },
        { h: "責任制限", b: "掲載情報は参考目的で提供されます。SZCZ Softwaresは、誤りやサービス中断について責任を負いません。" },
        { h: "準拠法", b: "本通知はフランス法に準拠します。紛争は管轄裁判所の判断に従います。" },
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
          <span className="breadcrumb-back">{"←"}</span> cd ..
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
          <span className="breadcrumb-back">{"←"}</span> cd ..
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
