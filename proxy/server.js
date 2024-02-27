const express = require('express');
const axios = require('axios');

const app = express();
const port = 4123;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/games', async (req, res) => {
    try {
      const response = await axios.get('https://www.freetogame.com/api/games');
      res.json(response.data);
    } catch (error) {
      console.error('Erro ao obter os jogos:', error);
      res.status(500).json({ error: 'Erro ao obter os jogos' });
    }
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});