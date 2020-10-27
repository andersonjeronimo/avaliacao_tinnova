const express = require('express');
const router = express.Router();

const Matematica = require('../models/matematica');
//exercicio 003
const n1 = 5;
const Operacao1 = new Matematica(n1);
//exercicio 004
const n2 = 10;
const Operacao2 = new Matematica(n2);
const m1 = 3;
const m2 = 5;

router.get('/fatorial', (req, res) => {
    res.status(200).send({ message: `O Fatorial de ${n1} = ${Operacao1.fatorial()}` });
});

router.get('/fatorial/:numero', (req, res) => {
    let n4 = req.params.numero;
    res.status(200).send({ message: `O Fatorial de ${n4} = ${new Matematica(n4).fatorial()}` });
});

router.get('/multiplos', (req, res) => {
    res.status(200).send({ message: `A soma dos naturais abaixo ${n2} que sao multiplos de ${m1} e ${m2} resulta em : ${Operacao2.somaMultiplos(m1, m2)}` });
});

router.get('/multiplos/:valor', (req, res) => {
    let n3 = req.params.valor;
    res.status(200).send({ message: `A soma dos naturais abaixo ${n3} que sao multiplos de ${m1} ou ${m2} resulta em : ${new Matematica(n3).somaMultiplos(m1, m2)}` });
});

module.exports = (app) => app.use('/matematica', router);