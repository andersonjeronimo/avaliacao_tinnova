const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // set response content    
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();
});

//-->rotas
require('./app/controllers/eleicoesController')(app);
require('./app/controllers/ordenacaoController')(app);
require('./app/controllers/matematicaController')(app);

const server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;
    console.log("Teste Tinnova executando na porta: ", port);
});