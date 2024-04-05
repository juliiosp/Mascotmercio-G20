import React from 'react';
import { Link } from 'react-router-dom';

import './VistaPrincipal.css'; 

function VistaPrincipal() {
  return (
    <div className="fondo-vistaprincipal" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
    <div className="botones-vistaprincipal">
    <Link to="/anadirEst">
    <button className="round-button">Añadir Establecimiento</button>
    </Link>
    <Link to="/anadirAct">
    <button className="round-button">Añadir Actividad</button>
    </Link>
    <Link to="/login">
    <button className="round-button">Editar</button>
    </Link>
    <Link to="/inicio">
    <button className="round-button">LogOut</button>
    </Link>
    </div>
    <div className="table-wrapper">
      <div className="table-container">
        <table className="tabla">
          <tbody>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Nombre</td>
            <td style={{ fontSize: '1.5em' }}>UPM</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Teléfono</td>
            <td style={{ fontSize: '1.5em' }}>123 456 789</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Correo Electrónico</td>
            <td style={{ fontSize: '1.5em' }}>mascotmercio@upm.es</td>
            </tr>
            <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Dirección</td>
            <td style={{ fontSize: '1.5em' }}>Avenida Complutense, 30</td>
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
