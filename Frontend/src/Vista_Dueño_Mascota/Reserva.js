import React, { useState, useEffect } from 'react';
import { Link, useRevalidator } from 'react-router-dom';
import './Reserva.css';

const Reserva = () => {
  const [formData, setFormData] = useState({
    fecha: '',
    numpersonas: '',
    nummascotas: '',
    establecimientoId: '',
    duenoMascotaId: ''
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Obtener el ID del usuario del localStorage
    console.log('UserID:', userId); // Imprimir el valor de userID en la consola
    setFormData(prevFormData => ({ ...prevFormData, duenoMascotaId: userId })); // Asignar el ID del usuario al campo duenoEstablecimiento
  }, []); // Ejecutar solo una vez al cargar el componente

  useEffect(() => {
    const establecimientoId = localStorage.getItem('establecimientoId'); // Obtener el ID del establecimiento
    console.log('EstID:', establecimientoId); // Imprimir el valor de userID en la consola
    setFormData(prevFormData => ({ ...prevFormData, establecimientoId: establecimientoId })); // Asignar el ID del usuario al campo duenoEstablecimiento
  }, []); // Ejecutar solo una vez al cargar el componente

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          <input type="text" id="nummascotas" name="nummascotas" value={formData.nummascotas} onChange={handleChange} required/>
        </div>
        <input type="hidden" id="duenoMascotaId" name="duenoMascotaId" value={formData.duenoMascotaId} onChange={handleChange} required/>
        <input type="hidden" id="EstablecimientoId" name="EstablecimientoId" value={formData.establecimientoId} onChange={handleChange} required/>
        <button type="submit">Reservar</button>
        <Link to="/duenoMascota">
          <button className="round-button">Volver</button>
        </Link>  
      </form>
    </div>
  );
};

export default Reserva;

