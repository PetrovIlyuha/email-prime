import React from 'react'
import './SurveyField.css'
const SurveyField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="survey_field">
      <label className="label">{label}</label>
      <input {...input} className="survey_field" />
      <p className="error_display">{touched && error}</p>
    </div>
  )
}

export default SurveyField
