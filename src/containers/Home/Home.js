import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

import GuestHomepage from 'components/GuestHomepage/GuestHomepage';
import LoggedInHomepage from 'components/LoggedInHomepage/LoggedInHomepage';

import { isAuthLoaded } from 'redux/modules/auth';
import { loadList } from 'redux/modules/spend';

@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState } }) => {
      if (isAuthLoaded(getState())) {
        await dispatch(loadList());
      }
    }
  }
])

@connect(state => ({
  user: state.auth.user
}))

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
      fullName: PropTypes.string
    })
  };

  static defaultProps = {
    user: null
  }

  render() {
    return (
      this.props.user ? <LoggedInHomepage /> : <GuestHomepage />
    );
  }
}
