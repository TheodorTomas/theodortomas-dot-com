import { createSelector } from 'reselect';

/**
 * Direct selector to the tech state domain
 */
const selectTechDomain = () => (state) => state.get('tech');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tech
 */

const makeSelectTech = () => createSelector(
  selectTechDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTech;
export {
  selectTechDomain,
};
