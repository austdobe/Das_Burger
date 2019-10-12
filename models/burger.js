var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            // console.log(res);
            cb(res);
        });

    },
    insertOne: function(table, vals, cb){
        orm.insertOne("burgers", vals, function(res){
            console.log("Burger vals "+ vals);
            cb(res);
        });
        
    }
};

module.exports = burger;