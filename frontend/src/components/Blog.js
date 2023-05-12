import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            MyLogo
          </a>
  
          <div className={showMenu ? 'navbar-menu active' : 'navbar-menu'}>
            <a href="/" className="navbar-menu-item">
              Home
            </a>
            <a href="/about" className="navbar-menu-item">
              About
            </a>
            <a href="/contact" className="navbar-menu-item">
              Contact
            </a>
          </div>
  
          <div className="navbar-toggle" onClick={toggleMenu}>
            <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>
    );
}

export default Blog



