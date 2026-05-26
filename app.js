var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

// --- FUNÇÕES MATEMÁTICAS ---
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}


// --- ROTAS ---
app.get('/', function (req, res) {
  res.send('Oi, mundo :-)');
});

// Rota de Soma
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

// Rota de Subtração
app.post('/subtracao', function (req, res) {
  var body = req.body;
  var a = Number(body.a);
  var b = Number(body.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Os valores a e b devem ser números.');
  }

  var resultado = subtracao(a, b);
  res.send(`O resultado da subtração de ${a} e ${b} é ${resultado}`);
});

// Rota de Multiplicação
app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var a = Number(body.a);
  var b = Number(body.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Os valores a e b devem ser números.');
  }

  var resultado = multiplicacao(a, b);
  res.send(`O resultado da multiplicação de ${a} e ${b} é ${resultado}`);
});

// Rota de Divisão
app.post('/divisao', function (req, res) {
  var body = req.body;
  var a = Number(body.a);
  var b = Number(body.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Os valores a e b devem ser números.');
  }
  
  if (b === 0) {
    return res.status(400).send('Não é possível dividir por zero.');
  }

  var resultado = divisao(a, b);
  res.send(`O resultado da divisão de ${a} por ${b} é ${resultado}`);
});


// --- INICIALIZAÇÃO DO SERVIDOR ---
var port = 3001;

app.listen(port, function () {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

