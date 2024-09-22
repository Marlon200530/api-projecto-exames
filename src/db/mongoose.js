const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis do .env

const url = process.env.MONGO_URL;

console.log(url);

async function main() {
    try {
        if (!url) throw new Error('URL de conexão não definida');
        await mongoose.connect(`${url}/Jornadas-Cientificas-I`);
        console.log('Conectado com sucesso ao MongoDB');
    } catch (error) {
        console.error('Erro ao Conectar a Base de Dados:', error.message);
    }
}

main();
