import React from "react";
import { Link } from "react-router-dom";

const HomeEcoera = () => {
  return (
    <div className="container-fluid p-0 m-0 min-vh-100 d-flex flex-column justify-content-between position-relative overflow-hidden" style={{ backgroundColor: "#F7F4EE" }}>
      
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