import React from 'react';
import './Contacto.css'; // Importa los estilos CSS

const Contacto = () => {
  return (
    <div className="contacto" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Contacto</h1>
      <p>Por favor, completa el formulario a continuación para ponerte en contacto con nosotros:</p>
      <form className="contacto-formulario">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
