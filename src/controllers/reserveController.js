var conexion = require('../../config/conexion');
var reserveModel = require('../model/reserveModel');
module.exports={
    reserves:function(req,res){
        reserveModel.obtener(conexion,function(err,datos){
            console.log('Reserves Send!');
            res.send(JSON.stringify(datos));
        });
    }
}
