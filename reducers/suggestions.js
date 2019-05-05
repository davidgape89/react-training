export default (state = [], {type, payload}) => {
  switch(type) {
    case 'ADD_SUGGESTIONS':
      return payload.movies;
    default:
      return state;
  }
}