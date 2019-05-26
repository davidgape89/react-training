import movieReducer from '../../reducers/movie';
import movies from '../../mocks/movie';

describe('movieReducer -', () => {
  it('sets up correctly', () => {
    const state = movieReducer(undefined, {
      type: '@@INIT'
    });

    expect(state).toEqual(null);
  });

  it('sets the movie correctly', () => {
    const movie = movies[0];
    const state = movieReducer(null, {
      type: 'SET_MOVIE',
      payload: {
        movie
      }
    });

    expect(state).toBe(movies[0]);
  });
});
