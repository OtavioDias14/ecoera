import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você integrará com a sua API.js para autenticação
    console.log("Dados de login:", { email, senha });
    
    // Redireciona para a home após o login (exemplo)
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow-sm border-0 p-4 rounded-4" style={{ width: "100%", maxWidth: "420px" }}>
        
        {/* Cabeçalho do Card */}
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-1" style={{ color: "#2d6a4f" }}>
            <i className="fas fa-leaf me-2"></i>Ecoera
          </h3>
          <p className="text-muted small">Entre para gerenciar suas trocas e anúncios</p>
        </div>

        {/* Formulário de Login */}
        <form onSubmit={handleSubmit}>
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

          <div className="mb-4">
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

          <button
            type="submit"
            className="btn text-white w-100 py-2 fw-semibold rounded-3 mb-3 shadow-sm"
            style={{ backgroundColor: "#2d6a4f" }}
          >
            <i className="fas fa-sign-in-alt me-2"></i>Entrar
          </button>

          
        </form>

      </div>
    </div>
  );
};

export default Login;