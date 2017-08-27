'use strict'

var mongoose = require('mongoose');
var api = require('./app');
var port = process.env.PORT || 2200;

mongoose.connect('mongodb://admin:pass1word@ds157873.mlab.com:57873/pruebas1',(error, res)=>
{
    if(error)
        {
            throw error;
        }
        else
            {
                console.log('Conexion correcta.');
                api.listen(port,()=>{
                    console.log('ApiRest escuchando.');
                })
            }
});