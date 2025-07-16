import React, { useEffect, useRef } from 'react';
import '../stylle/_sevicessection.scss';

const ServicesSection = () => {
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
        handleScroll(); // initial

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title fade-in" ref={(el) => (fadeRefs.current[0] = el)}>
                    Moje <span className="highlight">usługi</span>
                </h2>

                <div className="services-grid">
                    {/* Service 1 */}
                    <div className="service-card fade-in" ref={(el) => (fadeRefs.current[1] = el)}>
                        <div className="icon-wrapper">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3 className="service-title">Tworzenie stron WWW</h3>
                        <p className="service-desc">
                            Projektuję i implementuję nowoczesne strony internetowe dostosowane do Twoich potrzeb.
                            Każda strona jest tworzona indywidualnie z dbałością o szczegóły.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="service-card fade-in" ref={(el) => (fadeRefs.current[2] = el)} style={{ transitionDelay: '0.2s' }}>
                        <div className="icon-wrapper">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h3 className="service-title">Responsywny design</h3>
                        <p className="service-desc">
                            Twoja strona będzie doskonale wyglądać na każdym urządzeniu - od smartfonów po duże ekrany komputerowe.
                            Responsywność to standard, nie dodatkowa funkcja.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="service-card fade-in" ref={(el) => (fadeRefs.current[3] = el)} style={{ transitionDelay: '0.4s' }}>
                        <div className="icon-wrapper">
                            <i className="fas fa-tachometer-alt"></i>
                        </div>
                        <h3 className="service-title">Optymalizacja wydajności</h3>
                        <p className="service-desc">
                            Dbam o szybkość ładowania strony, co wpływa na doświadczenia użytkowników i pozycjonowanie w wyszukiwarkach.
                            Każda sekunda ma znaczenie!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
