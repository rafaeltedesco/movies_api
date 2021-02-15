const movieRouter = require('./../resources/movies.router')

module.exports = (app)=> {
  app.use('/api/v1/movies', movieRouter)
}