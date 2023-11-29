const router = require("express").Router();

// Rotas de curso
const cursoRouter = require("./curso");

router.use("/", cursoRouter);

// Rotas de usuario
const usuarioRouter = require("./usuario");

router.use("/", usuarioRouter);


module.exports = router;




