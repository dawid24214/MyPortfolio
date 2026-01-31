import { useEffect, useMemo, useState } from "react";

export default function App() {
    // ===== REVEAL (Email / Telefon+WhatsApp) =====
    const [emailOpen, setEmailOpen] = useState(false);
    const [phoneWaOpen, setPhoneWaOpen] = useState(false);

    function toggleReveal(id) {
        if (id === "emailReveal") setEmailOpen((v) => !v);
        if (id === "phoneWaReveal") setPhoneWaOpen((v) => !v);
    }

    async function copyText(text, btnEl) {
        try {
            await navigator.clipboard.writeText(text);
            if (btnEl) {
                const prev = btnEl.textContent;
                btnEl.textContent = "Skopiowano";
                setTimeout(() => (btnEl.textContent = prev), 1200);
            }
        } catch {
            if (btnEl) {
                const prev = btnEl.textContent;
                btnEl.textContent = "Błąd";
                setTimeout(() => (btnEl.textContent = prev), 1200);
            }
        }
    }

    function openLink(url) {
        window.open(url, "_blank", "noopener,noreferrer");
    }

    function sendMessage(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log("Form data:", data);
        alert(
            "Wiadomość (demo) zapisana w konsoli. Podłącz EmailJS / backend, aby wysyłać maile."
        );
        e.target.reset();
    }

    // ===== SIDEBAR STATE + localStorage =====
    const [sidebarHidden, setSidebarHidden] = useState(() => {
        try {
            return localStorage.getItem("sidebarHidden") === "1";
        } catch {
            return false;
        }
    });

    function setSidebarHiddenSafe(hidden) {
        setSidebarHidden(hidden);
        try {
            localStorage.setItem("sidebarHidden", hidden ? "1" : "0");
        } catch {}
    }

    // ===== body class toggle =====
    useEffect(() => {
        document.body.classList.toggle("sidebar-hidden", sidebarHidden);
    }, [sidebarHidden]);

    // ===== reveal on scroll =====
    useEffect(() => {
        const els = Array.from(document.querySelectorAll(".reveal"));
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) entry.target.classList.add("show");
                }
            },
            { threshold: 0.12 }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <>
            <div className="grid-bg" aria-hidden="true"></div>

            <header id="sidebar" className={sidebarHidden ? "hidden" : ""}>
                <div className="nav">
                    <button
                        className="pill sidebar-toggle"
                        id="toggleSidebar"
                        type="button"
                        aria-label="Pokaż/ukryj nawigację"
                        onClick={() => setSidebarHiddenSafe(!sidebarHidden)}
                    >
                        <span>☰ Menu</span>
                        <span
                            style={{
                                opacity: 0.75,
                                fontFamily: "var(--mono)",
                                fontSize: 12,
                            }}
                        >
              H
            </span>
                    </button>

                    <a className="brand" href="#top" aria-label="Przejdź do góry">
                        <span className="logo" aria-hidden="true"></span>
                        <span>
              Dawid <span style={{ color: "var(--blue)" }}>Grochowski</span>
            </span>
                    </a>

                    <nav className="navlinks" aria-label="Nawigacja">
                        <a className="pill" href="#about">
                            O mnie
                        </a>
                        <a className="pill" href="#skills">
                            Umiejętności
                        </a>
                        <a className="pill" href="#projects">
                            Projekty
                        </a>
                        <a className="pill" href="#timeline">
                            Doświadczenie
                        </a>
                        <a className="pill" href="#contact">
                            Kontakt
                        </a>
                        <a className="btn" href="#contact">
                            Zatrudnij mnie →
                        </a>
                    </nav>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            width: "100%",
                        }}
                    >
                        <a className="pill" href="#top">
                            ↑ Góra
                        </a>
                    </div>
                </div>
            </header>

            <div className="sidebar-fab">
                <button
                    className="pill"
                    id="openSidebar"
                    type="button"
                    onClick={() => setSidebarHiddenSafe(false)}
                >
                    ☰ Menu
                </button>
            </div>

            <main id="top" className="with-sidebar">
                {/* HERO */}
                <section className="hero">
                    <div className="container">
                        <div className="hero-grid">
                            <div className="reveal">
                                <div className="kicker">
                                    Portfolio programisty • czarno-niebieski styl
                                </div>

                                <h1>
                                    Buduję nowoczesne strony i aplikacje.{" "}
                                    <span style={{ color: "var(--cyan)" }}>Szybko</span>,{" "}
                                    <span style={{ color: "var(--blue)" }}>czytelnie</span>,{" "}
                                    <span style={{ color: "var(--green)" }}>produkcyjnie</span>.
                                </h1>

                                <p className="lead">
                                    Jestem <strong>Front-End / JavaScript Developerem</strong> z
                                    doświadczeniem technicznym. Tworzę nowoczesne strony i
                                    aplikacje webowe w React, stawiając na wydajność, czytelny kod
                                    i realną wartość biznesową.
                                </p>

                                <div className="hero-actions">
                                    <a className="btn" href="#projects">
                                        Zobacz projekty
                                    </a>
                                    <a className="btn secondary" href="#contact">
                                        Napisz do mnie
                                    </a>
                                </div>

                                <div className="badges" aria-label="Szybkie fakty">
                                    <span className="badge">⚡ Performance first</span>
                                    <span className="badge">🧩 React / JS / TS</span>
                                </div>
                            </div>

                            <div className="card hero-card reveal">
                                <div className="glow" aria-hidden="true"></div>

                                <div
                                    style={{
                                        position: "relative",
                                        display: "grid",
                                        gap: 12,
                                    }}
                                >
                                    <div className="codebox" aria-label="Podgląd kodu">
                                        <div className="codehead" aria-hidden="true">
                                            <span className="dotwin"></span>
                                            <span className="dotwin"></span>
                                            <span className="dotwin"></span>

                                            <span
                                                style={{
                                                    marginLeft: 8,
                                                    color: "rgba(159,176,214,.85)",
                                                    fontFamily: "var(--mono)",
                                                    fontSize: 12,
                                                }}
                                            >
                        /src/portfolio.ts
                      </span>
                                        </div>

                                        <pre>
                      <code>{`const developer = {
  name: "Dawid Grochowski",
  role: "Front-End / JavaScript Developer",
  stack: ["React", "JavaScript", "TypeScript"],
  focus: ["UX", "Performance", "Clean Code"],
  contact: "kontakt@dawidgrochowski.dev"
};

export default function Build() {
  return "Let’s ship.";
}`}</code>
                    </pre>
                                    </div>

                                    <div className="grid2">
                                        <div className="mini">
                                            <h3>Frontend</h3>
                                            <p>
                                                React, Next.js, Tailwind/SCSS, dostępność, animacje,
                                                optymalizacja.
                                            </p>
                                        </div>

                                        <div className="mini">
                                            <h3>Backend</h3>
                                            <p>
                                                Node, REST, auth, integracje (EmailJS, płatności, CMS),
                                                bazy danych.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* end hero-grid */}
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about">
                    <div className="container">
                        <div className="section-title reveal">
                            <div>
                                <h2>O mnie</h2>
                                <p>Kim jestem i jak pracuję na co dzień.</p>
                            </div>
                            <a className="pill" href="#contact">
                                📩 Kontakt
                            </a>
                        </div>

                        <div className="grid3">
                            <div className="mini reveal">
                                <h3>Profil</h3>
                                <p>
                                    Front-End / JavaScript Developer specjalizujący się w React i
                                    nowoczesnych interfejsach.
                                </p>
                            </div>

                            <div className="mini reveal">
                                <h3>Doświadczenie techniczne</h3>
                                <p>
                                    Praca w środowisku przemysłowym nauczyła mnie precyzji,
                                    odpowiedzialności i pracy procesowej.
                                </p>
                            </div>

                            <div className="mini reveal">
                                <h3>Styl pracy</h3>
                                <p>
                                    Stawiam na jakość, terminowość i jasną komunikację z klientem.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills">
                    <div className="container">
                        <div className="section-title reveal">
                            <div>
                                <h2>Umiejętności</h2>
                                <p>Tech stack i obszary, w których czuję się najmocniej.</p>
                            </div>
                        </div>

                        <div className="grid2">
                            <div className="mini reveal">
                                <h3>Technologie</h3>
                                <div className="tagrow" style={{ marginTop: 10 }}>
                                    <span className="tag">JavaScript</span>
                                    <span className="tag">TypeScript</span>
                                    <span className="tag">React</span>
                                    <span className="tag">Next.js</span>
                                    <span className="tag">React Native</span>
                                    <span className="tag">Node.js</span>
                                    <span className="tag">REST</span>
                                    <span className="tag">Git</span>
                                </div>
                            </div>

                            <div className="mini reveal">
                                <h3>Wartości w kodzie</h3>
                                <p>
                                    Czytelność, testowalność, stabilność, sensowna architektura.
                                    Dokładam wagę do performance i dostępności.
                                </p>
                                <div className="tagrow">
                                    <span className="tag">Clean Code</span>
                                    <span className="tag">Performance</span>
                                    <span className="tag">A11y</span>
                                    <span className="tag">SEO basics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects">
                    <div className="container">
                        <div className="section-title reveal">
                            <div>
                                <h2>Projekty</h2>
                                <p>Podmień linki, opisy i screenshoty na swoje.</p>
                            </div>
                        </div>

                        <div className="grid3">
                            <article className="project reveal">
                                <div className="thumb" aria-hidden="true"></div>
                                <h3>System rezerwacji wizyt</h3>
                                <p>
                                    Aplikacja webowa do rezerwacji terminów: panel admina, role
                                    użytkowników, powiadomienia email.
                                </p>

                                <div className="tagrow">
                                    <span className="tag">React</span>
                                    <span className="tag">Node</span>
                                    <span className="tag">API</span>
                                </div>

                                <div className="project-actions">
                                    <a
                                        className="btn"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openLink("https://example.com");
                                        }}
                                    >
                                        Demo
                                    </a>
                                    <a
                                        className="btn secondary"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openLink("https://github.com/");
                                        }}
                                    >
                                        Kod
                                    </a>
                                </div>
                            </article>

                            <article className="project reveal">
                                <div className="thumb" aria-hidden="true"></div>
                                <h3>Strona firmowa – portfolio klienta</h3>
                                <p>
                                    Klasyczna strona: oferta, realizacje, formularz kontaktowy, SEO
                                    podstawy, hosting.
                                </p>

                                <div className="tagrow">
                                    <span className="tag">HTML</span>
                                    <span className="tag">SCSS</span>
                                    <span className="tag">Form</span>
                                </div>

                                <div className="project-actions">
                                    <a
                                        className="btn"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openLink("https://example.com");
                                        }}
                                    >
                                        Podgląd
                                    </a>
                                    <a
                                        className="btn secondary"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openLink("https://github.com/");
                                        }}
                                    >
                                        Kod
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* WHY WEB DEVELOPER */}
                <section id="why-dev">
                    <div className="container">
                        <div className="section-title reveal">
                            <div>
                                <h2>Dlaczego warto zatrudnić programistę strony www?</h2>
                                <p>
                                    Strona internetowa to narzędzie biznesowe, które musi działać
                                    – dziś i za rok.
                                </p>
                            </div>
                        </div>

                        <div className="grid3">
                            <div className="mini reveal">
                                <h3>To nie tylko wygląd</h3>
                                <p>
                                    Profesjonalna strona www to architektura, wydajność, UX i
                                    bezpieczeństwo. Bez doświadczenia łatwo stworzyć coś, co
                                    wygląda poprawnie, ale działa wolno, niestabilnie i zniechęca
                                    użytkowników.
                                </p>
                            </div>

                            <div className="mini reveal">
                                <h3>Doświadczenie oszczędza pieniądze</h3>
                                <p>
                                    Błędy w strukturze, SEO czy responsywności wychodzą dopiero po
                                    czasie. Wtedy poprawki są drogie, a czasem konieczna jest
                                    budowa strony od nowa. Dobrze zaprojektowany start eliminuje
                                    te problemy.
                                </p>
                            </div>

                            <div className="mini reveal">
                                <h3>Dlaczego samo AI nie wystarczy</h3>
                                <p>
                                    Narzędzia AI pomagają, ale nie rozumieją celu biznesowego,
                                    użytkowników ani kontekstu projektu. Bez wiedzy technicznej
                                    łatwo wygenerować kod, który trudno rozwijać i utrzymać.
                                </p>
                            </div>
                        </div>

                        <div className="mini reveal" style={{ marginTop: 16 }}>
                            <h3>W praktyce</h3>
                            <p>
                                Doświadczony programista tworzy stronę, która jest szybka,
                                stabilna i gotowa na rozwój. To inwestycja, która pracuje na
                                Twój biznes, zamiast generować problemy w przyszłości.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TIMELINE */}
                <section id="timeline">
                    <div className="container">
                        <div className="section-title reveal">
                            <div>
                                <h2>Doświadczenie</h2>
                                <p>
                                    Zakres kompetencji i ścieżka rozwoju – technicznie i
                                    projektowo.
                                </p>
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="step reveal">
                                <div className="when">2024 → dziś</div>
                                <div>
                                    <h4>Front-End / JavaScript Developer</h4>
                                    <p>
                                        Realizacja stron i aplikacji webowych w{" "}
                                        <strong>React / TypeScript</strong>. Praca nad UI,
                                        wydajnością, strukturą komponentów oraz integracją z API.
                                        Projekty własne, portfolio oraz realizacje komercyjne.
                                    </p>
                                </div>
                            </div>

                            <div className="step reveal">
                                <div className="when">2023 → 2024</div>
                                <div>
                                    <h4>Rozwój kompetencji programistycznych</h4>
                                    <p>
                                        Intensywna nauka JavaScript, React i nowoczesnych narzędzi
                                        frontendowych. Budowanie projektów demonstracyjnych, praca z
                                        Git, REST API i deploymentem.
                                    </p>
                                </div>
                            </div>

                            <div className="step reveal">
                                <div className="when">Wcześniej</div>
                                <div>
                                    <h4>Doświadczenie techniczne (środowisko przemysłowe)</h4>
                                    <p>
                                        Praca w wymagającym środowisku technicznym (automatyzacja,
                                        procesy, odpowiedzialność). Umiejętności transferowalne:
                                        precyzja, praca pod presją, myślenie procesowe i rozwiązywanie
                                        problemów.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact">
                    <div className="container">
                        <div className="section-title reveal">
                            <div>
                                <h2>Kontakt</h2>
                                <p>Napisz, a wrócę z odpowiedzią i wyceną.</p>
                            </div>
                        </div>

                        <div className="grid2">
                            <div className="mini reveal">
                                <div className="contact-actions">
                                    <button
                                        className="pill"
                                        type="button"
                                        onClick={() => toggleReveal("emailReveal")}
                                    >
                                        Email
                                    </button>

                                    <button
                                        className="pill"
                                        type="button"
                                        onClick={() => toggleReveal("phoneWaReveal")}
                                    >
                                        Telefon/WhatsApp
                                    </button>

                                    <a
                                        className="pill"
                                        href="https://github.com/twojprofil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        className="pill"
                                        href="https://www.linkedin.com/in/dawid-grochowski-3a0264322"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>

                                    <a
                                        className="pill"
                                        href="https://m.me/twojprofil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Messenger
                                    </a>
                                </div>

                                {emailOpen && (
                                    <div id="emailReveal" className="revealbox">
                                        <span>kontakt@dawidgrochowski.dev</span>
                                        <button
                                            className="copybtn"
                                            type="button"
                                            onClick={(e) =>
                                                copyText("kontakt@dawidgrochowski.dev", e.currentTarget)
                                            }
                                        >
                                            Kopiuj
                                        </button>
                                    </div>
                                )}

                                {phoneWaOpen && (
                                    <div id="phoneWaReveal" className="revealbox">
                    <span>
                      <strong>Telefon:</strong> +48 000 000 000
                    </span>
                                        <button
                                            className="copybtn"
                                            type="button"
                                            onClick={(e) => copyText("+48000000000", e.currentTarget)}
                                        >
                                            Kopiuj
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="mini reveal">
                                <h3>Formularz</h3>
                                <form onSubmit={sendMessage}>
                                    <input name="name" placeholder="Imię" required />
                                    <input name="email" type="email" placeholder="Email" required />
                                    <input name="topic" placeholder="Temat" />
                                    <textarea
                                        name="message"
                                        placeholder="Napisz, co chcesz zbudować…"
                                        required
                                    />
                                    <button className="btn" type="submit">
                                        Wyślij wiadomość →
                                    </button>
                                    <p
                                        style={{
                                            margin: 0,
                                            color: "rgba(159,176,214,.8)",
                                            fontSize: 12,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        * Demo: formularz nie wysyła maila – podłącz EmailJS / backend.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CERTIFICATES */}
                <section id="certificates">
                    <div className="container">
                        <div className="section-title reveal">
                            <div>
                                <h2>Certyfikaty</h2>
                                <p>Potwierdzenie kompetencji i ciągłego rozwoju.</p>
                            </div>
                        </div>

                        <div className="mini reveal" style={{ display: "flex", justifyContent: "center" }}>
                            <img
                                src="certyfikaty.jpg"
                                alt="Certyfikaty Dawida Grochowskiego"
                                style={{
                                    maxWidth: "100%",
                                    borderRadius: 18,
                                    border: "1px solid rgba(30,42,74,.75)",
                                    boxShadow: "0 20px 60px rgba(0,0,0,.45)",
                                }}
                            />
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="container">
                    <div className="footergrid">
                        <div>© {year} • Grochowski Dawid</div>
                    </div>
                </div>
            </footer>
        </>
    );
}
