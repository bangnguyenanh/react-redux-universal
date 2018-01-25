import React from 'react';
import { fieldPropTypes } from 'redux-form';

const Textarea = ({
  input, label, meta: { touched, error }
}) => (
  <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-3">
      {label}
    </label>
    <div className="col-sm-9">
      <textarea {...input} className="form-control" rows="4" cols="50" />
      {error && touched && <span className="glyphicon glyphicon-remove form-control-feedback" />}
      {error &&
        touched && (
          <div className="text-danger">
            <strong>{error}</strong>
          </div>
        )}
    </div>
  </div>
);

Textarea.propTypes = fieldPropTypes;

export default Textarea;
