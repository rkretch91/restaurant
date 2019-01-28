var express = require('express');
var router = express.Router();

var restaurant = require("../controllers/bookcontroller.js");

router.get('/create', restaurant.create);

router.post('/save', restaurant.save);

router.get('/show/:id', restaurant.show);

module.exports = router;
