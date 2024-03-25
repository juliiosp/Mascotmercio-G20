import React from 'react';
import './Tarjetas.css'; // Importa los estilos CSS

const Tarjetas = () => {
  return (
    <div className="container">
      <div className="card">
        <img src={"perro.jpg"} alt="Imagen de la tarjeta" className="card-image" />
        <div className="text">
          <strong>¿Tienes una mascota?</strong>
          <p>Encuentra fácilmente restaurantes, tiendas, parques y mucho más que admitan mascotas con la función del mapa y búsqueda de Mastcomercio</p>
        </div>
      </div>
      <div className="card">
        <img src={"etsit.jpg"} alt="Imagen de la tarjeta" className="card-image" />
        <div className="text">
          <strong>Sobre nosotros</strong>
          <p>Mascotmercio es una plataforma integral que facilita la conexión entre dueños de establecimientos, que acogen mascotas y dueños de animales, que desean encontrar lugares amigables para sus animales de compañía.</p>
        </div>
      </div>
      <div className="card">
        <img src={"CentroComercial.jpg"} alt="Imagen de la tarjeta" className="card-image" />
        <div className="text">
          <strong>¿Eres dueño de un negocio?</strong>
          <p>Registra tu local en Mascotmercio y conecta con miles de dueños de mascotas que buscan lugares donde sus amigos peludos sean bienvenidos.</p>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
