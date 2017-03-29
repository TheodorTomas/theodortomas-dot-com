import { createSelector } from 'reselect';

/**
 * Direct selector to the content state domain
 */
const selectContentDomain = () => (state) => state.get('content');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Content
 */

const makeSelectContent = () => createSelector(
  selectContentDomain(),
  (substate) => substate.toJS()
);

export default makeSelectContent;
export {
  selectContentDomain,
};
