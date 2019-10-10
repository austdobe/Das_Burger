var connection = require("../config/connection.js");


var orm = {
    selectAll: function(tableInput, cb){
        // console.log("orm "+ cb);
        var query = "SELECT * FROM " + tableInput+";";
        connection.query(query, function(err, result){
            // console.log("orm2" + cb);
            if(err){
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;