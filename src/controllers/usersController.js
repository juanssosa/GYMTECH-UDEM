var conexion = require('../../config/conexion');
var userModel = require('../model/userModel');

module.exports={
    getAllUsers:function(req,res){
        userModel.getAllUsers(conexion,function(err,datos){
            console.log('Usuario enviado!'.bgRed);
            res.send(JSON.stringify(datos));
        });
    },
    insertUser:function(req, res){
        res.send(req.body);
        userModel.insertUser(conexion, req.body, function(err, datos){
            if (err) throw err;
            console.log('Usuario insertado!'.bgRed);
        });
    }
}
