const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars:[String],
  image: String,
  description: String,
  showTimes: [String]
})

const Movies = mongoose.model("Movies", movieSchema)

module.exports = Movies