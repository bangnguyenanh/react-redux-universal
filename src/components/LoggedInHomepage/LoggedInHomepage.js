import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpendList from 'components/SpendList/SpendList';

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
                <SpendList />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
