var db = require("../config/db");

exports.all = function() {
    return db.rows("GetCategories()", []);
};

exports.read = function(id) {
    return db.row('GetCategoryByID(?)', [id]);
};