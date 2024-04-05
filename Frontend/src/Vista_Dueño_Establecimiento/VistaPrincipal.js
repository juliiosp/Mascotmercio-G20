import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './VistaPrincipal.css'; 

function VistaPrincipal() {
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
    <div className="fondo-vistaprincipal" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
    <div className="botones-vistaprincipal">
    <Link to="/anadirEst">
    <button className="round-button">Añadir Establecimiento</button>
    </Link>
    <Link to="/anadirAct">
    <button className="round-button">Añadir Actividad</button>
    </Link>
    <Link to="/editar">
    <button className="round-button">Editar</button>
    </Link>
    <Link to="/">
    <button className="round-button">LogOut</button>
    </Link>
    </div>
    <div className="table-wrapper">
      <div className="table-container">
        <table className="tabla">
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
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Dirección</td>
                <td style={{ fontSize: '1.5em' }}>Avenida Complutense, 30</td> {/* No está incluida en la respuesta del backend */}
              </tr>
            </tbody>
          </table>
      </div>
      <div className="horizontal-tables">
      <table className="tabla2">
      <caption className='titulotabla'>Establecimiento</caption>
        <tbody>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Nombre</td>
            <td style={{ fontSize: '1.2em' }}>UPM</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Teléfono</td>
            <td style={{ fontSize: '1.2em' }}>123 456 789</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Correo Electrónico</td>
            <td style={{ fontSize: '1.2em' }}>mascotmercio@upm.es</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Dirección</td>
            <td style={{ fontSize: '1.2em' }}>Avenida Complutense, 30</td>
            </tr>
          </tbody>
        </table>
        <table className="tabla2">
        <caption className='titulotabla'>Actividades</caption>
        <tbody>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Nombre</td>
            <td style={{ fontSize: '1.2em' }}>Actividad</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Descripción</td>
            <td style={{ fontSize: '1.2em' }}>blablabla</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Disponibilidad</td>
            <td style={{ fontSize: '1.2em' }}>04/12/2024</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Precio</td>
            <td style={{ fontSize: '1.2em' }}>5€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default VistaPrincipal;
