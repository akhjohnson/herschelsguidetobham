var db = require("../config/db");

exports.all = function() {
    return db.rows("GetAllBadges()", []);
};

exports.read = function(id) {
    return db.row('GetBadgeById(?)', [id]);
};

exports.wins = function() {
    return db.rows("GetSuccess()", []);
};