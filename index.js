const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
require('./models/User')
require('./services/passport')
const keys = require('./config/keys')

const PORT = process.env.PORT || 4000

mongoose.connect(
  keys.mongoURI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => {
    console.log(`DB connected ✅`)
  }
)

const app = express()
require('./routes/authRoutes')(app)
app.use(morgan('combined'))
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})
