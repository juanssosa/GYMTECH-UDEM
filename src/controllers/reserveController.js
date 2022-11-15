var conexion = require('../../config/conexion');
var reserveModel = require('../model/reserveModel');
module.exports={
    getAllReserves:function(req,res){
        reserveModel.getAllReserves(conexion,function(err,datos){
            console.log('Reserves Send!');
            res.send(JSON.stringify(datos));
        });
    },
    getReserveById:function(req,res){
        reserveModel.getReserveById(conexion, req.params.rid, function(err, datos){
            if (err) throw err;
            console.log('Reserva con id '+req.params.rid+'!');
            res.send(JSON.stringify(datos));
        });
    },
    insertReserve:function(req, res){
        res.send(req.body);
        reserveModel.insertReserve(conexion, req.body, function(err, datos){
            if (err) throw err;
            console.log('Reserva insertada!'.bgRed);
        });
    },
    updateReserve:function(req, res){
        res.send("Reserva actualizada!");
        reserveModel.updateReserve(conexion, req.params.rid, req.body,function(err, datos){
            if (err) throw err;
            console.log('Reserva actualizada!'.bgRed);
        });
    },
    deleteReserve:function(req, res){
        res.status(200).send("La reserva ha sido borrada!");
        reserveModel.deleteReserve(conexion, req.params.rid, function(err){
            if (err) throw err;
            console.log('Reserva borrada!'.bgRed);
        });
    }    
}
