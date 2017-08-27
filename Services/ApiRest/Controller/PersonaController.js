'use strict'

var Persona = require('../Models/persona');

function addPersonas(req, res) {
    var param = req.body;
    var model = new Persona();
    
    Persona.find({documento: param.documento},(error, datos)=>{
        if (error) {
            res.status(500).send(error);
        } else if (datos == '') {
                model._id = param.id;
                model.nombres = param.nombres;
                model.apellidos = param.apellidos;
                model.documento = param.documento;
                model.edad = param.edad;
                
                model.save((error, entidad)=>
                {
                    if (error) {
                        res.status(500).send(error);
                    } else if (!entidad) {
                            res.status(400).send('Error al guadar.');
                        } else {
                            res.status(200).send({ personas: entidad, mensaje: 'Se almaceno correctamente.' });
                        }
                });
            } else {
                res.status(200).send({ personas: datos, mensaje: 'El registro ya existe.' });
            }
    });
}

function findById(req, res) {
    Persona.find({ _id: req.params.id}, function(error, datos){
        if (error) {
            res.status(500).send('Sin conexion.');
        } else if (!datos) {
                res.status(400).send('Error al consultar.');
            } else {
                res.status(200).send({ personas: datos, mensaje: 'Consulta exitosa.' });
            }
});
}

function findAllPersonas(req, res) {
    Persona.find({}, (error, datos)=>{
        if (error) {
            res.status(500).send('Sin conexion.');
        } else if (!datos) {
                res.status(400).send('Error al consultar.');
            } else {
                res.status(200).send({ personas: datos, mensaje: 'Consulta exitosa.' });
            }
    });
}

function updatePersonas(req, res) {
    Persona.findByIdAndUpdate(req.body.id, req.body, (error, datos)=>{
        if (error) {
            res.status(500).send('Sin conexion.');
        } else if (!datos) {
                res.status(400).send('Error al consultar.');
            } else {
                res.status(200).send({ personas: datos, mensaje: 'Actualizacion correcta..' });
            }
    });
}

function deleteById(req, res){
    Persona.findByIdAndRemove(req.params.id,(error, datos)=>{
        if (error) {
            res.status(500).send('Sin conexion.');
        } else if (!datos) {
                res.status(400).send('Error al consultar.');
            } else {
                res.status(200).send({ personas: datos, mensaje: 'Actualizacion correcta..' });
            }
    });
}

module.exports = {
    addPersonas,
    findById,
    findAllPersonas,
    updatePersonas,
    deleteById
}