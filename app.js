const express = require('express')
const app = express()
app.use(express.json())
require('./src/routes/routes')(app)



module.exports = app