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
      const responseMascota = fetch(`https://localhost:8443/api/duenoMascota?email=${email}&password=${password}`);
      const responseEstablecimiento = fetch(`https://localhost:8443/api/duenoEstablecimiento?email=${email}&password=${password}`);
  
      const responses = await Promise.all([responseMascota, responseEstablecimiento]);
  
      const dataMascota = await responses[0].json();
      const dataEstablecimiento = await responses[1].json();
  
      const userMascota = dataMascota.find(user => user.email === email);
      const userEstablecimiento = dataEstablecimiento.find(user => user.email === email);
  
      if (userMascota || userEstablecimiento) {
        const userId = userMascota ? userMascota.id : userEstablecimiento.id;
        localStorage.setItem('userId', userId);
        //esto de abajo borrarlo! solo para pruebas
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
