// src/components/AboutPage.js

import React from 'react';

const Acerca = () => {
  return (
    <div>
      <section id="about" className="section">
        <div className="container">
          <div className="content">
            <h1>Acerca de Nosotros</h1>
            <p>Bienvenido a nuestra página de Acerca de. Aquí puedes encontrar información sobre nuestra empresa, equipo, y misión.</p>
          </div>
        </div>
      </section>

      <section id="team" className="section">
        <div className="container">
          <div className="content">
            <h2>Nuestro Equipo</h2>
            <p>Conoce al equipo increíble que hace posible todo lo que hacemos.</p>
            {/* Aquí podrías incluir información sobre los miembros del equipo */}
          </div>
        </div>
      </section>

      <section id="mission" className="section">
        <div className="container">
          <div className="content">
            <h2>Nuestra Misión</h2>
            <p>Nuestra misión es...</p>
            {/* Incluye información sobre la misión de tu empresa */}
          </div>
        </div>
      </section>

      <section id="values" className="section">
        <div className="container">
          <div className="content">
            <h2>Nuestros Valores</h2>
            <p>En nuestra empresa, valoramos...</p>
            {/* Aquí podrías listar los valores fundamentales de tu empresa */}
          </div>
        </div>
      </section>

      {/* Otras secciones adicionales como historia, logros, etc. */}
    </div>
  );
}

export default Acerca;
