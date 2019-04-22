import axios from 'axios';

const baseUrl = 'https://reactjs-cdp.herokuapp.com';

export const startMovieRequest = (id) => 
  (dispatch) => axios.get(`${baseUrl}/movies/${id}`)
    .then(({data}) => {
      dispatch(setMovie(data))
    });


export const setMovie = (movie) => ({
  type: 'SET_MOVIE',
  payload: {
    movie
  }
});