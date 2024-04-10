import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud de inicio de sesión');
      }

      // Indicar al componente padre que el usuario está autenticado
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="fondo-login" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <Link to="/registro" className="register-button">Registrarse</Link>
      <h1>Inicia Sesión</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="iniciar" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
