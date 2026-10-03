import { useEffect, useRef, useState } from "react";
import { STRINGS, projects } from "./i18n.js";
import mylogo from "./assets/mylogo.png";
import githubLogo from "./assets/icons/github.svg";
import flagEs from "./assets/flags/es.svg";
import flagUs from "./assets/flags/us.svg";

function getInitialTheme() {
  if (window.matchMedia?.("(prefers-color-scheme: light)").matches)
    return "light";
  return "dark";
}

function isNotFoundRoute(hash) {
  return hash.startsWith("#/");
}

function NotFound({ t }) {
  return (
    <section className="not-found animate-in">
      <p className="not-found-code">404</p>
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.text}</p>
      <div className="not-found-actions">
        <a href="#inicio" className="btn primary">
          {t.notFound.home}
        </a>
        <a href="#proyectos" className="btn">
          {t.notFound.projects}
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const t = STRINGS[lang];
  const stack = t.stack.items;
  const tools = t.tools.items;
  const contactMenuRef = useRef(null);
  const firstRender = useRef(true);
  const [route, setRoute] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  const show404 = isNotFoundRoute(route);

  useEffect(() => {
    document.documentElement.lang = lang === "es" ? "es" : "en";
    document.title = t.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.metaDescription);
  }, [lang, t]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    root.classList.add("theme-fade");
    const t = setTimeout(() => root.classList.remove("theme-fade"), 900);
    return () => clearTimeout(t);
  }, [theme]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      setRoute(hash);
      setMenuOpen(false);
      if (isNotFoundRoute(hash)) {
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (show404) return;
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [show404]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    if (!contactOpen) return;
    const onPointerDown = (e) => {
      if (contactMenuRef.current && !contactMenuRef.current.contains(e.target)) {
        setContactOpen(false);
        if (contactMenuRef.current.contains(document.activeElement)) {
          document.activeElement.blur();
        }
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [contactOpen]);

  const toggleContact = () => {
    if (contactOpen) {
      contactMenuRef.current?.querySelector("button")?.blur();
    }
    setContactOpen((v) => !v);
  };

  const closeContact = (e) => {
    setContactOpen(false);
    e.currentTarget.blur();
  };

  const smoothTo = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = hash === "#inicio" ? document.body : document.querySelector(hash);
    if (!el) return;
    const start = window.scrollY;
    const target =
      hash === "#inicio"
        ? 0
        : el.getBoundingClientRect().top + start - 76;
    const dist = target - start;
    if (Math.abs(dist) < 2) {
      window.history.pushState(null, "", hash);
      return;
    }
    const dur = 600;
    let raf;
    const t0 = performance.now();
    const cancel = () => cancelAnimationFrame(raf);
    window.addEventListener("wheel", cancel, { once: true, passive: true });
    window.addEventListener("touchmove", cancel, { once: true, passive: true });
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      window.scrollTo(0, start + dist * eased);
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        window.history.pushState(null, "", hash);
      }
    };
    raf = requestAnimationFrame(step);
  };

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#inicio" className="logo" onClick={(e) => smoothTo(e, "#inicio")}>
            TocinoDev
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t.nav.openMenu}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`links ${menuOpen ? "open" : ""}`}>
            <a href="#sobre-mi" onClick={(e) => smoothTo(e, "#sobre-mi")}>
              {t.nav.about}
            </a>
            <a href="#stack" onClick={(e) => smoothTo(e, "#stack")}>
              {t.nav.stack}
            </a>
            <a href="#herramientas" onClick={(e) => smoothTo(e, "#herramientas")}>
              {t.nav.tools}
            </a>
            <a href="#proyectos" onClick={(e) => smoothTo(e, "#proyectos")}>
              {t.nav.projects}
            </a>
            <a href="#contacto" onClick={(e) => smoothTo(e, "#contacto")}>
              {t.nav.contact}
            </a>
            <button
              className="lang-btn"
              onClick={() => setLang((l) => (l === "en" ? "es" : "en"))}
              aria-label={t.lang.label}
              title={t.lang.title}
            >
              <img
                src={lang === "en" ? flagEs : flagUs}
                alt=""
                width="20"
                height="14"
                loading="lazy"
                decoding="async"
                className="flag-img"
              />
              <span>{t.lang.code}</span>
            </button>
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label={t.theme.label}
              title={t.theme.title}
            >
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
                </svg>
              )}
              <span>{theme === "dark" ? t.theme.light : t.theme.dark}</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="container">
        {show404 ? (
          <NotFound t={t} />
        ) : (
          <>
            <section id="inicio" className="hero">
              <div className="hero-photo animate-in">
                <img
                  src={mylogo}
                  alt={t.hero.logoAlt}
                  width="300"
                  height="300"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="profile-img"
                />
                <span className="status">
                  <span className="dot" /> {t.hero.status}
                </span>
              </div>

              <div className="hero-info">
                <p className="eyebrow animate-in d1">{t.hero.eyebrow}</p>
                <h1 className="animate-in d2">TocinoDev</h1>
                <p className="role animate-in d3">{t.hero.role}</p>
                <p className="desc animate-in d4">{t.hero.desc}</p>
                <div className="actions animate-in d5">
                  <a href="#proyectos" className="btn primary" onClick={(e) => smoothTo(e, "#proyectos")}>
                    {t.hero.projects}
                  </a>
                  <div
                    className={`contact-menu${contactOpen ? " open" : ""}`}
                    ref={contactMenuRef}
                  >
                    <button
                      className="contact-btn"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={contactOpen}
                      onClick={toggleContact}
                    >
                      {t.hero.contact}{" "}
                      <span
                        className={`arrow${contactOpen ? " up" : ""}`}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </button>
                    <div className="contact-list" role="menu">
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        onClick={closeContact}
                      >
                        <span className="menu-icon adaptive" aria-hidden="true">
                          <img
                            src={githubLogo}
                            alt=""
                            width="18"
                            height="18"
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        GitHub
                      </a>
                      <a
                        href="#contacto"
                        role="menuitem"
                        onClick={(e) => {
                          closeContact(e);
                          smoothTo(e, "#contacto");
                        }}
                      >
                        {t.hero.goContact} <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="sobre-mi" className="section reveal">
              <h2>{t.about.title}</h2>
              <div className="card">
                <p>
                  {t.about.p1a}
                  <strong>TocinoDev</strong>
                  {t.about.p1b}
                </p>
                <p>
                  {t.about.p2a}
                  <strong>Rust</strong>
                  {t.about.p2b}
                  <strong>{t.about.web}</strong>
                  {t.about.p2c}
                </p>
                <ul className="about-list">
                  {t.about.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="stack" className="section reveal">
              <div className="section-head">
                <h2>{t.stack.title}</h2>
                <p>{t.stack.sub}</p>
              </div>
              <div className="grid stack-grid">
                {stack.map((s, i) => (
                  <article
                    key={s.name}
                className="card stack-card reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className={`stack-icon${s.adaptive ? " adaptive" : ""}`}>
                  <img src={s.logo} alt={`Logo de ${s.name}`} width="24" height="24" loading="lazy" decoding="async" />
                </span>
                    <div>
                      <h3>
                        {s.name} <small>· {s.level}</small>
                      </h3>
                      <p>{s.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="herramientas" className="section reveal">
              <div className="section-head">
                <h2>{t.tools.title}</h2>
                <p>{t.tools.sub}</p>
              </div>
              <div className="grid stack-grid">
                {tools.map((t, i) => (
                  <a
                    key={t.name}
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.name}: documentación oficial (se abre en pestaña nueva)`}
                    className="card stack-card reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className={`stack-icon${t.adaptive ? " adaptive" : ""}`}>
                      <img
                        src={t.logo}
                        alt=""
                        width="24"
                        height="24"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <div>
                      <h3>
                        {t.name} <span className="ext" aria-hidden="true">↗</span>
                      </h3>
                      <p>{t.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section id="proyectos" className="section reveal">
              <div className="section-head">
                <h2>{t.projects.title}</h2>
                <p>{t.projects.sub}</p>
              </div>
              {projects.length === 0 ? (
                <div className="card">
                  <p>{t.projects.empty}</p>
                </div>
              ) : (
              <div className="grid projects-grid">
                {projects.map((p, i) => (
                  <article
                    key={p.id}
                className="card project-card reveal"
                style={{ transitionDelay: `${(i % 3) * 50}ms` }}
                  >
                    <div className="project-img">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={t.projects.imgAlt(p.title)}
                          loading="lazy"
                          decoding="async"
                          width="400"
                          height="225"
                        />
                      ) : (
                        <span aria-hidden="true">🖼 {p.title}</span>
                      )}
                    </div>
                    <div className="project-body">
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                      <div className="tags">
                        {p.tech.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={p.demoUrl} target="_blank" rel="noopener noreferrer">
                          {t.projects.demo} →
                        </a>
                        <a href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                          {t.projects.code} →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              )}
            </section>

            <section id="contacto" className="section reveal">
              <h2>{t.contact.title}</h2>
              <div className="card contact-card">
                <h3>{t.contact.heading}</h3>
                <p>{t.contact.text}</p>
                <div className="cta-row">
                  <a
                    className="btn primary"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.contact.github}
                  </a>
                  <a href="#proyectos" className="btn" onClick={(e) => smoothTo(e, "#proyectos")}>
                    {t.contact.projects}
                  </a>
                </div>
                <p className="anti-spam-note">{t.contact.note}</p>
              </div>
            </section>
          </>
        )}
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 TocinoDev</span>
          <a href="#inicio" onClick={(e) => smoothTo(e, "#inicio")}>{t.footer.top}</a>
        </div>
      </footer>
    </>
  );
}
