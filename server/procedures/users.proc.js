var db = require("../config/db");

exports.all = function() {
    return db.rows("GetUsers()", []);
};

exports.read = function(id) {
    return db.row('GetUser(?)', [id]);
};

exports.readByEmail = function(email) {
    return db.row('GetUserByEmail(?)', [email]);
};

exports.delete = function(id) {
    return db.empty("DeleteUser(?)", [id]);
};

exports.create = function(u, hash) {
    return db.row('CreateUser(?, ?, ?, ?)', [u.email, hash, u.firstname, u.lastname]);   
};

exports.update = function(usr) {
    return db.empty("UpdateUser(?, ?, ?, ?)", [usr.id, usr.firstname, usr.lastname, usr.email]);
};