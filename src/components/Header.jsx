import React ,{useState} from 'react';
import '../stylle/_Header.scss';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#" className="brand">
                        <span className="brand-white">DGrochowski</span>_BudowaStron
                    </a>

                    <button
                        id="mobile-menu-button"
                        className="menu-button"
                        onClick={toggleMobileMenu}
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <nav className="desktop-menu">
                        <a href="#about" className="nav-link">O mnie</a>
                        <a href="#services" className="nav-link">Usługi</a>
                        <a href="#projects" className="nav-link">Projekty</a>
                        <a href="#contact" className="nav-link">Kontakt</a>
                    </nav>
                </div>

                {menuOpen && (
                    <div id="mobile-menu" className="mobile-menu">
                        <a href="#about" className="mobile-link">O mnie</a>
                        <a href="#services" className="mobile-link">Usługi</a>
                        <a href="#projects" className="mobile-link">Projekty</a>
                        <a href="#contact" className="mobile-link">Kontakt</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
