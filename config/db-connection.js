// Importando o mongoose
import mongoose from "mongoose";

// Usuário e senha do banco de dados
const dbUser = "joaopaulo";
const dbPassword = "Aleatoriedade.";

const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.gkpn0o4.mongodb.net/apimovies?retryWrites=true&w=majority&appName=Cluster0`
    );
    
    const connection = mongoose.connection;

    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });
};

connect();
export default mongoose;