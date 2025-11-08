
const express = require('express')
const app = express()
const port = 3000

app.get('/ping', (req, res) => {

    const mysql = require('mysql');
    const host = 'mysql-service';
    const user = 'root';
    const password = 'test1234';

    console.log(`Trying to connect with: host: ${host} user: ${user} password: ${password} `);


    const connection = mysql.createConnection({
      host     : host,
      user     : user,
      password : password
    });

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) {
      //throw err;
      res.send("Error" + err)
    };
      const result = "The solution is: " + rows[0].solution;
      res.send(result)
    });

    connection.end();


    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
