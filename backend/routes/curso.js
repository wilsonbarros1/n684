const router = require("express").Router();

const cursoController = require("../controllers/cursoController");

router.route("/curso").post((req, res) => cursoController.create(req, res));

router.route("/curso").get((req, res) => cursoController.getAll(req, res));

router.route("/curso/:id").get((req, res) => cursoController.get(req, res));

router.route("/curso/:id").delete((req, res) => cursoController.delete(req, res));

router.route("/curso/:id").put((req, res) => cursoController.update(req, res));

module.exports = router;