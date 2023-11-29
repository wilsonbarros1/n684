const mongoose = require("mongoose");

const { Schema } = mongoose;

const alunoSchema = new Schema({
    nome: String,
    idade: String, 
    curso: String, 
    email: String, 
    password: String

},
    { timestamps: true }
);

const Aluno = mongoose.model("Aluno", alunoSchema);

module.exports = {
    Aluno,
    alunoSchema,
};