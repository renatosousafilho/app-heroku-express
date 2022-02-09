const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).send('pong!')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App is running in port ${PORT}`));