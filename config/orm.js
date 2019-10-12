var connection = require("./connection.js");

function qMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
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
    },

    insertOne: function(table, vals, cb){
        var query = "Insert into " + table + " (burger_name) values (?) ";
        
        console.log("Query " + query);
        // console.log("table " + table);
        // console.log(cols.toString());
        console.log("vals "+ vals);
        console.log("call back " +cb);
        

        connection.query(query, [vals], function(err, result){
            console.log("call back 2" + cb);
            if(err){
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;