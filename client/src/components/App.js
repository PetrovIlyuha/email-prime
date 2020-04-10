import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import './App.css'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
const SurveyNew = () => {
  return (
    <div>
      <h1>Launch New Survey</h1>
    </div>
  )
}
const Landing = () => {
  return (
    <div>
      <h3>Landing Page</h3>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Route path="/" exact component={Landing} />
        <Route path="/surveys" exact component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
  )
}

export default App
