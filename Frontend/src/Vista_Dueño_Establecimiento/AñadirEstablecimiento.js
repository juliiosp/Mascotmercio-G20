import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Añadir.css'; // Importa los estilos CSS

const Añadir = () => {
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
      const response = await fetch('http://localhost:8080/api/establecimientos', {
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
      <h1>Añade tu establecimiento!</h1>
      <form className="añadir-formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Subir</button>
        <Link to="/duenoEstablecimiento">
          <button className="round-button">Volver</button>
        </Link>  
      </form>
    </div>
  );
};

export default Añadir;
