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

// Export ORM to model
module.exports = orm;