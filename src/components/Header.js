// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${theme}`}> {/* Add theme class */}
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb Logo" />
          </Link>
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search for movies, TV shows..." />
        </div>
        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/tv-shows">TV Shows</Link></li>
          </ul>
        </nav>
        <button className="hamburger" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;
