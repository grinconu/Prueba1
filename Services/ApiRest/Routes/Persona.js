'use strict'

var api = require('express').Router();
var personaController = require('../Controller/PersonaController');

api.get('/personas',personaController.findAllPersonas);
api.post('/personas', personaController.addPersonas);
api.put('/personas',personaController.updatePersonas);
api.get('/personas/:id',personaController.findById);
api.delete('/personas/:id',personaController.deleteById);

module.exports = api;