var db = require("../config/db");

exports.all = function() {
    return db.rows("GetPosts()", []);
};

exports.write = function(post) {
    return db.row('InsertPost(?, ?, ?, ?)', [post.title, post.userid, post.categoryid, post.content]);
};

exports.read = function(id) {
    return db.row('GetSinglePost(?)', [id]);
};

exports.update = function(post) {
    return db.empty("UpdatePost(?, ?, ?, ?)", [post.id, post.title, post.categoryid, post.content]);
};

exports.delete = function(id) {
    return db.empty("DeletePost(?)", [id]);
};