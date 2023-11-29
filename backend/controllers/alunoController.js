const { Aluno: AlunoModel } = require("../models/aluno");

const alunoController = {
    create: async (req, res) => {
        try {
            const aluno = new AlunoModel({
                nome: req.body.nome,
                idade: req.body.idade,
                curso: req.body.curso,
                email: req.body.email,
                password: req.body.password
            });

            // Salvar o aluno no banco de dados
            const savedAluno = await aluno.save();

            // Retornar o aluno salvo
            res.json(savedAluno);
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao criar o aluno no banco de dados");
        }
    },
    getAll: async (req, res) => {
        try {
            const aluno = await AlunoModel.find();
            res.json(aluno);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {

            const id = req.params.id;
            const aluno = await AlunoModel.findById(id)

            if (!aluno) {
                res.status(404).json({ msg: "Aluno não encontrado!" })
                return;

            }


            res.json(aluno);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const aluno = await AlunoModel.findById(id);
    
            if (!aluno) {
                res.status(404).json({ msg: "Aluno não encontrado!" });
                return;
            }
    
            const deletedAluno = await AlunoModel.findByIdAndDelete(id);
            res.status(200).json({ deletedAluno, msg: "Aluno excluído" });
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Erro ao excluir o aluno", error: error.message });
        }
    },
    
    update: async (req, res) => {
        const id = req.params.id;
    
        const aluno = {
            nome: req.body.nome,
            idade: req.body.idade,
            curso: req.body.curso,
            email: req.body.email,
            password: req.body.password
        };
    
        try {
            const updatedAluno = await AlunoModel.findByIdAndUpdate(id, aluno);
    
            if (!updatedAluno) {
                res.status(404).json({ msg: "Aluno não encontrado!" });
                return;
            }
    
            res.status(200).json({ msg: "Aluno Atualizado!" });
        } catch (error) {
            res.status(500).json({ msg: "Erro ao atualizar o aluno", error: error.message });
        }
    }
    
};

module.exports = alunoController;

