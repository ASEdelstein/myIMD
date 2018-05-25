// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the patients
  app.get("/api/patients", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Patients.findAll({}).then(function(dbPatients) {
      // We have access to the patient as an argument inside of the callback function
      res.render("index", { });
    });
  });

  // POST route for saving a new todo
  app.post("/patients", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Patients.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbPatients) {
      // We have access to the new patient as an argument inside of the callback function
      res.json(dbPatients);
    });
  });

  // DELETE route for deleting patients. We can get the id of the patient to be deleted from
  // req.params.id
  app.delete("/api/patients/:id", function(req, res) {
    // We just have to specify which patient we want to destroy with "where"
    db.Patients.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPatients) {
      res.json(dbPatients);
    });

  });

  // PUT route for updating patients. We can get the updated patients data from req.body
  app.put("/api/patients", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Patients.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPatients) {
      res.json(dbPatients);
    });
  });

};