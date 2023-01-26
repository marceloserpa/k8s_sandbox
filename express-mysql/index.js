
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'mysql:3306',
    user     : 'root',
    password : 'mypassword'
    });

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    });

    connection.end();


    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
