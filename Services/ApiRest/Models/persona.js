var mongo = require('mongoose');
var Esquema = mongo.Schema;

var personaEsquema = new Esquema({
    nombres:{ type: String },
    apellidos:{ type: String },
    documento: { type: Number, required: true },
    edad:{ type: Number },
    fecha: { type:Date, default:Date.now }
});

module.exports = mongo.model('Persona',personaEsquema);