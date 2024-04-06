import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/reservas', {
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
          <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="numpersonas">Nº de personas:</label>
          <input type="text" id="numpersonas" name="numpersonas" value={formData.numpersonas} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="nummascotas">Nº de mascotas:</label>
          <input type="text" id="nummascotas" name="nummascotas" value={formData.nmascotas} onChange={handleChange} />
        </div>
        <button type="submit">Subir</button>
        <Link to="/duenoMascota">
          <button className="round-button">Volver</button>
        </Link>  
      </form>
    </div>
  );
};

export default Reserva;

