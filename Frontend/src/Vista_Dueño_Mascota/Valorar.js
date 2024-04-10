import React, { useState } from 'react';
import './Valorar.css';


function Valorar() {
  const [reseña, setReseña] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [enviado, setEnviado] = useState(false);

  const handleReseñaChange = (event) => {
    setReseña(event.target.value);
  };

  const handleCalificacionChange = (event) => {
    setCalificacion(parseInt(event.target.value));
  };

  const handleSubmit = async () => {
    const valoracionData = {
      reseña: reseña,
      calificacion: calificacion
    };

    try {
      const response = await fetch('http://localhost:8080/api/valoraciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(valoracionData)
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

  const handleEnviarClick = () => {
    handleSubmit();
  };

  if (enviado) {
    return <div>¡Gracias por tu valoración!</div>;
  }

  return (
    <div>
      <h2>Deja tu valoración:</h2>
      <div>
        <label htmlFor="reseña">Reseña:</label><br />
        <textarea id="reseña" value={reseña} onChange={handleReseñaChange}></textarea>
      </div>
      <div>
        <label htmlFor="calificacion">Calificación:</label><br />
        <input type="number" id="calificacion" min="0" max="10" value={calificacion} onChange={handleCalificacionChange} />
      </div>
      <button className='round-button' onClick={handleEnviarClick}>Enviar</button>
    </div>
  );
}

export default Valorar;
