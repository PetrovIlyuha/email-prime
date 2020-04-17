import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { GoZap } from 'react-icons/go'
import { connect } from 'react-redux'
import { handleToken } from '../actions'
import './StripeCheckout.css'

const StripePayment = ({ handleToken }) => {
  return (
    <StripeCheckout
      amount={500}
      name="Email Prime"
      description="$5 for 5 email credits"
      token={(token) => handleToken(token)}
      stripeKey={`${process.env.REACT_APP_STRIPE_KEY}`}
    >
      <button className="stripe_btn">
        <GoZap style={{ marginRight: 3 }} />
        {''}
        Get 5 Credits
      </button>
    </StripeCheckout>
  )
}

export default connect(null, { handleToken })(StripePayment)
