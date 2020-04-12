import React from 'react'
import Logo from '../img/Email Prime Logo.png'
import { connect } from 'react-redux'
import './Header.css'

const Header = ({ auth }) => {
  console.log(auth)
  const renderLoginButton = (auth) => {
    if (auth === null) {
      return (
        <a className="login" href="/">
          Loading...
        </a>
      )
    } else if (auth === false) {
      return (
        <a href="/auth/google" className="login">
          Login with Google
        </a>
      )
    } else {
      return (
        <a href="/api/logout" className="login">
          Logout
        </a>
      )
    }
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          <img src={Logo} alt="Brand Logo" />
          Email Prime
        </a>
        <ul className="right">
          <li>{renderLoginButton(auth)}</li>
        </ul>
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
