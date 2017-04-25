var db = require("../config/db");

exports.all = function() {
    return db.rows("GetAllLocations()", []);
};

exports.read = function(id) {
    return db.row('GetSingleLocation(?)', [id]);
};