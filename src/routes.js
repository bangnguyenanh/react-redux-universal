import { routerActions } from 'react-router-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, Home, NotFound } from 'containers';
import LoginLoadable from 'containers/Login/Loadable';
import RegisterLoadable from 'containers/Register/Loadable';
import SpendLoadable from 'containers/Spend/Loadable';

const isAuthenticated = connectedRouterRedirect({
  authenticatedSelector: state => !!state.auth.user,
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

const routes = [{
  component: App,
  routes: [
    { path: '/', exact: true, component: Home },
    { path: '/login', component: isNotAuthenticated(LoginLoadable) },
    { path: '/register', component: isNotAuthenticated(RegisterLoadable) },
    { path: '/spend', component: isAuthenticated(SpendLoadable) },
    { component: NotFound }
  ],
}];

export default routes;
