const express = require('express')
const router = express.Router()
const moviesController = require('./../controllers/movies.controller')


router.route('/')
.get(moviesController.find)
.post(moviesController.create)

router.route('/:id')
.get(moviesController.findOne)
.delete(moviesController.delete)
.put(moviesController.update)

module.exports = router