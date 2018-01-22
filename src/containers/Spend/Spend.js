import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddSpend from 'components/AddSpend/AddSpend';
import { connect } from 'react-redux';
import * as spendActions from 'redux/modules/spend';

import { asyncConnect } from 'redux-connect';

@asyncConnect([
  {
    promise: () => {
      console.log('Hello');
    }
  }
])

@connect(() => ({}), { ...spendActions })
export default class Spend extends Component {
  static propTypes = {
    addSpend: PropTypes.func.isRequired
  }

  addSpend = async data => {
    await this.props.addSpend(data);
  }

  render() {
    const styles = require('./Spend.scss');
    return (
      <section className={styles.spendSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <AddSpend onSubmit={this.addSpend} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
