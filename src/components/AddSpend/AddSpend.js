import React, { Component } from 'react';
import { reduxForm, Field, propTypes } from 'redux-form';

import Input from 'formElements/Input/Input';
import DropdownSelect from 'formElements/DropdownSelect/DropdownSelect';
import Textarea from 'formElements/Textarea/Textarea';
import Datepicker from 'formElements/Datepicker/Datepicker';

import categoryDict from 'utils/categoryDict';

@reduxForm({
  form: 'AddSpend'
})
export default class AddSpend extends Component {
  static propTypes = {
    ...propTypes
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="description" component={Textarea} label="Description" />
        <Field name="amount" type="text" component={Input} label="Amount of Money" />
        <Field name="category" component={DropdownSelect} label="Category" items={categoryDict} />
        <Field name="time" component={Datepicker} label="Time" placeholder="Select time" />
        {error && (
          <p className="text-danger">
            <strong>{error}</strong>
          </p>
        )}
        <button className="btn btn-success" type="submit">
          <i className="fa fa-sign-in" /> Add Spend
        </button>
      </form>
    );
  }
}
