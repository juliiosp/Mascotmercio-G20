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
          <p>La app que une a los amantes de las mascotas</p>
        </div>
      </div>
      <BotonesInicio />
      <Tarjetas />
    </>
  );
};

export default Inicio;
