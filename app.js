import express from "express";
import mongoose from "mongoose";    
import movieRoutes from "./routes/movieRoutes.js";
import movie from "./models/movie.js";

const app = express();

