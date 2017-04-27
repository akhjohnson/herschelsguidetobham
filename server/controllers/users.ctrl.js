var express = require("express");
var procedures = require("../procedures/users.proc");
var auth = require("../middleware/auth.mw");
var passport = require("passport");
var utils = require("../config/utils");

var router = express.Router();

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            console.log(err); return res.sendStatus(500);
        }
        if (!user) {
            return res.status(401).send(info);
        }
        req.logIn(user, function (err) {
            if (err) { return res.sendStatus(500); }
            else { return res.send(user); }
        });
    })(req, res, next);
});

router.get("/logout", function (req, res) {
    req.session.destroy(function () {
        req.logOut();
        res.sendStatus(204);
    })
});

router.get("*", auth.isLoggedIn);

// IF THE URL IS LOCALHOST:3000/API/USERS/
router.route('/')
    .get(function (req, res) {
        procedures.all().then(function (users) {
            res.send(users);
        }, function (err) {
            res.status(500).send(err);
        })
    })
    .post(function (req, res) {
        var u = req.body;
        utils.encryptPassword(u.password).then(function (hash) {
            console.log(hash);
            procedures.create(u, hash).then(function (id) {
                res.send(id);
            }, function (err) {
                console.log(err);
                res.status(500).send(err);
            })
        });
    });

router.get("/me", function (req, res) {
    res.send(req.user);
});

router.route('/:id')
    .get(auth.isLoggedIn, function (req, res) {
        procedures.read(req.params.id).then(function (user) {
            // res.sendStatus(204);
            res.send(user);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        })
    })
    .put(auth.isLoggedIn, function (req, res) {
        procedures.update(req.body).then(function (success) {
            res.sendStatus(204);
        }, function (err) {
            console.log(err);
            res.status(204).send(err);
        })
    });

module.exports = router;