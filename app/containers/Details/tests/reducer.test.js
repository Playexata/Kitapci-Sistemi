import { fromJS } from 'immutable';
import detailsReducer from '../reducer';

describe('detailsReducer', () => {
  it('returns the initial state', () => {
    expect(detailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
