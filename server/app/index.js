const express = require('express');
const routes = require('./routings');
const middlewares = require('./middlewares');

const app = express();

app.use(middlewares);
app.use('/', routes);

module.exports = app;