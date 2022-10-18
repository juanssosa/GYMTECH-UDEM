var conexion = require('../config/conexion');
var medicalRecordModel = require('../model/medicalRecordModel');
module.exports={
    medrec:function(req,res){
        medicalRecordModel.obtener(conexion,function(err,datos){
            console.log('MedicalRecord Send!');
            res.send(JSON.stringify(datos));
        });
    }
}