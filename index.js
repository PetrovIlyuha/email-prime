const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Mongo DB connected ✅')
)

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

const PORT = process.env.PORT || 4000
app.listen(PORT)
