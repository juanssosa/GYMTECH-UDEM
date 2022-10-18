const colors = require('colors');
var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'40398676',
    database:'gymtech-udem'
});

con.connect(
    (err)=>{
        if(!err){
            console.log('\nConexion con la BD establecida con exito!!!'.bgBlue);
        }else{
            console.log('\nError de conexion!'.bgBlue);
        }
    } 
);

module.exports=con;