'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

// middleware
app.use(volleyball);
app.use('/public', express.static('public'));

app.get('/api', function (req, res) {
  console.log('you hit the api')
  res.send('you hit the api');
});

// server listening!
app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});
