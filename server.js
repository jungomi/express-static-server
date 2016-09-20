'use strict';
/* eslint-disable no-console */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');

const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT, 10) || 2323;
const publicDir = process.argv[2] || __dirname;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, '/index.html'));
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log(`Server listening at ${hostname}:${port}`);
console.log(`Serving ${publicDir}`);
app.listen(port, hostname);
