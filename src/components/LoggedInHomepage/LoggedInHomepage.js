import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SpendList from 'components/SpendList/SpendList';

export default class LoggedInHomepage extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleJarClick = jarName => () => {
    console.log(jarName);
    this.context.router.history.push('/spend');
  };

  render() {
    const styles = require('./LoggedInHomepage.scss');
    return (
      <section className={styles.loggedInSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6">
                  <div className="chart widget">
                    <div className="widget-title">
                      <span>Chart</span>
                    </div>
                    <div className="widget-container">
                      Chart Here
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inout widget">
                    <div className="widget-title">
                      <span>In Out</span>
                    </div>
                    <div className="widget-container">
                      List Of Item Here
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="chart widget">
                    <div className="widget-title">
                      <span>Transactions</span>
                    </div>
                    <div className="widget-container">
                      List Of Transactions Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="overview widget">
                <div className="widget-title">
                  <span>Account Overview</span>
                </div>
                <div className="widget-container">
                  <ul>
                    <li className="item">
                      <span className="item-name">Current</span>
                      <span className="item-value">500,000,000</span>
                    </li>
                    <li className="item">
                      <span className="item-name">Predict</span>
                      <span className="item-value">800,000,000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
