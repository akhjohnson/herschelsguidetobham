var db = require("../config/db");

exports.all = function() {
    return db.rows("GetPlay()", []);
};

exports.read = function(id) {
    return db.row('GetSingleObjective(?)', [id]);
};

exports.update = function(id) {
    return db.empty("UpdateObjSuccess(?)", [id]);
};