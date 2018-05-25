var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var logger = require("morgan");

var PORT = process.env.PORT || 8080;
var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger("tiny"));

var routes = require("./controllers/patientsController.js");

app.use(routes);

db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log("Listening on port:8080", PORT);
});
});