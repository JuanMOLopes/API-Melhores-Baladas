# Projeto de criação de API CRUD para Baladas

## Como rodar o projeto

### 1. Instale as dependências

No terminal, execute:

```sh
npm install express
npm install sqlite3
```

### 2. Crie o banco de dados e a tabela

Execute o script de criação do banco:

```sh
node infra/create.js
```

Depois, crie a tabela `Clientes` no banco de dados. No terminal SQLite, execute:

```sql
CREATE TABLE Clientes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL
);
```

### 3. Inicie o servidor

```sh
node app.js
```

O servidor estará disponível em [http://localhost:3000/clientes](http://localhost:3000/clientes).

## Rotas disponíveis

- `GET /clientes` — Lista todos os clientes
- `GET /clientes/:id` — Busca cliente por ID
- `POST /clientes` — Cria novo cliente
- `PUT /clientes/:id` — Atualiza cliente existente
- `DELETE /clientes/:id` — Remove cliente

## Observações

- O banco de dados está localizado em `infra/database.db`.
- Certifique-se de que a tabela `Clientes` foi criada antes