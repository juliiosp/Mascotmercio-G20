import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Reserva.css'; 

function MiPerfil() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Obtener el ID del usuario
        const response = await fetch(`https://localhost:8443/api/duenoMascota/${userId}`); // Usar el ID del usuario
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPerfil(data);
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
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Nombre</td>
                <td style={{ fontSize: '1.5em' }}>{perfil && perfil.nombre}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Dirección</td>
                <td style={{ fontSize: '1.5em' }}>{perfil && perfil.direccion}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Correo Electrónico</td>
                <td style={{ fontSize: '1.5em' }}>{perfil && perfil.email}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Teléfono</td>
                <td style={{ fontSize: '1.5em' }}>{perfil && perfil.telefono}</td>
              </tr>
            </tbody>
          </table>
    <div className="botones-vistaprincipal">
    <Link to="/duenoMascota">
    <button className="round-button">Volver</button>
    </Link>
    <Link to="/editarPerfil">
    <button className="round-button">Editar</button>
    </Link>
    </div>
      </div>
      
      
      </div>
    </div>
  );
}

export default MiPerfil;
