import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MenuEcoera from "../MenuEcoera/MenuEcoera";
import api from "../../services/api";

const NovoItem = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [itemDesejado, setItemDesejado] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);

    const novoItem = {
      nome,
      descricao,
      itemDesejado
    };

    try {
      // Requisição POST direcionada ao endpoint exato do seu TrocaController (/api/v1/trocas)
      await api.post("/api/v1/trocas", novoItem);
      alert("Item cadastrado com sucesso!");
      navigate("/trocas");
    } catch (error) {
      console.error("Erro ao cadastrar item:", error);
      alert("Erro ao cadastrar item. Verifique os dados e tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="container-fluid p-0 pb-5" style={{ backgroundColor: "#fcfbfa", minHeight: "100vh" }}>
      <MenuEcoera />

      <div className="container mt-5" style={{ maxWidth: "600px" }}>
        <div className="card shadow-sm border-0 p-4 rounded-3 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold m-0" style={{ color: "#445b2d" }}>
              <i className="fas fa-plus-circle me-2"></i> Cadastrar Novo Item
            </h3>
            <Link to="/trocas" className="btn btn-outline-secondary btn-sm">
              <i className="fas fa-arrow-left me-1"></i> Voltar
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary">Nome do Item</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Bicicleta, Livro, Casaco..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary">Descrição</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Descreva o estado do item, tamanho, tempo de uso..."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">O que deseja em troca?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Aceito smartphone, outro livro, etc."
                value={itemDesejado}
                onChange={(e) => setItemDesejado(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn text-white fw-bold py-2 shadow-sm"
                style={{ backgroundColor: "#445b2d", borderColor: "#445b2d" }}
                disabled={carregando}
              >
                {carregando ? "A cadastrar..." : "Salvar e Publicar Anúncio"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NovoItem;