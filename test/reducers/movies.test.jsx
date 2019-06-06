import moviesReducer from '../../reducers/movies';
import movies from '../../mocks/movie';

describe('moviesReducer -', () => {
  it('sets up correctly', () => {
    const state = moviesReducer(undefined, {
      type: '@@INIT',
    });

    expect(state).toEqual([]);
  });

  it('sets the movies correctly', () => {
    const state = moviesReducer([], {
      type: 'ADD_MOVIES',
      payload: {
        movies,
      },
    });

    expect(state).toBe(movies);
  });
});
