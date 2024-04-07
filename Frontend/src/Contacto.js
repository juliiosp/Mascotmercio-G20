import React from 'react';
import './Contacto.css'; // Importa los estilos CSS

const Contacto = () => {
  return (
    <div className="fondo-contacto" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <div className="contacto-info">
        <h1>Contacto</h1>
        <p>¡Estamos encantados de escucharte! Si tienes alguna pregunta o comentario, no dudes en contactarnos.</p>
        <div className="info">
          <p><strong>Dirección:</strong>  Calle Guzmán el Bueno, 30, Madrid, España</p>
          <p><strong>Teléfono:</strong> +34 612 482 947</p>
          <p><strong>Correo Electrónico:</strong> info@mascotmercio.com</p>
          <p><strong>Horario:</strong> Lunes a Viernes: 9:00 - 15:00</p>
        </div>
        <div className="redes-sociales">
          <p>Síguenos en nuestras redes sociales:</p>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mapa">
        <iframe
          title="Mapa de la empresa"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7619.040606345446!2d-3.7147220208223297!3d40.438243425042905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289b111a60b7%3A0xf2f8d8aeb50e3e6d!2sCalle%20de%20Guzm%C3%A1n%20el%20Bueno%2C%2030%2C%2028015%20Madrid!5e0!3m2!1sen!2ses!4v1649357849716!5m2!1sen!2ses"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
