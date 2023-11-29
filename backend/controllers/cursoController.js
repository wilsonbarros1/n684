const { Curso: CursoModel } = require("../models/curso");

const cursoController = {

    create: async (req, res) => {
        try {

            const curso = {
                descricao: req.body.descricao,
                nomeInstituicao: req.body.nomeInstituicao
            };
            const response = await CursoModel.create(curso);
            res.status(201).json({ response, msg: "Curso criado com sucesso!" });


        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const curso = await CursoModel.find();
            res.json(curso);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {

            const id = req.params.id;
            const curso = await CursoModel.findById(id)

            if (!curso) {
                res.status(404).json({ msg: "Curso não encontrado!" })
                return;

            }


            res.json(curso);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {

            const id = req.params.id;
            const curso = await CursoModel.findById(id)

            if (!curso) {
                res.status(404).json({ msg: "Curso não encontrado!" })
                return;

            }

            const deletedCurso = await CursoModel.findByIdAndDelete(id)
            res.status(200).json({ deletedCurso, msg: "Curso excluído" });

        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;

        const curso = {
            descricao: req.body.descricao,
            nomeInstituicao: req.body.nomeInstituicao
        };

        const updatedCurso = await CursoModel.findByIdAndUpdate(id, curso)

        if (!updatedCurso) {
            res.status(404).json({ msg: "Curso não encontrado!" })
            return;

            res.status(200).json({ curso, msg: "Curso Atualizado!" });
        }
    }
};

module.exports = cursoController;