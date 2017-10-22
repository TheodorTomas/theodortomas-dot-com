/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectPathname = () => createSelector(
  selectRoute,
  (routeState) => routeState.getIn(['location', 'pathname'])
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPathname,
};
