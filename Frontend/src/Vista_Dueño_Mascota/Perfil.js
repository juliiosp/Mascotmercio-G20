import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Reserva.css'; 

function MiPerfil() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/duenoMascota/1');
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
