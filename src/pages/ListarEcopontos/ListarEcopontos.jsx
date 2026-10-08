import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuEcoera from "../MenuEcoera/MenuEcoera";
import styles from "./ListarEcopontos.module.css";

const ListarEcopontos = () => {
  const [busca, setBusca] = useState("");

  const ecopontos = [
    {
      id: 1,
      subprefeitura: "Subprefeitura Aricanduva / Formosa / Carrão",
      nome: "Viaduto Engenheiro Alberto Badra",
      endereco: "Avenida Aricanduva, nº 200 - Praça Lúcia Mekhitarian – Bairro: Aricanduva (baixo do Viaduto Engenheiro Alberto Badra)",
      cep: "03501-010",
      recebeGesso: true
    },
    {
      id: 2,
      subprefeitura: "Subprefeitura Aricanduva / Formosa / Carrão",
      nome: "Astarte",
      endereco: "Rua Astarte, nº 500 – Bairro: Vila Carrão",
      cep: "03446-090",
      recebeGesso: true
    },
    {
      id: 3,
      subprefeitura: "Subprefeitura Aricanduva / Formosa / Carrão",
      nome: "Nova York",
      endereco: "Rua Amélia Vanso Magnoli, nº 480 – Bairro: Conjunto Habitacional Barreira Grande",
      cep: "03907-010",
      recebeGesso: false
    },
    {
      id: 4,
      subprefeitura: "Subprefeitura Aricanduva / Formosa / Carrão",
      nome: "Aricanduva",
      endereco: "Rua Professor Alzira de Oliveira Gilioli, nº 400 – Bairro: Jardim Nice",
      cep: "03905-090",
      recebeGesso: true
    },
    {
      id: 5,
      subprefeitura: "Subprefeitura Butantã",
      nome: "Jardim Maria do Carmo",
      endereco: "Rua Caminho do Engenho, nº 800 – Bairro: Ferreira",
      cep: "05524-000",
      recebeGesso: false
    },
    {
      id: 6,
      subprefeitura: "Subprefeitura Butantã",
      nome: "Jardim Jaqueline",
      endereco: "Parque Raposo Tavares - Rua Walter Brito Belletti, s/nº - Bairro: Vila Albano",
      cep: "05543-040",
      recebeGesso: true
    },
    {
      id: 7,
      subprefeitura: "Subprefeitura Butantã",
      nome: "Politécnica",
      endereco: "Rua Paulino Baptista Conti, nº 2 – Bairro: Jardim Sarah",
      cep: "05382-140",
      recebeGesso: false
    },
    {
      id: 8,
      subprefeitura: "Subprefeitura Butantã",
      nome: "Giovani Gronchi",
      endereco: "Avenida Giovani Gronchi, nº 3413 – Bairro: Morumbi",
      cep: "05651-002",
      recebeGesso: false
    },
    {
      id: 9,
      subprefeitura: "Subprefeitura Campo Limpo",
      nome: "Santo Dias",
      endereco: "Travessa Rosifloras, nº 301 – Bairro: Conjunto Habitacional Instituto Adventista",
      cep: "05868-600",
      recebeGesso: false
    },
    {
      id: 10,
      subprefeitura: "Subprefeitura Campo Limpo",
      nome: "Parque Fernanda",
      endereco: "Avenida Doutor Salvador Rocco, nº 261, defronte Rua Antônio Cânon – Bairro: Parque Fernanda",
      cep: "05888-050",
      recebeGesso: false
    },
    {
      id: 11,
      subprefeitura: "Subprefeitura Campo Limpo",
      nome: "Olinda",
      endereco: "Rua Nelson Brissac, nº 1235, esquina com Avenida Padre Adolfo Kolping – Bairro: Parque Regina",
      cep: "05773-110",
      recebeGesso: false
    },
    {
      id: 12,
      subprefeitura: "Subprefeitura Campo Limpo",
      nome: "Vila das Belezas",
      endereco: "Rua Campo Novo do Sul, nº 500 – Bairro: Vila Andrade",
      cep: "05729-100",
      recebeGesso: true
    },
    {
      id: 13,
      subprefeitura: "Subprefeitura Campo Limpo",
      nome: "Paraisópolis",
      endereco: "Rua Irapará, nº 73 – Bairro: Paraíso do Morumbi",
      cep: "05706-300",
      recebeGesso: false
    },
    {
      id: 14,
      subprefeitura: "Subprefeitura Capela do Socorro",
      nome: "Cidade Saudável",
      endereco: "Rua Ptolomeu, nº 869 – Bairro: Vila Socorro",
      cep: "04762-040",
      recebeGesso: true
    },
    {
      id: 15,
      subprefeitura: "Subprefeitura Casa Verde / Limão / Cachoeirinha",
      nome: "Parque Peruche",
      endereco: "Avenida Engenheiro Caetano Álvares, nº 3142 – Bairro: Parque Peruche",
      cep: "02535-008",
      recebeGesso: false
    },
    {
      id: 16,
      subprefeitura: "Subprefeitura Casa Verde / Limão / Cachoeirinha",
      nome: "Vila Nova Cachoeirinha",
      endereco: "Rua Felix Alves Pereira, nº 113 – Bairro: Jardim Centenário",
      cep: "02882-030",
      recebeGesso: false
    },
    {
      id: 17,
      subprefeitura: "Subprefeitura Casa Verde / Limão / Cachoeirinha",
      nome: "Vila Santa Maria",
      endereco: "Rua André Bolsena com a Travessa Luiz Sá – Bairro Vila Santista",
      cep: "02560-170",
      recebeGesso: false
    },
    {
      id: 18,
      subprefeitura: "Subprefeitura Casa Verde / Limão / Cachoeirinha",
      nome: "Jardim Antártica",
      endereco: "Rua Dom Aquino, nº 103 – Bairro: Jardim Antártica",
      cep: "02652-170",
      recebeGesso: false
    },
    {
      id: 19,
      subprefeitura: "Subprefeitura Casa Verde / Limão / Cachoeirinha",
      nome: "São Leandro",
      endereco: "Rua São Leandro, nº 13 – Bairro: Vila Palmeiras",
      cep: "02725-010",
      recebeGesso: false
    },
    {
      id: 20,
      subprefeitura: "Subprefeitura Cidade Ademar",
      nome: "Alvarenga",
      endereco: "Estrada do Alvarenga, nº 2475 – Bairro: Balneário Mar Paulista",
      cep: "04467-000",
      recebeGesso: false
    },
    {
      id: 21,
      subprefeitura: "Subprefeitura Cidade Ademar",
      nome: "Cupecê",
      endereco: "Rua Anália Maria de Jesus, nº 130 – Trav. Av. Cupecê – Bairro: Jardim Itacolomi",
      cep: "04385-110",
      recebeGesso: false
    },
    {
      id: 22,
      subprefeitura: "Subprefeitura Freguesia do Ó / Brasilândia",
      nome: "Itaberaba",
      endereco: "Avenida Itaberaba, nº 2500 – Bairro: Freguesia do Ó",
      cep: "02734-000",
      recebeGesso: false
    },
    {
      id: 23,
      subprefeitura: "Subprefeitura Freguesia do Ó / Brasilândia",
      nome: "Nossa Senhora do Ó",
      endereco: "Rua Julio Buono, nº 800 – Bairro: Freguesia do Ó",
      cep: "02920-000",
      recebeGesso: false
    },
    {
      id: 24,
      subprefeitura: "Subprefeitura Freguesia do Ó / Brasilândia",
      nome: "João Marcelino Branco",
      endereco: "Avenida João Marcelino Branco, nº 80 – Bairro: Vila dos Andrades",
      cep: "02810-000",
      recebeGesso: true
    },
    {
      id: 25,
      subprefeitura: "Subprefeitura Guaianases",
      nome: "Gamelinha",
      endereco: "Rua Gamelinha, nº 300 – Bairro: Guaianases",
      cep: "08472-350",
      recebeGesso: false
    },
    {
      id: 26,
      subprefeitura: "Subprefeitura Guaianases",
      nome: "Iguatemi",
      endereco: "Rua Escritor Mário de Andrade, nº 150 – Bairro: Iguatemi",
      cep: "03927-140",
      recebeGesso: false
    },
    {
      id: 27,
      subprefeitura: "Subprefeitura Ipiranga",
      nome: "Santa Cruz",
      endereco: "Rua Santa Cruz, nº 520 – Bairro: Vila Mariana",
      cep: "04121-000",
      recebeGesso: false
    },
    {
      id: 28,
      subprefeitura: "Subprefeitura Ipiranga",
      nome: "Jabaquara",
      endereco: "Rua Genaro de Carvalho, nº 25 – Bairro: Jabaquara",
      cep: "04330-000",
      recebeGesso: true
    }
  ];

  const ecopontosFiltrados = ecopontos.filter(item => 
    item.nome.toLowerCase().includes(busca.toLowerCase()) ||
    item.subprefeitura.toLowerCase().includes(busca.toLowerCase()) ||
    item.endereco.toLowerCase().includes(busca.toLowerCase()) ||
    item.cep.includes(busca)
  );

  return (
    <div className={styles.pageContainer}>
      <MenuEcoera />

      <div className={styles.contentWrapper}>
        <div className={styles.banner}>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h4 className={styles.bannerTitle}>
                <i className="fas fa-map-marked-alt me-2"></i> Ecopontos em São Paulo
              </h4>
              <p className={styles.bannerText}>
                Consulte os pontos de entrega voluntária de resíduos autorizados na cidade. Encontre o local mais próximo para realizar o descarte correto.
              </p>
            </div>
            <Link to="/" className="btn btn-outline-success fw-bold px-4 py-2">
              Voltar ao Início
            </Link>
          </div>
        </div>

        <div className={`row ${styles.searchContainer}`}>
          <div className="col-12">
            <div className={`input-group ${styles.searchInputGroup}`}>
              <span className={`input-group-text ${styles.searchIconWrapper}`}>
                <i className="fas fa-search"></i>
              </span>
              <input 
                type="text" 
                className={`form-control ${styles.searchInput}`}
                placeholder="Pesquisar por ecoponto, subprefeitura, bairro ou CEP..." 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row g-4">
          {ecopontosFiltrados.length > 0 ? (
            ecopontosFiltrados.map((item) => (
              <div className="col-md-4 col-sm-6" key={item.id}>
                <div className={styles.ecopontoCard}>
                  <div>
                    <div className="mb-2">
                      <span className={styles.subprefeituraBadge}>
                        {item.subprefeitura}
                      </span>
                    </div>

                    <h5 className={styles.ecopontoTitle}>
                      <i className="fas fa-map-marker-alt text-danger me-1"></i> {item.nome}
                    </h5>
                    
                    <p className={styles.cardText}>
                      <strong>Endereço:</strong> {item.endereco}
                    </p>

                    <p className={styles.cardText}>
                      <strong>CEP:</strong> {item.cep}
                    </p>
                  </div>

                  <div>
                    {item.recebeGesso && (
                      <div className={styles.gessoBox}>
                        <i className="fas fa-check-circle"></i> Este ecoponto recebe gesso
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={`col-12 ${styles.noResults}`}>
              Nenhum ecoponto encontrado com esse termo.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListarEcopontos;