import { routerActions } from 'react-router-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, Home, Login, Register, NotFound } from 'containers';

// eslint-disable-next-line import/no-dynamic-require
if (typeof System.import === 'undefined') {
  System.import = (module) => Promise.resolve(require(module));
}

const isAuthenticated = connectedRouterRedirect({
  authenticatedSelector: state => state.auth.user,
  redirectPath: '/login',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedRouterRedirect({
  authenticatedSelector: state => !state.auth.user,
  redirectAction: routerActions.replace,
  redirectPath: '/',
  allowRedirectBack: false,
  wrapperDisplayName: 'UserIsNotAuthenticated'
});

export default [{
  component: App,
  routes: [
    { path: '/', exact: true, component: Home },
    { path: '/login', component: isNotAuthenticated(Login) },
    { path: '/register', component: isNotAuthenticated(Register) },
    { path: "*", component: NotFound }
  ],
}];
