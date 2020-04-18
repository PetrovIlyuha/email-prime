import React from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import './SurveyForm.css'
import validateEmails from '../../utils/emailValidator'

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
    errorMsg: "Don't you want to add a title? 🤷‍♀️",
  },
  {
    label: 'Subject Line',
    name: 'subject',
    errorMsg: 'It would be great to provide a subject line 😎',
  },
  {
    label: 'Email Body',
    name: 'body',
    errorMsg: 'Your survey will look fantastic with the body. 🥳',
  },
  {
    label: 'Recipient List',
    name: 'emails',
    errorMsg:
      "Who are the recipients? We won't know without your assistance 🤷‍♀️",
  },
]

const SurveyForm = (props) => {
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
    <div className="container ">
      <div className="form form_group">
        <form onSubmit={props.handleSubmit((values) => console.log(values))}>
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
  if (values.emails) {
    errors.emails = validateEmails(values.emails)
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
})(SurveyForm)
