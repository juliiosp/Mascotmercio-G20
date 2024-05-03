import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Ingrese una dirección de correo electrónico válida.');
      return;
    }

    try {
      const responseMascota = await fetch(`https://localhost:8443/api/duenoMascota?email=${encodeURIComponent(email)}`);
      const responseEstablecimiento = await fetch(`https://localhost:8443/api/duenoEstablecimiento?email=${encodeURIComponent(email)}`);

      if (!responseMascota.ok || !responseEstablecimiento.ok) {
        throw new Error('Error al obtener los datos del usuario.');
      }

      const dataMascota = await responseMascota.json();
      const dataEstablecimiento = await responseEstablecimiento.json();
  
      const userMascota = dataMascota.find(user => user.email === email && user.contraseña === password);
      const userEstablecimiento = dataEstablecimiento.find(user => user.email === email && user.contraseña === password);
  
      if (userMascota || userEstablecimiento) {
        const userId = userMascota ? userMascota.id : userEstablecimiento.id;
        localStorage.setItem('userId', userId);
        navigate(userMascota ? '/duenoMascota' : '/duenoEstablecimiento');
      } else {
        throw new Error('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="fondo-login" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <div className="right-corner-buttons">
        <Link to="/registroDuenoMasc">
          <button className="round-button" >Registro Dueño mascota</button>
        </Link>
        <Link to="/registroDuenoEst">
          <button className="round-button">Registro Dueño establecimiento</button>
        </Link>
      </div>
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
