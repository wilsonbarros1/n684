const express = require("express")
const cors = require ("cors");
const app = express();

app.use(cors());

app.use(express.json());

// aqui a conexão com o banco de dados
const connection = require ("./db/connection");
connection();

//Rotas
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3030, function(){
    console.log("funfando...")
});