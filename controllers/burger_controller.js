// Set up imports
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create routes
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

// This route will display all burgers
router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var burgersData = {
        burgers: data
    };
    console.log(burgersData);
    res.render("index", burgersData);
    });
});

// Using post for api
router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", 
    ], [
      req.body.name, 
    ], function(res) {
      
        // Send back ID
      res.redirect("/burgers");
    });
});

// Using put for id
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    //console.log("condition", condition);
  
    // Using update
    burger.update({
       devoured: "true"
    }, condition, function(res) {
      if (res.changedRows == 0) {
        // 404 for no ID
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Using delete
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(res) {
      if (res.affectedRows == 0) {
        // 404 for no ID
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export for server
module.exports = router;