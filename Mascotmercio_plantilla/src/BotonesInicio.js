import React from 'react';
import { Link } from 'react-router-dom';

const BotonesInicio = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px', // Ajusta la altura según sea necesario
    };

    const buttonContainerStyle = {
        display: 'flex',
    };

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '50px',
        padding: '20px 30px',
        margin: '0 10px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px', // Aumentamos el tamaño de la fuente

    };

    return (
        <div style={containerStyle}>
            <div style={buttonContainerStyle}>
                <Link to="/login">
                    <button style={buttonStyle}>Dueño de mascota</button>
                </Link>
                <Link>
                    <button style={buttonStyle}>Propietario de establecimiento</button>
                </Link>
            </div>
        </div>
    );
};

export default BotonesInicio;

