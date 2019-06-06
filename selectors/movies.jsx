import { createSelector } from 'reselect';

const getMovies = state => state.movies;

const getSortBy = state => state.filters.sortBy;

const getSortedMovies = createSelector(
  [getMovies, getSortBy],
  (movies, sortBy) => {
    const resultArray = [...movies];

    if (sortBy === 'release_date') {
      return resultArray.sort(
        (movie1, movie2) => {
          const timestamp1 = new Date(movie1.release_date);
          const timestamp2 = new Date(movie2.release_date);
          return timestamp1 < timestamp2 ? 1 : -1;
        },
      );
    }

    return resultArray.sort(
      (movie1, movie2) => (movie1.vote_average < movie2.vote_average ? 1 : -1),
    );
  },
);

export default getSortedMovies;
