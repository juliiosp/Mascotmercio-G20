import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Importa los estilos CSS
//Podemos poner el fondo en blanco y el menú mantenerlo en negro. 
const Login = () => {
  return (
    <div className="fondo-login" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
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
        <button className="iniciar" type="button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
