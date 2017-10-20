import React, { Component } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import axios from 'axios';
import config from './config';

const storage = __SERVER__ ? null : require('localforage');

const host = clientUrl => (__SERVER__ ? `http://${config.apiHost}:${config.apiPort}` : clientUrl);

export const socket = io('', { path: host('/ws'), autoConnect: false });

export function withApp(WrappedComponent) {
  // eslint-disable-next-line react/prefer-stateless-function
  class WithAppComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithAppComponent;
}
