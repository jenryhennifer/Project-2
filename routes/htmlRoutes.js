var path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });

  app.get('/allCategories', function (req, res) {
    res.sendFile(path.join(__dirname, ''));
  });

  app.get('/category/:id', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/main.html'));
  });
  app.get('/whim/:id', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/whim.html'));
  });
};
