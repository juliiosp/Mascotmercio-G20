import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './VistaPrincipalMapa.css';
import Valorar from './Valorar';

const handleLogout = () => {
  localStorage.setItem('userId', undefined); // Resetea el valor del localStorage
};

const VistaMapa = () => {
  const mapRef = useRef(null); // Referencia al elemento del mapa
  const [ubicaciones, setUbicaciones] = useState([]); // Lista de ubicaciones combinadas con información de establecimientos
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(null);
  const [valoraciones, setValoraciones] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8443/api/establecimientos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const establecimientos = await response.json();

        // Convertir direcciones a coordenadas
        const ubicacionesGeocodificadas = await Promise.all(
          establecimientos.map(async (establecimiento) => {
            const direccion = establecimiento.direccion;
            const coordenadas = await obtenerCoordenadas(direccion);
            return { lat: coordenadas.lat, lng: coordenadas.lng, establecimiento };
          })
        );

        setUbicaciones(ubicacionesGeocodificadas);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8443/api/valoraciones');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setValoraciones(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const obtenerCoordenadas = async (direccion) => {
    const apiKey = 'AIzaSyB-2N2iclyLmO1o3q4H_rqfi0LuVqjhMj0'; // Reemplaza TU_API_KEY con tu propia API Key de Google Maps
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${apiKey}`);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error('No se pudo encontrar la ubicación');
    }
  };

  useEffect(() => {
    // Función para cargar el mapa
    const loadMap = () => {
      const google = window.google; // Obtener la referencia a la API de Google Maps
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 40.416775, lng: -3.70379 }, // Coordenadas del centro del mapa (Madrid)
        zoom: 12, // Zoom inicial del mapa
      });

      // Iterar sobre cada ubicación y agregar marcadores al mapa
      ubicaciones.forEach((ubicacion) => {
        const { lat, lng, establecimiento } = ubicacion;

        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: establecimiento.nombre,
        });

        // Agregar un evento de clic al marcador
        marker.addListener('click', () => {
          // Actualizar el estado con la información de la ubicación seleccionada
          setUbicacionSeleccionada(establecimiento);
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
  }, [ubicaciones]);

  return (
    <div className="fondo-vistamapa" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <div className="botones-vistamapa">
        <Link to="/">
          <button className="round-button" onClick={handleLogout}>LogOut</button>
        </Link>
        <Link to="/misreservas">
          <button className="round-button">Mis Reservas</button>
        </Link>
        <Link to="/perfilMasc">
          <button className="round-button">Mi Perfil</button>
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: 'auto' }}>
        <div style={{ width: '35%', padding: '20px' }}>
          {ubicacionSeleccionada && (
            <div className="table-container">
              <div className="card-cont">
                <div className="container">
                  <div className="card">
                    <div className="text">
                      <p><span style={{ fontWeight: 'bold' }}>Nombre:</span> {ubicacionSeleccionada.nombre}</p>
                      <p><span style={{ fontWeight: 'bold' }}>Teléfono:</span> {ubicacionSeleccionada.telefono}</p>
                      <p><span style={{ fontWeight: 'bold' }}>Dirección:</span> {ubicacionSeleccionada.direccion}</p>
                      <p><span style={{ fontWeight: 'bold' }}>Correo Electrónico:</span> {ubicacionSeleccionada.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="botones-vistamapa">
                <Link to="/detalle">
                  <button className="round-button">Ver Más</button>
                </Link>
              </div>
              <h2>Valoraciones</h2>
              <table className="tabla">
                <tbody>
                  {valoraciones.map((valoracion, index) => (
                    <tr key={index}>
                      <td>{valoracion.calificacion}</td>
                      <td>{valoracion.reseña}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Valorar />
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
