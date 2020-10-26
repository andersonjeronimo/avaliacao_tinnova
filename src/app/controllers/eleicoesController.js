const express = require('express');
const router = express.Router();
//exercicio 001
const Eleicoes = require('../models/eleicoes');
const Apuracao = new Eleicoes(1000, 800, 150, 50);

router.get('/apuracao', (req, res) => {
    res.status(200).send({ message: `Votos validos: ${Apuracao.percentualValidos()}%, brancos: ${Apuracao.percentualBrancos()}%, nulos: ${Apuracao.percentualNulos()}%` });
});

module.exports = (app) => app.use('/eleicoes', router);