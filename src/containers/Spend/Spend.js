import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

@connect(null, {
  pushState: push
})
@withRouter
export default class Spend extends Component {
  static propTypes = {
    pushState: PropTypes.func.isRequired
  }

  fn = () => {
    this.props.pushState('/');
  }

  render() {
    const styles = require('./Spend.scss');
    return (
      <section className={styles.spendSection}>
        <h1>Hello Spend</h1>
        <button onClick={this.fn()}>Test</button>
      </section>
    );
  }
}
