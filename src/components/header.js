import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="../../../../images/headerLogo.png" alt="Logo" />
                </div>
                <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
                <nav>
                    <ul className={menuOpen ? 'open' : ''}>
                        <li>Projects</li>
                        <li>Expertise</li>
                        <li>About Us</li>
                        <li>People</li>
                        <li>Careers</li>
                        <li>AU</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};
export default Header;

