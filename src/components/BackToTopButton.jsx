import React, { useEffect, useState } from 'react';
import '../stylle/_backToTopButton.scss';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = () => {
        setIsVisible(window.pageYOffset > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <button
            id="back-to-top"
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Powrót do góry"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default BackToTopButton;
