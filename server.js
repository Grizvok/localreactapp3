const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

 app.get('/login', function (req, res) {
   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
 });

 app.get('/register', function (req, res) {
   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
 });

app.listen(port, () => console.log(`Listening on port ${port}`));
