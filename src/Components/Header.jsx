import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming react-router-dom for navigation

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation(); // Get current path

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Close menu when route changes
  useEffect(() => {
    setMenuActive(false);
  }, [location.pathname]);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">DHANWANTARI ACADEMY FOR MANAGEMENT STUDIES</div>

          {/* Hamburger Menu Button */}
           <button 
              className={`menu-toggle ${menuActive ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </button>


          {/* Navigation Menu */}
          <nav>
            <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setMenuActive(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuActive(false)}>About</Link></li>
              <li><Link to="/events" onClick={() => setMenuActive(false)}>Events</Link></li>
              <li><Link to="/contact" onClick={() => setMenuActive(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;