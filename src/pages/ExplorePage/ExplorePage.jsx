import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Exemplo de dados mockados para exibição offline ou enquanto o backend carrega
const ITENS_MOCK = [
  {
    id: 1,
    titulo: "Bicicleta Aro 29 em ótimo estado",
    categoria: "Esportes",
    descricao: "Bicicleta com pouco uso, freio a disco. Troco por notebook ou tablet de igual valor.",
    localizacao: "São Paulo, SP",
    usuario: "Aline Silva",
    imagem: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80",
    dataPublicacao: "Há 2 dias"
  },
  {
    id: 2,
    titulo: "Violão Acústico Giannini",
    categoria: "Música",
    descricao: "Acompanha capa e afinador. Aceito trocas por ferramentas de marcenaria ou livros de arquitetura.",
    localizacao: "Campinas, SP",
    usuario: "Carlos Eduardo",
    imagem: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&q=80",
    dataPublicacao: "Há 1 dia"
  },
  {
    id: 3,
    titulo: "Coleção de Livros de Sustentabilidade",
    categoria: "Livros",
    descricao: "5 livros seminovos sobre ecologia e consumo consciente. Procuro mudas de plantas ornamentais.",
    localizacao: "Curitiba, PR",
    usuario: "Mariana Costa",
    imagem: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    dataPublicacao: "Hoje"
  },
  {
    id: 4,
    titulo: "Cadeira de Escritório Ergonômica",
    categoria: "Móveis",
    descricao: "Cadeira giratória com ajuste de altura. Aceito monitor para PC ou teclado mecânico.",
    localizacao: "Rio de Janeiro, RJ",
    usuario: "Roberto Alves",
    imagem: "https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=500&q=80",
    dataPublicacao: "Há 3 dias"
  }
];

const ExplorePage = () => {
  const [itens, setItens] = useState(ITENS_MOCK);
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
  const [itemSelecionado, setItemSelecionado] = useState(null);

  // Filtro dinâmico por texto e categoria
  const itensFiltrados = itens.filter((item) => {
    const bateuBusca =
      item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      item.descricao.toLowerCase().includes(busca.toLowerCase()) ||
      item.localizacao.toLowerCase().includes(busca.toLowerCase());

    const bateuCategoria =
      categoriaSelecionada === "Todas" || item.categoria === categoriaSelecionada;

    return bateuBusca && bateuCategoria;
  });

  return (
    <div className="container py-4">
      {/* Cabeçalho da Página */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom">
        <div>
          <h2 className="fw-bold text-success m-0">
            <i className="fas fa-store me-2"></i>Explore os Anúncios
          </h2>
          <p className="text-muted m-0">
            Descubra itens disponibilizados pela comunidade para troca sustentável.
          </p>
        </div>
        <Link
          to="/novo-item"
          className="btn btn-success fw-bold px-4 py-2 mt-3 mt-md-0 shadow-sm"
        >
          <i className="fas fa-plus-circle me-2"></i>Anunciar um Item
        </Link>
      </div>

      {/* Barra de Pesquisa e Filtros */}
      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-white border-end-0 text-muted">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0 py-2"
              placeholder="Buscar por título, descrição ou cidade..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-4">
          <select
            className="form-select py-2 shadow-sm"
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
          >
            <option value="Todas">Todas as Categorias</option>
            <option value="Esportes">Esportes</option>
            <option value="Música">Música</option>
            <option value="Livros">Livros</option>
            <option value="Móveis">Móveis</option>
            <option value="Eletrônicos">Eletrônicos</option>
          </select>
        </div>
      </div>

      {/* Grid de Anúncios */}
      {itensFiltrados.length === 0 ? (
        <div className="alert alert-info text-center py-5 shadow-sm rounded-4">
          <i className="fas fa-search-minus fa-3x mb-3 text-muted"></i>
          <h5>Nenhum item encontrado</h5>
          <p className="text-muted m-0">
            Tente mudar o termo da busca ou selecione outra categoria.
          </p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {itensFiltrados.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-success-subtle text-success border border-success-subtle fw-semibold px-2 py-1">
                      {item.categoria}
                    </span>
                    <small className="text-muted fs-7">{item.dataPublicacao}</small>
                  </div>

                  <h6 className="card-title fw-bold text-dark mb-2 text-truncate">
                    {item.titulo}
                  </h6>

                  <p className="card-text text-muted small flex-grow-1 line-clamp-2">
                    {item.descricao}
                  </p>

                  <div className="pt-3 border-top mt-2">
                    <div className="d-flex align-items-center text-muted small mb-3">
                      <i className="fas fa-map-marker-alt text-danger me-2"></i>
                      <span>{item.localizacao}</span>
                    </div>

                    <button
                      className="btn btn-outline-success w-100 fw-semibold shadow-sm"
                      onClick={() => setItemSelecionado(item)}
                    >
                      <i className="fas fa-handshake me-2"></i>Propor Troca
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de Detalhes e Proposta de Troca */}
      {itemSelecionado && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border-0 shadow">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-success">
                  Proposta de Troca
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setItemSelecionado(null)}
                ></button>
              </div>

              <div className="modal-body py-4">
                <div className="row g-4">
                  <div className="col-md-5">
                    <img
                      src={itemSelecionado.imagem}
                      alt={itemSelecionado.titulo}
                      className="img-fluid rounded-3 shadow-sm w-100"
                      style={{ maxHeight: "250px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-7">
                    <h5 className="fw-bold">{itemSelecionado.titulo}</h5>
                    <p className="text-muted small mb-2">
                      Anunciado por: <strong>{itemSelecionado.usuario}</strong>
                    </p>
                    <p className="text-muted small mb-3">
                      <i className="fas fa-map-marker-alt text-danger me-1"></i>
                      {itemSelecionado.localizacao}
                    </p>

                    <div className="p-3 bg-light rounded-3 mb-3">
                      <h6 className="fw-bold text-secondary small mb-1">
                        Descrição do Item:
                      </h6>
                      <p className="small text-muted mb-0">
                        {itemSelecionado.descricao}
                      </p>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold small">
                        O que você oferece em troca?
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Descreva o item ou serviço que você deseja oferecer em troca..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer border-0 pt-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setItemSelecionado(null)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-success fw-bold"
                  onClick={() => {
                    alert("Proposta enviada com sucesso para o anunciante!");
                    setItemSelecionado(null);
                  }}
                >
                  <i className="fas fa-paper-plane me-2"></i>Enviar Proposta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;