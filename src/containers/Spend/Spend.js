import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddSpend from 'components/AddSpend/AddSpend';

export default class Spend extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  fn = () => {
    this.context.router.history.push('/');
  }

  render() {
    const styles = require('./Spend.scss');
    return (
      <section className={styles.spendSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <AddSpend />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
