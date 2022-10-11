const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Contrasena1234',
    database: 'MetAsVIP_Pruebas',
    port: '3306'
});

mysqlConnection.connect( err => {
    if(err){
        console.log('Error en db: ', err);
        return;
    } else {
        console.log('Db ok');
    }
})

module.exports =mysqlConnection;