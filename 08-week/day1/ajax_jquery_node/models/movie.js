var mongoose = require('mongoose')

var movieSchema = new mongoose.Schema({
  name: String,
  year: Number,
  rating: Number,
})
