import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { FIELDS } from './formFields'
import './SurveyFormReview.css'
import { withRouter } from 'react-router-dom'
import { submitSurvey } from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
      <button
        className="btn btn-secondary purple accent-3 forward_form_btn"
        onClick={() => submitSurvey(formValues, history)}
      >
        <i className="material-icons right">send</i>
        Send Survey
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values }
}
export default connect(mapStateToProps, { submitSurvey })(
  withRouter(SurveyFormReview)
)
