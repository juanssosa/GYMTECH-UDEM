var mysql = require('mysql');
const colors = require('colors');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'40398676',
    database:'gymtech-udem'
});

con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion con la BD establecida con exito!!!'.yellow);
        }else{
            console.log('Error de conexion!'.yellow);
        }
    } 
);

module.exports=con;