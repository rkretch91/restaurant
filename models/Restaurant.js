const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'You must provide a restaurant name',
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  rating: {
    type: Number
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
})

module.exports = restaurantSchema;
