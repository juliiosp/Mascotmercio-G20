import React from 'react';
import BotonesInicio from './BotonesInicio';
import Tarjetas from './Tarjetas';

const Inicio = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #93FAF6, #FFB1FF)', // Celeste a rosa
    height: '500px', // Ajusta la altura según sea necesario
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
  };

  return (
    <>
      <div style={gradientStyle}>
        <div style={textStyle}>
          <h1>Mascotmercio</h1>
          <h3>Pet-Friendly</h3>
          <p style={{ textAlign: 'center', margin: '0', fontSize:30 }}>¡Encuentra el lugar perfecto para ti y tu mascota!</p>
          <p style={{ backgroundColor: 'black', color: 'white' }}>
          Utilizamos cookies para mejorar su experiencia. Al continuar navegando, aceptas nuestra <Link to="/privacidad" style={{ color: 'white' }}>política de privacidad</Link>.
          </p>
        </div>
      </div>
      <BotonesInicio />
      <Tarjetas />
    </>
  );
};

export default Inicio;