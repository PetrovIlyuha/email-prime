const keys = require('../config/keys')

const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = (app) => {
  app.post('/api/stripe', (req, res) => {
    stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: '5 Credits for email campaigns',
    })
  })
}
