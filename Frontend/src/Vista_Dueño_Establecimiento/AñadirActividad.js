import React from 'react';
import { Link } from 'react-router-dom';
import './Añadir.css'; // Importa los estilos CSS

const Añadir = () => {
    return (
        <div className="fondo-añadir" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
            <h1>Añade tus actividades!</h1>
            <form className="añadir-formulario">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="int">Descripcióm:</label>
                    <input type="text" id="descripcion" name="descripcion" />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Disponibilidad:</label>
                    <input type="text" id="disponibilidad" name="disponibilidad" />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Precio:</label>
                    <input type="text" id="precio" name="precio" />
                </div>
                <button type="submit">Subir</button>
                <Link to="/duenoEstablecimiento">
                    <button className="round-button">Volver</button>
                </Link>     
            </form>
        </div>
    );
};

export default Añadir;
