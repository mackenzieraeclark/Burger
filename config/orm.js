// mySQL connection
var connection = require("./connection");

// Create an array for question marks
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

// Export ORM to model
module.exports = orm;