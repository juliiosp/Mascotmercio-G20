import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';

//Esto es lo del registro establecimiento

const Reserva = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:8443/api/duenoEstablecimiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      window.location.href = '/login';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="fondo-registro" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Crea tu cuenta!</h1>
      <form className="reserva-formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="text" id="contraseña" name="contraseña" value={formData.contraseña} onChange={handleChange} />
        </div>
        <button type="submit">Crear cuenta</button>
        <Link to="/duenoMascota">
          <button className="round-button">Volver</button>
        </Link>  
      </form>
    </div>
  );
};

export default Reserva;