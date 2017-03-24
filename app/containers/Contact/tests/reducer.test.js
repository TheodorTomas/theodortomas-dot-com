
import { fromJS } from 'immutable';
import contactReducer from '../reducer';

describe('contactReducer', () => {
  it('returns the initial state', () => {
    expect(contactReducer(undefined, {})).toEqual(fromJS({}));
  });
});
