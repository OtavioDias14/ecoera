# 🗄️ Banco de Dados EcoERA

Este documento explica como configurar e inicializar o banco de dados para o backend EcoERA (Spring Boot + SQL Server).

## 📋 Visão Geral

O banco de dados suporta 4 entidades principais com seus respectivos relacionamentos:

| Tabela | Descrição |
|--------|-----------|
| `tipos_material` | Tipos de material reciclável (papel, plástico, vidro, etc.) |
| `pontos_reciclagem` | Pontos de coleta / ecopontos |
| `ponto_material` | Relacionamento N:N entre pontos e materiais |
| `recompensas` | Recompensas resgatáveis por pontos |
| `trocas` | Trocas / entregas de material reciclável |

## ⚙️ Configuração do `application.properties`

O arquivo já está configurado para **SQL Server**:

```properties
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=ecoera_db;encrypt=true;trustServerCertificate=true
spring.datasource.username=sa
spring.datasource.password=ecoera2026
spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.SQLServerDialect
```

> **Importante:** `ddl-auto=validate` significa que o Hibernate **não criará** tabelas automaticamente. Você deve executar os scripts SQL manualmente (ou via Flyway/Liquibase) antes de iniciar a aplicação.

Se preferir deixar o Hibernate criar as tabelas automaticamente, altere para:
```properties
spring.jpa.hibernate.ddl-auto=update
```

## 🗃️ Scripts SQL (em `src/main/resources/db/migration/`)

### `V1__schema.sql` — Criação das tabelas
Cria todas as 5 tabelas, chaves primárias, estrangeiras e índices.

### `V2__seed_data.sql` — Dados de exemplo
Insere:
- 6 tipos de material
- 4 pontos de reciclagem
- Relacionamentos ponto↔material
- 6 recompensas
- 6 trocas de exemplo

## 🚀 Como Inicializar o Banco

### Opção 1: Usando o `sqlcmd` (linha de comando)

```cmd
REM 1. Criar o banco (se ainda não existir)
sqlcmd -S localhost\SQLEXPRESS -U sa -P ecoera2026 -Q "CREATE DATABASE ecoera_db"

REM 2. Executar o schema
sqlcmd -S localhost\SQLEXPRESS -U sa -P ecoera2026 -d ecoera_db -i "src\main\resources\db\migration\V1__schema.sql"

REM 3. Executar os dados de exemplo
sqlcmd -S localhost\SQLEXPRESS -U sa -P ecoera2026 -d ecoera_db -i "src\main\resources\db\migration\V2__seed_data.sql"
```

### Opção 2: Usando o SQL Server Management Studio (SSMS)

1. Abra o SSMS e conecte-se ao seu SQL Server
2. Clique com o botão direito em "Databases" → "New Database" → nome: `ecoera_db`
3. Abra o arquivo `V1__schema.sql` e execute (F5)
4. Abra o arquivo `V2__seed_data.sql` e execute (F5)

### Opção 3: Deixar o Hibernate criar automaticamente (desenvolvimento)

Altere `application.properties`:
```properties
spring.jpa.hibernate.ddl-auto=update
```
Depois inicie a aplicação Spring Boot. As tabelas serão criadas automaticamente na primeira execução.

> ⚠️ Em produção, use `validate` e execute os scripts SQL manualmente para maior controle.

## 🔗 Relacionamentos entre Entidades

```
PontoReciclagem ──────< ponto_material >────── TipoMaterial
     (muitos para muitos)

Troca ──> TipoMaterial (material_id, ManyToOne)
Troca ──> PontoReciclagem (ponto_id, ManyToOne)
```

- Um ponto de reciclagem aceita vários tipos de material.
- Um tipo de material pode ser aceito em vários pontos.
- Cada troca está associada a um material e a um ponto específico.

## 📊 Consultas Úteis

```sql
-- Listar pontos por cidade
SELECT * FROM pontos_reciclagem WHERE cidade = 'São Paulo';

-- Listar materiais aceitos em um ponto
SELECT tm.nome FROM tipos_material tm
JOIN ponto_material pm ON tm.id = pm.material_id
WHERE pm.ponto_id = 1;

-- Listar trocas por status
SELECT * FROM trocas WHERE status = 'CONFIRMADA';

-- Listar trocas com detalhes do ponto e material
SELECT t.nome_pessoa, tm.nome AS material, pr.nome AS ponto, t.quantidade, t.status
FROM trocas t
JOIN tipos_material tm ON t.material_id = tm.id
JOIN pontos_reciclagem pr ON t.ponto_id = pr.id;
```

## 🧪 Testando com H2 (memória, apenas desenvolvimento)

Se quiser testar rapidamente sem SQL Server, descomente a seção H2 em `application.properties` e comente a seção SQL Server:

```properties
# Descomente para H2:
spring.datasource.url=jdbc:h2:mem:ecoera_db;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
spring.datasource.username=sa
spring.datasource.password=
spring.datasource.driver-class-name=org.h2.Driver
spring.jpa.hibernate.ddl-auto=create-drop
```

> ⚠️ O H2 não suporta `NVARCHAR` e `BIGINT IDENTITY` da mesma forma. Use apenas para testes rápidos.

## ✅ Validação

Após configurar o banco e iniciar a aplicação, acesse:
- `http://localhost:8080/api/pontos` — lista pontos de reciclagem
- `http://localhost:8080/api/materiais` — lista tipos de material
- `http://localhost:8080/api/trocas` — lista trocas
- `http://localhost:8080/api/recompensas` — lista recompensas

## 📁 Estrutura dos Arquivos

```
src/main/resources/
├── application.properties          # Configuração do banco
└── db/
    └── migration/
        ├── V1__schema.sql          # DDL - criação das tabelas
        └── V2__seed_data.sql       # DML - dados de exemplo
```