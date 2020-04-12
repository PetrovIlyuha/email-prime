import React from 'react'
import './Landing.css'
import Ease from '../img/landing1.png'

const Landing = () => {
  return (
    <div className="landing_flex">
      <p className="promotion">
        We all have go-to ways to create great email campaigns. While it’s not
        always easy to crack how to get your recipients excited about email
        promotion – now you can use our service.
      </p>
      <img src={Ease} alt="Promo image" style={{ width: '100vw' }} />
    </div>
  )
}

export default Landing
