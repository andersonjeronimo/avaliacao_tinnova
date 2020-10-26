const express = require('express');
const router = express.Router();

//exercicio 005
const Veiculo = require('../models/veiculo');
let Carro = new Veiculo();

//SELECT
router.get('/', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        console.log('Começou!');
        console.log('SELECT * FROM VEICULOS');
        const veiculos = await db.selectVehicles();
        console.log(veiculos);
        res.status(200).send(veiculos);
    })();
});

//INSERT
router.post('/', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        console.log('Começou!');
        console.log('INSERT INTO VEICULOS');
        console.log(req.body);
        const result = await db.insertVehicle(req.body);
        console.log(result);
        res.status(200).send(result);
    })();
});

router.get('/find', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        console.log('Começou!');
        //TODO
        res.status(200).send({ message: `` });
    })();
});

//SELECT by ID
router.get('/:id', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        console.log('Começou!');
        const id = req.params.id;
        console.log(`SELECT * FROM VEICULOS WHERE idveiculo = ${id}`);
        const veiculo = await db.selectVehicleById(id);
        console.log(veiculo);
        res.status(200).send(veiculo);
    })();
});

//UPDATE
router.put('/:id', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        console.log('Começou!');
        const id = req.params.id;
        console.log('UPDATE VEICULOS');
        console.log(req.body);
        const result2 = await db.updateVehicle(id, req.body);
        console.log(result2);
        res.status(200).send(result2);
    })();
});

router.patch('/:id', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        console.log('Começou!');
        //TODO
        res.status(200).send({ message: `` });
    })();
});

//DELETE 
router.delete('/:id', (req, res) => {
    (async() => {
        const db = require('../../database/db');
        console.log('Começou!');
        console.log('DELETE FROM VEICULOS');
        const id = req.params.id;
        const result3 = await db.deleteVehicle(id);
        console.log(result3);
        res.status(200).send(result3);
    })();
});

module.exports = (app) => app.use('/veiculos', router);