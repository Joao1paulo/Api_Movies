import express from 'express'
import movieController from '../controllers/movieController.js';

const movieRoutes = express.Router();

// ENDPOINT para LISTAR
movieRoutes.get("/movies", movieController.getAllMovies);

// ENDPOINT para CADASTRAR
movieRoutes.post("/movies", movieController.  createMovies);
 
// ENDPOINT para DELETAR
movieRoutes.delete("/movies/:id", movieController.deleteMovie);

// ENDPOINT para ALTERAR
movieRoutes.put("/movies/:id", movieController.updateMovie);

// ENDPOINT para LISTAR um ÚNICO Filme
movieRoutes.get("/movies/:id", movieController.getOneMovie)

export default movieRoutes;

