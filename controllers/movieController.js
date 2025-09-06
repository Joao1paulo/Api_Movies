import movieService from "../services/movieService.js";
import { ObjectId } from "mongodb";


// Função para LISTAR filmes
const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor. " });
  }
};

//Função para CADASTRAR filmes
const createMovies = async (req, res) => {
  try {
    const { name, year, genre, duration, data_estreia } = req.body;
    await movieService.create(name, year, genre, duration, data_estreia);
    res.sendStatus(201); // Código 201 (CREATED) : Recurso criado
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servido. " });
  }
};

// Função para DELETAR filmes
const deleteMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await movieService.delete(id);
      res.sendStatus(204); // Código 204 (NO CONTENT)
    } else {
      res.status(400).json({ error: `A ID enviada é inválida` });
      // Código 400 (BAD REQUEST) - Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Erro interno no servidor.` });

    // res.status(500).json({}) -> Para enviar json junto
    // res.sendStatus(500) -> Somente código de status
  }
};

// Função para ALTERAR filmes
const updateMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { name, year, genre, duration, data_estreia } = req.body;
      const movie = await movieService.Update(
        id,
        name,
        year,
        genre,
        duration,
        data_estreia
      );
      res.status(200).json({ movie });
    } else {
      res.status(400).json({ error: `A ID enviada é inválida` }); // Código 400 (BAD REQUEST)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Erro interno no servidor.` });
  }
};

// Função para buscar um ÚNICO filme
const getOneMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const movie = await movieService.getOne(id);

      if (!movie) { 
        res.status(404).json({ error: `O Filme não foi encontrado.` }); // Not found: Não encontrado
      } else {
        res.status(200).json({ movie });
      }
    } else {
      res.status(400).json({ error: `A id enviada é inválida` });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};


export default {
  getAllMovies,
  createMovies,
  deleteMovie,
  updateMovie,
  getOneMovie,
};
