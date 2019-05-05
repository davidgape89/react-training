import axios from 'axios';

const baseUrl = 'https://reactjs-cdp.herokuapp.com';

export const startSuggestionsRequest = (genre) => 
  (dispatch) => axios.get(`${baseUrl}/movies?search=${genre}&searchBy=genres`)
    .then(({data}) => {
      dispatch(addSuggestions(data.data))
    });

export const addSuggestions = (movies) => ({
  type: 'ADD_SUGGESTIONS',
  payload: {
    movies
  }
});