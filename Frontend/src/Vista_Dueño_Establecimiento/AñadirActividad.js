import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Añadir.css';

const AñadirActividad = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '', // Propiedad añadida
    disponibilidad: '', // Propiedad añadida
    precio: '',
    establecimientoId: '', // Propiedad añadida
  });

  useEffect(() => {
    const id = localStorage.getItem('establecimientoSeleccionadoId');
    console.log('UserID:', id); // Imprimir el valor de userID en la consola
    setFormData(prevFormData => ({ ...prevFormData, establecimientoId: id })); // Asignar el ID del usuario al campo duenoEstablecimiento
  }, []); // Ejecutar solo una vez al cargar el componente

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:8443/api/actividades', {
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
      window.location.href = '/duenoEstablecimiento';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="fondo-añadir" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Añade tu actividad!</h1>
      <form className="añadir-formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <input type="text" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="disponibilidad">Disponibilidad:</label>
          <input type="text" id="disponibilidad" name="disponibilidad" value={formData.disponibilidad} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input type="text" id="precio" name="precio" value={formData.precio} onChange={handleChange} required/>
        </div>
        <input type="" id="establecimientoId" name="establecimientoId" value={formData.establecimientoId} onChange={handleChange} required/>
        <button type="submit">Subir</button>
        <Link to="/duenoEstablecimiento">
          <button className="round-button">Volver</button>
        </Link>  
      </form>
    </div>
  );
};

export default AñadirActividad;
