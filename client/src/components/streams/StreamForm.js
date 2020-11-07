import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  showInput = (formProps) => {
    // console.log(formProps.meta);
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.showError(formProps.meta)}
      </div>
    );
  };

  showError(formProps) {
    if (formProps.error && formProps.touched) {
      return (
        <div className="ui error message">
          <div className="header">{formProps.error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.showInput} label="Stream Title" />
        <Field
          name="description"
          component={this.showInput}
          label="Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// form validation
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Enter a title';
  }

  if (!formValues.description) {
    errors.description = 'Enter a description';
  }
  // if errors object is empty, redux-form will assume there are no errors
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);
