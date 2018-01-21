import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <div className="row">
          <div className="col-lg-12">
            <h1>Hello Spend</h1>
            <button onClick={this.fn}>Test</button>
          </div>
        </div>
      </section>
    );
  }
}
