import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PerfilEst.css';

function PerfilEst() {
  const [duenoEstablecimiento, setDuenoEstablecimiento] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/duenoEstablecimiento/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDuenoEstablecimiento(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fondo-perfil" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <div className="botones-perfil">
        <Link to="/editarPerfilEst">
          <button className="round-button">Editar</button>
        </Link>
        <Link to="/duenoEstablecimiento">
          <button className="round-button">Volver</button>
        </Link>
      </div>
      <div className="table-wrapper">
        <div className="table-container">
          <table className="tabla">
            <caption className='titulotabla'>Perfil</caption>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Nombre</td>
                <td style={{ fontSize: '1.5em' }}>{duenoEstablecimiento && duenoEstablecimiento.nombre}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Teléfono</td>
                <td style={{ fontSize: '1.5em' }}>{duenoEstablecimiento && duenoEstablecimiento.telefono}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Correo Electrónico</td>
                <td style={{ fontSize: '1.5em' }}>{duenoEstablecimiento && duenoEstablecimiento.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PerfilEst;
