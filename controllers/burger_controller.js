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
        burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
            res.json({ id: result.insertId });
        })
    });





module.exports = router;