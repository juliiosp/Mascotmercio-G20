import React from 'react';
import { Link } from 'react-router-dom';
import './Registro.css'; // Importa los estilos CSS

const Registro = () => {
  return (
    <div className="container" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <Link to="/login" className="login-link">Volver</Link>
      <h1>Crea tu cuenta</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Dirección:</label>
          <input
            type="text"
            id="direccion"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Telefono:</label>
          <input
            type="text"
            id="telefono"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            required
          />
        </div>
        <button type="button">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
