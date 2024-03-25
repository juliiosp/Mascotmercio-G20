import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="assets/images/logo.png" alt="Logo de la Empresa" />
        </div>
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Dirección: [Dirección]</p>
          <p>Teléfono: [Teléfono]</p>
          <p>Email: [Email]</p>
        </div>
        <div className="footer-column">
          <h3>Síguenos</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
