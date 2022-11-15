module.exports={
    getAllMR:function(conexion, funcion){
        conexion.query("SELECT * FROM medical_record", funcion);
    },
    getMRById:function(conexion, mrid, funcion){
        conexion.query("SELECT * FROM medical_record WHERE mrid=?", [mrid], funcion);
    },
    insertMR:function(conexion, datos, funcion){
        conexion.query("INSERT INTO medical_record (mrid,a_medical,a_deportive) VALUES (?,?,?)", [datos.mrid, datos.a_medical, datos.a_deportive], funcion);
    },
    updateMR: function(conexion, mrid, datos ,funcion){
        conexion.query("UPDATE medical_record SET a_medical=?,a_deportive=? WHERE mrid=?", [datos.a_medical,datos.a_deportive,mrid], funcion);
    },
    deleteMR: function(conexion, mrid, funcion){
        conexion.query("DELETE FROM medical_record WHERE mrid = ?", [mrid],funcion);
    }  
}