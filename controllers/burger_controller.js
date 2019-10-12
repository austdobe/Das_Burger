var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


    router.get("/", function(req, res){
        burger.selectAll(function(data){
            var dbData = {
                burgers: data
            };
            console.log(dbData);
            res.render("index", dbData);
        }); 
    });
    router.post("/api/burgers", function(req, res){
        burger.insertOne(["burger_name"], [req.body.burger], function(result){
            res.end();
        });
    });





module.exports = router;