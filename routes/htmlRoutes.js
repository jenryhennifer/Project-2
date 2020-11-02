var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log(__dirname)
=======
    res.sendFile(path.join(__dirname, "../public/signup.html"));
>>>>>>> 73f378f713b40d7eeb53d1c5b66c7586c55d7428
  });

  // recieve information on all categories
  app.get("/allCategories", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  // will contain posts for specific category
  app.get("/category/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  //contain all 'commentss' in the post
  app.get("/whim/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/whim.html"));
  });
  
};
