const mysql = require('mysql');  
const fs = require('fs');

const connection = mysql.createConnection(  
    {
        host: 'sl-us-south-1-portal.26.dblayer.com',
        port: 41601,
        user: 'admin',
        password: 'ZDDRLPWXMQEAGXRC',
        ssl: {
            ca: fs.readFileSync(__dirname + '/cert.crt')
        }
});

connection.query('SHOW DATABASES', (err, rows) => {  
    if (err) throw err;
    console.log('Connected!');
    for (let i = 0, len = rows.length; i < len; i++) {
        console.log(rows[i]['Database'])
    }
});

connection.query('CREATE DATABASE IF NOT EXISTS node_mysql_test',function (error, results) {
  if (error) throw error;
  console.log(results);
});