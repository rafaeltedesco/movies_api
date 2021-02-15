require('dotenv').config()
require('./src/config/db')()
const app = require('./app')

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
  console.log(`Server up and running on http://localhost:${PORT}`)
})