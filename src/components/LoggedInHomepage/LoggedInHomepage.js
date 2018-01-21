import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <div className="col-lg-12">
              <div className={styles.jarsWrapper}>
                <button className={styles.jar} title="Necessities" onClick={this.handleJarClick('NEC')}>
                  <i className="fa fa-glass" />
                  NEC
                </button>
                <button className={styles.jar} title="Play" onClick={this.handleJarClick('PLAY')}>
                  <i className="fa fa-gamepad" />
                  PLY
                </button>
                <button className={styles.jar} title="Education" onClick={this.handleJarClick('EDU')}>
                  <i className="fa fa-book" />
                  EDU
                </button>
                <button
                  className={styles.jar}
                  title="Long Term Savings for Spending"
                  onClick={this.handleJarClick('LTSS')}
                >
                  <i className="fa fa-paper-plane-o" />
                  LTS
                </button>
                <button className={styles.jar} title="Financial Freedom Account" onClick={this.handleJarClick('FFA')}>
                  <i className="fa fa-money" />
                  FFA
                </button>
                <button className={styles.jar} title="Give" onClick={this.handleJarClick('GIVE')}>
                  <i className="fa fa-handshake-o" />
                  GIV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
