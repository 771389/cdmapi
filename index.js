const express = require('express');
const filmes = require('./routes/filmes.json')
const lancamentos = require('./routes/filmesL')
const port = process.env.PORT || 3000;

const app = express();

app.get('/home/filmes', (req,res) => {

    return res.json(filmes)
});

app.get('/home/lancamentos', (req,res) => {

  return res.json(lancamentos)
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
