import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="btn-floating btn-large waves-effect waves-light purple accent-3"
        >
          <i className="material-icons">contact_mail</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
