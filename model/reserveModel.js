module.exports={
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM reserve", funcion);
    }
}