import React, { useEffect, useRef } from 'react';
import '../stylle/_herosection.scss'


const HeroSection = () => {
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
        handleScroll(); // initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero-section">
            <div className="container">
                <div className="content-wrapper">
                    <div className="left-column fade-in" ref={(el) => (fadeRefs.current[0] = el)}>
                        <h1>
                            <span className="highlight">Tworzę</span> nowoczesne strony internetowe
                        </h1>
                        <p>
                            Projektuję i buduję responsywne strony internetowe, które przyciągają uwagę i zwiększają konwersję.
                        </p>
                        <div className="button-group">
                            <a href="#contact" className="btn-primary">Skontaktuj się</a>
                            <a href="#projects" className="btn-outline">Zobacz projekty</a>
                        </div>
                    </div>
                    <div className="right-column fade-in" ref={(el) => (fadeRefs.current[1] = el)}>
                        <div className="image-wrapper">
                            <div className="image-blur-bg"></div>
                            <img
                                src="/public/g.jpg"
                                alt="Programista przy pracy"
                                className="main-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
