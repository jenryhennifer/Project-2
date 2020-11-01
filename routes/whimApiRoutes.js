var db = require("../models");


module.exports = function(app) {

  app.get("/api/whim", function(req, res) {
    var query = {};
    if (req.query.category_id) {
      query.CategoryID = req.query.category_id;
    }
    db.Whim.findAll({
      where: query,
      include: [db.Category]
    }).then(function(dbWhim) {
      res.json(dbWhim);
    });
  });

  app.get("/api/whim/:id", function(req, res) {
    db.Whim.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Category]
    }).then(function(dbWhim) {
      res.json(dbWhim);
    });
  });

  app.post("/api/whim", function(req, res) {
    db.Whim.create(req.body).then(function(dbWhim) {
      res.json(dbWhim);
    });
  });

  app.delete("/api/whim/:id", function(req, res) {
    db.Whim.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWhim) {
      res.json(dbWhim);
    });
  });

  app.put("/api/whim", function(req, res) {
    db.Whim.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbWhim) {
      res.json(dbWhim);
    });
  });
};
