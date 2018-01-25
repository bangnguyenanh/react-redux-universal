import React, { Component } from 'react';
import { reduxForm, Field, propTypes } from 'redux-form';

import Input from 'formElements/Input/Input';
import DropdownSelect from 'formElements/DropdownSelect/DropdownSelect';
import Textarea from 'formElements/Textarea/Textarea';
import Datepicker from 'formElements/Datepicker/Datepicker';

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
        value: 'nec',
        label: 'Necessities'
      },
      {
        value: 'edu',
        label: 'Education'
      },
      {
        value: 'ply',
        label: 'Play'
      },
      {
        value: 'giv',
        label: 'Give'
      },
      {
        value: 'lts',
        label: 'Long term savings for spending'
      },
      {
        value: 'ffa',
        label: 'Freedom Financial Account'
      }
    ];

    const { handleSubmit, error } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="description" component={Textarea} label="Description" />
        <Field name="amount" type="text" component={Input} label="Amount of Money" />
        <Field name="category" component={DropdownSelect} label="Category" items={items} />
        <Field name="time" component={Datepicker} label="Time" value="05/15/2018" />
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
