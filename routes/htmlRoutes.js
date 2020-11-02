var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // recieve information on all categories
  app.get("/allCategories", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  // will contain posts for specific category
  app.get("/category/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));

  });
  //contain all 'commentss' in the post
  app.get("/whim/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/whim.html"));
  });
  
};
