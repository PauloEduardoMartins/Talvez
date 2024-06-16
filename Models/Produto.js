const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    id: { type: Number, required: true, unique: true }, 
    nome: String ,
    descricao: String,
    cor: String ,
    peso: Number,
    tipo: String ,
    preço: Number,
    Data_cadastro: Number,
});

module.exports = Produto;