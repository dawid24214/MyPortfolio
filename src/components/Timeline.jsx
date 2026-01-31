export default function Timeline() {
    return (
        <section id="timeline">
            <div className="container">
                <div className="section-title">
                    <div>
                        <h2>Doświadczenie</h2>
                        <p>Zakres kompetencji i ścieżka rozwoju – technicznie i projektowo.</p>
                    </div>
                </div>

                <div className="timeline">
                    <div className="step">
                        <div className="when">2024 → dziś</div>
                        <div>
                            <h4>Front-End / JavaScript Developer</h4>
                            <p>
                                Realizacja stron i aplikacji webowych w <strong>React / TypeScript</strong>.
                                Praca nad UI, wydajnością, strukturą komponentów oraz integracją z API.
                                Projekty własne, portfolio oraz realizacje komercyjne.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="when">2023 → 2024</div>
                        <div>
                            <h4>Rozwój kompetencji programistycznych</h4>
                            <p>
                                Intensywna nauka JavaScript, React i nowoczesnych narzędzi frontendowych.
                                Budowanie projektów demonstracyjnych, praca z Git, REST API i deploymentem.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="when">Wcześniej</div>
                        <div>
                            <h4>Doświadczenie techniczne (środowisko przemysłowe)</h4>
                            <p>
                                Praca w wymagającym środowisku technicznym (automatyzacja, procesy, odpowiedzialność).
                                Umiejętności transferowalne: precyzja, praca pod presją, myślenie procesowe i rozwiązywanie problemów.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
