const express = require('express');
const router = express.Router();

//exercicio 002
const Ordenacao = require('../models/ordenacao');
const Sort = new Ordenacao([5, 3, 2, 4, 7, 1, 0, 6]);

router.get('/bubblesort', (req, res) => {
    res.status(200).send({ message: `Vetor ordenado: {${Sort.bubbleSort()}}` });
});

module.exports = (app) => app.use('/ordenacao', router);