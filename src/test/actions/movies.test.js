import {startMoviesRequest} from '../../actions/movies';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import movies from '../../mocks/movie';

const createMockStore = configureMockStore([thunk]);
jest.mock('axios');

describe('movies actions - ', () => {
  let store, response;

  beforeEach(() => {
    store = createMockStore({});
    response = {data: {data: movies}};
    axios.get.mockResolvedValue(response);
  });

  describe('startMoviesRequest - ', () => {
    it('makes the correct call and generates the right action', (done) => {
      
      store.dispatch(startMoviesRequest('drama', 'genres')).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_MOVIES',
          payload: {
            movies: movies
          }
        });
        expect(axios.get)
          .toHaveBeenCalledWith(
            'https://reactjs-cdp.herokuapp.com/movies?search=drama&searchBy=genres');
        done();
      });
    });
  });
});