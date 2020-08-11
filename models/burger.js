var orm = require("../config/orm.js");

// Use CRUD to call back (cb) the ORM functions
var burger = {
    all: function(cb) {
        orm.all("burgers", function(result) {
            cb(result);
        });
    },
    create: 
}