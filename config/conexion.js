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
            console.log('Conexion con la BD establecida!');
        }else{
            console.log('Error de conexion!');
        }
    } 
);

module.exports=con;