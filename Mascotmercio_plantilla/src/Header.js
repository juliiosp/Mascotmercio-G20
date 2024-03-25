import React from 'react';
import './Header.css'; // Importa el archivo CSS

const NavigationBar = () => {
  return (
    <div className="navbar">
      <img src={"logo.png"} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/about" className="nav-link">About</a>
          </li>
          <li>
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
