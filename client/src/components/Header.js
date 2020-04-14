import React from 'react'
import Logo from '../img/Email Prime Logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.css'
import StripePayment from './StripeCheckout'
import { FaGoogle, FaHeartBroken } from 'react-icons/fa'
import { GiSpinningBlades } from 'react-icons/gi'

const Header = ({ auth }) => {
  const renderLoginButton = (auth) => {
    if (auth === null) {
      return (
        <ul>
          <li>
            <a className="login" href="/">
              <GiSpinningBlades style={{ marginRight: 5 }} /> Loading...
            </a>
          </li>
        </ul>
      )
    } else if (auth === false) {
      return (
        <ul>
          <li>
            <a href="/auth/google" className="login">
              <FaGoogle style={{ marginRight: 5 }} />
              {''} Login
            </a>
          </li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li style={{ marginRight: 10 }}>
            <StripePayment />
          </li>
          <li style={{ marginRight: 10 }}>
            <CreditsToll auth={auth} />
          </li>
          <li>
            <a href="/api/logout" className="login">
              <FaHeartBroken style={{ marginRight: 5 }} /> Logout
            </a>
          </li>
        </ul>
      )
    }
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? '/surveys' : '/'} className="left brand-logo">
          <img src={Logo} alt="Brand Logo" />
          Email Prime
        </Link>
        <ul className="right">{renderLoginButton(auth)}</ul>
      </div>
    </nav>
  )
}

const CreditsToll = ({ auth }) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(-45deg, rgb(86, 95, 151) 0%, rgb(86, 95, 151) 63%,rgb(105, 118, 165) 63%, rgb(105, 118, 165) 75%,rgb(125, 141, 179) 75%, rgb(125, 141, 179) 81%,rgb(144, 165, 193) 81%, rgb(144, 165, 193) 85%,rgb(164, 188, 207) 85%, rgb(164, 188, 207) 90%,rgb(183, 211, 221) 90%, rgb(183, 211, 221) 100%)',
        padding: '0 3px',
        fontWeight: 'bold',
        fontFamily: "'Cantarell', sans-serif",
      }}
    >
      {auth.credits > 0 && `Credits: ${auth.credits}`}
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(Header)
