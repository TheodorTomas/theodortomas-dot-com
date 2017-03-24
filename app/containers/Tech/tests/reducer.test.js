
import { fromJS } from 'immutable';
import techReducer from '../reducer';

describe('techReducer', () => {
  it('returns the initial state', () => {
    expect(techReducer(undefined, {})).toEqual(fromJS({}));
  });
});
