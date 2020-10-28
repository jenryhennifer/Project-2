// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, " "));
  });

  app.get("/allCategories", function(req, res) {
    res.sendFile(path.join(__dirname, " "));
  });

  // will contain posts for specific category
  app.get("/category/:id", function(req, res) {
    res.sendFile(path.join(__dirname, " "));
  });

  app.get("/post/:id", function(req, res) {
    res.sendFile(path.join(__dirname, " "));
  });

};
