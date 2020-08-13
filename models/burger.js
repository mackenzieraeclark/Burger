let orm = require("../config/orm.js");

// Use CRUD for the ORM functions
let burger = {
    all: function(db) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, db){
        orm.create("burgers", cols, vals, function(res){
            db(res);
        });
    },
    update: function(objColVals, condition, db){
        orm.update("burgers", objColVals, condition, function(res){
            db(res);
        });
    }
};

// Export to controller
module.exports = burger;