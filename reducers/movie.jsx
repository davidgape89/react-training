export default (state = null, { type, payload }) => {
  switch (type) {
    case 'SET_MOVIE':
      return payload.movie;
    default:
      return state;
  }
};
