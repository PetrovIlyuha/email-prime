import React from 'react'
import Logo from '../img/Email Prime Logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.css'

const Header = ({ auth }) => {
  const renderLoginButton = (auth) => {
    if (auth === null) {
      return (
        <a className="login" href="/">
          <span role="img" aria-label="loading">
            😴
          </span>{' '}
          Loading...
        </a>
      )
    } else if (auth === false) {
      return (
        <a href="/auth/google" className="login">
          <span role="img" aria-label="loading">
            👋
          </span>{' '}
          Login with Google
        </a>
      )
    } else {
      return (
        <a href="/api/logout" className="login">
          <span role="img" aria-label="loading">
            🚪
          </span>{' '}
          Logout
        </a>
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
