import React from 'react';
import { fieldPropTypes } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const handleChange = input => date => {
  input.onChange(moment(date).format('LLL'));
};

const Datepicker = props => {
  const {
    input, label, placeholder, meta: { touched, error }
  } = props;

  return (
    <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
      <label className="col-sm-3">
        {label}
      </label>
      <div className="col-sm-9">
        <DatePicker
          {...input}
          showTimeSelect
          placeholder={placeholder}
          dateFormat="LLL"
          timeFormat="HH:mm"
          className="form-control"
          selected={input.value ? moment(input.value, 'LLL') : moment()}
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
};

Datepicker.propTypes = fieldPropTypes;

Datepicker.defaultProps = {
  placeholder: ''
};

export default Datepicker;
