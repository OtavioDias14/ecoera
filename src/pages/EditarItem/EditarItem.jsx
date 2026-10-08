import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MenuEcoera from "../MenuEcoera/MenuEcoera";
import api from "../../services/api";

const EditarItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [itemDesejado, setItemDesejado] = useState("");

  useEffect(() => {
    api.get(`/trocas/${id}`)
      .then((response) => {
        const dados = response.data.data;
        setNome(dados.nome);
        setDescricao(dados.descricao);
        setItemDesejado(dados.itemDesejado);
      })
      .catch((error) => console.error("Erro ao carregar item:", error));
  }, [id]);

  const atualizarItem = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/trocas/${id}`, {
        nome,
        descricao,
        itemDesejado,
        disponivelTroca: true
      });
      alert("Item atualizado com sucesso!");
      navigate("/ecoera/trocas");
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      alert("Erro ao salvar alterações.");
    }
  };

  return (
    <div className="container mt-4">
      <MenuEcoera />
      <h2 className="mt-4 mb-3 text-success">♻️ Editar Item de Troca</h2>
      
      <form onSubmit={atualizarItem} className="bg-light p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nome do Item:</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descrição:</label>
          <textarea
            className="form-control"
            rows="3"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">O que você deseja em troca?</label>
          <input
            type="text"
            className="form-control"
            value={itemDesejado}
            onChange={(e) => setItemDesejado(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditarItem;