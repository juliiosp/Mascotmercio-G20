import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Detalle.css'; 

function Detalle() {

  const [establecimiento, setEstablecimiento] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/establecimientos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEstablecimiento(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [actividad, setActividad] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/actividades/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setActividad(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fondo-detalle" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
    <div className="botones-vistaprincipal">
    <Link to="/reserva">
    <button className="round-button">Reservar</button>
    </Link>
    <Link to="/duenoMascota">
    <button className="round-button">Volver</button>
    </Link>
    </div>
    <div className="table-wrapper">
      <div className="horizontal-tables">
      <table className="tabla">
      <caption className='titulotabla'>Establecimiento</caption>
        <tbody>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Nombre</td>
            <td style={{ fontSize: '1.2em' }}>{establecimiento && establecimiento.nombre}</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Teléfono</td>
            <td style={{ fontSize: '1.2em' }}>{establecimiento && establecimiento.telefono}</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Correo Electrónico</td>
            <td style={{ fontSize: '1.2em' }}>{establecimiento && establecimiento.email}</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Dirección</td>
            <td style={{ fontSize: '1.2em' }}>{establecimiento && establecimiento.direccion}</td>
            </tr>
          </tbody>
        </table>
        <table className="tabla">
        <caption className='titulotabla'>Actividades</caption>
        <tbody>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Nombre</td>
            <td style={{ fontSize: '1.2em' }}>{actividad && actividad.nombre}</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Descripción</td>
            <td style={{ fontSize: '1.2em' }}>{actividad && actividad.descripcion}</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Disponibilidad</td>
            <td style={{ fontSize: '1.2em' }}>{actividad && actividad.disponibilidad}</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Precio</td>
            <td style={{ fontSize: '1.2em' }}>{actividad && actividad.precio}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default Detalle;
