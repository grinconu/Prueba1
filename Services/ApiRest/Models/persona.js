var mongo = require('mongoose');
var Esquema = mongo.Schema;

var personaEsquema = new Esquema({
    nombres: String,
    apellidos:String,
    documento: Number,
    edad: Number
});

module.exports = mongo.model('Persona',personaEsquema);