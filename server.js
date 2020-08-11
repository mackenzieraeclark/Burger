var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Route to controller
var routes = require("./controllers/burger_controller.js");

app.use(routes);

// Start listening for client requests on server
app.listen(PORT, function() {
  // Log (server-side) so user can open port
  console.log("Server listening on: http://localhost:" + PORT);
});