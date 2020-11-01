// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // app.get("/allCategories", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // will contain posts for specific category
  app.get("/category/:id", function(req, res) {
    console.log('/category/:id');
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/post/:id", function(req, res) {
    console.log('/post/:id');
    res.sendFile(path.join(__dirname, " "));
  });

  app.get("/", function(req, res) {
    console.log('/');
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
