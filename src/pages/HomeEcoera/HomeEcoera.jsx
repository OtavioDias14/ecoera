import React from "react";
import { Link } from "react-router-dom";

const HomeEcoera = () => {
  return (
    <div className="container-fluid p-0 m-0 min-vh-100 d-flex flex-column justify-content-between position-relative overflow-hidden" style={{ backgroundColor: "#F7F4EE" }}>
      
      {/* Menu Superior com os links mais unidos e centralizados */}
      <header className="container-fluid py-3 px-5 d-flex justify-content-center align-items-center gap-5 position-absolute top-0 start-0 z-3 bg-transparent">
        
        <Link to="/trocas" className="text-decoration-none fw-bold d-flex align-items-center gap-2" style={{ color: "#445b2d", fontSize: "1.05rem", letterSpacing: "1px" }}>
          <i className="fas fa-store" style={{ color: "#445b2d" }}></i> EXPLORE
        </Link>
        
        <Link to="/ListarEcopontos" className="text-decoration-none fw-bold d-flex align-items-center gap-2" style={{ color: "#445b2d", fontSize: "1.05rem", letterSpacing: "1px" }}>
          <i className="fas fa-map-marker-alt" style={{ color: "#445b2d" }}></i> ECOPONTOS
        </Link>
      </header>

      {/* Imagem de Capa esticada até à ponta debaixo */}
      <main className="flex-grow-1 p-0 m-0 w-100 h-100 d-flex">
        <img 
          src="/images/ecoera-capa.png" 
          alt="Ecoera - Transforme o descarte em oportunidade" 
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
          style={{ minHeight: "100vh" }}
        />
      </main>

    </div>
  );
};

export default HomeEcoera;