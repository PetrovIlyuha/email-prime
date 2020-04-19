import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

import './SurveyNew.css'

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false)

  const onSurveySubmit = () => {
    setShowFormReview(true)
  }
  return (
    <div>
      {showFormReview ? (
        <SurveyFormReview onCancel={() => setShowFormReview(false)} />
      ) : (
        <SurveyForm onSurveySubmit={onSurveySubmit} />
      )}
    </div>
  )
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew)
