import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Importa los estilos CSS

const Login = () => {
  return (
    <div className="container">
      <Link to="/registro" className="register-button">Registrarse</Link>
      <h1>Inicia Sesión</h1>
      <form>
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
        <button type="button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
