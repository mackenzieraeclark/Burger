// mySQL connection
var connection = require("./connection");

// Create function for an array of question marks
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

// Function to convert object key-value pairs to the SQL syntax
function objToSql(ob){
    var arr = [];

    // Create loop to go through the keys and push string int arr of key/value
    for (var key in ob){
        var value = ob[key];

        // Skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)){
            // Add quotations to strings with spaces
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            // push array
            arr.push(key + "=" + value);
        }
    }

    // return the array ---> one comma separated string!
    return arr.toString();
}

// Create an object for the SQL functions
var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, res) {
        if (err) {
          throw err;
        }
  
        cb(res);
      });
    },
    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, res) {
        if (err) {
          throw err;
        }
  
        cb(res);
      });
    },
    delete: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, res) {
        if (err) {
          throw err;
        }
  
        cb(res);
      });
    }
};

// Export ORM to model
module.exports = orm;