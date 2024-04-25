import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './EditarPerfilEst.css'; 

function EditarPerfil() {
  const [perfil, setPerfil] = useState(null);
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Obtener el ID del usuario
        const response = await fetch(`https://localhost:8443/api/duenoEstablecimiento/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPerfil(data);
        setNombre(data.nombre);
        setEmail(data.email);
        setTelefono(data.telefono);
        setContraseña(data.contraseña);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId'); // Obtener el ID del usuario
      const response = await fetch(`https://localhost:8443/api/duenoEstablecimiento/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, telefono, contraseña }),
      });

      if (!response.ok) {
        throw new Error('Error updating profile');
      }

      // Redirigir a la página de perfil después de la actualización
      window.location.href = '/perfilEst';
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="fondo-reserva" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Editar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" value={telefono} onChange={handleTelefonoChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Contraseña:</label>
          <input type="password" id="password" value={contraseña} onChange={handleContraseñaChange} />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
      <div className="botones-vistaprincipal">
        <Link to="/perfilEst">
          <button className="round-button">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default EditarPerfil;

