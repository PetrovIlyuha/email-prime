import React from 'react'
import Logo from '../img/Email Prime Logo.png'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          <img src={Logo} alt="Brand Logo" />
          Email Prime
        </a>
        <ul className="right">
          <li>
            <a href="/auth/google" className="login">
              Login with Google
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
