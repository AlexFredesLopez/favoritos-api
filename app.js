'use strict'
var bodyParser = require('body-parser');

var express = require('express');
var app = express();
var api = require("./routes/favorito");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With , Content-Type, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST,OPTIONS,  DELELTE');
    res.header('Allow', 'GET, PUT, POST,OPTIONS,  DELELTE');
    next();
});

app.use('/api', api);

module.exports = app;