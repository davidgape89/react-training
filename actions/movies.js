import axios from 'axios';

const baseUrl = 'https://reactjs-cdp.herokuapp.com';

export const startMoviesRequest = (query, searchBy) => 
  (dispatch) => axios.get(`${baseUrl}/movies?search=${query}&searchBy=${searchBy}`)
    .then(({data}) => {
      dispatch(addMovies(data.data))
    });

export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  payload: {
    movies
  }
});