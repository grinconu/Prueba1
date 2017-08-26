'use strict'

var api = require('express').Router();
var personaController = require('../Controller/PersonaController');

api.post('/persona', personaController.guardar);

module.exports = api;