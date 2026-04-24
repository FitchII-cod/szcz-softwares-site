// Project detail view

function ProjectPage({ slug, lang, onBack, onOpen, onOpenLegal }) {
  const p = PROJECTS.find(x => x.slug === slug);
  const c = COPY[lang];
  if (!p) return null;
  const meta = CATEGORY_META[p.category] || { label: "·", hue: 260 };
  const others = PROJECTS.filter(x => x.slug !== slug).slice(0, 3);
  const legalDocs = p.legal || [];

  return (
    <article className="project-page">
      <div className="project-hero">
        <div className="project-hero-meta">
          <button className="breadcrumb" onClick={onBack}>
            <span className="breadcrumb-back">←</span> cd ..
          </button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">projects/{p.slug}</span>
        </div>

        <div className="project-hero-body">
          <div className="project-hero-left">
            <div className="project-hero-cat" style={{ "--cat-hue": meta.hue }}>
              [{meta.label}] {p.category}
            </div>
            <h1 className="project-hero-title">{p.title}</h1>
            <p className="project-hero-tagline">{lang === "fr" ? p.tagline_fr : p.tagline_en}</p>

            <div className="project-meta-grid">
              <div className="project-meta-item">
                <div className="pm-key">{c.status_label}</div>
                <div className="pm-val"><StatusDot status={p.status} /> {p.status}</div>
              </div>
              <div className="project-meta-item">
                <div className="pm-key">{c.year_label}</div>
                <div className="pm-val">{p.year}</div>
              </div>
              <div className="project-meta-item">
                <div className="pm-key">{c.category_label}</div>
                <div className="pm-val">{p.category}</div>
              </div>
              {Object.keys(p.stores).length > 0 && (
                <div className="project-meta-item">
                  <div className="pm-key">stores</div>
                  <div className="pm-val">
                    {Object.entries(p.stores).map(([store, state]) => (
                      <span key={store} className={`store-pill store-pill--${state}`}>
                        {store}: {state}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="project-hero-tags">
              {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
            </div>
          </div>

          <div className="project-hero-right">
            <div className="project-frame">
              <div className="project-frame-bar">
                <span className="term-dot term-dot-red"></span>
                <span className="term-dot term-dot-amber"></span>
                <span className="term-dot term-dot-green"></span>
                <span className="project-frame-title">{p.slug}.preview</span>
              </div>
              <Placeholder label={`hero shot · ${p.slug}`} aspect="16 / 10" />
            </div>
          </div>
        </div>
      </div>

      <section className="project-section">
        <div className="project-section-head">
          <Prompt>cat overview.md</Prompt>
        </div>
        <h2 className="project-section-title">{c.overview}</h2>
        <p className="project-summary">{lang === "fr" ? p.summary_fr : p.summary_en}</p>
      </section>

      <section className="project-section">
        <div className="project-section-head">
          <Prompt>ls ./highlights</Prompt>
        </div>
        <h2 className="project-section-title">{c.highlights}</h2>
        <ul className="highlight-list">
          {(lang === "fr" ? p.highlights_fr : p.highlights_en).map((h, i) => (
            <li key={i}>
              <span className="highlight-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="highlight-text">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="project-section">
        <div className="project-section-head">
          <Prompt>ls ./screenshots</Prompt>
        </div>
        <div className="project-gallery">
          <Placeholder label={`${p.slug} / screen 01`} aspect="9 / 16" />
          <Placeholder label={`${p.slug} / screen 02`} aspect="9 / 16" />
          <Placeholder label={`${p.slug} / screen 03`} aspect="9 / 16" />
        </div>
      </section>

      {legalDocs.length > 0 && (
        <section className="project-section">
          <div className="project-section-head">
            <Prompt>ls ./legal</Prompt>
          </div>
          <h2 className="project-section-title">{lang === "fr" ? "Documents légaux" : "Legal documents"}</h2>
          <div className="project-legal-grid">
            {legalDocs.map(doc => (
              <button key={doc.id} className="project-legal-card" onClick={() => onOpenLegal(slug, doc.id)}>
                <span className="project-legal-hash">##</span>
                <span className="project-legal-name">{doc[lang]}</span>
                <span className="project-legal-ext">.md</span>
                <span className="project-legal-arrow">→</span>
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="project-section">
        <div className="project-section-head">
          <Prompt>ls ../</Prompt>
        </div>
        <h2 className="project-section-title">{c.more_projects}</h2>
        <div className="project-grid">
          {others.map(o => <ProjectCard key={o.slug} p={o} lang={lang} onOpen={onOpen} compact />)}
        </div>
      </section>
    </article>
  );
}

Object.assign(window, { ProjectPage });
