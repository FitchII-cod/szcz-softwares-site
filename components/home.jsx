// Home view — terminal dossier layout

const { useState, useEffect, useMemo } = React;

function TypewriterTitle({ lines }) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  useEffect(() => {
    setI(0); setJ(0);
  }, [lines.join("|")]);
  useEffect(() => {
    if (i >= lines.length) return;
    if (j < lines[i].length) {
      const t = setTimeout(() => setJ(j + 1), 18);
      return () => clearTimeout(t);
    } else if (i < lines.length - 1) {
      const t = setTimeout(() => { setI(i + 1); setJ(0); }, 120);
      return () => clearTimeout(t);
    }
  }, [i, j, lines]);
  return (
    <h1 className="hero-title">
      {lines.map((l, k) => (
        <span key={k} className="hero-line">
          {k < i ? l : k === i ? l.slice(0, j) : ""}
          {k === i && k < lines.length - 1 && j >= l.length ? "" : null}
          {k === i && (k < lines.length - 1 || j < l.length) && <Cursor />}
          {k < lines.length - 1 && <br />}
        </span>
      ))}
      {i >= lines.length - 1 && j >= lines[lines.length - 1].length && <Cursor />}
    </h1>
  );
}

function Hero({ lang, onNav }) {
  const c = COPY[lang];
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-inner">
        <div className="hero-meta">
          <Prompt>cat /home/bastian/profile.txt</Prompt>
        </div>
        <TypewriterTitle lines={c.hero_title} />
        <p className="hero-sub">{c.hero_sub}</p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => onNav("contact")}>
            <span className="btn-arrow">▸</span> {c.cta_primary}
          </button>
          <button className="btn btn-ghost" onClick={() => onNav("work")}>
            {c.cta_secondary} <span className="btn-arrow">→</span>
          </button>
        </div>
        <div className="hero-badges">
          {["Flutter", "Firebase", "Next.js", "FastAPI", "Gemini AI", "Godot"].map(b => (
            <span key={b} className="hero-badge">{b}</span>
          ))}
        </div>
      </div>

      <aside className="hero-aside">
        <div className="term-window">
          <div className="term-header">
            <span className="term-dot term-dot-red"></span>
            <span className="term-dot term-dot-amber"></span>
            <span className="term-dot term-dot-green"></span>
            <span className="term-title">~/bastian — zsh — 80×24</span>
          </div>
          <div className="term-body">
            <div className="term-line"><Prompt>whoami</Prompt></div>
            <div className="term-output">bastian niszczota</div>
            <div className="term-line"><Prompt>uname -a</Prompt></div>
            <div className="term-output">SZCZ-Softwares 1.0.0 Nantes x86_64 fullstack</div>
            <div className="term-line"><Prompt>ls ./stack</Prompt></div>
            <div className="term-output term-grid">
              <span>flutter</span><span>firebase</span><span>next.js</span>
              <span>fastapi</span><span>godot</span><span>gemini</span>
              <span>postgres</span><span>algolia</span><span>docker</span>
            </div>
            <div className="term-line"><Prompt>status</Prompt></div>
            <div className="term-output term-ok">
              <span className="status-live-dot">●</span> {COPY[lang].status_open}
            </div>
            <div className="term-line"><Prompt><Cursor /></Prompt></div>
          </div>
        </div>
      </aside>
    </section>
  );
}

function ProjectCard({ p, lang, onOpen, compact }) {
  const meta = CATEGORY_META[p.category] || { label: "·", hue: 260 };
  return (
    <button className={`project-card ${compact ? "project-card--compact" : ""}`} onClick={() => onOpen(p.slug)}>
      <div className="project-card-head">
        <span className="project-cat" style={{ "--cat-hue": meta.hue }}>
          <span className="project-cat-label">{meta.label}</span>
        </span>
        <div className="project-card-meta">
          <span className="project-year">{p.year}</span>
          <span className="project-status">
            <StatusDot status={p.status} /> {p.status}
          </span>
        </div>
      </div>
      <div className="project-card-body">
        <h3 className="project-title">
          <span className="project-title-slash">/</span>{p.slug}
        </h3>
        <p className="project-tagline">{tx(p, "tagline", lang)}</p>
      </div>
      <div className="project-card-foot">
        <div className="project-tags">
          {p.tags.slice(0, 3).map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
        <span className="project-open">
          open →
        </span>
      </div>
    </button>
  );
}

function Work({ lang, onOpen }) {
  const c = COPY[lang];
  const [filter, setFilter] = useState("all");
  const cats = ["all", "mobile", "web", "games"];
  const shown = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="section" id="work">
      <header className="section-head">
        <div>
          <div className="section-kicker"><Prompt>ls ./projects</Prompt></div>
          <h2 className="section-title">{c.sections.work}</h2>
        </div>
        <div className="filter-bar">
          {cats.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "filter-btn--active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              --{cat}
              {filter === cat && <span className="filter-count"> ({cat === "all" ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length})</span>}
            </button>
          ))}
        </div>
      </header>

      <div className="project-grid">
        {shown.map(p => <ProjectCard key={p.slug} p={p} lang={lang} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function Services({ lang }) {
  const c = COPY[lang];
  return (
    <section className="section" id="services">
      <header className="section-head">
        <div>
          <div className="section-kicker"><Prompt>man services</Prompt></div>
          <h2 className="section-title">{c.sections.services}</h2>
        </div>
      </header>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div key={s.id} className="service-card">
            <div className="service-idx">{String(i + 1).padStart(2, "0")}</div>
            <div className="service-body">
              <div className="service-cmd">$ {s.cmd}</div>
              <h3 className="service-title">{s[lang] || s.en || s.fr}</h3>
              <p className="service-desc">{tx(s, "desc", lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StackSection({ lang }) {
  const c = COPY[lang];
  return (
    <section className="section" id="stack">
      <header className="section-head">
        <div>
          <div className="section-kicker"><Prompt>cat package.json</Prompt></div>
          <h2 className="section-title">{c.sections.stack}</h2>
        </div>
      </header>
      <div className="stack-panel">
        <div className="stack-json">
          <div className="stack-line"><span className="json-brace">{`{`}</span></div>
          {STACK.map((group, gi) => (
            <React.Fragment key={group.g}>
              <div className="stack-line stack-key">
                <span className="json-indent">  </span>
                <span className="json-prop">"{group.g.toLowerCase()}"</span>
                <span className="json-colon">: </span>
                <span className="json-brace">[</span>
              </div>
              {group.items.map((item, ii) => (
                <div key={item} className="stack-line stack-item">
                  <span className="json-indent">    </span>
                  <span className="json-string">"{item}"</span>
                  {ii < group.items.length - 1 && <span className="json-comma">,</span>}
                </div>
              ))}
              <div className="stack-line">
                <span className="json-indent">  </span>
                <span className="json-brace">]</span>
                {gi < STACK.length - 1 && <span className="json-comma">,</span>}
              </div>
            </React.Fragment>
          ))}
          <div className="stack-line"><span className="json-brace">{`}`}</span></div>
        </div>

        <div className="stats-panel">
          {STATS.map(s => (
            <div key={s.value} className="stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{tx(s, "label", lang)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ lang }) {
  const c = COPY[lang];
  return (
    <section className="section" id="about">
      <header className="section-head">
        <div>
          <div className="section-kicker"><Prompt>cat about.md</Prompt></div>
          <h2 className="section-title">{c.sections.about}</h2>
        </div>
      </header>
      <div className="about-grid">
        <div className="about-body">
          <p className="about-bio">{c.bio}</p>
          <ul className="about-checklist">
            {c.checklist.map(item => (
              <li key={item}>
                <span className="check">[x]</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="about-card">
          <div className="portrait">
            <Placeholder label="portrait.jpg" aspect="1 / 1" />
          </div>
          <div className="about-meta">
            <div className="meta-row">
              <span className="meta-key">name</span>
              <span className="meta-val">Bastian Niszczota</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">role</span>
              <span className="meta-val">Fullstack / indie dev</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">loc</span>
              <span className="meta-val">{c.location}</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">lang</span>
              <span className="meta-val">FR · EN · JP</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">status</span>
              <span className="meta-val status-open"><span className="status-live-dot">●</span> {c.status_open}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  const c = COPY[lang];
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = true;
    if (form.msg.trim().length < 10) errs.msg = true;
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };
  return (
    <section className="section" id="contact">
      <header className="section-head">
        <div>
          <div className="section-kicker"><Prompt>./send-message.sh</Prompt></div>
          <h2 className="section-title">{c.sections.contact}</h2>
        </div>
      </header>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit} noValidate>
          {sent ? (
            <div className="form-success">
              <div className="form-success-icon">✓</div>
              <div className="form-success-msg">{c.contact_ok}</div>
              <button type="button" className="btn btn-ghost" onClick={() => { setSent(false); setForm({ name: "", email: "", msg: "" }); }}>
                ← {c.contact_new_message}
              </button>
            </div>
          ) : (
            <>
              <label className={`field ${errors.name ? "field--err" : ""}`}>
                <span className="field-label">&gt; name</span>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={c.contact_placeholder_name} />
              </label>
              <label className={`field ${errors.email ? "field--err" : ""}`}>
                <span className="field-label">&gt; email</span>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder={c.contact_placeholder_email} />
              </label>
              <label className={`field ${errors.msg ? "field--err" : ""}`}>
                <span className="field-label">&gt; message</span>
                <textarea rows="6" value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder={c.contact_placeholder_msg}></textarea>
              </label>
              <button type="submit" className="btn btn-primary btn-send">
                <span className="btn-arrow">▸</span> {c.contact_send}
              </button>
            </>
          )}
        </form>
        <aside className="contact-side">
          <div className="contact-block">
            <div className="contact-label">{c.contact_availability}</div>
            <div className="contact-value"><span className="status-live-dot">●</span> {c.contact_open}</div>
            <p className="contact-sub">{c.contact_sub}</p>
          </div>
          <div className="contact-block">
            <div className="contact-label">{c.contact_channels}</div>
            <ul className="contact-channels">
              <li>
                <span className="chan-key">email</span>
                <a href="mailto:bastianniszczota@gmail.com">bastianniszczota@gmail.com</a>
              </li>
              <li>
                <span className="chan-key">linkedin</span>
                <a href="#">/in/bastian-niszczota</a>
              </li>
              <li>
                <span className="chan-key">github</span>
                <a href="#">/FitchII-cod</a>
              </li>
              <li>
                <span className="chan-key">loc</span>
                <span>{c.location}</span>
              </li>
            </ul>
          </div>
          <div className="contact-block">
            <div className="contact-label">{c.contact_response}</div>
            <div className="contact-value">&lt; 48h</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Work, ProjectCard, Services, StackSection, About, Contact });
