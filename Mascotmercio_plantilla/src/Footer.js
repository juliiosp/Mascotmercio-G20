import React from 'react';
import './Footer.css'; // Importa los estilos CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="logo.png" alt="Logo de la Empresa" />
        </div>
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/login">Inicia Sesión</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Dirección: Calle Guzmán el Bueno, 30, Madrid, España</p>
          <p>Teléfono: 612 539 632</p>
          <p>Email: info@mascotmercio.com</p>
        </div>
        <div className="footer-column">
          <h3>Síguenos en:</h3>
          <ul>
            <li><a href="https://es-es.facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
