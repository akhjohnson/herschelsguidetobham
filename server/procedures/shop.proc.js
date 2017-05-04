var db = require("../config/db");

exports.all = function() {
    return db.rows("GetShop()", []);
};

exports.read = function(id) {
    return db.row('GetSingleObjective(?)', [id]);
};

// exports.read = function(id) {
//     return db.row('GetSingleLocation(?)', [id]);
// };

exports.update = function(id) {
    return db.empty("UpdateObjSuccess(?)", [id]);
};