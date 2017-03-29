
import { fromJS } from 'immutable';
import contentReducer from '../reducer';

describe('contentReducer', () => {
  it('returns the initial state', () => {
    expect(contentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
