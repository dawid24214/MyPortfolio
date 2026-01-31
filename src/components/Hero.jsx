export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-grid">
                    <div>
                        <div className="kicker">Portfolio programisty • czarno-niebieski styl</div>

                        <h1>
                            Buduję nowoczesne strony i aplikacje.{" "}
                            <span style={{ color: "var(--cyan)" }}>Szybko</span>,{" "}
                            <span style={{ color: "var(--blue)" }}>czytelnie</span>,{" "}
                            <span style={{ color: "var(--green)" }}>produkcyjnie</span>.
                        </h1>

                        <p className="lead">
                            Jestem <strong>Front-End / JavaScript Developerem</strong> z doświadczeniem technicznym.
                            Tworzę nowoczesne strony i aplikacje webowe w React, stawiając na wydajność,
                            czytelny kod i realną wartość biznesową.
                        </p>

                        <div className="hero-actions">
                            <a className="btn" href="#projects">Zobacz projekty</a>
                            <a className="btn btn--secondary" href="#contact">Napisz do mnie</a>
                        </div>

                        <div className="badges" aria-label="Szybkie fakty">
                            <span className="badge">⚡ Performance first</span>
                            <span className="badge">🧩 React / JS / TS</span>
                        </div>
                    </div>

                    <div className="card hero-card">
                        <div className="glow" aria-hidden="true" />

                        <div style={{ position: "relative", display: "grid", gap: 12 }}>
                            <div className="codebox" aria-label="Podgląd kodu">
                                <div className="codehead" aria-hidden="true">
                                    <span className="dotwin" />
                                    <span className="dotwin" />
                                    <span className="dotwin" />
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
                                    <p>React, Next.js, Tailwind/SCSS, dostępność, animacje, optymalizacja.</p>
                                </div>
                                <div className="mini">
                                    <h3>Backend</h3>
                                    <p>Node, REST, auth, integracje (EmailJS, płatności, CMS), bazy danych.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
