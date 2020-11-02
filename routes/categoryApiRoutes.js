var db = require("../models");

module.exports = function(app) {
  app.get("/api/category", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    console.log('categoryApiGet');
    db.Category.findAll({
      include: [db.Whim]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.get("/api/category/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    console.log('categoryApiIDGet');
    db.Category.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Whim]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.post("/api/category", function(req, res) {
    console.log('categoryGet');
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.delete("/api/category/:id", function(req, res) {
    console.log('categoryDeleteGet');
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

};
