import React, { Component } from 'react';
import { reduxForm, Field, propTypes } from 'redux-form';
import Input from 'formElements/Input/Input';
import DropdownSelect from 'formElements/DropdownSelect/DropdownSelect';

@reduxForm({
  form: 'AddSpend'
})
export default class AddSpend extends Component {
  static propTypes = {
    ...propTypes
  }

  render() {
    const items = [
      {
        value: 'Hello1',
        label: 'Play'
      },
      {
        value: 'Hello2',
        label: 'Education'
      },
      {
        value: 'Hello3',
        label: 'Necessities'
      }
    ];

    const { handleSubmit, error } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="money" type="text" component={Input} label="Amount of Money" />
        <Field name="category" component={DropdownSelect} label="Category" items={items} />
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
