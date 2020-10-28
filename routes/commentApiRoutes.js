var db = require('../models');

module.exports = function(app){
    app.get('/api/comment',function(req,res){
        var query = {};
        if(req.query.whim_id){
            query.WhimId = req.query.whim_id;
        }
        db.Comment.findAll({
            where: query,
            include: [db.Whim]
        }).then(function(dbComment){
            res.json(dbComment)
        })
    });

    app.get('/api/comment/:id',function(req,res){
        db.Comment.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Whim]
        }).then(function(dbComment){
            res.json(dbComment)
        })
    })

    app.post('/api/comment',function(req,res){
        db.Comment.create(req.body).then(function(dbComment){
            res.json(dbComment)
        })
    })

    app.delete('/api/comment/:id', function(req,res){
        db.Comment.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbComment){
            res.json(dbComment);
        });
    });

    app.put('/api/comment',function(req,res){
        app.Comment.update(
            req.body,{
                where: {
                    id: req.body.id
                }
            }).then(function(dbComment){
                res.json(dbComment)
            })
    })
}