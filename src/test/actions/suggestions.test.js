import {startSuggestionsRequest} from '../../actions/suggestions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import movies from '../../mocks/movie';

const createMockStore = configureMockStore([thunk]);
jest.mock('axios');

describe('suggestions actions - ', () => {
  let store, response, actions;

  beforeEach(() => {
    store = createMockStore({});
    response = {data: {data: movies}};
    axios.get.mockResolvedValue(response);
  });

  describe('startSuggestionsRequest - ', () => {
    it('makes the correct call and generates the right action', (done) => {
      
      store.dispatch(startSuggestionsRequest('drama')).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_SUGGESTIONS',
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