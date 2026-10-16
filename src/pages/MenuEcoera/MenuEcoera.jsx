import React from "react";
import { Link } from "react-router-dom";

const MenuEcoera = () => {
  return (
    <header 
      className="container-fluid py-3 px-4 d-flex justify-content-end align-items-center shadow-sm mb-4"
      style={{
        backgroundImage: `url('/images/faixa.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90px"
      }}
    >
      {/* Botões de Navegação */}
      <div className="d-flex align-items-center gap-3">
        {/* Botão Home */}
        <Link 
          to="/" 
          className="btn text-white fw-semibold d-flex align-items-center gap-2 px-3 py-2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.3)", fontSize: "0.95rem" }}
        >
          <i className="fas fa-home"></i> Home
        </Link>

        {/* Botão Explore */}
        <Link 
          to="/explore" 
          className="btn text-white fw-semibold d-flex align-items-center gap-2 px-3 py-2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.3)", fontSize: "0.95rem" }}
        >
          <i className="fas fa-store"></i> Explore
        </Link>

        {/* Botão Ecopontos (Novo) */}
        <Link 
          to="/listar-ecopontos" 
          className="btn text-white fw-semibold d-flex align-items-center gap-2 px-3 py-2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.3)", fontSize: "0.95rem" }}
        >
          <i className="fas fa-recycle"></i> Ecopontos
        </Link>

    
        
        {/* Botão Histórico */}
        <Link 
          to="/historico-trocas" 
          className="btn text-white fw-semibold d-flex align-items-center gap-2 px-3 py-2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.3)", fontSize: "0.95rem" }}
        >
          <i className="fas fa-history"></i> Histórico
        </Link>

      

        {/* Botão Login */}
        <Link 
          to="/login" 
          className="btn btn-outline-light fw-semibold d-flex align-items-center gap-2 px-3 py-2"
          style={{ fontSize: "0.95rem" }}
        >
          <i className="fas fa-sign-in-alt"></i> Entrar
        </Link>
      </div>
    </header>
  );
};

export default MenuEcoera;