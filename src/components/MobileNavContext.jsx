import React, { createContext, useState } from 'react';

export const MobileNavContext = createContext();

export const MobileNavProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <MobileNavContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
            {children}
        </MobileNavContext.Provider>
    );
};
