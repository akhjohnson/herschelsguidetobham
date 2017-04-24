var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "35.184.199.29",
    user: "team2",
    password: "teamfnawesome",
    database: "herschelsguide"
});

exports.pool = pool;

console.log(pool);

//a mysql query that has zero return values - so an empty query
exports.empty = function(procedure, values) {
    return sendQuery(procedure, values).then(function(){
        return;
    });
};

// a mysql query that returns just a single row of data
exports.row = function(procedure, values) {
    return sendQuery(procedure, values).then(function(resultSets) {
        return resultSets[0][0];
    });
};

//mysql query that returns multiple rows
exports.rows = function(procedure, values) {
    return sendQuery(procedure, values).then(function(resultSets) {
        return resultSets[0];
    });
};

function sendQuery(procedure, values) {
    return new Promise(function (fulfill, reject) {
        //WE CONNECT TO THE POOL THAT WE'VE CREATED ABOVE
        pool.getConnection(function (err, connection) {
            //IF THERE'S AN ERROR CONNECTING, REJECT OUR PROMISE WITH THAT ERROR
            if (err) {
                reject(err);
                //OTHERWISE...
            } else {
                connection.query("CALL " + procedure, values, function (err, resultSets) {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        fulfill(resultSets);
                    }
                })
            }
        });
    });
};