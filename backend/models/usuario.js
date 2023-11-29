const mongoose = require("mongoose");

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome: String,
    idade: Number, 
    curso: String, 
    email: String, 
    password: String

},
    { timestamps: true }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;