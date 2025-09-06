import express from "express";
import mongoose from "mongoose";
import movieRoutes from "./routes/movieRoutes.js";
import movie from "./models/movies.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", movieRoutes); 

mongoose.connect("mongodb://127.0.0.1:27017/apimovies")


const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});

app.get("/", (req, res) => {
  const movies = [
    {
      name: "Titanic",
      year: 1997,
      genre: "Drama/Romance/Desastre",
      duration: "3h 16min",
      data_estreia: "1998-01-16",
    },
    {
      name: "Matrix",
      year: 1999,
      genre: "Ficção Científica/Ação",
      duration: "2h 16min",
      data_estreia: "1999-03-31",
    },
  ];
  res.json(movies);
}); 
