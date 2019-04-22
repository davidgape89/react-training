export default (state = {}, {type, payload}) => {
  switch(type) {
    case 'SET_MOVIE':
      return payload.movie;
    default:
      return state;
  }
}