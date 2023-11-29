const router = require("express").Router();

const alunoController = require("../controllers/alunoController");

router.route("/aluno").post((req, res) => alunoController.create(req, res));

router.route("/aluno").get((req, res) => alunoController.getAll(req, res));

router.route("/aluno/:id").get((req, res) => alunoController.get(req, res));

router.route("/aluno/:id").delete((req, res) => alunoController.delete(req, res));

router.route("/aluno/:id").put((req, res) => alunoController.update(req, res));

module.exports = router;