const mongoose = require('mongoose')
const restaurantSchema = require("../models/Restaurant");
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

const restaurantController = {}

restaurantController.create = function(req, res) {
  res.render("../views/restaurants/create");
};

restaurantController.save = function(req, res) {
  let resto = new Restaurant({
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
  })
  resto.save((err) => {
    if(err) {
      console.log(err);
      res.render("restaurants/create");
    } else {
      console.log("Successfully created a restaurant.");
      res.redirect("/restaurants/show/"+resto._id);
    }
  })
}

restaurantController.show = function(req, res) {
  Restaurant.findOne({_id: req.params.id}).exec(function (err, restaurant) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/restaurants/show", {restaurant: restaurant});
    }
  });
};

module.exports = restaurantController

