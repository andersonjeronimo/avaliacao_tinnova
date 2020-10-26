const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Bem vindo!',
        endpoints: [
            '/ordenacao/bubblesort',
            '/matematica/fatorial',
            '/matematica/multiplos',
            '/eleicoes/apuracao',
            '[GET]/veiculos',
            '[GET]/veiculos/find',
            '[GET]/veiculos/{id}',
            '[POST]/veiculos',
            '[PUT]/veiculos/{id}',
            '[PATCH]/veiculos/{id}',
            '[DELETE]/veiculos/{id}'
        ]
    });
});

//-->rotas
require('./app/controllers/eleicoesController')(app);
require('./app/controllers/ordenacaoController')(app);
require('./app/controllers/matematicaController')(app);
require('./app/controllers/veiculosController')(app);

const server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;
    console.log("Teste Tinnova executando na porta: ", port);
});