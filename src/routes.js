import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { routerActions } from 'react-router-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';
import { App, Home, NotFound } from 'containers';
import getRoutesUtils from 'utils/routes';

// eslint-disable-next-line import/no-dynamic-require
if (typeof System.import === 'undefined') {
  System.import = module => Promise.resolve(require(module));
}

export const UserIsAuthenticated = connectedRouterRedirect({
  authenticatedSelector: state => state.auth.user,
  redirectPath: '/login',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
  authenticatedSelector: state => !state.auth.user,
  redirectAction: routerActions.replace,
  redirectPath: '/',
  allowRedirectBack: false,
  wrapperDisplayName: 'UserIsNotAuthenticated'
});

export default store => {
  const { injectReducerAndRender, permissionsComponent } = getRoutesUtils(store);

  const myRoutes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      {
        path: '/register',
        getComponent: () => System.import('./containers/Register/Register')
      },
      {
        path: '/login',
        getComponent: () => System.import('./containers/Login/Login')
      },
      {
        path: '/about',
        getComponent: () => System.import('./containers/About/About')
      },
      {
        path: '*',
        component: NotFound,
        status: 404
      }
    ]
  };

  return myRoutes;
};
