import React from 'react';
import './stylle/_Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__content">
                    <a href="#" className="header__logo">
                        <span className="header__logo-white">Dev</span>Freelancer
                    </a>

                    <button id="mobile-menu-button" className="header__menu-button">
                        <i className="fas fa-bars header__menu-icon"></i>
                    </button>

                    <nav className="header__nav">
                        <a href="#about" className="nav-link">O mnie</a>
                        <a href="#services" className="nav-link">Usługi</a>
                        <a href="#projects" className="nav-link">Projekty</a>
                        <a href="#contact" className="nav-link">Kontakt</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;