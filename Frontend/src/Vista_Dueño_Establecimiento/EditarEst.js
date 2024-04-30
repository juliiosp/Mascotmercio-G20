import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './EditarPerfilEst.css'; 

function EditarEst() {
  const [establecimiento, setEstablecimientos] = useState(null);
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const fetchId = async () => {
      try {
        // Realizar una solicitud para obtener el ID
        const response = await fetch('https://localhost:8443/api/establecimientos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setId(data.id); // Actualizar el ID en el estado local
      } catch (error) {
        console.error('Error fetching ID:', error);
      }
    };

    fetchId();
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

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:8443/api/establecimientos/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, telefono, direccion}),
      });

      if (!response.ok) {
        throw new Error('Error updating profile');
      }

      // Redirigir a la página de perfil después de la actualización
      window.location.href = '/duenoEstablecimiento';
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="fondo-reserva" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Editar Establecimiento</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" value={telefono} onChange={handleTelefonoChange} />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" value={direccion} onChange={handleDireccionChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
      <div className="botones-vistaprincipal">
        <Link to="/duenoEstablecimiento">
          <button className="round-button">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default EditarEst;

