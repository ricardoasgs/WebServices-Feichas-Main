var app = require('./config/app_config');
var Request = require('request');


app.use('/', function (req, res) {
    var nome = req.body.nome;
    var telefone = req.body.telefone;
    var email = req.body.email;
    var cep = req.body.cep;
    var rua = req.body.rua;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var estado = req.body.estado;
    Request.post('http://localhost:8100/clientes/cadastrar/', nome, telefone, email, cep, rua, bairro, cidade, estado, function (error, response, body) {
        res.json(response);
    });
});
