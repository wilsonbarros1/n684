const mongoose = require("mongoose");

const { Schema } = mongoose;

const cursoSchema = new Schema({
    descricao: String,
    nomeInstituicao: String

},
    { timestamps: true }
);

const Curso = mongoose.model("Curso", cursoSchema);

module.exports = {
    Curso,
    cursoSchema,

};

