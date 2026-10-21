import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Aqui você integrará com a sua API.js para o cadastro
    console.log("Dados de cadastro:", { nome, email, senha });
    
    // Redireciona para o login ou home após o cadastro (exemplo)
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow-sm border-0 p-4 rounded-4" style={{ width: "100%", maxWidth: "420px" }}>
        
        {/* Cabeçalho do Card */}
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-1" style={{ color: "#2d6a4f" }}>
            <i className="fas fa-leaf me-2"></i>Ecoera
          </h3>
          <p className="text-muted small">Crie sua conta e comece a trocar e anunciar</p>
        </div>

        {/* Formulário de Cadastro */}
        <form onSubmit={handleSubmit}>
          
          {/* Nome */}
          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">Nome completo</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="fas fa-user text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0 shadow-none"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
          </div>

          {/* E-mail */}
          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">E-mail</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="fas fa-envelope text-muted"></i>
              </span>
              <input
                type="email"
                className="form-control border-start-0 ps-0 shadow-none"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Senha */}
          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">Senha</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="fas fa-lock text-muted"></i>
              </span>
              <input
                type="password"
                className="form-control border-start-0 ps-0 shadow-none"
                placeholder="********"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirmar Senha */}
          <div className="mb-4">
            <label className="form-label small fw-semibold text-muted">Confirmar senha</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="fas fa-lock text-muted"></i>
              </span>
              <input
                type="password"
                className="form-control border-start-0 ps-0 shadow-none"
                placeholder="********"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn text-white w-100 py-2 fw-semibold rounded-3 mb-3 shadow-sm"
            style={{ backgroundColor: "#2d6a4f" }}
          >
            <i className="fas fa-user-plus me-2"></i>Cadastrar
          </button>

          <div className="text-center">
            <small className="text-muted">
              Já tem uma conta? <Link to="/login" className="text-success fw-semibold text-decoration-none">Faça login</Link>
            </small>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Cadastro;