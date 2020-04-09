import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Email-Prime</h1>
        <a href="/auth/google">
          <button className="google_signin">Sign In With Google</button>
        </a>
      </header>
    </div>
  )
}

export default App
