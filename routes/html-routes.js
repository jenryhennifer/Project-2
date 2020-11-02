var path = require("path");

module.exports = function(app) {

// <<<<<<< indexJs
  // app.get("/allCategories", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("/allCategories", function(req, res) {
    res.sendFile(path.join(__dirname, "/"));
  });
// >>>>>>> main

  // will contain posts for specific category
  app.get("/category/:id", function(req, res) {
    console.log('/category/:id');
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("/whim/:id", function(req, res) {
    console.log('/post/:id');
    res.sendFile(path.join(__dirname, "../public/whim.html"));
  });

  app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

};

