var express = require('express');
var procedures = require("../procedures/drink.proc");
var router = express.Router();


router.route('/')
    .get(function (req, res) {
        procedures.all().then(function (success) {
            res.send(success);
        }, function (err) {
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
    })
    .put(function (req, res) {
        procedures.update(req.body).then(function (success) {
            res.status(201).send(success);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        })
    });


module.exports = router;