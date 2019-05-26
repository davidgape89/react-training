import suggestionsReducer from '../../reducers/suggestions';
import movies from '../../mocks/movie';

describe('suggestionsReducer -', () => {
  it('sets up correctly', () => {
    const state = suggestionsReducer(undefined, {
      type: '@@INIT',
    });

    expect(state).toEqual([]);
  });

  it('sets the suggestions correctly', () => {
    const state = suggestionsReducer(undefined, {
      type: 'ADD_SUGGESTIONS',
      payload: {
        movies,
      },
    });

    expect(state).toBe(movies);
  });
});
