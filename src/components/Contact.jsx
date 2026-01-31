import { useState } from "react";

export default function Contact() {
    const [showEmail, setShowEmail] = useState(false);
    const [showPhoneWa, setShowPhoneWa] = useState(false);

    async function copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            // bez psucia UI — prosty feedback
            alert("Skopiowano!");
        } catch {
            alert("Nie udało się skopiować.");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        console.log("Form data:", data);
        alert("Wiadomość (demo) zapisana w konsoli. Podłącz EmailJS / backend, aby wysyłać maile.");
        e.currentTarget.reset();
    }

    return (
        <section id="contact">
            <div className="container">
                <div className="section-title">
                    <div>
                        <h2>Kontakt</h2>
                        <p>Napisz, a wrócę z odpowiedzią i wyceną.</p>
                    </div>
                </div>

                <div className="grid2">
                    {/* LEWA KARTA: akcje kontaktowe */}
                    <div className="mini">
                        <div className="contact-actions">
                            <button
                                className="pill"
                                type="button"
                                onClick={() => setShowEmail((v) => !v)}
                                aria-expanded={showEmail ? "true" : "false"}
                                aria-controls="emailReveal"
                            >
                                Email
                            </button>

                            <button
                                className="pill"
                                type="button"
                                onClick={() => setShowPhoneWa((v) => !v)}
                                aria-expanded={showPhoneWa ? "true" : "false"}
                                aria-controls="phoneWaReveal"
                            >
                                Telefon/WhatsApp
                            </button>

                            <a className="pill" href="https://github.com/twojprofil" target="_blank" rel="noopener noreferrer">
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

                            <a className="pill" href="https://m.me/twojprofil" target="_blank" rel="noopener noreferrer">
                                Messenger
                            </a>
                        </div>

                        {/* REVEAL: EMAIL */}
                        <div
                            id="emailReveal"
                            className="revealbox"
                            style={{ display: showEmail ? "flex" : "none" }}
                        >
                            <span>kontakt@dawidgrochowski.dev</span>
                            <button className="copybtn" type="button" onClick={() => copyText("kontakt@dawidgrochowski.dev")}>
                                Kopiuj
                            </button>
                        </div>

                        {/* REVEAL: TELEFON / WHATSAPP */}
                        <div
                            id="phoneWaReveal"
                            className="revealbox"
                            style={{ display: showPhoneWa ? "flex" : "none" }}
                        >
              <span>
                <strong>Telefon:</strong> +48 000 000 000
              </span>
                            <button className="copybtn" type="button" onClick={() => copyText("+48000000000")}>
                                Kopiuj
                            </button>
                        </div>
                    </div>

                    {/* PRAWA KARTA: formularz */}
                    <div className="mini">
                        <h3>Formularz</h3>

                        <form onSubmit={handleSubmit}>
                            <input name="name" placeholder="Imię" required />
                            <input name="email" type="email" placeholder="Email" required />
                            <input name="topic" placeholder="Temat" />
                            <textarea name="message" placeholder="Napisz, co chcesz zbudować…" required />

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
    );
}
