const UsuarioModel = require("../models/usuario");

const usuarioController = {
    create: async (req, res) => {
        try {
            const usuario = {
                nome: req.body.nome,
                idade: req.body.idade,
                curso: req.body.curso,
                email: req.body.email,
                password: req.body.password
            }

        } catch (error) {
          console.log(error);

        }
    }
};

module.exports = usuarioController;
