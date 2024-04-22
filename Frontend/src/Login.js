import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }
  
    try {
      // Realiza las solicitudes al servidor para comprobar las credenciales
      const responseMascota = await fetch(`https://localhost:8443/api/duenoMascota?email=${email}`);
      const responseEstablecimiento = await fetch(`https://localhost:8443/api/duenoEstablecimiento?email=${email}`);
  
      // Convierte las respuestas a formato JSON
      const dataMascota = await responseMascota.json();
      const dataEstablecimiento = await responseEstablecimiento.json();
  
      // Verifica si el usuario es encontrado en alguna de las respuestas y si la contraseña coincide
      const userMascota = dataMascota.find(user => user.email === email && user.contraseña === password);
      const userEstablecimiento = dataEstablecimiento.find(user => user.email === email && user.contraseña === password);
  
      // Si se encuentra al menos un usuario con la contraseña correcta, procede con la autenticación
      if (userMascota || userEstablecimiento) {
        const userId = userMascota ? userMascota.id : userEstablecimiento.id;
        localStorage.setItem('userId', userId);
        console.log(`ID del usuario guardado en el almacenamiento local: ${userId}`);
        // Navega a la ruta correspondiente dependiendo del tipo de usuario
        navigate(userMascota ? '/duenoMascota' : '/duenoEstablecimiento');
      } else {
        throw new Error('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      setError(error.message);
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
