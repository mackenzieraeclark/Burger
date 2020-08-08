var mysql = require("mysql");
require("dotenv").config();
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.send.JAWSDB_URL);
} else {
    connection = mysqyl.createConnection(process.env.production);
};


//