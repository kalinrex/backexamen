const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    user        : 'root',
    password    : 'kalinsanqwe123',
    host        : 'localhost',
    database    : 'cliente'
});

mysqlConnection.connect((error) => {
    if(error){
        console.log(error);
        return
    }else{
        console.log('Db Connect');
    }
});

module.exports = mysqlConnection;