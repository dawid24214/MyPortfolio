export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-title">
                    <div>
                        <h2>Projekty</h2>
                        <p>Podmień linki, opisy i screenshoty na swoje.</p>
                    </div>
                </div>

                <div className="grid3">
                    <article className="project">
                        <div className="thumb" aria-hidden="true" />
                        <h3>System rezerwacji wizyt</h3>
                        <p>Aplikacja webowa do rezerwacji terminów: panel admina, role użytkowników, powiadomienia email.</p>
                        <div className="tagrow">
                            <span className="tag">React</span>
                            <span className="tag">Node</span>
                            <span className="tag">API</span>
                        </div>
                        <div className="project-actions">
                            <a className="btn" href="https://example.com" target="_blank" rel="noreferrer">Demo</a>
                            <a className="btn btn--secondary" href="https://github.com/" target="_blank" rel="noreferrer">Kod</a>
                        </div>
                    </article>

                    <article className="project">
                        <div className="thumb" aria-hidden="true" />
                        <h3>Strona firmowa – portfolio klienta</h3>
                        <p>Klasyczna strona: oferta, realizacje, formularz kontaktowy, SEO podstawy, hosting.</p>
                        <div className="tagrow">
                            <span className="tag">HTML</span>
                            <span className="tag">SCSS</span>
                            <span className="tag">Form</span>
                        </div>
                        <div className="project-actions">
                            <a className="btn" href="https://example.com" target="_blank" rel="noreferrer">Podgląd</a>
                            <a className="btn btn--secondary" href="https://github.com/" target="_blank" rel="noreferrer">Kod</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
