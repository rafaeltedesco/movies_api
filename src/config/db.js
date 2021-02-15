const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = async ()=> {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser:true,
      useUnifiedTopology: true
    })
    console.log('Connected')
    return db
  }
  catch(err) {
    console.log(`Connection error: ${err} `)
  }
}

