const router = require("express").Router();

const usuarioController = require("../controllers/usuarioController");

router.route("/usuario").post((req, res) => usuarioController.create(req, res));

module.exports = router;