import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/404.png"}
        alt="404 Not Found"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <br />
      <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "20px" }}>
        Ruta no encontrada
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            marginTop: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Volver
        </button>
      </Link>
    </div>
  );
};

export default NoMatch;
