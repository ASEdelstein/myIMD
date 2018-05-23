var express = require("express");

var router = express.Router();
var patients = require("./models/patients.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/patients");
});

router.get("/patients", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { patients_data: patientData });
  });
});

// post route -> back to index
router.post("/patients/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.create(req.body.patient_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/patients/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
