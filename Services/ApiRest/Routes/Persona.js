'use strict'

var api = require('express').Router();
var personaController = require('../Controller/PersonaController');

api.get('/personas',personaController.findAllPersonas);
api.post('/personas', personaController.addPersonas);
api.put('/personas',personaController.updatePersonas);
api.get('/personas/:id',personaController.findById);
api.delete('/personas/:id',personaController.deleteById);

api.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-with, Content-Type,Accept,Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE')
    
    next();
});

module.exports = api;