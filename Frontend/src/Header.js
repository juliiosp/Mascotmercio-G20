import React from 'react';
import './Header.css'; // Importa el archivo CSS

const NavigationBar = () => {
  return (
    <div className="navbar">
      <img src={"logo.png"} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="/" className="nav-link">Inicio</a>
          </li>
          <li>
            <a href="/acerca" className="nav-link">Acerca de</a>
          </li>
          <li>
            <a href="/contacto" className="nav-link">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
