import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { FIELDS } from './formFields'
import './SurveyFormReview.css'

const SurveyFormReview = ({ onCancel, formValues }) => {
  const renderReviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  })

  return (
    <div className="container positioning">
      <h4>Please confirm your entries</h4>
      {renderReviewFields}
      <button
        className="btn btn-secondary pink darken-2 back_form_btn"
        onClick={onCancel}
      >
        <i className="material-icons left">assignment_return</i>
        Back to Form
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values }
}
export default connect(mapStateToProps)(SurveyFormReview)
