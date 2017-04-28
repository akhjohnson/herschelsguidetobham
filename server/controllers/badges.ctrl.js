var express = require("express");
var procedures = require("../procedures/badges.proc");

var router = express.Router();

router.get('/', function(req, res){
    procedures.all().then(function(success){
        res.send(success);
    }, function(err){
        console.log(err);
        res.status(500).send(err);
    })
});

router.get('/', function(req, res){
    procedures.wins().then(function(success){
        res.send(success);
    }, function(err){
        console.log(err);
        res.status(500).send(err);
    })
});

router.route('/:id')
    .get(function (req, res) {
        procedures.read(req.params.id).then(function (success) {
            res.send(success);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        })
    });

module.exports = router;