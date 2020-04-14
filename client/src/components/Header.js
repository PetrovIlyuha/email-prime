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

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(Header)
