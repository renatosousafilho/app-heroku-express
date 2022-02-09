const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).send('pong!')
})

app.listen(3000);