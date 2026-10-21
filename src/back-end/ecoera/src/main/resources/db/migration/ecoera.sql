USE master
GO

IF EXISTS(select * from sys.databases where name='ecoera_db')
	DROP DATABASE ecoera_db
GO

-- CRIAR UM BANCO DE DADOS
CREATE DATABASE ecoera_db
GO

-- ACESSAR O BANCO DE DADOS
USE ecoera_db
GO

-- Tabela: tipos_material
CREATE TABLE tipos_material
(
   id			      INT			IDENTITY,
   nome			   VARCHAR(255)	NOT NULL UNIQUE,
   descricao		   VARCHAR(MAX)	    NULL,

   PRIMARY KEY (id)
);
GO

-- Tabela: pontos_reciclagem
CREATE TABLE pontos_reciclagem
(
   id			      INT			IDENTITY,
   nome			   VARCHAR(255)	NOT NULL,
   endereco		   VARCHAR(255)	NOT NULL,
   cidade			   VARCHAR(100)	    NULL,
   estado			   VARCHAR(50)	    NULL,
   cep			   VARCHAR(20)	    NULL,
   telefone		   VARCHAR(30)	    NULL,
   horario_funcionamento VARCHAR(100) NULL,
   latitude		   VARCHAR(50)	    NULL,
   longitude		   VARCHAR(50)	    NULL,
   descricao		   VARCHAR(MAX)	    NULL,

   PRIMARY KEY (id)
);
GO

-- Tabela: ponto_material (relacionamento N:N entre pontos e materiais)
CREATE TABLE ponto_material
(
   ponto_id		   INT			NOT NULL,
   material_id	   INT			NOT NULL,

   PRIMARY KEY (ponto_id, material_id),
   CONSTRAINT FK_ponto_material_ponto FOREIGN KEY (ponto_id) REFERENCES pontos_reciclagem(id),
   CONSTRAINT FK_ponto_material_material FOREIGN KEY (material_id) REFERENCES tipos_material(id)
);
GO

-- Tabela: recompensas
CREATE TABLE recompensas
(
   id			      INT			IDENTITY,
   nome			   VARCHAR(255)	NOT NULL,
   descricao		   VARCHAR(MAX)	    NULL,
   custo_pontos	   INT			    NULL,
   imagem_url		   VARCHAR(500)    NULL,

   PRIMARY KEY (id)
);
GO

-- Tabela: trocas
CREATE TABLE trocas
(
   id			      INT			IDENTITY,
   nome_pessoa	   VARCHAR(255)	NOT NULL,
   contato		   VARCHAR(200)    NULL,
   descricao		VARCHAR(MAX)	NULL,
   item_desejado	VARCHAR(MAX)	NULL,
   material_id	   INT			    NULL,
   quantidade	   DECIMAL(18,2)   NULL,
   ponto_id		   INT			    NULL,
   status		   VARCHAR(50)	    NULL,
   data_troca	   DATE		    NULL,

   PRIMARY KEY (id),
   CONSTRAINT FK_trocas_material FOREIGN KEY (material_id) REFERENCES tipos_material(id),
   CONSTRAINT FK_trocas_ponto FOREIGN KEY (ponto_id) REFERENCES pontos_reciclagem(id)
);
GO

-- Índices para melhorar consultas dos repositories
CREATE INDEX IX_pontos_reciclagem_cidade ON pontos_reciclagem(cidade);
GO
CREATE INDEX IX_pontos_reciclagem_nome ON pontos_reciclagem(nome);
GO
CREATE INDEX IX_trocas_status ON trocas(status);
GO

-- ============================================
-- DADOS DE EXEMPLO (SEED DATA)
-- ============================================

-- Tipos de material
INSERT INTO tipos_material (nome, descricao) VALUES
('Papel', 'Papel branco, jornais, revistas, papelão e papelão ondulado'),
('Plástico', 'Garrafas PET, embalagens plásticas, sacolas e recipientes'),
('Vidro', 'Garrafas e potes de vidro (incolor, verde, âmbar)'),
('Metal', 'Latas de alumínio, aço e outros metais'),
('Eletrônico', 'Equipamentos eletrônicos e eletrodomésticos pequenos'),
('Óleo de Cozinha', 'Óleo vegetal usado de cozinha');
GO

-- Pontos de reciclagem
INSERT INTO pontos_reciclagem (nome, endereco, cidade, estado, cep, telefone, horario_funcionamento, latitude, longitude, descricao) VALUES
('EcoPonto Centro', 'Rua das Flores, 123', 'São Paulo', 'SP', '01001-000', '(11) 3333-1234', '08:00 às 18:00', '-23.5505', '-46.6333', 'Ponto de coleta centralizado na região central'),
('Ponto Verde Norte', 'Av. Paulista, 1000', 'São Paulo', 'SP', '01310-100', '(11) 4444-5678', '09:00 às 17:00', '-23.5614', '-46.6561', 'Ponto especializado em papel e papelão'),
('EcoReciclagem Sul', 'Rua da Paz, 450', 'São Paulo', 'SP', '04001-000', '(11) 5555-9012', '08:30 às 17:30', '-23.6278', '-46.6532', 'Aceita todos os tipos de material reciclável'),
('Ponto Ecológico Leste', 'Av. Presidente Wilson, 300', 'São Paulo', 'SP', '03101-000', '(11) 6666-3344', '10:00 às 16:00', '-23.5393', '-46.5031', 'Ponto com foco em plástico e vidro');
GO

-- Relacionamento pontos <-> materiais
INSERT INTO ponto_material (ponto_id, material_id) VALUES
(1, 1), (1, 2), (1, 3), (1, 4),
(2, 1),
(3, 1), (3, 2), (3, 3), (3, 4), (3, 5),
(4, 2), (4, 3);
GO

-- Recompensas
INSERT INTO recompensas (nome, descricao, custo_pontos, imagem_url) VALUES
('Sacola Ecológica', 'Sacola reutilizável em algodão orgânico', 50, 'https://example.com/images/sacola-ecologica.jpg'),
('Garrafa de Inox', 'Garrafa térmica de aço inoxidável 500ml', 100, 'https://example.com/images/garrafa-inox.jpg'),
('Kit Higiene', 'Kit com escova de bambu e sabonete natural', 30, 'https://example.com/images/kit-higiene.jpg'),
('Desconto Supermercado', 'Vale-desconto de R$ 20,00 em supermercado parceiro', 80, 'https://example.com/images/desconto-supermercado.jpg'),
('Mochila Reciclada', 'Mochila feita com garrafas PET recicladas', 120, 'https://example.com/images/mochila-reciclada.jpg'),
('Luminária Solar', 'Luminária portátil com energia solar', 150, 'https://example.com/images/luminaria-solar.jpg');
GO

-- Trocas de exemplo
INSERT INTO trocas (nome_pessoa, contato, material_id, quantidade, ponto_id, status, data_troca) VALUES
('João Silva', 'joao@email.com', 1, 10.50, 1, 'CONFIRMADA', '2026-01-15'),
('Maria Santos', 'maria@email.com', 2, 5.20, 2, 'PENDENTE', '2026-01-16'),
('Pedro Oliveira', 'pedro@email.com', 3, 8.00, 3, 'CONFIRMADA', '2026-01-17'),
('Ana Costa', 'ana@email.com', 4, 3.50, 4, 'PENDENTE', '2026-01-18'),
('Carlos Ferreira', 'carlos@email.com', 1, 12.00, 1, 'CONCLUIDA', '2026-01-19'),
('Beatriz Lima', 'beatriz@email.com', 5, 2.00, 3, 'CANCELADA', '2026-01-20');
GO

-- Verificação dos dados
SELECT * FROM tipos_material
SELECT * FROM pontos_reciclagem
SELECT * FROM ponto_material
SELECT * FROM recompensas
SELECT * FROM trocas
GO