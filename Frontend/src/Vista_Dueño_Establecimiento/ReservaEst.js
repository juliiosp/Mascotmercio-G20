import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Reserva.css';

function MisReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const establecimientoId = localStorage.getItem('establecimientoId'); // Obtener el ID del establecimiento
        const response = await fetch(`https://localhost:8443/api/reservas/establecimiento/${establecimientoId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fondo-vistaprincipal" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <div className="botones-vistaprincipal">
        <Link to="/duenoEstablecimiento">
          <button className="round-button">Volver</button>
        </Link>
      </div>
      <div className="card-cont">
        {reservas.map((reserva, index) => (
          <div className="container" key={index} >
            <div className="card">
              <div className="text">
                <p><span style={{ fontWeight: 'bold' }}>Fecha:</span> {reserva.fecha}</p>
                <p><span style={{ fontWeight: 'bold' }}>Nº Personas:</span> {reserva.numpersonas}</p>
                <p><span style={{ fontWeight: 'bold' }}>Nº Mascotas:</span> {reserva.nummascotas}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisReservas;
