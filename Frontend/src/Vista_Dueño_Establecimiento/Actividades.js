import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Actividades.css';

function Actividades() {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:8443/api/actividades');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setActividades(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fondo-actividades" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <div className="botones-vistaprincipal">
        <Link to="/duenoEstablecimiento">
          <button className="round-button">Volver</button>
        </Link>
      </div>
      <div className="card-cont">
        {actividades.map((actividad, index) => (
          <div className="container" key={index} >
            <div className="card">
              <div className="text">
              <p><span style={{ fontWeight: 'bold' }}>Nombre:</span> {actividad.nombre}</p>
              <p><span style={{ fontWeight: 'bold' }}>Descripción:</span> {actividad.descripcion}</p>
              <p><span style={{ fontWeight: 'bold' }}>Disponibilidad:</span> {actividad.disponibilidad}</p>
              <p><span style={{ fontWeight: 'bold' }}>Precio:</span> {actividad.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actividades;
