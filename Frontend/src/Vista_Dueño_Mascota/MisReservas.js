import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Reserva.css'; 

function MisReservas() {
  const [reservas, setReservas] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Aqui debería ser el userId del usuario logueado o el id de la reserva?¿? @juliiosp
        const userId = localStorage.getItem('userId'); // Obtener el ID del usuario
        const response = await fetch(`https://localhost:8443/api/reservas/${userId}`);
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
    <div className="fondo-reserva" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
    <div className="table-wrapper">
      <div className="table-container">
        <table className="tabla">
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Fecha</td>
                <td style={{ fontSize: '1.5em' }}>{reservas && reservas.fecha}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Nº Personas</td>
                <td style={{ fontSize: '1.5em' }}>{reservas && reservas.numpersonas}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Nº Mascotas</td>
                <td style={{ fontSize: '1.5em' }}>{reservas && reservas.nummascotas}</td>
              </tr>
            </tbody>
          </table>
    <div className="botones-vistaprincipal">
    <Link to="/duenoMascota">
    <button className="round-button">Volver</button>
    </Link>
    </div>
      </div>
      
      
      </div>
    </div>
  );
}

export default MisReservas;
