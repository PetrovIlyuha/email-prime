import React from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'

const SurveyForm = (props) => {
  const renderFields = () => {
    return (
      <div>
        <Field type="text" component={SurveyField} name="title" />
      </div>
    )
  }
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={props.handleSubmit((values) => console.log(values))}>
          {renderFields()}
          <button className="btn waves-effect waves-light" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm)
