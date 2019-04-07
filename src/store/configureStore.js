import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import filtersReducer from '../reducers/filters';
import movieReducer from '../reducers/movie';
import moviesReducer from '../reducers/movies';
import suggestionsReducer from '../reducers/suggestions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      filters: filtersReducer,
      movie: movieReducer,
      suggestions: suggestionsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}