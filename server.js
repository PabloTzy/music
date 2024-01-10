const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Ganti port sesuai keinginan Anda

app.get('/', (req, res) => {
  res.redirect('/funkot.mp3');
});

app.get('/funkot.mp3', (req, res) => {
  const musicPath = path.join(__dirname, 'funkot.mp3');
  res.sendFile(musicPath);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
