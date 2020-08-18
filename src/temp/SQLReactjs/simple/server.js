const express = require('express');
const mysql = require('mysql');
const app = express();
var cors = require('cors');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactMySQL'
});

connection.connect(function(err){
  (err) ? console.log(err) : console.log(connection);
});

app.use(cors());

app.get('/api/customer', (req, res) => {
  var sql = "SELECT * FROM customer";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({customers: results});
  });
});

app.get('/api/customer/:customerId',function(req,res){
  console.log(req.params);
  console.log(req.params.customerId);
  
 res.send("Path parameters printed to console");
});

app.listen(4000, () => console.log('App listening on port 4000'));