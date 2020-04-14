const keys = require('../config/keys')
const requireLogin = require('../middlewares/requireLogin')
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: '5 Credits for email campaigns',
    })
    req.user.credits += 5
    const user = await req.user.save()

    res.send(user)
  })
}
