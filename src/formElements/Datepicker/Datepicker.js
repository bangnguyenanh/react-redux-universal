import React from 'react';
import { fieldPropTypes } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const handleChange = input => date => {
  input.onChange(moment(date).format('YYYY-MM-DD'));
};

const Datepicker = ({
  input, label, placeholder, meta: { touched, error }
}) => (
  <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
    <label className="col-sm-3">
      {label}
    </label>
    <div className="col-sm-9">
      <DatePicker
        {...input}
        placeholder={placeholder}
        dateForm="YYYY-MM-DD"
        className="form-control"
        selected={input.value ? moment(input.value, 'YYYY-MM-DD') : null}
        onChange={handleChange(input)}
      />
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

Datepicker.propTypes = fieldPropTypes;

Datepicker.defaultProps = {
  placeholder: ''
};

export default Datepicker;
