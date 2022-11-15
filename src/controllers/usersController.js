var conexion = require('../../config/conexion');
var userModel = require('../model/userModel');

module.exports={
    getAllUsers:function(req,res){
        userModel.getAllUsers(conexion,function(err,datos){
            console.log('Usuario enviado!'.bgRed);
            res.send(JSON.stringify(datos));
        });
    },
    getUserById:function(req,res){
        userModel.getUserById(conexion, req.params.id, function(err, datos){
            if (err) throw err;
            console.log('Usuario con id '+req.params.id+'!');
            res.send(JSON.stringify(datos));
        });
    },
    insertUser:function(req, res){
        res.send(req.body);
        userModel.insertUser(conexion, req.body, function(err, datos){
            if (err) throw err;
            console.log('Usuario insertado!'.bgRed);
        });
    },
    updateUser:function(req, res){
        res.send("Usuario actualizado!");
        userModel.updateUser(conexion, req.params.id, req.body,function(err, datos){
            if (err) throw err;
            console.log('Usuario actualizado!'.bgRed);
        });
    },
    deleteUser:function(req, res){
        res.status(200).send("El usuario ha sido borrado!");
        userModel.deleteUser(conexion, req.params.id, function(err){
            if (err) throw err;
            console.log('Usuario borrado!'.bgRed);
        });
    }    
}
