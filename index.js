const express = require('express')
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
require('./services/passport')

const PORT = process.env.PORT || 4000

const app = express()
require('./routes/authRoutes')(app)
app.use(morgan('combined'))
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})
