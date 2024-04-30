import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Añadir.css'; // Importa los estilos CSS

const Añadir = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
    duenoEstablecimiento: '', // Agrega duenoEstablecimiento al estado inicial
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Obtener el ID del usuario del localStorage
    console.log('UserID:', userId); // Imprimir el valor de userID en la consola
    setFormData(prevFormData => ({ ...prevFormData, duenoEstablecimiento: userId })); // Asignar el ID del usuario al campo duenoEstablecimiento
  }, []); // Ejecutar solo una vez al cargar el componente

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Imprimir formData en la consola antes de enviar la solicitud POST
    try {
      const response = await fetch('https://localhost:8443/api/establecimientos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Redirigir a la página de VistaPrincipal después de enviar el formulario
      window.location.href = '/duenoEstablecimiento';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="fondo-añadir" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <h1>Añade tu establecimiento!</h1>
      <form className="añadir-formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        {/* Input oculto para el campo duenoEstablecimiento, que se completa automáticamente */}
        <input type="hidden" id="duenoEstablecimiento" name="duenoEstablecimiento" value={formData.duenoEstablecimiento} onChange={handleChange} required/>
        <button type="submit">Subir</button>
        <Link to="/duenoEstablecimiento">
          <button className="round-button">Volver</button>
        </Link>  
      </form>
    </div>
  );
};

export default Añadir;