import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Header from './Header'

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
      <h1>Landing Page</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/surveys" exact component={Dashboard} />
      <Route path="/surveys/new" component={SurveyNew} />
    </BrowserRouter>
  )
}

export default App
