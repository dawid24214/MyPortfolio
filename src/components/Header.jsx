import React ,{useState} from 'react';
import '../stylle/_Header.scss';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__content">
                    <a href="#home" className="header__logo" onClick={closeMenu}>
                        <span className="header__logo-white">Dawid</span>Grochowski
                    </a>

                    <button
                        id="mobile-menu-button"
                        className="header__menu-button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} header__menu-icon`}></i>
                    </button>

                    <nav className={`header__nav ${menuOpen ? 'active' : ''}`}>
                        <a href="#about" className="nav-link" onClick={closeMenu}>O mnie</a>
                        <a href="#services" className="nav-link" onClick={closeMenu}>Usługi</a>
                        <a href="#projects" className="nav-link" onClick={closeMenu}>Projekty</a>
                        <a href="#contact" className="nav-link" onClick={closeMenu}>Kontakt</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
