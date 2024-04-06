import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './VistaPrincipalMapa.css';

const VistaMapa = () => {
  const mapRef = useRef(null); // Referencia al elemento del mapa
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [establecimiento, setEstablecimiento] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/establecimientos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEstablecimiento(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    // Función para cargar el mapa
    const loadMap = () => {
      const google = window.google; // Obtener la referencia a la API de Google Maps
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 40.416775, lng: -3.70379 }, // Coordenadas del centro del mapa (Madrid)
        zoom: 12, // Zoom inicial del mapa
      });

      // Array de ubicaciones con sus coordenadas y detalles
      const locations = [
        {lat: 40.4203, lng: -3.7058, title: 'Ubicación 1', telefono: '123 456 789', direccion: 'Avenida Moncloa', correo: 'upm@upm.es' }
      ];

      // Añadir marcadores para cada ubicación
      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.title,
        });

        // Agregar un evento de clic al marcador
        marker.addListener('click', () => {
          // Actualizar el estado con la información de la ubicación seleccionada
          setUbicacionSeleccionada(location);
        });
      });
    };

    // Verificar si la API de Google Maps está disponible
    if (window.google) {
      loadMap();
    } else {
      // Si no está disponible, cargar la API de Google Maps de forma asíncrona
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB-2N2iclyLmO1o3q4H_rqfi0LuVqjhMj0&callback=initMap`;
      script.defer = true;
      script.async = true;
      window.initMap = loadMap; // Función de devolución de llamada para cargar el mapa una vez que se cargue la API
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="fondo-vistamapa" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: 'auto' }}>
      <div className="botones-vistamapa">
        <Link to="/">
          <button className="round-button">LogOut</button>
        </Link>
        <Link to="/misreservas">
          <button className="round-button">Mis Reservas</button>
        </Link>
      </div>
      <div style={{ width: '35%', padding: '20px' }}>
        {/* <div className="busqueda" style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
          <input
            type="text"
            placeholder="Buscar establecimiento"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ width: '40%' }}
          />
        </div> */}
        {ubicacionSeleccionada && (
          <div className="table-container">
            <table className="tabla">
              <div className="botones-vistamapa">
                <Link to="/detalle">
                  <button className="round-button">Ver Más</button>
                </Link>
              </div>
              <tbody>
                {/*<tr>
                  <td colSpan="2" style={{ fontSize: '1.5em', textAlign: 'center' }}>
                    <img src={ubicacionSeleccionada.image} alt="Imagen de ubicación" style={{ width: '100%', maxHeight: '200px' }} />
                  </td>
                </tr>*/}
                <tr>
                  <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Nombre</td>
                  <td style={{ fontSize: '1.5em' }}>{establecimiento.nombre}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Teléfono</td>
                  <td style={{ fontSize: '1.5em' }}>{establecimiento.telefono}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Dirección</td>
                  <td style={{ fontSize: '1.5em' }}>{establecimiento.direccion}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Correo Electrónico</td>
                  <td style={{ fontSize: '1.5em' }}>{establecimiento.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div style={{ width: '35%', marginTop: '100px' }}>
        <div ref={mapRef} style={{ width: '100%', height: '450px' }}></div>
      </div>
    </div>
    </div>
  );
};

export default VistaMapa;
