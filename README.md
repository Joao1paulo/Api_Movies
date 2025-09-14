# 🎬 Api_movies 🍿

Bem-vindo à **Api_movies**! Sua central moderna e descomplicada para cadastro, listagem, alteração e exclusão de filmes usando uma REST API estilosa! 😎

---

## 🚀 Tecnologias & Stack

- **Linguagem:** JavaScript (ES6+)
- **Backend:** Node.js
- **Banco de Dados:** MongoDB (com Mongoose)
- **Framework:** Express
- **Arquitetura:** MVC (Model-View-Controller)

---

## 📚 O que esta API faz?

Com a **Api_movies** você consegue:

- **Listar** todos os filmes cadastrados (GET)
- **Cadastrar** um novo filme (POST)
- **Alterar** dados de um filme já cadastrado (PUT)
- **Deletar** um filme da coleção (DELETE)

Simples, objetiva e pronta para maratonar com você! ✨

---

## 🔗 Rotas (movieRoutes)

Todos os endpoints estão sob o caminho `/movies`:

| Método | Endpoint    | Descrição                     |
|--------|-------------|-------------------------------|
| GET    | /movies     | Lista todos os filmes         |
| POST   | /movies     | Adiciona um novo filme        |
| PUT    | /movies/:id | Atualiza um filme cadastrado  |
| DELETE | /movies/:id | Remove um filme por ID        |

---

### 🔥 Exemplos de uso

- **Listando todos os filmes:**
  ```http
  GET /movies
  ```

- **Adicionando um filme:**
  ```http
  POST /movies
  Content-Type: application/json
  
  {
    "title": "Nome do Filme",
    "year": 2023,
    "director": "Nome do Diretor",
    "genre": "Ação"
  }
  ```

- **Alterando um filme:**
  ```http
  PUT /movies/ID_DO_FILME
  Content-Type: application/json
  
  {
    "title": "Novo Nome",
    "year": 2024
  }
  ```

- **Deletando um filme:**
  ```http
  DELETE /movies/ID_DO_FILME
  ```

---

## 🛠️ Como rodar localmente?

1. **Clone o projeto:**  
   ```bash
   git clone https://github.com/Joao1paulo/Api_movies.git
   cd Api_movies
   ```

2. **Instale as dependências:**  
   ```bash
   npm install
   ```

3. **Configure o MongoDB:**  
  A conexão com o MongoDB Atlas já está configurada diretamente no arquivo: **config/db-connection.js**.<br>
  Basta inserir sua string de conexão nesse arquivo, por exemplo:
   ```env
   // Usuário e senha do banco de dados
   const dbUser = "seu_usuario";
   const dbPassword = "sua_senha";

   const connect = () => {
    mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.gkpn0o4.mongodb.net/apimovies?retryWrites=true&w=majority&appName=Cluster0`
    );

    ...
   ```

4. **Inicie o servidor:**  
   ```bash
   npm start
   ```

5. **Teste a API:**  
   Acesse `http://localhost:4000/movies` e comece a diversão! 🎉

---

## 🧑‍💻 Organização MVC

### 📁 Estrutura do Projeto
```
Api_movies/
├── config/
│   └── db-connection.js     # Configuração da conexão com MongoDB Atlas
├── models/
│   └── Movie.js             # Schema do filme (Mongoose)
├── controllers/
│   └── movieController.js   # Lógica de negócio
├── services/
│   └── movieService.js      # Operações de banco/dados e lógica de serviço
├── routes/
│   └── movieRoutes.js       # Definição das rotas (/movies)
|
└── app.js                   # Configuração do Express e inicialização do servidor

```

- **Models:** Definição do schema do filme no MongoDB via Mongoose
- **Controllers:** Toda a lógica de manipulação e validação dos filmes
- **Routes:** Organização dos endpoints RESTful no Express

---

## 🎯 Funcionalidades

- ✅ CRUD completo de filmes
- ✅ Validação de dados com Mongoose
- ✅ Tratamento de erros
- ✅ Estrutura MVC organizada
- ✅ API RESTful padronizada

---

## 🧪 Testando a API

Você pode usar ferramentas como:
- **Postman** 📮
- **Insomnia** 😴

---

## 📦 Dependências Principais

```json
{
  "express": "^4.x.x",
  "mongoose": "^7.x.x",
  "mongodb": "^5.x.x"
}
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
