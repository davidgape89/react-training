export default (movies, sortBy) => {
  let resultArray = [...movies];
  if(sortBy === 'release_date') {
    return resultArray.sort(
      (movie1, movie2) => {
        const timestamp1 = new Date(movie1.release_date);
        const timestamp2 = new Date(movie2.release_date);
        return timestamp1 < timestamp2? 1: -1;
      });
  } else {
    return resultArray.sort(
      (movie1, movie2) => {
        return movie1.vote_average < movie2.vote_average? 1: -1;
      }
    );
  }
}