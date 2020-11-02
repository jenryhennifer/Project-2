
var express = require("express");
var session = require("express-session");
var passport = require('passport');
require('./config/passport');
// var passport = require("./config/passport");


var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
//saves track of user login
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

app.use(passport.initialize());

app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/categoryApiRoutes.js")(app);
require("./routes/whimApiRoutes.js")(app);
require("./routes/commentApiRoutes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
