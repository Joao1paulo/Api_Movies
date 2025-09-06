import movie from "../models/movies.js";

class movieService {
  async getAll() {
    try {
      const movies = await movie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  }

  async create(name, year, genre, duration, data_estreia) {
    try {
      const newMovie = new movie({
        name: name,
        year: year,
        genre: genre,
        duration: duration,
        data_estreia: data_estreia,
      });
      await newMovie.save();
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      await movie.findByIdAndDelete(id);
      console.log(`Filme com a id: ${id} foi deletado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  async Update(id, name, year, genre, duration, data_estreia) {
    try {
      const updatedMovie = await movie.findByIdAndUpdate(
        id,
        { name, year, genre, duration, data_estreia },
        { new: true }
      );
      console.log(`Dados do Filme com id ${id} alterados com sucesso.`);
      return updatedMovie;
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id) {
    try {
      const Movie = await movie.findOne({ _id: id });
      return Movie;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new movieService();
