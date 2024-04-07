import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Estamos en:</h3>
          <p>Dirección: Calle Guzmán el Bueno, 30, Madrid, España</p>
          <p>Horario: Lunes a Viernes de 9:00 a 15:00</p>
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
      <div className="footer-bottom">
        <p>&copy; 2024 Mascotmercio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
