import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import renderRoutes from 'react-router-config/renderRoutes';

import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Helmet from 'react-helmet';

import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isAuthLoaded, loadAuth, logout } from 'redux/modules/auth';

import Notifs from 'components/Notifs/Notifs';
import config from 'config';

@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState } }) => {
      if (!isAuthLoaded(getState())) {
        await dispatch(loadAuth());
      }
      if (!isInfoLoaded(getState())) {
        await dispatch(loadInfo());
      }
    }
  }
])

@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  {
    logout
  }
)

export default class App extends Component {
  static propTypes = {
    user: PropTypes.shape({ email: PropTypes.string }),
    notifs: PropTypes.shape({ global: PropTypes.array }).isRequired,
    logout: PropTypes.func.isRequired,
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.shape({
      history: PropTypes.object.isRequired
    })
  };

  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.user && nextProps.user) {
  //     this.context.router.history.push('/loginSuccess');
  //   } else if (this.props.user && !nextProps.user) {
  //     this.context.router.history.push('/');
  //   }
  // }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { user, notifs, route } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLinkContainer to="/" activeStyle={{ color: '#3f51b5' }} className={styles.title}>
                <div className={styles.brand}>
                  <span className={styles.siteName}>{config.app.title}</span>
                </div>
              </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              {user && (
                <LinkContainer to="/report">
                  <NavItem>Report</NavItem>
                </LinkContainer>
              )}
              <LinkContainer to="/blog">
                <NavItem>Blog</NavItem>
              </LinkContainer>
              <LinkContainer to="/faq">
                <NavItem>FAQ</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>About Us</NavItem>
              </LinkContainer>
              <LinkContainer to="/spend">
                <NavItem>Add Spend</NavItem>
              </LinkContainer>
            </Nav>

            {!user && (
              <Nav navbar pullRight>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
                <LinkContainer to="/register">
                  <NavItem>Register</NavItem>
                </LinkContainer>
              </Nav>
            )}

            {user && (
              <Nav navbar pullRight>
                <NavDropdown eventKey={3} title={user.fullName} id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Profile</MenuItem>
                  <MenuItem eventKey={3.2}>Settings</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3} onClick={this.handleLogout}>Log out</MenuItem>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {notifs.global && (
            <div className="container">
              <Notifs
                className={styles.notifs}
                namespace="global"
                NotifComponent={props => <Alert bsStyle={props.kind}>{props.message}</Alert>}
              />
            </div>
          )}

          {renderRoutes(route.routes)}
        </div>

        <div className={`${styles.footer} well text-center`}>
          Copyright © 2018 · Ogamic Studio
        </div>
      </div>
    );
  }
}
