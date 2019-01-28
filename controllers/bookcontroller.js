const mongoose = require('mongoose')
const restaurantSchema = require("../models/Restaurant");
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

exports.createBook = async (req, res) => {
  Restaurant.create({
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
  })
  console.log('Restaurant successfully created!')
  res.redirect('/')
}
