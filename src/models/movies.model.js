const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
  }
})

module.exports = mongoose.model('Movie', movieSchema)