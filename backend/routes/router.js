const router = require("express").Router();

// Rotas de cursos
const cursoRouter = require("./curso");

router.use("/", cursoRouter);


module.exports = router;




