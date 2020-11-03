var express = require('express');
var passport = require('passport');
var app = express();
var PORT = process.env.PORT || 8080;
var db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/html-routes.js')(app);
require('./routes/categoryApiRoutes.js')(app);
require('./routes/whimApiRoutes.js')(app);
require('./routes/commentApiRoutes.js')(app);
require('./routes/userApiRoutes.js')(app);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});
