'use strict'

var express = require('express');
var body = require('body-parser');
var app = express();

//Cargar Rutas
var persona = require('./Routes/Persona');

app.use(body.urlencoded({ extended: false }));
app.use(body.json());

app.use('/api', persona);

module.exports = app;