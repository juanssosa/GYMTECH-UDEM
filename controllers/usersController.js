var conexion = require('../config/conexion');
var userModel = require('../model/userModel');
module.exports={
    users:function(req,res){
        userModel.obtener(conexion,function(err,datos){
            console.log('Users Send!');
            res.send(JSON.stringify(datos));
        });
    }
}
