const router = require("express").Router();

// Rotas de curso
const cursoRouter = require("./curso");

router.use("/", cursoRouter);

// Rotas de aluno
const alunoRouter = require("./aluno");

router.use("/", alunoRouter);

module.exports = router;




