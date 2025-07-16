import React from 'react';
import '../stylle/_footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-logo">
                        <a href="#" className="brand-link">
                            <span className="brand-white">DGrochowski</span>_BudowaStron
                        </a>
                    </div>

                    <div className="footer-socials">
                        <a
                            href="https://github.com/dawid24214"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dawid-grochowski-3a0264322/"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61565338720044"
                            className="social-link"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>

                    <div className="footer-copy">
                        &copy; 2025 DawidGrochowski. Wszystkie prawa zastrzeżone. Strona wykonana przez Dawida Grochowskiego.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
