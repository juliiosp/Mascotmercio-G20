import React, { useState } from 'react';
import { Link, useRevalidator } from 'react-router-dom';
import './Reserva.css';

const Reserva = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const userId = localStorage.getItem('userId'); // Obtener el ID del usuario

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:8443/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Puedes redirigir a la página principal o a otra página después de enviar el formulario
      // Aquí te redirijo a la página de VistaPrincipal
      window.location.href = '/duenoMascota';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="fondo-reserva" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Reserva tu actividad!</h1>
      <form className="reserva-formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="numpersonas">Nº de personas:</label>
          <input type="text" id="numpersonas" name="numpersonas" value={formData.numpersonas} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="nummascotas">Nº de mascotas:</label>
          <input type="text" id="nummascotas" name="nummascotas" value={formData.nmascotas} onChange={handleChange} required/>
        </div>
        <input type="hidden" id="duenoMascota" name="duenoMascota" value={userId} onChange={handleChange} />
        <button type="submit">Reservar</button>
        <Link to="/duenoMascota">
          <button className="round-button">Volver</button>
        </Link>  
      </form>
    </div>
  );
};

export default Reserva;

