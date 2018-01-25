import React from 'react';
import { fieldPropTypes } from 'redux-form';
import PropTypes from 'prop-types';

const DropdownSelect = ({
  input, label, items, meta: { touched, error }
}) => (
  <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-3">
      {label}
    </label>
    <div className="col-sm-9">
      <select {...input} className="form-control">
        <option value="">Select</option>
        {items.map(item => (
          <option key={item.key} value={item.key}>{item.label}</option>
        ))}
      </select>
      {error && touched && <span className="glyphicon glyphicon-remove form-control-feedback" />}
      {error && touched && (
        <div className="text-danger">
          <strong>{error}</strong>
        </div>
      )}
    </div>
  </div>
);

DropdownSelect.propTypes = {
  ...fieldPropTypes,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string
  })).isRequired
};

export default DropdownSelect;
