'use strict';

const express = require('express');
const volleyball = require('volleyball');
const { resolve } = require('path');

const app = express();

// logging middleware
app.use(volleyball);

// serve static files from public
app.use('/public', express.static('public'));

// request any page and receive index.html
app.get('/*', (req, res) => res.sendFile(resolve(__dirname, 'index.html')))

// server listening!
app.listen(3000, () => {
  console.log('Server listening on port', 3000);
});
