var express = require("express");
var passport = require("passport");
var session = require("express-session");
var mySQLStore = require("express-mysql-session")(session);
var LocalStrategy = require("passport-local").Strategy;
// var userProc = require("../procedures/users.proc");
var pool = require("./db").pool;

function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (email, password, done) {
        userProc.readByEmail(email).then(function (user) {
            if (!user) {
                //done is a built-in thing for passport
                return done(null, false);
            }
            if (user.password !== password) {

                return done(null, false, { message: 'Nope!' });
            }
            //here null is a placeholder for where err goes (like err,success) - but we don't want to throw err messages, so we use null because only user will show up unless it meets the if/if criteria above
            return done(null, user);
        }, function (err) {
            return done(err);
            throw err;
        });
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    })
    passport.deserializeUser(function(id, done) {
        userProc.read(id).then(function(user) {
            done(null, user);
        }, function(err) {
            done(err);
        })
    })

    var sessionStore = new mySQLStore({
        createDatabaseTable: true
    }, pool);

    app.use(session({
        secret: "randomly-generated string!",
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    }))
    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = configurePassport;