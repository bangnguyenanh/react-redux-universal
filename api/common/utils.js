import moment from 'moment';
import jwt from 'jwt-simple';
import * as config from './config';

export function mapUrl(availableActions = {}, url = []) {
  const notFound = { action: null, params: [] };

  // test for empty input
  if (url.length === 0 || Object.keys(availableActions).length === 0) {
    return notFound;
  }
  /*eslint-disable */
  const reducer = (prev, current) => {
    if (prev.action && prev.action[current]) {
      return { action: prev.action[current], params: [] }; // go deeper
    } else {
      if (typeof prev.action === 'function') {
        return { action: prev.action, params: prev.params.concat(current) }; // params are found
      } else {
        return notFound;
      }
    }
  };
  /*eslint-enable */

  const actionAndParams = url.reduce(reducer, { action: availableActions, params: [] });

  return (typeof actionAndParams.action === 'function') ? actionAndParams : notFound;
}

export function createToken(user) {
  let payload = {
    sub: {
      id: user._id,
      email: user.email,
      fullName: user.fullName
    },
    iat: moment().unix(),
    exp: moment().add(config.sessionExpiredTime, 'ms').unix()
  };
  return jwt.encode(payload, config.tokenSecret);
}

export function parseToken(token) {
  return jwt.decode(token, config.tokenSecret);
}

export function checkNested(obj /*, level1, level2, ... levelN*/) {
  let args = Array.prototype.slice.call(arguments, 1);

  for (let i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}

