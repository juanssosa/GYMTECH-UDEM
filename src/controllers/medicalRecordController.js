var conexion = require('../../config/conexion');
var medicalRecordModel = require('../model/medicalRecordModel');
module.exports={

    getAllMR:function(req,res){
        medicalRecordModel.getAllMR(conexion,function(err,datos){
            console.log('MedicalRecord Send!');
            res.send(JSON.stringify(datos));
        });
    },
    getMRById:function(req,res){
        medicalRecordModel.getMRById(conexion, req.params.mrid, function(err, datos){
            if (err) throw err;
            console.log('Historia medica con id '+req.params.id+'!');
            res.send(JSON.stringify(datos));
        });
    },
    insertMR:function(req, res){
        res.send(req.body);
        medicalRecordModel.insertMR(conexion, req.body, function(err, datos){
            if (err) throw err;
            console.log('Historia medica insertada!'.bgRed);
        });
    },
    updateMR:function(req, res){
        res.send("Historia medica actualizada!");
        medicalRecordModel.updateMR(conexion, req.params.mrid, req.body,function(err, datos){
            if (err) throw err;
            console.log('Historia medica actualizada!'.bgRed);
        });
    },
    deleteMR:function(req, res){
        res.status(200).send("La historia medica ha sido borrada!");
        medicalRecordModel.deleteMR(conexion, req.params.mrid, function(err){
            if (err) throw err;
            console.log('Historia medica borrada!'.bgRed);
        });
    }    
}