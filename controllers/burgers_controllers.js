var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(dbBurger) {
    res.render("index", {burgers: dbBurger});
    });
  });

router.post("/", function(req, res) {
   db.burgers.create({
      burger_name: req.body.burger_name,
     devoured: req.body.devoured
    }).then(function(dbBurger) {

        res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
     db.burgers.update({
      devoured: req.body.devoured
    },
    {
      where : {
        id : req.params.id}
      }).then(function(dbBurger) {
        res.redirect("/");
    });
  });

module.exports = router;
