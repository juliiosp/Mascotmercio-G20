import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './VistaPrincipal.css';

function VistaPrincipal() {
  const [establecimientos, setEstablecimientos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Obtener el ID del usuario
        const response = await fetch(`https://localhost:8443/api/establecimientos/dueno/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEstablecimientos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleActividadesClick = (id) => {
    localStorage.setItem('establecimientoId', id);
    console.log('Establecimiento ID guardado:', id); // Log the saved id
  };

  return (
    <div className="fondo-vistaprincipal" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <div className="botones-vistaprincipal">
        <Link to="/anadirEst">
          <button className="round-button">Añadir Establecimiento</button>
        </Link>
        <Link to="/perfilEst">
          <button className="round-button">Mi Perfil</button>
        </Link>
        <Link to="/">
          <button className="round-button">LogOut</button>
        </Link>
      </div>
      <div className="card-cont">
        {establecimientos.map((establecimiento, index) => (
          <div className="container" key={index} >
            <div className="card">
              <div className="text">
              <p><span style={{ fontWeight: 'bold' }}>Nombre:</span> {establecimiento.nombre}</p>
              <p><span style={{ fontWeight: 'bold' }}>Teléfono:</span> {establecimiento.telefono}</p>
              <p><span style={{ fontWeight: 'bold' }}>Dirección:</span> {establecimiento.direccion}</p>
              <p><span style={{ fontWeight: 'bold' }}>Correo Electrónico:</span> {establecimiento.email}</p>
              </div>
              <div className="botones-card">
                <Link to="/anadirAct">
                  <button className="round-button-card">Añadir Actividad</button>
                </Link>
                <Link to="/actividades">
                  <button className="round-button-card" onClick={() => handleActividadesClick(establecimiento.id)}>Actividades</button>
                </Link>
                <Link to="/reservasEst">
                  <button className="round-button-card">Reservas</button>
                </Link>
                <Link to="/editarEst">
                  <button className="round-button-card">Editar</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VistaPrincipal;