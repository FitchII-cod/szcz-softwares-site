// Root app — routing, theme, language, tweaks

const { useState, useEffect } = React;

const ROUTES = {
  HOME: "home",
  PROJECT: "project",
  PRIVACY: "privacy",
  LEGAL: "legal",
  PROJECT_LEGAL: "project-legal",
};

const ACCENT_SWATCHES = [
  { label: "green", hue: 145 },
  { label: "amber", hue: 75 },
  { label: "blue", hue: 250 },
  { label: "pink", hue: 340 },
  { label: "red", hue: 25 },
];

function Sidebar({ route, section, lang, onNav, onGo, projects }) {
  const c = COPY[lang];
  const nav = [
    { id: "home", label: c.nav.home },
    { id: "work", label: c.nav.work },
    { id: "services", label: c.nav.services },
    { id: "stack", label: c.nav.stack },
    { id: "about", label: c.nav.about },
    { id: "contact", label: c.nav.contact },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-line">~/portfolio</div>
        <div className="sidebar-brand-name">
          <span className="accent">&gt;</span> szcz<span className="accent">_</span>softwares
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-label">// nav</div>
        {nav.map(n => (
          <button
            key={n.id}
            className={`sidebar-link ${route === ROUTES.HOME && section === n.id ? "sidebar-link--active" : ""}`}
            onClick={() => onNav(n.id)}
          >
            <span className="sidebar-link-arrow">{route === ROUTES.HOME && section === n.id ? "▸" : "·"}</span>
            {n.label}
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-label">// projects ({projects.length})</div>
        {projects.map(p => (
          <button
            key={p.slug}
            className={`sidebar-link ${route === ROUTES.PROJECT && section === p.slug ? "sidebar-link--active" : ""}`}
            onClick={() => onGo({ route: ROUTES.PROJECT, section: p.slug })}
          >
            <span className="sidebar-link-arrow">{route === ROUTES.PROJECT && section === p.slug ? "▸" : "·"}</span>
            {p.slug}
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-label">// legal</div>
        <button
          className={`sidebar-link ${route === ROUTES.PRIVACY ? "sidebar-link--active" : ""}`}
          onClick={() => onGo({ route: ROUTES.PRIVACY })}
        >
          <span className="sidebar-link-arrow">·</span>privacy.md
        </button>
        <button
          className={`sidebar-link ${route === ROUTES.LEGAL ? "sidebar-link--active" : ""}`}
          onClick={() => onGo({ route: ROUTES.LEGAL })}
        >
          <span className="sidebar-link-arrow">·</span>legal.md
        </button>
      </div>

      <div className="sidebar-foot">
        <div className="sidebar-status">
          <span className="sidebar-status-dot"></span> {c.status_open}
        </div>
        <div>v1.0.0 · {c.made_in}</div>
      </div>
    </aside>
  );
}

function Topbar({ route, section, lang, setLang, theme, setTheme, onGo }) {
  const crumbs = [];
  if (route === ROUTES.HOME) crumbs.push(section || "home");
  else if (route === ROUTES.PROJECT) crumbs.push("projects", section);
  else if (route === ROUTES.PRIVACY) crumbs.push("legal", "privacy");
  else if (route === ROUTES.LEGAL) crumbs.push("legal", "notice");

  return (
    <div className="topbar">
      <div className="topbar-path">
        ~/szcz-softwares{crumbs.map((cr, i) => (
          <React.Fragment key={i}>
            <span className="sep">/</span>
            <span className={i === crumbs.length - 1 ? "current" : ""}>{cr}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="topbar-actions">
        <div className="lang-toggle" role="group" aria-label="Language">
          <button className={`lang-btn ${lang === "fr" ? "lang-btn--active" : ""}`} onClick={() => setLang("fr")}>FR</button>
          <button className={`lang-btn ${lang === "en" ? "lang-btn--active" : ""}`} onClick={() => setLang("en")}>EN</button>
        </div>
        <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "◐ light" : "◑ dark"}
        </button>
      </div>
    </div>
  );
}

function TweaksPanel({ tweaks, setTweak, onClose }) {
  return (
    <div className="tweaks-panel">
      <div className="tweaks-head">
        <div className="tweaks-title">Tweaks</div>
        <button className="tweaks-close" onClick={onClose} aria-label="close">×</button>
      </div>

      <div className="tweak-row">
        <span className="tweak-label">accent</span>
        <div className="tweak-swatches">
          {ACCENT_SWATCHES.map(s => (
            <button
              key={s.label}
              className={`tweak-swatch ${tweaks.accentLabel === s.label ? "tweak-swatch--active" : ""}`}
              style={{ background: `oklch(0.70 0.17 ${s.hue})` }}
              onClick={() => setTweak({ accentHue: s.hue, accentLabel: s.label })}
              aria-label={s.label}
            />
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <span className="tweak-label">density</span>
        <div className="tweak-options">
          {["compact", "comfortable", "spacious"].map(d => (
            <button
              key={d}
              className={`tweak-opt ${tweaks.density === d ? "tweak-opt--active" : ""}`}
              onClick={() => setTweak({ density: d })}
            >{d}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <span className="tweak-label">default lang</span>
        <div className="tweak-options">
          {["fr", "en"].map(l => (
            <button key={l}
              className={`tweak-opt ${tweaks.defaultLang === l ? "tweak-opt--active" : ""}`}
              onClick={() => setTweak({ defaultLang: l })}
            >{l}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <span className="tweak-label">default theme</span>
        <div className="tweak-options">
          {["dark", "light"].map(t => (
            <button key={t}
              className={`tweak-opt ${tweaks.defaultTheme === t ? "tweak-opt--active" : ""}`}
              onClick={() => setTweak({ defaultTheme: t })}
            >{t}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const defaults = window.__TWEAK_DEFAULTS__;
  const [tweaks, setTweaks] = useState(defaults);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("szcz-lang") || defaults.defaultLang);
  const [theme, setTheme] = useState(() => localStorage.getItem("szcz-theme") || defaults.defaultTheme);
  const [nav, setNav] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("szcz-nav")) || { route: ROUTES.HOME, section: "home" };
    } catch { return { route: ROUTES.HOME, section: "home" }; }
  });

  // Persist
  useEffect(() => { localStorage.setItem("szcz-lang", lang); }, [lang]);
  useEffect(() => { localStorage.setItem("szcz-theme", theme); }, [theme]);
  useEffect(() => { localStorage.setItem("szcz-nav", JSON.stringify(nav)); }, [nav]);

  // Theme class
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  // Accent hue → CSS var
  useEffect(() => {
    const h = tweaks.accentHue;
    document.documentElement.style.setProperty("--accent", `oklch(0.80 0.17 ${h})`);
    document.documentElement.style.setProperty("--accent-dim", `oklch(0.80 0.17 ${h} / 0.15)`);
    document.documentElement.style.setProperty("--accent-2", `oklch(0.80 0.17 ${(h + 70) % 360})`);
  }, [tweaks.accentHue]);

  // Density
  useEffect(() => {
    const map = { compact: "0.85", comfortable: "1", spacious: "1.15" };
    document.documentElement.style.setProperty("--density", map[tweaks.density] || "1");
  }, [tweaks.density]);

  // Tweak edit mode wiring (BEFORE announce)
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  const setTweak = (patch) => {
    setTweaks(prev => {
      const next = { ...prev, ...patch };
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
      return next;
    });
  };

  // Scroll to section in home view
  const scrollToSection = (id) => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  };

  const handleNav = (sectionId) => {
    if (nav.route !== ROUTES.HOME) {
      setNav({ route: ROUTES.HOME, section: sectionId });
      setTimeout(() => scrollToSection(sectionId), 60);
    } else {
      setNav({ route: ROUTES.HOME, section: sectionId });
      scrollToSection(sectionId);
    }
  };

  const openProject = (slug) => {
    setNav({ route: ROUTES.PROJECT, section: slug });
    window.scrollTo({ top: 0 });
  };

  const openProjectLegal = (slug, docId) => {
    setNav({ route: ROUTES.PROJECT_LEGAL, section: slug, doc: docId });
    window.scrollTo({ top: 0 });
  };

  // listen to sibling-nav events from ProjectLegalPage
  useEffect(() => {
    const onSibling = (e) => {
      const { slug, docId } = e.detail || {};
      if (slug && docId) openProjectLegal(slug, docId);
    };
    window.addEventListener("szcz-nav-legal", onSibling);
    return () => window.removeEventListener("szcz-nav-legal", onSibling);
  }, []);

  const handleGo = (target) => {
    setNav({ route: target.route, section: target.section || null });
    window.scrollTo({ top: 0 });
  };

  const back = () => {
    setNav({ route: ROUTES.HOME, section: "work" });
    setTimeout(() => scrollToSection("work"), 60);
  };

  // Scroll spy for home
  useEffect(() => {
    if (nav.route !== ROUTES.HOME) return;
    const ids = ["home", "work", "services", "stack", "about", "contact"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      if (cur !== nav.section) setNav(n => ({ ...n, section: cur }));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [nav.route, nav.section]);

  return (
    <div className="shell">
      <Sidebar
        route={nav.route}
        section={nav.section}
        lang={lang}
        onNav={handleNav}
        onGo={handleGo}
        projects={PROJECTS}
      />

      <div className="main">
        <Topbar route={nav.route} section={nav.section} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onGo={handleGo} />

        <div className="main-inner">
          {nav.route === ROUTES.HOME && (
            <>
              <Hero lang={lang} onNav={handleNav} />
              <Work lang={lang} onOpen={openProject} />
              <Services lang={lang} />
              <StackSection lang={lang} />
              <About lang={lang} />
              <Contact lang={lang} />
              <footer className="site-foot">
                <div>© 2026 SZCZ Softwares · {COPY[lang].made_in}</div>
                <div className="site-foot-links">
                  <button onClick={() => handleGo({ route: ROUTES.PRIVACY })}>privacy.md</button>
                  <button onClick={() => handleGo({ route: ROUTES.LEGAL })}>legal.md</button>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑ top</button>
                </div>
              </footer>
            </>
          )}

          {nav.route === ROUTES.PROJECT && (
            <ProjectPage slug={nav.section} lang={lang} onBack={back} onOpen={openProject} onOpenLegal={openProjectLegal} />
          )}

          {nav.route === ROUTES.PROJECT_LEGAL && (
            <ProjectLegalPage
              slug={nav.section}
              docId={nav.doc}
              lang={lang}
              onBack={() => openProject(nav.section)}
              onOpenProject={openProject}
            />
          )}

          {nav.route === ROUTES.PRIVACY && (
            <LegalPage kind="privacy" lang={lang} onBack={() => handleGo({ route: ROUTES.HOME, section: "home" })} />
          )}
          {nav.route === ROUTES.LEGAL && (
            <LegalPage kind="legal" lang={lang} onBack={() => handleGo({ route: ROUTES.HOME, section: "home" })} />
          )}
        </div>
      </div>

      {tweaksOpen && <TweaksPanel tweaks={tweaks} setTweak={setTweak} onClose={() => setTweaksOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
