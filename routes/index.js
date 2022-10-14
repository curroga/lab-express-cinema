const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {

  Movies.find()
  .then((response) => {
    console.log(response)
    res.render("movies.hbs", {
      allMovies: response
    })

  })
  .catch((err) => {
    next(err)
  })

})
router.get("/movie/:movieId", (req, res, next) => {

  const {movieId} = req.params
  Movies.findOne({"_id": movieId})
  .then((response) => {
    console.log(response)
    res.render("movie-details.hbs", {
      allMovies: response
    })

  })
  .catch((err) => {
    next(err)
  })

})


module.exports = router;
