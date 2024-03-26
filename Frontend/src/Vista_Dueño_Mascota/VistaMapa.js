import React, { useState } from 'react';

const VistaMapa = () => {
  const [lugarSeleccionado, setLugarSeleccionado] = useState(null);

  // Función para manejar el clic en el mapa
  const handleClickMapa = (event) => {
    // Obtener las coordenadas del lugar clicado
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    // Realizar una solicitud a una API para obtener los detalles del lugar según las coordenadas
    obtenerInformacionLugar(lat, lng)
      .then((informacionLugar) => {
        // Actualizar el estado con la información del lugar seleccionado
        setLugarSeleccionado(informacionLugar);
      })
      .catch((error) => {
        console.error('Error al obtener la información del lugar:', error);
      });
  };

  // Función simulada para obtener la información del lugar desde una API (reemplazar con una solicitud real)
  const obtenerInformacionLugar = async (lat, lng) => {
    // Aquí puedes realizar una solicitud a una API real para obtener los detalles del lugar según las coordenadas
    // En este ejemplo, simplemente se devuelve la información estática de un lugar ficticio
    return {
      nombre: 'Lugar Ejemplo',
      descripcion: 'Descripción de Lugar Ejemplo.',
      direccion: 'Dirección de Lugar Ejemplo.',
    };
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <div style={{ width: '50%', padding: '20px' }}>
        {lugarSeleccionado && (
          <>
            <h2>Lugar: {lugarSeleccionado.nombre}</h2>
            <p>Descripción: {lugarSeleccionado.descripcion}</p>
            <p>Dirección: {lugarSeleccionado.direccion}</p>
          </>
        )}
      </div>
      <div style={{ width: '35%', marginTop: '100px' }}>
        <iframe  
          title="Google Maps"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdp6FsA21FrpIp1lH5mNpNSYsM9hOs4rg&q=Space+Needle,Seattle+WA`}
          onClick={handleClickMapa}
        ></iframe>
      </div>
    </div>
  );
};

export default VistaMapa;
