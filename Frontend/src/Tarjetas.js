import React from 'react';
import './Tarjetas.css'; // Importa los estilos CSS

const Tarjetas = () => {
  return (
    <div className="container-inicio">
      <div className="tarjetainicio">
        <img src={"perro.jpg"} alt="Perro corriendo" className="imagen" />
        <div className="texto">
          <strong>¿Tienes una mascota?</strong>
          <p>Encuentra fácilmente restaurantes, tiendas, parques y mucho más que admitan mascotas con la función del mapa y búsqueda de Mastcomercio</p>
        </div>
      </div>
      <div className="tarjetainicio">
        <img src={"etsit.jpg"} alt="Universidad UPM" className="imagen" />
        <div className="texto">
          <strong>Sobre nosotros</strong>
          <p>Mascotmercio es una plataforma integral que facilita la conexión entre dueños de establecimientos, que acogen mascotas y dueños de animales, que desean encontrar lugares amigables para sus animales de compañía.</p>
        </div>
      </div>
      <div className="tarjetainicio">
        <img src={"CentroComercial.jpg"} alt="Centro comercial" className="imagen" />
        <div className="texto">
          <strong>¿Eres dueño de un negocio?</strong>
          <p>Registra tu local en Mascotmercio y conecta con miles de dueños de mascotas que buscan lugares donde sus amigos peludos sean bienvenidos.</p>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
