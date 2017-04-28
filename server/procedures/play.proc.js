var db = require("../config/db");

exports.all = function() {
    return db.rows("GetPlay()", []);
};

exports.read = function(id) {
    return db.row('GetSingleObjective(?)', [id]);
};

exports.update = function(play) {
    return db.empty("UpdateObjSuccess(?)", [play.id, play.obj_success]);
};