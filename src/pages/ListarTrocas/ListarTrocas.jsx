import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuEcoera from "../MenuEcoera/MenuEcoera";
import api from "../../services/api";

const ListarTrocas = () => {
  const [trocas, setTrocas] = useState([]);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas as Categorias");

  useEffect(() => {
    carregarTrocas();
  }, []);

  const carregarTrocas = () => {
    // Rota GET correta alinhada ao TrocaController
    api.get("/api/v1/trocas")
      .then((response) => {
        // Trata caso o back-end retorne diretamente a lista ou um objeto paginado/envelopado
        const dados = Array.isArray(response.data) ? response.data : (response.data.data || []);
        setTrocas(dados);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de trocas:", error);
      });
  };

  const excluirTroca = async (id) => {
    if (window.confirm("Tem certeza que deseja remover este item de troca?")) {
      try {
        // Rota DELETE correta com o prefixo
        await api.delete(`/api/v1/trocas/${id}`);
        alert("Item removido com sucesso!");
        carregarTrocas();
      } catch (error) {
        console.error("Erro ao excluir item:", error);
        alert("Não foi possível excluir o item.");
      }
    }
  };

  const trocasFiltradas = trocas.filter(item => 
    item.nome?.toLowerCase().includes(busca.toLowerCase()) ||
    item.descricao?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container-fluid p-0 pb-5" style={{ backgroundColor: "#fcfbfa", minHeight: "100vh" }}>
      <MenuEcoera />

      <div className="container">
        <div className="p-4 mb-4 rounded shadow-sm" style={{ backgroundColor: "#eef5ed", border: "1px solid #d4e7d0" }}>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h4 className="fw-bold text-success mb-1">
                <i className="fas fa-seedling me-2"></i> Troque, Reutilize e Economize!
              </h4>
              <p className="text-muted m-0" style={{ fontSize: "0.95rem" }}>
                Dê uma nova vida a itens que você não usa mais. Publique o que deseja trocar e faça propostas diretas em itens de outros usuários!
              </p>
            </div>
            <Link to="/novo-item" className="btn btn-success fw-bold px-4 py-2" style={{ backgroundColor: "#445b2d", borderColor: "#445b2d" }}>
              Cadastrar Item
            </Link>
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-8">
            <div className="input-group shadow-sm">
              <span className="input-group-text bg-white border-end-0 text-muted">
                <i className="fas fa-search"></i>
              </span>
              <input 
                type="text" 
                className="form-control border-start-0" 
                placeholder="Buscar título ou descrição..." 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group shadow-sm">
              <span className="input-group-text bg-white border-end-0 text-muted" style={{ fontSize: "0.85rem" }}>
                CATEGORIA:
              </span>
              <select 
                className="form-select border-start-0"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option>Todas as Categorias</option>
                <option>Eletrónicos</option>
                <option>Roupas & Acessórios</option>
                <option>Livros & Educação</option>
                <option>Outros</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {trocasFiltradas.length > 0 ? (
            trocasFiltradas.map((item) => (
              <div className="col-md-3 col-sm-6" key={item.id}>
                <div className="card h-100 shadow-sm border-0 position-relative p-3 bg-white rounded-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-success border px-2 py-1" style={{ fontSize: "0.75rem" }}>
                      Geral
                    </span>
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                      <i className="far fa-clock me-1"></i> Ativo
                    </small>
                  </div>

                  <h5 className="fw-bold text-dark mb-1" style={{ fontSize: "1.05rem" }}>
                    {item.nome}
                  </h5>
                  <p className="text-muted small mb-2">Anunciado na comunidade</p>
                  
                  <p className="text-secondary" style={{ fontSize: "0.85rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {item.descricao}
                  </p>

                  <div className="mt-auto pt-2 border-top">
                    <div className="p-2 rounded mb-2" style={{ backgroundColor: "#fdf8ec", border: "1px solid #faedcd" }}>
                      <small className="d-block fw-bold text-dark" style={{ fontSize: "0.75rem" }}>
                        <i className="fas fa-exchange-alt text-warning me-1"></i> Deseja em troca:
                      </small>
                      <span className="text-dark small fw-semibold">
                        {item.itemDesejado}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <Link 
                        to={`/editar-item/${item.id}`} 
                        className="btn btn-sm btn-outline-primary py-1 px-2"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <i className="fas fa-pencil-alt"></i> Editar
                      </Link>
                      <button 
                        className="btn btn-sm btn-outline-danger py-1 px-2"
                        onClick={() => excluirTroca(item.id)}
                        style={{ fontSize: "0.8rem" }}
                      >
                        <i className="fas fa-trash-alt"></i> Excluir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5 text-muted">
              Nenhum item encontrado para troca no momento.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListarTrocas;