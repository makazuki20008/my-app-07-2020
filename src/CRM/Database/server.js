// https://stackoverflow.com/questions/55393895/how-to-mysql-database-connection-with-react-js/55394152
// stackoverflow Ramesh S
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const db = require('./config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});

require('./route/customer.route.js')(app);
require('./route/product.route.js')(app);


// Create a Server
var server = app.listen(7071, function () {
 
//   var host = server.address().address
//   var port = server.address().port

    var host = 'localhost';
    var port = 7071;
 
  console.log("App listening at http://%s:%s", host, port)
})