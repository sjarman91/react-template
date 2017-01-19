'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const app = express();

// logging middleware
app.use(morgan('dev'));

// parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// serve static files from public
app.use('/public', express.static('public'));

// send index.html
app.get('/', (req, res) => res.sendFile(resolve(__dirname, '../index.html')));

// error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// last stop, 404
app.use((req, res, next) => {
  res.sendStatus(404)
});

// server listening!
app.listen(3000, () => {
  console.log('Server listening on port', 3000);
});
