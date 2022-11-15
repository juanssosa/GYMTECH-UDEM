module.exports={
    getAllReserves:function(conexion, funcion){
        conexion.query("SELECT * FROM reserve", funcion);
    },
    getReserveById:function(conexion, rid, funcion){
        conexion.query("SELECT * FROM reserve WHERE rid=?", [rid], funcion);
    },
    insertReserve:function(conexion, datos, funcion){
        conexion.query("INSERT INTO reserve (rid,date,hour,reserve_status) VALUES (?,?,?,?)", [datos.rid, datos.date, datos.hour, datos.reserve_status],funcion);
    },
    updateReserve: function(conexion, rid, datos ,funcion){
        conexion.query("UPDATE reserve SET date=?,hour=?,reserve_status=? WHERE rid=?", [datos.date, datos.hour, datos.reserve_status, rid], funcion);
    },
    deleteReserve: function(conexion, rid, funcion){
        conexion.query("DELETE FROM reserve WHERE rid = ?", [rid],funcion);
    }
}