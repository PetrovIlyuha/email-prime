import React from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import './SurveyForm.css'
import validateEmails from '../../utils/emailValidator'
import { FIELDS } from './formFields'

const SurveyForm = ({ onSurveySubmit, ...props }) => {
  const renderFields = () => {
    return _.map(FIELDS, ({ name, label }) => {
      return (
        <Field
          component={SurveyField}
          key={name}
          type="text"
          name={name}
          label={label}
        />
      )
    })
  }
  return (
    <div className="container survey_positioning">
      <h3>Create a Survey</h3>
      <div className="form form_group">
        <form onSubmit={props.handleSubmit(onSurveySubmit)}>
          {renderFields()}
          <div className="buttons_group">
            <Link to="/surveys">
              <button
                className="btn waves-effect waves-light purple darken-3"
                type="submit"
              >
                Cancel
                <i className="material-icons left">cancel</i>
              </button>
            </Link>
            <button
              className="btn waves-effect waves-light pink accent-3 white-text"
              type="submit"
            >
              Next
              <i className="material-icons right">navigate_next</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const validate = (values) => {
  const errors = {}
  if (values.recipients) {
    errors.recipients = validateEmails(values.recipients)
  }
  _.each(FIELDS, ({ name, errorMsg }) => {
    if (!values[name]) {
      errors[name] = errorMsg
    }
  })
  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm)
