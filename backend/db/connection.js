const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb+srv://wilsonbarros:Lm5t9UvWk3mfMTfC@cluster0.s7juwvv.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Conectado meu fi")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main