import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the details state domain
 */

const selectDetailsDomain = state => state.get('details', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Details
 */

const makeSelectDetails = () =>
  createSelector(selectDetailsDomain, substate => substate.toJS());

export default makeSelectDetails;
export { selectDetailsDomain };
