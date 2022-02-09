const express = require('express');

const app = express();

const SERVER_ENV = process.env.SERVER_ENV;

app.get('/', (req, res) => {
  res.status(200).send(`Hello, heroku! Running in ${SERVER_ENV} enviroment!`)
});

app.get('/ping', (req, res) => {
  res.status(200).send('pong!')
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Renato', role: 'P. Especialista' },
    { id: 2, name: 'Kissyla', role: 'P. Instrutora' },
    { id: 3, name: 'Italo', role: 'P. Instrutora' }
  ]);
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App is running in port ${PORT}`));