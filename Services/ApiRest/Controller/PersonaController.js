'use strict'

var Persona = require('../Models/persona');

function guardar(req, res) {
    var param = req.body;
    var model = new Persona();

    model.nombres = param.nombres;
    model.apellidos = param.apellidos;
    model.documento = param.documento;
    model.edad = param.edad;

    model.save((error, entidad)=>
    {
        if (error) {
            res.status(500).send('Sin conexion.');
        } else if (!entidad) {
                res.status(400).send('Error al guadar.');
            } else {
                res.status(200).send({ recurso: entidad, mensaje: 'Se almaceno correctamente.' });
            }
    });
}

module.exports = {
    guardar
}