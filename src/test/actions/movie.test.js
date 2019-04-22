import {startMovieRequest, setMovie} from '../../actions/movie';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import movies from '../../mocks/movie';

const createMockStore = configureMockStore([thunk]);
jest.mock('axios');

describe('movie actions - ', () => {
  let store, response, actions;

  beforeEach(() => {
    store = createMockStore({});
    response = {data: movies[0]};
    axios.get.mockResolvedValue(response);
  });

  describe('startMovieRequest - ', () => {
    it('makes the correct call and generates the right action', (done) => {
      
      store.dispatch(startMovieRequest(1)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'SET_MOVIE',
          payload: {
            movie: movies[0]
          }
        });
        expect(axios.get)
          .toHaveBeenCalledWith(
            'https://reactjs-cdp.herokuapp.com/movies/1');
        done();
      });
    });
  });
});