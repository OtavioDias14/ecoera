import React from "react";
import { Link } from "react-router-dom";

const MenuEcoera = () => {
  return (
    <header 
      className="container-fluid py-3 px-4 d-flex justify-content-between align-items-center shadow-sm mb-4"
      style={{
        backgroundImage: `url('/images/faixa.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90px"
      }}
    >
      {/* Logotipo e Slogan à esquerda */}
      <Link to="/" className="text-decoration-none d-flex align-items-center gap-3">
        <div className="text-white">
        
        </div>
      </Link>

      {/* Botões de navegação à direita */}
      <div className="d-flex align-items-center gap-3">
        <Link 
          to="/trocas" 
          className="btn text-white fw-semibold d-flex align-items-center gap-2 px-3 py-2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.3)", fontSize: "0.95rem" }}
        >
          <i className="fas fa-store"></i> Explore
        </Link>

        <Link 
          to="/trocas" 
          className="btn text-white fw-semibold d-flex align-items-center gap-2 px-3 py-2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.3)", fontSize: "0.95rem" }}
        >
          <i className="fas fa-exchange-alt"></i> Minhas Trocas
        </Link>

        <Link 
          to="/novo-item" 
          className="btn fw-bold d-flex align-items-center gap-2 px-3 py-2 shadow"
          style={{ backgroundColor: "#d4a373", color: "#fff", border: "none", fontSize: "0.95rem" }}
        >
          <i className="fas fa-plus"></i> Criar Anúncio
        </Link>
      </div>
    </header>
  );
};

export default MenuEcoera;