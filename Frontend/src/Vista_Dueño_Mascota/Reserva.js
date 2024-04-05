import React from 'react';
import { Link } from 'react-router-dom';
import './Reserva.css'; // Importa los estilos CSS

const Reserva = () => {
  return (
    <div className="fondo-reserva" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Reserva</h1>
      <p>Por favor, completa el formulario para hacer tu reserva:</p>
      <form className="reserva-formulario">
        <div className="form-group">
          <label htmlFor="nombre">Fecha:</label>
          <input type="date" id="fecha" name="fecha" />
        </div>
        <div className="form-group">
          <label htmlFor="int">Nº de personas:</label>
          <input type="int" id="npersonas" name="nnpersonas" />
        </div>
        <div className="form-group">
          <label htmlFor="int">Nº de mascotas:</label>
          <input type="int" id="nmascotas" name="nmascotas" />
        </div>
        <button type="submit">Enviar</button>
        <Link to="/duenoMascota">
          <button className="round-button">Volver</button>
        </Link>
      </form>
    </div>
  );
};

export default Reserva;
