var db = require("../config/db");

exports.all = function() {
    return db.rows("GetAllUsers()", []);
};

exports.read = function(id) {
    return db.row('GetUserById(?)', [id]);
};

exports.readByEmail = function(email) {
    return db.row('GetUserByEmail(?)', [email]);
};

exports.create = function(u, hash) {
    return db.row('NewUser(?, ?, ?)', [u.email, hash, u.name]);   
};

exports.update = function(usr) {
    return db.empty("UpdateUser(?, ?, ?)", [usr.id, usr.name, usr.email]);
};