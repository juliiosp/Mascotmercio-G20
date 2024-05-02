import React, { useState, useEffect } from 'react';
import './Valorar.css';


  const Valorar = () => {
    const [enviado, setEnviado] = useState(false);
    const [formData, setFormData] = useState({
      reseña: '',
      calificacion: '',
      duenoMascotaId: '', // Agrega duenoMascota al estado inicial
      establecimientoId: '', // Agrega establecimientoId al estado inicial
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
      const response = await fetch('https://localhost:8443/api/valoraciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setEnviado(true);
        console.log('Valoración enviada correctamente');
      } else {
        console.error('Error al enviar la valoración:', response.statusText);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  if (enviado) {
    return <div>¡Gracias por tu valoración!</div>;
  }

  return (
    <div>
      <h2>Deja tu valoración:</h2>
      <form className="valorar-formulario" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="reseña">Reseña:</label><br />
        <textarea id="reseña" name='reseña' value={formData.reseña} onChange={handleChange} required></textarea>
      </div>
      <div>
        <label htmlFor="calificacion">Calificación:</label><br />
        <input type="number" id="calificacion" name='calificacion' min="0" max="10" value={formData.calificacion} onChange={handleChange} required/>
      </div>
      <input type="hidden" id="duenoMascotaId" name="duenoMascotaId" value={formData.duenoMascotaId} onChange={handleChange} required/>
      <input type="hidden" id="EstablecimientoId" name="EstablecimientoId" value={formData.establecimientoId} onChange={handleChange} required/>
      <button type="submit" className='round-button'>Enviar</button>
    </form>
    </div>
  );
}

export default Valorar;
