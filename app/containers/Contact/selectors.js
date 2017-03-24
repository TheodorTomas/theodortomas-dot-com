import { createSelector } from 'reselect';

/**
 * Direct selector to the contact state domain
 */
const selectContactDomain = () => (state) => state.get('contact');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Contact
 */

const makeSelectContact = () => createSelector(
  selectContactDomain(),
  (substate) => substate.toJS()
);

export default makeSelectContact;
export {
  selectContactDomain,
};
