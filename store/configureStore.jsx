import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import filtersReducer from '../reducers/filters';
import movieReducer from '../reducers/movie';
import moviesReducer from '../reducers/movies';
import suggestionsReducer from '../reducers/suggestions';

export default () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      filters: filtersReducer,
      movie: movieReducer,
      suggestions: suggestionsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return store;
};
