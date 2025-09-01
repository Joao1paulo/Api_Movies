import mongodb from "mongodb";
import mongoose from "mongoose";

const movieSchema = new mongoose.schema({
    name: String,
    year: Number,
    genre: String,
    duration: String,
    data_estreia: Date
})

const movie = mongoose.model("Movie", movieSchema);

export default movie;