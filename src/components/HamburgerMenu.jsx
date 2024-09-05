// src/HamburgerMenu.js
 
import React, { useState } from 'react';
import './HamburgerMenu.css'; // Import the CSS file
 
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className="hamburger-menu">
      <button className={`hamburger-button `} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#Product">Product</a></li>
          <li><a href="#Solutions">Solutions</a></li>
          <li><a href="#Resources">Resources</a></li>
          <li><a href="#Login">Pricing</a></li>
        </ul>
      </div>
    </div>
  );
};
 

export default HamburgerMenu;
