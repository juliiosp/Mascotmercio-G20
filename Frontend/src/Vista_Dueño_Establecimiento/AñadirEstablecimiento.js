import React from 'react';
import { Link } from 'react-router-dom';
import './Añadir.css'; // Importa los estilos CSS

const Añadir = () => {
  return (
    <div className="fondo-añadir" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Añade tu establecimiento!</h1>
      <form className="añadir-formulario">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="int">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Dirección:</label>
          <input type="text" id="direccion" name="direccion" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="text" id="email" name="email" />
        </div>
        <button type="submit">Subir</button>
        <Link to="/usuario2">
          <button className="round-button">Volver</button>
        </Link>  
      </form>
    </div>
  );
};

export default Añadir;
