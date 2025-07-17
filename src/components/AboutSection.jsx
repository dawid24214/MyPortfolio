import React, { useEffect, useRef } from 'react';
import '../stylle/_aboutsection.scss';

const AboutSection = () => {
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
        handleScroll(); // initial run

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title fade-in" ref={(el) => (fadeRefs.current[0] = el)}>
                    <span className="highlight">O</span> mnie
                </h2>

                <div className="about-content">
                    <div className="profile-photo fade-in" ref={(el) => (fadeRefs.current[1] = el)}>
                        <div className="photo-glow"></div>
                        <img src="/public/g.jpg" alt="Zdjęcie profilowe" className="photo-img" />
                    </div>

                    <div className="about-text fade-in" ref={(el) => (fadeRefs.current[2] = el)}>
                        <h3 className="intro">
                            Cześć, jestem <span className="highlight">Dawid Grochowski</span>
                        </h3>
                        <p className="paragraph">
                            Jestem freelancerem zajmującym się tworzeniem nowoczesnych stron internetowych. Od ponad dwóch lat pomagam firmom i osobom prywatnym zaistnieć w sieci – projektuję estetyczne, funkcjonalne i dopasowane do potrzeb użytkowników strony, które świetnie prezentują się zarówno na komputerze, jak i na telefonie.
                            <br />Moja praca to połączenie kreatywności z technologią:
                            <br /><span className="tech">HTML5</span> – szkielet strony.
                            <br /><span className="tech">CSS3</span> – wygląd i styl.
                            <br /><span className="tech">JavaScript</span> – interaktywność.
                            <br /><span className="tech">React</span> – zaawansowane interfejsy.
                            <br /><span className="tech">Next.js</span> – szybkie i SEO-friendly strony.
                            <br /><span className="tech">RWD</span> – pełna responsywność.
                            <br /><br />
                            Jeśli chcesz stworzyć stronę, która będzie Twoją wizytówką – chętnie pomogę!
                        </p>

                        <p className="paragraph">
                            Moją pasją jest łączenie designu z technologią, tworząc produkty, które nie tylko wyglądają świetnie, ale też działają bezproblemowo na każdym urządzeniu.
                        </p>

                        <div className="tech-list">
                            <div className="tech-item">
                                <i className="fas fa-code icon"></i>
                                <span>HTML5, CSS3, JavaScript</span>
                            </div>
                            <div className="tech-item">
                                <i className="fab fa-react icon"></i>
                                <span>React, Next.js</span>
                            </div>
                            <div className="tech-item">
                                <i className="fas fa-mobile-alt icon"></i>
                                <span>RWD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
