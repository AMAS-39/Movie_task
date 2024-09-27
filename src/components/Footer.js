// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ theme }) => { // Accept theme prop here
  return (
    <footer className={`footer ${theme}`}> {/* Add theme class */}
      <div className="footer__container">
        <p>&copy; {new Date().getFullYear()} MovieDB. All Rights Reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> | 
          <a href="/terms"> Terms of Service</a> | 
          <a href="/contact"> Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
