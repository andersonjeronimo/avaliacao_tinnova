const express = require('express');
const router = express.Router();
const url = require('url');

//exercicio 005
// const Veiculo = require('../models/veiculo');
// let Carro = new Veiculo();

//http://www.fipeapi.appspot.com/api/1/carros/marcas.json

//SELECT
router.get('/', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        const veiculos = await db.selectVehicles();
        res.status(200).send(veiculos);
    })();
});

//SELECT_BY_QUERY_STRING
router.get('/find', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        const queryObject = url.parse(req.url, true).query;
        const veiculos = await db.selectVehiclesByField(queryObject);
        res.status(200).send(veiculos);
    })();
});

//INSERT
router.post('/', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        const result = await db.insertVehicle(req.body);
        res.status(200).send(result);
    })();
});

//SELECT by ID
router.get('/:id', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        const id = parseInt(req.params.id);
        const veiculo = await db.selectVehicleById(id);
        res.status(200).send(veiculo);
    })();
});

//UPDATE
router.put('/:id', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        const id = parseInt(req.params.id);
        let result = await db.updateVehicle(id, req.body);
        res.status(200).send(result);
    })();
});

router.patch('/:id', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        const id = parseInt(req.params.id);
        let result = await db.updateVehiclePartial(id, req.body);
        res.status(200).send(result);
    })();
});

//DELETE 
router.delete('/:id', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        const id = parseInt(req.params.id);
        let result = await db.deleteVehicle(id);
        res.status(200).send(result);
    })();
});

module.exports = (app) => app.use('/veiculos', router);