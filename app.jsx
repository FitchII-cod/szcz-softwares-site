// Root app — routing, theme, language

const { useState, useEffect, useCallback, useRef } = React;

const ROUTES = {
  HOME: "home",
  PROJECT: "project",
  PRIVACY: "privacy",
  LEGAL: "legal",
  PROJECT_LEGAL: "project-legal",
};

const DEFAULTS = {
  defaultLang: "fr",
  defaultTheme: "dark",
};

const HOME_SECTIONS = ["home", "work", "services", "stack", "about", "contact"];
const LEGAL_DOC_IDS = ["privacy", "cgu", "cgv", "account-deletion"];

// ---- URL <-> nav state mapping (clean URLs like /susumou/cgu) ----

function navFromLocation() {
  const pathname = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
  const hash = (window.location.hash || "").replace(/^#/, "");
  const slugs = (window.PROJECTS || []).map(p => p.slug);

  if (pathname === "/" || pathname === "") {
    const section = HOME_SECTIONS.includes(hash) ? hash : "home";
    return { route: ROUTES.HOME, section };
  }
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 1) {
    if (segs[0] === "privacy") return { route: ROUTES.PRIVACY, section: null };
    if (segs[0] === "legal") return { route: ROUTES.LEGAL, section: null };
    if (slugs.includes(segs[0])) return { route: ROUTES.PROJECT, section: segs[0] };
  }
  if (segs.length === 2 && slugs.includes(segs[0]) && LEGAL_DOC_IDS.includes(segs[1])) {
    return { route: ROUTES.PROJECT_LEGAL, section: segs[0], doc: segs[1] };
  }
  return { route: ROUTES.HOME, section: "home" };
}

function urlFromNav(nav) {
  if (nav.route === ROUTES.PROJECT) return `/${nav.section}`;
  if (nav.route === ROUTES.PROJECT_LEGAL) return `/${nav.section}/${nav.doc}`;
  if (nav.route === ROUTES.PRIVACY) return "/privacy";
  if (nav.route === ROUTES.LEGAL) return "/legal";
  // HOME
  return nav.section && nav.section !== "home" ? `/#${nav.section}` : "/";
}

function titleFromNav(nav, lang) {
  const base = "SZCZ Softwares";
  if (nav.route === ROUTES.PROJECT) {
    const p = (window.PROJECTS || []).find(x => x.slug === nav.section);
    return p ? `${p.title} — ${base}` : base;
  }
  if (nav.route === ROUTES.PROJECT_LEGAL) {
    const p = (window.PROJECTS || []).find(x => x.slug === nav.section);
    const doc = p && (p.legal || []).find(d => d.id === nav.doc);
    if (p && doc) return `${p.title} · ${doc[lang] || doc.fr} — ${base}`;
    return base;
  }
  if (nav.route === ROUTES.PRIVACY) return `${lang === "fr" ? "Confidentialité" : "Privacy"} — ${base}`;
  if (nav.route === ROUTES.LEGAL) return `${lang === "fr" ? "Mentions légales" : "Legal notice"} — ${base}`;
  return `${base} — Web · Mobile · AI · Chain · Games`;
}

function Sidebar({ route, section, lang, onNav, onGo, projects, open, onClose }) {
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
    <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <div className="sidebar-brand">
        <button
          type="button"
          className="sidebar-brand-row"
          onClick={() => { onGo({ route: ROUTES.HOME, section: "home" }); onClose && onClose(); }}
          aria-label="SZCZ Softwares — accueil"
        >
          <img src="assets/LogoSZCZ.png" alt="" className="sidebar-brand-logo" />
          <div className="sidebar-brand-text">
            <div className="sidebar-brand-line">~/portfolio</div>
            <div className="sidebar-brand-name">
              <span className="accent">&gt;</span> szcz<span className="accent">_</span>softwares
            </div>
          </div>
        </button>
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

function Topbar({ route, section, lang, setLang, theme, setTheme, onGo, onMenu, menuOpen }) {
  const crumbs = [];
  if (route === ROUTES.HOME) crumbs.push(section || "home");
  else if (route === ROUTES.PROJECT) crumbs.push("projects", section);
  else if (route === ROUTES.PRIVACY) crumbs.push("legal", "privacy");
  else if (route === ROUTES.LEGAL) crumbs.push("legal", "notice");

  return (
    <div className="topbar">
      <button
        type="button"
        className="menu-toggle"
        onClick={onMenu}
        aria-label="menu"
        aria-expanded={menuOpen ? "true" : "false"}
      >
        <span className="menu-toggle-bars" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
      </button>
      <div className="topbar-path">
        <span className="topbar-path-root">~/szcz-softwares</span>{crumbs.map((cr, i) => (
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

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("szcz-lang") || DEFAULTS.defaultLang);
  const [theme, setTheme] = useState(() => localStorage.getItem("szcz-theme") || DEFAULTS.defaultTheme);
  const [nav, setNav] = useState(() => navFromLocation());
  const [menuOpen, setMenuOpen] = useState(false);

  // Persist lang + theme. Nav lives in the URL.
  useEffect(() => { localStorage.setItem("szcz-lang", lang); document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { localStorage.setItem("szcz-theme", theme); }, [theme]);

  // Theme class
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  // Sync URL <-> nav. pushState for real route changes, replaceState for
  // in-page section changes (so scroll-spy doesn't pollute history).
  const prevNavRef = useRef(nav);
  useEffect(() => {
    const url = urlFromNav(nav);
    const current = window.location.pathname + window.location.hash;
    if (url !== current) {
      const prev = prevNavRef.current;
      const onlySectionWithinHome =
        prev.route === ROUTES.HOME && nav.route === ROUTES.HOME;
      if (onlySectionWithinHome) {
        window.history.replaceState({}, "", url);
      } else {
        window.history.pushState({}, "", url);
      }
    }
    prevNavRef.current = nav;
    document.title = titleFromNav(nav, lang);
  }, [nav, lang]);

  useEffect(() => {
    const onPop = () => setNav(navFromLocation());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Close mobile drawer on any nav change
  useEffect(() => { setMenuOpen(false); }, [nav.route, nav.section, nav.doc]);

  // On first mount, if we landed on /#section, scroll to it.
  useEffect(() => {
    if (nav.route === ROUTES.HOME && nav.section && nav.section !== "home") {
      setTimeout(() => scrollToSection(nav.section), 80);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

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

  const openProjectLegal = useCallback((slug, docId) => {
    setNav({ route: ROUTES.PROJECT_LEGAL, section: slug, doc: docId });
    window.scrollTo({ top: 0 });
  }, []);

  // listen to sibling-nav events from ProjectLegalPage
  useEffect(() => {
    const onSibling = (e) => {
      const { slug, docId } = e.detail || {};
      if (slug && docId) openProjectLegal(slug, docId);
    };
    window.addEventListener("szcz-nav-legal", onSibling);
    return () => window.removeEventListener("szcz-nav-legal", onSibling);
  }, [openProjectLegal]);

  const handleGo = (target) => {
    setNav({ route: target.route, section: target.section || null });
    window.scrollTo({ top: 0 });
  };

  const back = () => {
    setNav({ route: ROUTES.HOME, section: "work" });
    setTimeout(() => scrollToSection("work"), 60);
  };

  // Scroll spy for home — reflect current section in URL hash without history spam.
  useEffect(() => {
    if (nav.route !== ROUTES.HOME) return;
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = "home";
      for (const id of HOME_SECTIONS) {
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
      <div
        className={`sidebar-backdrop ${menuOpen ? "sidebar-backdrop--visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      ></div>
      <Sidebar
        route={nav.route}
        section={nav.section}
        lang={lang}
        onNav={handleNav}
        onGo={handleGo}
        projects={PROJECTS}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="main">
        <Topbar
          route={nav.route}
          section={nav.section}
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          onGo={handleGo}
          onMenu={() => setMenuOpen(o => !o)}
          menuOpen={menuOpen}
        />

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

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
