import React, { useEffect, useRef } from 'react';
import '../stylle/_Contact_Section.scss';

const ContactSection = () => {
    const fadeRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            fadeRefs.current.forEach((el) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title fade-in" ref={(el) => (fadeRefs.current[0] = el)}>
                    <span className="highlight">Skontaktuj</span> się
                </h2>

                <div className="contact-grid">
                    <div className="contact-info fade-in" ref={(el) => (fadeRefs.current[1] = el)}>
                        <h3 className="subtitle">Napisz do mnie</h3>
                        <p className="paragraph">
                            Masz pytanie lub chcesz omówić swój projekt? Wypełnij formularz, a odpowiem tak szybko, jak to możliwe.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope icon"></i>
                                <span>groszek96@groszekdeveloper.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone-alt icon"></i>
                                <span>+48 516 459 508</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt icon"></i>
                                <span>Cybinka, Polska</span>
                            </div>
                        </div>

                        <div className="social-section">
                            <h4 className="social-title">Znajdź mnie w social media</h4>
                            <div className="social-icons">
                                <a href="https://github.com/dawid24214" className="social-link">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/dawid-grochowski-3a0264322/" className="social-link">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61565338720044" className="social-link">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper fade-in" ref={(el) => (fadeRefs.current[2] = el)}>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Imię i nazwisko</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Adres e-mail</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Wiadomość</label>
                                <textarea id="message" rows="5" />
                            </div>
                            <button type="submit" className="submit-btn">
                                Wyślij wiadomość
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
