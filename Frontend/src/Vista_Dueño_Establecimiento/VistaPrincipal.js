import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './VistaPrincipal.css';

function VistaPrincipal() {
  const [establecimientos, setEstablecimientos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/establecimientos');
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

  const cardFooter = (
    <div className="botones-card">
      <Link to="/anadirAct">
        <button className="round-button-card">Añadir Actividad</button>
      </Link>
      <Link to="/actividades">
        <button className="round-button-card">Actividades</button>
      </Link>
      <Link to="/reservasEst">
        <button className="round-button-card">Reservas</button>
      </Link>
      <Link to="/reservasEst">
        <button className="round-button-card">Editar</button>
      </Link>
    </div>
  );

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
              {cardFooter}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VistaPrincipal;
