const mongoose = require("mongoose");

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome: String,
    idade: Number

},
    { timestamps: true }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;