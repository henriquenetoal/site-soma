var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

function soma(a, b) {
  return a + b;
}

app.get('/', function (req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/soma', function (req, res) {
  var body = req.body;
  var a = Number(body.a);
  var b = Number(body.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Os valores a e b devem ser números.');
  }

  var resultado = soma(a, b);
  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});

var port = 3001;

app.listen(port, function () {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
