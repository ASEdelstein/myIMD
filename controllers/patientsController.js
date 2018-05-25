
var exports = module.exports = {}
var express = require("express");
var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/patients");
});

router.get("/patients", function(req, res) {
  // express callback response by calling patient.selectAllPatients
  // patients.all(function(patientsData) {
  //   // wrapper for orm.js that using MySQL query callback will return patient_data, render to index with handlebar
    res.render("index", { });
  });


// post route -> back to index
router.post("/patients/create", function(req, res) {
  // takes the request object using it as input for patient.addPatient
  db.Patients.create(req.body) .then(function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.send("You Added A Patient");
    // res.redirect("/");
  });
});

// put route -> back to index
// router.put("/patients/:id", function(req, res) {
//   patients_data.update(req.params.id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     // Send back response and let page reload from .then in Ajax
//     res.sendStatus(200);
//   });
// });

module.exports = router;
