var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            // console.log(res);
            cb(res);
        });

    },
};

module.exports = burger;