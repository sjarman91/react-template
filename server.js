'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));

app.get('/api/', function (req, res) {
  console.log('you hit the api')
  res.send('you hit the api');
});

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});
