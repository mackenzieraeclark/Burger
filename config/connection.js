var mysql = require("mysql");

require("dotenv").config();
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.send.JAWSDB_URL);
} else {
    connection = mysqyl.createConnection(process.env.production);
};

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Export connection
module.exports = connection;