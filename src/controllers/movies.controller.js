
const Movie = require('./../models/movies.model')

exports.find = async (req, res)=> {
  try {
    const movies = await Movie.find({})
    if (!movies.length) {
      return res.status(204).json({
        message: 'No Content'
      })
    }
    return res.status(200).json({
      status: 'success',
      message: `${movies.length} movies founded`,
      data: movies
    })

  }
  catch(err) {
    return res.status(500).json({
      status: 'fail',
      error: `Something went wrong: ${err}`
    })
  }

}

exports.create = async (req, res)=> {
  try{
    const movie = Movie.create(req.body)
    return res.status(201).json({
      status: 'success',
      message: 'New movie added',
      data: movie.title
    })
  }
  catch(err) {
    return res.status(500).json({
      status: 'fail',
      error: `Something went wrong: ${err}`
    })
  }
}

exports.findOne = async (req, res)=> {
  try {
    const movie = await Movie.findById({_id: req.params.id})
    if (!movie) {
      return res.status(204).json({
        message: 'No data'
      })
    }
    return res.status(200).json({
      status: 'success',
      data: movie
    })

  }
  catch(err) {
    return res.status(500).json({
      status: 'fail',
      error: `Something went wrong ${err}`
    })


  }

}


exports.delete = async (req, res)=> {
  try {
    await Movie.deleteOne({_id: req.params.id})  
    return res.status(204).json({
      message: 'No data'
    })
  }
  catch(err) {
    return res.status(500).json({
      status: 'fail',
      message: `Something went wrong: ${err}`
    })
  }
}

exports.update = async (req, res)=> {
  try {
    await Movie.updateOne({_id: req.params.id}, {...req.body})
    return res.status(200).json({
      status: 'success',
      message: 'Movie updated',
    })
  }
  catch(err){
    return res.status(500).json({
      status:'fail',
      message: `Something went wrong: ${err}`
    })
  }


}