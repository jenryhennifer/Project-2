var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "../public/login.html"));
  })
  app.get("/main", function(req, res){
    res.sendFile(path.join(__dirname, "../public/main.html"));
  })
  app.get("/category/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });
  app.get("/whims", function(req, res){
    res.sendFile(path.join(__dirname, "../public/whims.html"));
  })
  app.get("/whim/:id",function(req, res) {
    res.sendFile(path.join(__dirname, "../public/whim.html"));
  })
  app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  })
  app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "../public/about.html"));
  })
};

