import filtersReducer, {defaultState} from '../../reducers/filters';

describe('filtersReducer -', () => {
  it('sets up correctly', () => {
    const state = filtersReducer(undefined, {
      type: '@@INIT'
    });

    expect(state).toEqual(defaultState);
  });

  it('sets the sorting correctly', () => {
    const sortBy = 'rating';
    const state = filtersReducer(defaultState, {
      type: 'SET_SORT',
      payload: {
        sortBy
      }
    });

    expect(state.sortBy).toBe(sortBy);
  });
});
